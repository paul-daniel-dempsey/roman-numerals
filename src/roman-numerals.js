
const decToRoman = (dec) => {
    return 'I';



}

const romanToDec = (numeral) => {
    let convert = {'':0,'I':1,'V':5,'X':10,'L':50,'C':100,'D':500,'M':1000};
    let total = numeral.split('').reduce((lhs, rhs_item) => lhs + convert[rhs_item], 0);
    return (total <= 3000) ? total : 0;
}
module.exports = {decToRoman,romanToDec};