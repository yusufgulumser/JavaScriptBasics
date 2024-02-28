// Installation 
// npm init -y   
// npm install --save-dev jest
// update package.json's script section like this
/* "scripts": {
    "test": "jest"
  }, */
// npm run test

const addFive=require('./addFive');

test('return the number plus 5', ()=>{
    expect(addFive(1)).toBe(6);
})