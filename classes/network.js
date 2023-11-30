//@ts-check

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
}
