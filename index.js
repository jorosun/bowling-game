export const createRoll = () => {
  // get the user to input the number of pins knocked down
  // let roll = ("please input number of pins knocked down");
  let roll = 10;
  return roll;
};

export const createFrame = () => {
  let spare = false;
  let strike = false;
  let usedRoll2 = false;

  let roll1 = createRoll();

  if (roll1 === 10) {
    strike = true;
  } else {
    let roll2 = createRoll();
    usedRoll2 = true;
  }
  console.log(strike);
  console.log(roll1);
  console.log(usedRoll2);
};
