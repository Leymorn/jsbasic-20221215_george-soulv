function sumSalary(salaries) {
  let sum = 0;
  for (let key in salaries) {
    if (!isNaN(parseFloat(salaries[key])) && isFinite(salaries[key])) {
      sum += salaries[key];
    }
  }
  return sum;
}
