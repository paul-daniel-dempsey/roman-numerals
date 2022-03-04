
const decToRoman = (dec) => {
    return decToRomanTestA(dec)
}
const decToRomanTestA = (dec) => {
    
    let convert = {0:'',1:'I',5:'V',10:'X',50:'L',100:'C',500:'D',1000:'M'};
    return convert[dec];
}

const romanToDec = (numeral) => {
    let convert = {'':0,'I':1,'V':5,'X':10,'L':50,'C':100,'D':500,'M':1000};
    let total = numeral.split('').reduce((lhs, rhs_item) => lhs + convert[rhs_item], 0);
    return (total <= 3000) ? total : 0;
}
module.exports = {decToRoman,romanToDec};