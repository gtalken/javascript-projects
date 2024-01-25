function makeLine(size) {
    let line = '';
    for (let i = 0; i < size; i++) {
        line += '#';
    }
    return line; 
}
console.log(makeLine(5));

function makeSquare(size) {
    let square = '';
    for (let i = 0; i < size; i++) {
        square += makeLine(size) + '\n';
    }
    return square;
}

function makeLine(size) {
    let line = '';
    for (let i = 0; i < size; i++) {
        line += '##';
    }
    return line;
}
console.log('----------')
console.log(makeSquare(4));
console.log('------------')

function makeRectangle(width, height) {
    let rectangle = '';
    for (let i = 0; i < height; i++) {
      rectangle += (makeLine(width) + '\n');
    }
    return rectangle.slice(0, -1);
  }
  console.log(makeRectangle(14,3))

  function makeDownwardStairs(height) {
    let stairs = '';
    for (let i = 0; i < height; i++) {
      stairs += (makeLine(i+1) + '\n');
    }
    return stairs.slice(0, -1);
  }
    console.log("-------")
console.log(makeDownwardStairs(5))
console.log('------------')

function makeSpaceLine(numSpaces, numChars) {
    let line = '_'.repeat(numSpaces) + '#'.repeat(numChars) + '_'.repeat(numSpaces);
    return line;
}

console.log(makeSpaceLine(3,5));

function makeIsoscelesTriangle(height){
    let triangle='';
for (let i=1; i<=height; i++){

    for (let j=0; j<height-i; j++){
        triangle += ' ';

    }
    for (let k=0;k<2*i-1;k++){
        triangle +='#'
    }
    triangle +='\n'
}
return triangle;
}
console.log('----------')
  console.log(makeIsoscelesTriangle(5))

function makeDiamond(height,bounus){
    let diamond='';
    diamond += makeIsoscelesTriangle(height,bounus);


for (let i = height-1;i>=1; i--){
    for (let j=0; j<height-i;j++){
        diamond+=' ';
    }
    for (let k=0; k<2*i-1;k++){
        diamond +=bounus;
    }
    diamond +='\n';
    }
return diamond;

}
console.log('-----------')
console.log(makeDiamond(5,'*'))