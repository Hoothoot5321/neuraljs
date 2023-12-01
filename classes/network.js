//@ts-check

import { derived_sigmoid, error_arr, mean_err_arr } from "../maths/math_funcs.js";
import { Neuron } from "./neuron.js";

class LayerResp {
    /** 
        *
        *@param {number[][][]} data
        *@param {number[]} answer
        * */
    constructor(data, answer) {
        this.data = data
        this.answer = answer
    }
}

export class Network {
    /** 
        *
        *@param{Neuron[][]} layers
        *@param{number} learning_rate 
        * */
    constructor(layers, learning_rate) {
        this.layers = layers
        this.learning_rate = learning_rate
        this.debug = false
    }
    /** 
        *
        *@param {number[]} input
        *@returns {LayerResp}
        * */
    feedfoward(input) {

        let data = input
        let act_data = []

        let sum_data = []
        for (let a = 0; a < this.layers.length; a++) {
            let layer = this.layers[a]
            let temp_data = []
            let temp_sum_data = []
            for (let b = 0; b < layer.length; b++) {
                let neuron = layer[b]
                let [sum, output] = neuron.get_sum(data)
                temp_sum_data.push(sum)
                temp_data.push(output)
            }
            sum_data.push(temp_sum_data)
            act_data.push(temp_data)
            data = temp_data
        }
        let res_obj = new LayerResp([sum_data, act_data], data)
        return res_obj
    }
    /** 
        *
        *@param {number[]} err
        *@param {number[]} input 
        *@param {number[][][]}data 
        *
        * */
    backprop(err, input, data) {
        let [summed, activated] = data
        let pre_vals = []
        for (let a = this.layers.length - 1; a > -1; a--) {
            let layer = this.layers[a]
            let pre_layer = summed[a - 1]
            let temp_next_vals = []

            for (let b = layer.length - 1; b > -1; b--) {
                let neuron = this.layers[a][b]
                let derived_out = derived_sigmoid(summed[a][b])
                let next_arr = []
                let pre_val = pre_vals[b] ? pre_vals[b] : err[b]
                let base = 0
                let bias_base = 0
                if (Array.isArray(pre_val)) {
                    for (let i = 0; i < pre_val.length; i++) {
                        base += pre_val[i] * derived_out
                        bias_base += pre_val[i]
                    }
                }
                else {
                    base += pre_val * derived_out
                    bias_base += pre_val
                }
                neuron.bias -= bias_base * derived_out * this.learning_rate
                for (let c = 0; c < neuron.weights.length; c++) {

                    let child_out = pre_layer ? activated[a - 1][c] : input[c]
                    let change = base * child_out
                    let to_next = neuron.weights[c] * base
                    next_arr.push(to_next)

                    neuron.weights[c] -= change * this.learning_rate

                }
                for (let i = 0; i < next_arr.length; i++) {
                    let temp = temp_next_vals[i] ? temp_next_vals[i] : []
                    temp.push(next_arr[i])
                    temp_next_vals[i] = temp
                }

            }
            pre_vals = temp_next_vals

        }
    }
    /** 
        *
        *@param {number[][]} inputs
        *@param {number[][]} answers 
        *@param {number} cycles 
        *
        * */
    gradient_descent(inputs, answers, cycles) {
        for (let cycle = 0; cycle < cycles; cycle++) {
            let temp_answers = []
            for (let i = 0; i < inputs.length; i++) {
                let res = this.feedfoward(inputs[i])
                let { data, answer } = res
                let err = error_arr(answer, answers[i])
                temp_answers.push(answer)
                this.debug = cycle == 0
                this.backprop(err, inputs[i], data)
            }
            if (cycle % 100 == 0) {
                let new_err = mean_err_arr(answers, temp_answers)
                console.log("Cycle: [" + cycle + "]\nErr: [" + new_err + "]\n")

            }
        }
    }
}
