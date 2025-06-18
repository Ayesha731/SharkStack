class Person {
  constructor(name, rollNo) {
    this.name = name;
    this.rollNo = rollNo;
  }
  getDetails() {
    return `Name of student = ${this.name} <br> Roll No = ${this.rollNo} `;
  }
}

class Student extends Person {
  constructor(name, rollNo, marks) {
    super(name, rollNo);
    this.marks = marks;
  }

  #calculateTotal() {
    let sum = 0;
    for (const subjects in this.marks) {
      sum += this.marks[subjects];
    }
    console.log(`Total Marks = ${sum}`);
    return sum;
  }

  getAverage() {
    let total = this.#calculateTotal();
    let average = total / Object.keys(this.marks).length;
    return average;
  }

  getGrade() {
    const avg = this.getAverage();
    if (avg >= 90) return "A";
    else if (avg >= 75) return "B";
    else if (avg >= 60) return "C";
    else if (avg >= 50) return "D";
    else return "F";
  }

  getReport() {
    const details = super.getDetails();
    const totals = this.#calculateTotal();
    const average = this.getAverage().toFixed(2);
    const grade = this.getGrade();
    const report = `${details} <br>Total Marks: ${totals} <br> Average: ${average} <br> Grade: ${grade}`;
    return report;
  }
}
const s1 = new Student("Ayesha", 101, { math: 95, english: 90, science: 98 });
const s2 = new Student("Aleena", 102, { math: 80, english: 85, science: 82 });

console.log(s1.getReport());
console.log(s2.getReport());

document.getElementById("container").innerHTML = `
  <h3>Student Report - Ayesha</h3>
  <p>${s1.getReport()}</p>

  <h3>Student Report - Aleena</h3>
  <p>${s2.getReport()}</p>
`;
