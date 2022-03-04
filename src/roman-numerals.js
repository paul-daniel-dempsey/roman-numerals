const decToRoman = (dec) => {
    
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
