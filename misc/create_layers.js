import { Neuron } from "../classes/neuron.js"

//@ts-check
export class Setting {
    /** 
        *
        *@param {number} neurons
        *@param {number} weights 
        * */
    constructor(neurons, weights) {
        this.neuron_amount = neurons
        this.weights_amount = weights

    }
}

/** 
    *
    *@param {Setting[]} settings
    *@returns {Neuron[][]}
    * */
export function create_layers(settings) {
    let all_layers = []
    for (let setting_index = 0; setting_index < settings.length; setting_index++) {
        let layer = []
        let setting = settings[setting_index]
        let weight_amount = setting.weights_amount
        let neuron_amount = setting.neuron_amount
        for (let i = 0; i < neuron_amount; i++) {

            let bias = Math.random()
            let temp_weights = []
            for (let y = 0; y < weight_amount; y++) {
                temp_weights.push(Math.random())
            }
            let neuron = new Neuron(temp_weights, bias)
            layer.push(neuron)
        }
        all_layers.push(layer)
    }
    return all_layers
}
