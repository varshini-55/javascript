class Student {
    constructor() {
        this.grades = [];
        this.addGrades = addGrades;
        this.average = average;
    }
}
  
/* Function For Initializing Grades */
  function addGrades(value) {
    this.grades.push(value);
  };

  /* Function For Calculating Average */
  function average() {
    var total = 0;
    for(var i = 0; i < this.grades.length; i++){
      total += this.grades[i]; 
    }
    /* Average = Total Divided by Length Of Grades */
    return total/this.grades.length;
  };
  
  /* Creating Objects  */

  var Varshini = new Student
  Varshini.addGrades(75);
  Varshini.addGrades(100);
  console.log(" Average Of Student Is " + Varshini.average() + " And His/Her Marks Are " + Varshini.grades);

  /* Creating Objects  */

  var Priya = new Student();
  Priya.addGrades(85);
  Priya.addGrades(88);
  Priya.addGrades(90);
  console.log(" Average Of Student Is " + Priya.average() + " And His/Her Marks Are " + Priya.grades);

  /* 
  * OUTPUT
  * Average Of Student Is 83.33333333333333 And His/Her Marks Are 75,75,100
  * Average Of Student Is 87.66666666666667 And His/Her Marks Are 85,88,90
  */
