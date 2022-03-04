
const decToRoman = (dec) => {
    return 'I';



}

const romanToDec = (numeral) => {
    // return romanToDecA(numeral);
    // return romanToDecD(numeral);
    // return romanToDecB(numeral);
    return romanToDecC(numeral);
}

const romanToDecA = (numeral) => {

    let convert = {};
    convert['I'] =1;
    convert['V'] =5;
    convert['X'] =10;
    convert['L'] =50;
    convert['C'] =100;
    convert['D'] =500;
    convert['M'] =1000;

    return convert[numeral];
}
const romanToDecD = (numeral) => {

    let convert = {};
    convert['I'] =1;
    convert['V'] =5;
    convert['X'] =10;
    convert['L'] =50;
    convert['C'] =100;
    convert['D'] =500;
    convert['M'] =1000;

    let total = 0;
    numeral.split('').forEach(element => { total = total + convert[element]});
    return total;
}
const romanToDecB = (numeral) => {

    let convert = {};
    convert['I'] =1;
    convert['V'] =5;
    convert['X'] =10;
    convert['L'] =50;
    convert['C'] =100;
    convert['D'] =500;
    convert['M'] =1000;

    let total = 0;
    numeral.split('').forEach(element => { total = total + convert[element]});
    return (total > 3000 ? 0 : total);
}

const romanToDecC = (numeral) => {

    let convert = {};
    convert['I'] =0;
    convert['I'] =1;
    convert['V'] =5;
    convert['X'] =10;
    convert['L'] =50;
    convert['C'] =100;
    convert['D'] =500;
    convert['M'] =1000;

    let total = 0;
    numeral.split('').forEach(element => { total = total + convert[element]});
    return (total > 3000 ? 0 : total);
}

module.exports = {decToRoman,romanToDec};