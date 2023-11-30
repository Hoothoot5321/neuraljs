//@ts-check

import { Network } from "./classes/network.js"
import { Setting, create_layers } from "./misc/create_layers.js"



let settings = []

let setting_one = new Setting(2, 3)

let setting_two = new Setting(1, 2)

settings.push(setting_one)

settings.push(setting_two)

let layers = create_layers(settings)

let network = new Network(layers)

let input = [1, 2, 3]

let res = network.feedfoward(input)

console.log(res)

