//@ts-check

import { Network } from "./classes/network.js"
import { Neuron } from "./classes/neuron.js"
import { Setting, create_layers } from "./misc/create_layers.js"



let settings = []


let setting_one = new Setting(1, 3)

let setting_two = new Setting(1, 1)

settings.push(setting_one)

settings.push(setting_two)

let bias = 1

let neuron = new Neuron([0.5, 0.5, 0.5], bias)
let layer_one = [neuron]

let neuron_two = new Neuron([0.5], bias)
let layer_two = [neuron_two]

let all_layers = [layer_one, layer_two]

let layers = create_layers(settings)

let network = new Network(all_layers, 0.1)
let input = [[0, 0, 1], [0, 1, 1], [1, 0, 1], [1, 1, 1]]

let ans = [[0], [1], [1], [0]]

network.gradient_descent(input, ans, 10000)








