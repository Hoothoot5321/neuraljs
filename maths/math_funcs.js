//@ts-check
/** 
    *
    *@param {number} num
    *@returns {number}
    * */
export function sigmoid(num) {
    return 1 / (1 + Math.exp(-num))
}
