
//@ts-check
import { readFileSync } from "fs";

/** 
    *@param {number} num
    *@returns {number[]}
    * */
function create_answer(num) {
    let arr = []
    for (let i = 0; i < 10; i++) {
        if (i == num) {
            arr.push(1)
        }
        else {
            arr.push(0)
        }
    }
    return arr
}
/** 
    *@param {number[][]} arr
    *@returns {number[][]}
    * */
function transpose(arr) {
    let temp_arr = []
    for (let a = 0; a < arr[0].length; a++) {
        let sub_arr = []
        for (let b = 0; b < arr.length; b++) {
            sub_arr.push(arr[b][a])
        }
        temp_arr.push(sub_arr)
    }
    return temp_arr
}
/** 
    *
    *@returns {number[][][]}
    * */
export function load_data() {

    let path = "./data/train.csv"
    let content = readFileSync(path).toString()

    let lines = content.split("\r\n")

    let holder = []

    for (let i = 1; i < lines.length - 1; i++) {
        let split = lines[i].split(",")
        let split_two = []
        for (let a = 0; a < split.length; a++) {
            split_two[a] = parseFloat(split[a])
        }
        holder.push(split_two)
    }

    let transed = transpose(holder)

    let answers = transed.slice(0, 1)
    let temp_arr = []
    for (let i = 0; i < answers[0].length; i++) {
        temp_arr.push(create_answer(answers[0][i]))
    }
    let inputs = transpose(transed.slice(1, transed.length))
    return [temp_arr, inputs]
}








