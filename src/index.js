module.exports = function toReadable (number) {
    let zero = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"]
    // let elev = ["eleven","twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"]
    let twenty = ["ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"]
    let hundred = "hundred"
    let numStrArr = number.toString().split("").map(i => +i)
    console.log(numStrArr)
    let result = ""
    if(number >= 0 && number < 20){
        result += zero[number]
        return result
    }
    else if(number % 10 === 0 && number < 100){
        number = number.toString().slice(0, -1)
        // console.log(twenty[number - 1])
        result += twenty[number - 1]
        return result
    }
    if(number > 20 && number < 100){
        let first = ""
        let second = ""
        let checkFirstValueNumber = number.toString().slice(0, -1) + "0"
        let checkSecondValueNumber = number.toString().slice(1)
        console.log(checkSecondValueNumber)
        if(+checkFirstValueNumber % 10 === 0){ 
            checkFirstValueNumber = +checkFirstValueNumber.toString().slice(0, -1)
            first += twenty[checkFirstValueNumber - 1]
        }
        if(+checkSecondValueNumber < 10){
            second += zero[checkSecondValueNumber]
        }
        console.log(first)
        console.log(second)
        result = `${first} ${second}`
        return result
    }
    if(number >= 100){
        let first = ""
        let second = hundred
        let third = ""
        let fourth = ""
        
        let firstVal = number.toString().slice(0, 1)
        first += zero[+firstVal]
        result = `${first} ${second}`
        
        if(number % 100 === 0){
            console.log(number)
            let firstVal = number.toString().slice(0, 1)
            first = zero[+firstVal]
            result = `${first} ${second}`
            return result
        }
        third = number.toString().slice(1)
        console.log(third)
        if(+third > 0 && +third < 10){
            third = third.slice(1)
            console.log(third)
            result += ` ${zero[+third]}`
            return result
        }
        if(+third > 10 && +third < 20){
            console.log(third)
            result += ` ${zero[+third]}`
            return result
        }
        
        if(+third % 10 === 0){
            let firstVal = number.toString().slice(1)
            firstVal = firstVal.toString().slice(0, 1)
            console.log(firstVal)
            third = twenty[+firstVal - 1]
            console.log(third)
            result += " " + third
            return result
        }
        else{
            let firstVal = number.toString().slice(1)
            firstVal = firstVal.toString().slice(0, 1)
            third = twenty[+firstVal - 1]
            let fourVal = number.toString().slice(-1)
            fourth = zero[+fourVal]
            console.log(fourth)
            result += ` ${third} ${fourth}`
        }
    }
    return result
}
// function toReadable(number){
//     let zero = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven","twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"]
//     // let elev = ["eleven","twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"]
//     let twenty = ["ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"]
//     let hundred = "hundred"
//     let numStrArr = number.toString().split("").map(i => +i)
//     console.log(numStrArr)
//     let result = ""
//     if(number > 0 && number < 20){
//         result = zero[number]
//         return result
//     }
//     else if(number % 10 === 0 && number < 100){
//         number = number.toString().slice(0, -1)
//         // console.log(twenty[number - 1])
//         result += twenty[number - 1]
//         return result
//     }
//     if(number > 20 && number < 100){
//         let first = ""
//         let second = ""
//         let checkFirstValueNumber = number.toString().slice(0, -1) + "0"
//         let checkSecondValueNumber = number.toString().slice(1)
//         console.log(checkSecondValueNumber)
//         if(+checkFirstValueNumber % 10 === 0){ 
//             checkFirstValueNumber = +checkFirstValueNumber.toString().slice(0, -1)
//             first += twenty[checkFirstValueNumber - 1]
//         }
//         if(+checkSecondValueNumber < 10){
//             second += zero[checkSecondValueNumber]
//         }
//         console.log(first)
//         console.log(second)
//         result = `${first} ${second}`
//         return result
//     }
//     if(number >= 100){
//         let first = ""
//         let second = hundred
//         let third = ""
//         let fourth = ""
        
//         let firstVal = number.toString().slice(0, 1)
//         first += zero[+firstVal]
//         result = `${first} ${second}`
        
//         if(number % 100 === 0){
//             console.log(number)
//             let firstVal = number.toString().slice(0, 1)
//             first = zero[+firstVal]
//             result = `${first} ${second}`
//             return result
//         }
//         third = number.toString().slice(1)
//         console.log(third)
//         if(+third > 0 && +third < 10){
//             third = third.slice(1)
//             console.log(third)
//             result += ` ${zero[+third]}`
//             return result
//         }
//         if(+third > 10 && +third < 20){
//             console.log(third)
//             result += ` ${zero[+third]}`
//             return result
//         }
        
//         if(+third % 10 === 0){
//             let firstVal = number.toString().slice(1)
//             firstVal = firstVal.toString().slice(0, 1)
//             console.log(firstVal)
//             third = twenty[+firstVal - 1]
//             console.log(third)
//             result += " " + third
//             return result
//         }
//         else{
//             let firstVal = number.toString().slice(1)
//             firstVal = firstVal.toString().slice(0, 1)
//             third = twenty[+firstVal - 1]
//             let fourVal = number.toString().slice(-1)
//             fourth = zero[+fourVal]
//             console.log(fourth)
//             result += ` ${third} ${fourth}`
//         }
//     }
//     return result
// }
// console.log(toReadable(12).length)