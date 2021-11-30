const grade = ["A", "B", "C", "D", "E", "F"];

function getGrade(score) {
  let a = 25 < score <= 30;
  let b = 20 < score <= 25;
  let c = 15 < score <= 20;
  let d = 10 < score <= 15;
  let e = 5 < score <= 10;
  let f = 0 < score <= 5;
  switch (true) {
    case a:
      console.log(grade[0]);
      break;
    case b:
      console.log(grade[0]);
      break;
    case c:
      console.log(grade[0]);
      break;
    case d:
      console.log(grade[0]);
      break;
    case e:
      console.log(grade[0]);
      break;
    case e:
      console.log(grade[0]);
      break;
  }
}
