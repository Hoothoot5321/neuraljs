//@ts-check

import { Network } from "./classes/network.js"
import { Neuron } from "./classes/neuron.js"
import { load_data } from "./data.js"
import { Setting, create_layers } from "./misc/create_layers.js"



let settings = []

let [answers, inputs] = load_data()

let setting_one = new Setting(15, 784)

let setting_two = new Setting(10, 15)

settings.push(setting_one)

settings.push(setting_two)


let layers = create_layers(settings)

let network = new Network(layers, 0.1)

network.gradient_descent(inputs, answers, 500)








