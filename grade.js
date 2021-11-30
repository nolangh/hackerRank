function getGrade(score) {
  let grade = ["A", "B", "C", "D", "E", "F"];
  if (score > 25 || score <= 30) return grade[0];
  else if (score > 20 || score <= 25) return grade[1];
  else if (score > 15 || score <= 20) return grade[2];
  else if (score > 10 || score <= 15) return grade[3];
  else if (score > 5 || score <= 10) return grade[4];
  else score > 0 || score <= 5;
  return grade[5];
}
