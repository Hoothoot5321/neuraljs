//@ts-check

import { derived_sigmoid } from "../maths/math_funcs.js";
import { Neuron } from "./neuron.js";


export class Network {
    /** 
        *
        *@param{Neuron[][]} layers
        * */
    constructor(layers) {
        this.layers = layers
    }
    /** 
        *
        *@param {number[]} input
        * */
    feedfoward(input) {
        let data = input
        for (let a = 0; a < this.layers.length; a++) {
            let layer = this.layers[a]
            let temp_data = []
            for (let b = 0; b < layer.length; b++) {
                let neuron = layer[b]
                let output = neuron.feedforward(data)
                temp_data.push(output)
            }
            data = temp_data
        }
        return data
    }
    /** 
        *
        *@param {number[]} input
        *@returns {number[][][]}
        * */
    sum_layers(input) {

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
        return [sum_data, act_data]
    }
    /** 
        *
        *@param {number} err
        *@param {number[]} input 
        *
        * */
    backprop(err, input) {
        let [summed, activated] = this.sum_layers(input)

        for (let a = this.layers.length - 1; a > 0; a--) {
            let layer = this.layers[a]
            let pre_layer = summed[a - 1]

            for (let b = layer.length - 1; b > 0; b--) {
                let neuron = this.layers[a][b]
                let derived_out = derived_sigmoid(summed[a][b])
                for (let c = 0; c < neuron.weights.length; c++) {

                    let child_out = pre_layer ? activated[a - 1][b] : input[c]
                }
            }
        }

    }
}
