//@ts-check
import { sigmoid } from "../maths/math_funcs.js"
export class Neuron {
    /** 
        *
        *@param {number[]} weights
        *@param {number} bias
        *
        * */
    constructor(weights, bias) {
        this.weights = weights
        this.bias = bias
    }

    /** 
        *
        *@param {number} num
        *@returns {number}
        * */
    activation_function(num) {
        return sigmoid(num)
    }
    /** 
        *
        *@param {number[]} input
        *@returns {number}
        * */
    feedforward(input) {
        let output = 0
        for (let i = 0; i < this.weights.length; i++) {
            output += this.weights[i] * input[i]
        }
        output = this.activation_function(output + this.bias)
        return output
    }

    /** 
        *
        *@param {number[]} input
        *@returns {number[]}
        * */
    get_sum(input) {
        let output = 0
        for (let i = 0; i < this.weights.length; i++) {
            output += this.weights[i] * input[i]
        }
        let output2 = this.activation_function(output + this.bias)
        return [output, output2]
    }
}

