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
