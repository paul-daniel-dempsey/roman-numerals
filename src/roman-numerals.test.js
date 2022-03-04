const { decToRoman, romanToDec } = require("./roman-numerals");

// Pt1
// The Kata says you should write a function to convert from normal numbers to Roman Numerals 
// There is no need to be able to convert numbers larger than about 3000
// One thing they never discovered though was the number zero

// (A) What is a Roman Numeral? Check Each Numeral For Decimal Equivalent
// (B) Sample includes EVERY Roman Numeral Added Together (1000+500+100+50+10+1=1666)
// (C) Size Test < 3000
// (D) Size Test > 0

describe("decToRoman", () => {
    it.each([[1,'I'],[5,'V'],[10,'X'],[50,'L'],[100,'C'],[500,'D'],[1000,'M']])
    (`(A) Check %i for Roman Equivalent`,
        (dec,result) => {
            expect(decToRoman(dec)).toEqual(result);
        }    
    )
    test('(B) Check Numerals (All + Double Numeral) ', () => {
        expect(decToRoman(1666)).toEqual("MDCLXVI");
        expect(decToRoman(2001)).toEqual("MMI");
    })  
    // test('(C) Size Test Not > 3000 ', () => {
    //     expect(decToRoman(3001)).toEqual("");
    // })
    // test('(D) Size Test <= 0 ', () => {
    //     expect(decToRoman(0)).toEqual("");
    //     expect(decToRoman(-1)).toEqual("");
    // })
  
})


// Pt2
// Convert In Other Direction
// Inverse Of Pt1 (A-D)

describe("romanToDec", () => {
    // it.each([['I',1],['V',5],['X',10],['L',50],['C',100],['D',500],['M',1000]])
    // (`(A) Check %s for Decimal Equivalent`,
    //     (numeral,result) => {
    //         expect(romanToDec(numeral)).toEqual(result);
    //     }    
    // )
    // test('(B) Size Test Not > 3000 ', () => {
    //     expect(romanToDec("MMMI")).toEqual(0);
    // })
    // test('(C) Size Test <= 0 ', () => {
    //     expect(romanToDec("")).toEqual(0);
    // })
    // test('(D) Check Decimals (All + Double Numeral) ', () => {
    //     expect(romanToDec("MDCLXVI")).toEqual(1666);
    //     expect(romanToDec("MMI")).toEqual(2001);
    // }) 
})