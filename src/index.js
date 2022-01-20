const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {

    let numbersArray = [];
    expr = expr.split('');

    while (expr.length !== 0) {
        let byte = expr.splice(0, 10);
        numbersArray.push(byte.join(''));
    };

    let symbolsArray = numbersArray.map((string) => {
        string = string.replace(/10/g, '.');
        string = string.replace(/11/g, '-');
        string = string.replace(/0/g, '');
        return string;
    });

    let encodedString = '';

    for (let item of symbolsArray) {
        if (item.includes("*")) {
            encodedString += " ";
        } else {
            encodedString += MORSE_TABLE[item];
        };
    };

    return encodedString;
};

module.exports = {
    decode
}