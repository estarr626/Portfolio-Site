/*
Write a function that takes in a message, and increment amount
Outputs the same letters, shifted by the increment amount in the alphebet
Assume lowercase, and no punctuation
Preserve spaces.
*/

//test case
// abc, 3 => def


//test case
// aaa bbb, 2 => ccc eee


function caesarCypher(message, increment){

    // set a return string to an empty string
    let returnString = ''

    // convert to opposite = {1: 'a', 2: 'b', ...}
    convertDict = {
        'a': 1,
        'b': 2,
        'c': 3,
        'd': 4,
        'e': 5,
        'f': 6,
        'g': 7,
        'h': 8,
        'i': 9,
        'j': 10,
        'k': 11,
        'l': 12,
        'm': 13,
        'n': 14,
        'o': 15,
        'p': 16,
        'q': 17,
        'r': 18,
        's': 19,
        't': 20,
        'u': 21,
        'v': 22,
        'w': 23,
        'x': 24,
        'y': 25,
        'z': 26,
        1: 'a',
        2: 'b',
        3: 'c',
        4: 'd',
        5: 'e',
        6: 'f',
        7: 'g',
        8: 'h',
        9: 'i',
        10: 'j',
        11: 'k',
        12: 'l',
        13: 'm',
        14: 'n',
        15: 'o',
        16: 'p',
        17: 'q',
        18: 'r',
        19: 's',
        20: 't',
        21: 'u',
        22: 'v',
        23: 'w',
        24: 'x',
        25: 'y',
        26: 'z'
    }

    //loop through each character of message
    for(let i = 0; i < message.length; i++){
        let currentChar = message[i]
        // add a character to return string
        // if its a space, give return string a space
        if(currentChar === ' ') returnString += ' '
        // else
        else{
            returnString += convertDict[(convertDict[currentChar] + increment) % 26]
        }
    }

    // return return string
    return returnString
}

console.log(caesarCypher('abc', 3)) //def
console.log(caesarCypher("abc", 29)) //def
console.log(caesarCypher('aaa bbb', 2)) //ccc ddd
console.log(caesarCypher("zoo keeper", 2)) // bqq mggrgt
console.log(caesarCypher("big car", 16)) // ryw sqh
