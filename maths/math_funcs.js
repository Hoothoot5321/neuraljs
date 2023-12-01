//@ts-check
/** 
    *
    *@param {number} num
    *@returns {number}
    * */
export function sigmoid(num) {
    return 1 / (1 + Math.exp(-num))
}

/** 
    *
    *@param {number} num
    *@returns {number}
    * */
export function derived_sigmoid(num) {
    let fx = sigmoid(num)
    return fx * (1 - fx)
}
/** 
    *
    *@param {number[]} arr1
    *@param {number[]} arr2
    *@returns {number[]}
    * */
export function sub_arrs(arr1, arr2) {
    let temp_arr = []
    for (let i = 0; i < arr1.length; i++) {
        let num = arr1[i] - arr2[i]
        temp_arr.push(num)
    }
    return temp_arr
}

/** 
    *
    *@param {number[]} arr1
    *@param {number[]} arr2
    *@returns {number[]}
    * */
export function error_arr(arr1, arr2) {
    let temp_arr = []
    for (let i = 0; i < arr1.length; i++) {
        let num = 2 * (arr1[i] - arr2[i])
        temp_arr.push(num)
    }
    return temp_arr
}

/** 
    *
    *@param {number[]} arr
    *@returns {number}
    * */
export function mean_arr(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum / arr.length
}

/** 
    *
    *@param {number[][]} arr1
    *@param {number[][]} arr2
    *@returns {number}
    * */
export function mean_err_arr(arr1, arr2) {
    let temp_num = 0
    for (let i = 0; i < arr1.length; i++) {
        let lol = mean_arr(arr1[i]) - mean_arr(arr2[i])
        let num = Math.pow(lol, 2)
        temp_num += num
    }
    let rese = temp_num / arr1.length
    return rese
}






