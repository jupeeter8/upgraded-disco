export class Translate {
    ENGLISH: object
    MORSE: object

    constructor() {
        this.ENGLISH = {
            'a': [0, 1], 'b': [1, 0, 0, 0], 'c': [1, 0, 1, 0], 'd': [1, 0, 0], 'e': [0], 'f': [0, 0, 1, 0], 'g': [1, 1, 0], 'h': [0, 0, 0, 0], 'i': [0, 0], 'j': [0, 1, 1, 1], 'k': [1, 0, 1], 'l': [0, 1, 0, 0], 'm': [1, 1], 'n': [1, 0], 'o': [1, 1, 1], 'p': [0, 1, 1, 0], 'q': [1, 1, 0, 1], 'r': [0, 1, 0], 's': [0, 0, 0], 't': [1], 'u': [0, 0, 1], 'v': [0, 0, 0, 1], 'w': [0, 1, 1], 'x': [1, 0, 0, 1], 'y': [1, 0, 1, 1], 'z': [1, 1, 0, 0],
            '1': [0, 1, 1, 1, 1],
            '2': [0, 0, 1, 1, 1],
            '3': [0, 0, 0, 1, 1],
            '4': [0, 0, 0, 0, 1],
            '5': [0, 0, 0, 0, 0],
            '6': [1, 0, 0, 0, 0],
            '7': [1, 1, 0, 0, 0],
            '8': [1, 1, 1, 0, 0],
            '9': [1, 1, 1, 1, 0],
            '0': [1, 1, 1, 1, 1],
            " ": ['/'],
            "?": [0, 0, 1, 1, 0, 0],
            "!": [1, 0, 1, 0, 1, 1]
        }
        this.MORSE = {
            '01': 'a', '1000': 'b', '1010': 'c', '100': 'd', '0': 'e', '0010': 'f', '110': 'g', '0000': 'h', '00': 'i', '0111': 'j', '101': 'k', '0100': 'l', '11': 'm', '10': 'n', '111': 'o', '0110': 'p', '1101': 'q', '010': 'r', '000': 's', '1': 't', '001': 'u', '0001': 'v', '011': 'w', '1001': 'x', '1011': 'y', '1100': 'z', '01111': '1', '00111': '2', '00011': '3', '00001': '4', '00000': '5', '10000': '6', '11000': '7', '11100': '8', '11110': '9', '11111': '0',
            '/': ' ',
            '001100': '?',
            '101011': '!',
        }
    }

    // Translate English to Morse
    toMorse(text: string) {
        let morse = ''
        for (let i = 0; i < text.length; i++) {
            morse += this.ENGLISH[text[i].toLowerCase()].join("") + ' '
        }
        const DOT = '.';
        const DASH = '_';

        morse = morse.replace(/0/g, DOT).replace(/1/g, DASH);
        // remove last space
        const final = morse.slice(0, -1);
        return final
    }

    toEnglish(text: string) {
        let english = ''
        if (text === '') return english
        text = text.replace(/\./g, '0').replace(/_/g, '1')
        let morse = text.split(' ')
        for (let i = 0; i < morse.length; i++) {
            english += this.MORSE[morse[i]]
        }
        return english
    }

    checkDataEnglish(text: string) {
        // check if text contains only a-z, 0-9, ?, ! space and no extra spaces
        // remove "&lt;br&gt;"
        // remove <div> and </div>
        text = text.replace(/<div>/g, '').replace(/<\/div>/g, ' ');
        text = text.toLowerCase();
        text = text.replace(/&lt;br&gt;/g, '');
        text = text.replace(/<br>/g, '');
        text = text.replace(/[^a-z0-9!? ]/gi, '');
        text = text.replace(/\s+/g, ' ');

        return text
    }

    checkDataMorse(text: string) {
        text = text.replace(/\./g, '0').replace(/_/g, '1')
        text = text.replace(/\s+/g, ' ');
        if (text[text.length - 1] === ' ') {
            text = text.slice(0, -1);

        }
        text = text.replace(/\/{2,}/g, '/');
        let morse = text.split(' ');

        for (let i = 0; i < morse.length; i++) {
            if (morse[i] in this.MORSE) {
                continue
            } else {
                morse.splice(i, 1);
            }
        }

        text = morse.join(' ');
        text = text.replace(/\/{2,}/g, '/');
        return text

    }
}

