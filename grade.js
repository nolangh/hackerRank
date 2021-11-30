function getGrade(score) {
  let grade = ["A", "B", "C", "D", "E", "F"];
  if (score > 25 && score <= 30) {
    console.log(grade[0]);
  } else if (score > 20 && score <= 25) {
    console.log(grade[1]);
  } else if (score > 15 && score <= 20) {
    console.log(grade[2]);
  } else if (score > 10 && score <= 15) {
    console.log(grade[3]);
  } else if (score > 5 && score <= 10) {
    console.log(grade[4]);
  } else score > 0 && score <= 5;
  console.log(grade[5]);
}
