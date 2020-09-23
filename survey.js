const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const questionArr = [`What do you think of Node.js? `, `What's your name? Nicknames are also acceptable :)`, `What's an activity you like doing?`, `What do you listen to while doing that?`, `Which meal is your favourite (eg: dinner, brunch, etc.)`, `What's your favourite thing to eat for that meal?`, `Which sport is your absolute favourite?`, `What is your superpower? In a few words, tell us what you are amazing at!`];
const answerObj = {};
const split = `********************************************************************************`;

const call = function(questionArr, index) {
  rl.question(questionArr[index], (answer) => {
    answerObj[questionArr[index]] = answer;
    if (index === questionArr.length - 1) {
      console.log(`${split}\n${split}\n${split}`);
      console.log(`Thank you for your valuable feedback:`);
      for (let key in answerObj) {
        console.log(`${key} ${answerObj[key]}`);
      }
      rl.close();
    } else {
      return call(questionArr, ++index);
    }
  });

};
call(questionArr, 0);