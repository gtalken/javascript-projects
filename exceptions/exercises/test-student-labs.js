function gradeLabs(labs) {
  for (let i = 0; i < labs.length; i++) {
    let lab = labs[i];
    try {
      let result = lab.runLab(3);
      console.log(`${lab.student} code worked: ${result === 27}`);
    } catch (error) {
      console.log(`${lab.student} encountered an error: ${error.message}`);
      // If an error is thrown, set result to "Error thrown"
      let result = "Error thrown";
    }
  }
}

let studentLabs2 = [
  {
    student: 'Blake',
    myCode: function (num) {
      return Math.pow(num, num);
    }
  },
  {
    student: 'Jessica',
    runLab: function (num) {
      return Math.pow(num, num);
    }
  },
  {
    student: 'Mya',
    runLab: function (num) {
      return num * num;
    }
  }
];

gradeLabs(studentLabs2);

