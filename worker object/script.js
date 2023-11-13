let workerObj = {
  id: 1,
  name: "Taleh",
  surname: "Aghayev",
  profession: "Tələbə",
  salary: 300,
  company: "Jed Academy",
  age: 32,
  infoEmp: function() {
      console.log(`${this.name} ${this.company}-də ${this.profession}dir.`);
  },
  salaryinfo: function(){
    console.log(`Maaşı ${this.salary}-AZN`);
  },
  ageinfo: function() {
    console.log(`Yaşı ${this.age}`);
  },
  hbd: function() {
      this.age++;
  },
  getFullName: function() {
      return `${this.name} ${this.surname}`;
  },
  upgradeSalary: function(increaseAmount) {
      this.salary += increaseAmount;
  }
};

workerObj.infoEmp(); 

workerObj.salaryinfo(); 

workerObj.ageinfo(); 

workerObj.hbd();
console.log(`Yeni yaş: ${workerObj.age}`); 

console.log(`Tam ad: ${workerObj.getFullName()}`); 

workerObj.upgradeSalary(100);
console.log(`Yeni maaş: ${workerObj.salary}`); 

//   isci obyekti yaradin: employee
// propert-leri bunlar olsun:
// 1. id -> ededdir. 0,1,2,3,4 ve s vere bilersiniz.  
// 2. ad  -> ramin
// 3. soyad -> mammadzada
// 4. peshe -> developer
// 5. maas -> 300
// 6. shirket -> jed 
// 7. yas -> 18
// 8. infoEmp() -> ramin jed-de developer isleyir. 
// 9. hbd() -> yas-i bir vahid artirir. 
// 10. getFullName() -> ramin mammadzada
// 11. upgradeSalary(100) -> maasi verdiyim argument qeder artir. (burda 100)