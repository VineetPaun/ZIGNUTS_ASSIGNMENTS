class University {
  constructor(name) {
    this.name = name;
    this.departments = [];
  }

  addDepartment(dept) {
    this.departments.push(dept);
  }

  removeDepartment(dept) {
    this.departments = this.departments.filter(d => d !== dept);
  }

  displayDepartments() {
    console.log(`Departments in ${this.name}:`);
    for (let i = 0; i < this.departments.length; i++) {
      console.log(this.departments[i]);
    }
  }
}

let uni = new University("ABC University");
uni.addDepartment("Computer Science");
uni.addDepartment("Mechanical Engineering");
uni.addDepartment("Electrical Engineering");
uni.displayDepartments();

console.log("After removing Mechanical Engineering:");
uni.removeDepartment("Mechanical Engineering");
uni.displayDepartments();
