
const decToRoman = (dec) => {
//    return decToRomanTestA(dec)
//    return decToRomanTestB(dec)
//    return decToRomanTestC(dec)
//    return decToRomanTestD(dec)
    return decToRomanRefactor(dec)
}
const decToRomanTestA = (dec) => {
    
    let convert = {0:'',1:'I',5:'V',10:'X',50:'L',100:'C',500:'D',1000:'M'};
    return convert[dec];
}
const decToRomanTestB = (dec) => {
    
    const thousand = 'M'.repeat(Math.floor(dec / 1000));
    const fivehundred =  'D'.repeat(Math.floor((dec % 1000) / 500));
    const hundred = 'C'.repeat(Math.floor(((dec % 1000) % 500) / 100));
    const fifty = 'L'.repeat((Math.floor((((dec % 1000) % 500) % 100) / 50)));
    const ten = 'X'.repeat(Math.floor(((((dec % 1000) % 500) % 100) % 50) / 10));
    const five = 'V'.repeat(Math.floor((((((dec % 1000) % 500) % 100) % 50) % 10) / 5));
    const one = 'I'.repeat(Math.floor(((((((dec % 1000) % 500) % 100) % 50) % 10) % 5) / 1));
    return `${thousand}${fivehundred}${hundred}${fifty}${ten}${five}${one}`;
}
const decToRomanTestC = (dec) => {
    
    const thousand = 'M'.repeat(Math.floor(dec / 1000));
    const fivehundred =  'D'.repeat(Math.floor((dec % 1000) / 500));
    const hundred = 'C'.repeat(Math.floor(((dec % 1000) % 500) / 100));
    const fifty = 'L'.repeat((Math.floor((((dec % 1000) % 500) % 100) / 50)));
    const ten = 'X'.repeat(Math.floor(((((dec % 1000) % 500) % 100) % 50) / 10));
    const five = 'V'.repeat(Math.floor((((((dec % 1000) % 500) % 100) % 50) % 10) / 5));
    const one = 'I'.repeat(Math.floor(((((((dec % 1000) % 500) % 100) % 50) % 10) % 5) / 1));
    return ((dec <= 3000) ? `${thousand}${fivehundred}${hundred}${fifty}${ten}${five}${one}` : ``);
}
const decToRomanTestD = (dec) => {
    
    const thousand = 'M'.repeat(Math.floor(Math.abs(dec) / 1000));
    const fivehundred =  'D'.repeat(Math.floor((Math.abs(dec) % 1000) / 500));
    const hundred = 'C'.repeat(Math.floor(((Math.abs(dec) % 1000) % 500) / 100));
    const fifty = 'L'.repeat((Math.floor((((Math.abs(dec) % 1000) % 500) % 100) / 50)));
    const ten = 'X'.repeat(Math.floor(((((Math.abs(dec) % 1000) % 500) % 100) % 50) / 10));
    const five = 'V'.repeat(Math.floor((((((Math.abs(dec) % 1000) % 500) % 100) % 50) % 10) / 5));
    const one = 'I'.repeat(Math.floor(((((((Math.abs(dec) % 1000) % 500) % 100) % 50) % 10) % 5) / 1));
    return ((dec <= 3000) && (dec > 0) ? `${thousand}${fivehundred}${hundred}${fifty}${ten}${five}${one}` : ``);
}
const decToRomanRefactor = (dec) => {
    
    const convert = {'M':1000,'D':500,'C':100,'L':50,'X':10,'V':5,'I':1,};
    let numerals = "";
    if ((dec <= 3000) && (dec > 0)) {
        Object.entries(convert).forEach(([key, value]) => {
            numerals = numerals + key.repeat(Math.floor(dec / value));
            dec = dec % value; 
        }); 
    }
    return numerals;
}

const romanToDec = (numeral) => {
    const convert = {'':0,'I':1,'V':5,'X':10,'L':50,'C':100,'D':500,'M':1000};
    let total = numeral.split('').reduce((lhs, rhs_item) => lhs + convert[rhs_item], 0);
    return (total <= 3000) ? total : 0;
}
module.exports = {decToRoman,romanToDec};
