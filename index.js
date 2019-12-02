const map = '۰۱۲۳۴۵۶۷۸۹'.split('');
const toEnMap = {
    '۰': 0,
    '۱': 1,
    '۲': 2,
    '۳': 3,
    '۴': 4,
    '۵': 5,
    '۶': 6,
    '۷': 7,
    '۸': 8,
    '۹': 9,
};

const arabicChars = [
    'ي',
    'ك',
    '‍',
    'دِ',
    'بِ',
    'زِ',
    'ذِ',
    'ِشِ',
    'ِسِ',
    '‌',
    'ى',
];
const persianChars = ['ی', 'ک', '', 'د', 'ب', 'ز', 'ذ', 'ش', 'س', '', 'ی'];

const arabicCharsToFarsiMap = {};

const arabicNumbers = ['١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩', '٠'];
const persianNumbers = ['۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹', '۰'];

const arabicNumbersToFarsiMap = {};

arabicChars.forEach((arabicChar, i) => {
    arabicCharsToFarsiMap[arabicChar] = persianChars[i];
});

arabicNumbers.forEach((arabicNumber, i) => {
    arabicNumbersToFarsiMap[arabicNumber] = persianNumbers[i];
});

var farsi_helper = {
    convertToPersianNumbers: function(number) {
        let str;
        let arr;

        if (!number && number !== 0) {
            return '';
        }

        str = this.arabicNumbersToPersian(number.toString());
        arr = str.split('');

        for (let i = 0; i < arr.length; i++) {
            const char = arr[i];
            if (map[char]) {
                arr[i] = map[char];
            } else if (char === '.') {
                arr[i] = '\u066B';
            }
        }

        return arr.join('');
    },

    arabicNumbersToPersian: function(value) {
        let arr;

        if (!value) {
            return;
        }

        arr = value.toString().split('');

        for (let i = 0, len = arr.length; i < len; i++) {
            const char = arr[i];
            if (arabicNumbersToFarsiMap[char]) {
                arr[i] = arabicNumbersToFarsiMap[char];
            }
        }

        return arr.join('');
    }
}

module.exports = farsi_helper;