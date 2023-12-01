//@ts-check

import { Network } from "./classes/network.js"
import { Setting, create_layers } from "./misc/create_layers.js"



let settings = []


let setting_one = new Setting(2, 3)

let setting_two = new Setting(1, 2)

settings.push(setting_one)

settings.push(setting_two)

let layers = create_layers(settings)

let network = new Network(layers, 0.1)
let input = [[0, 0, 1], [0, 1, 1], [1, 0, 1], [1, 1, 1]]

let ans = [[0], [1], [1], [0]]


network.gradient_descent(input, ans, 60000)








