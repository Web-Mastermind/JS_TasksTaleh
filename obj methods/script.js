let memberdata = {
  name: "Taleh",
  age: 33,
  gender: "Male",
  setAge: function() {
    this.age = 25;
    console.log(this.age);
  },
  getYearsBeforeRetirement: function() {
    const retirementAge = 65;
    return retirementAge - this.age;
  }
}

memberdata.setAge();

let yearsBeforeRetirement = memberdata.getYearsBeforeRetirement();
console.log(yearsBeforeRetirement);
