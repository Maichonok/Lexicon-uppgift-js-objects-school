// Ex.1 a general object
const school = {
  name: "Hägerstensåsens",
  address: "Sedelvägen, 30",
  zipcode: 12932,
  city: "Stockholm",
  students: [],
  teachers: [],
  rating: 4,
  addStudent: function (student) {
    this.students.push(student);
  },
  addTeacher: function (teacher) {
    this.teachers.push(teacher);
  },
  fireTeacher: function (teacherName) {
    this.teachers = this.teachers.filter(
      (teacher) => teacher.name !== teacherName
    );
  },

  relegateStudent: function (studentName) {
    // find the student in the students array
    let student = this.students.find((student) => student.name === studentName);

    // if the student was found
    if (student) {
      // for each subject the student is enrolled in
      for (let subject of student.subjects) {
        // remove the student from the subject
        subject.removeStudent(student.name);

        // the student also leaves the subject
        student.quitSubject(subject);
      }

      // finally, remove the student from the school
      this.students = this.students.filter(
        (student) => student.name !== studentName
      );
    }
  },
};

// Ex.2 subjects
const discreteMath = {
  name: "Discrete mathematics",
  students: [],
  teacher: {},
  addStudent: function (student) {
    this.students.push(student);
  },
  addTeacher: function (teacher) {
    this.teacher = teacher;
  },
  removeStudent: function (student) {
    let index = this.students.indexOf(student);
    if (index !== -1) {
      this.students.splice(index, 1);
    }
  },
  removeTeacher: function () {
    this.teacher = {};
  },
  removeStudent: function (studentName) {
    this.students = this.students.filter(
      (student) => student.name !== studentName
    );
  },
};

const businessEnglish = {
  name: "Business English",
  students: [],
  teacher: {},
  addStudent: function (student) {
    this.students.push(student);
  },
  addTeacher: function (teacher) {
    this.teacher = teacher;
  },
  removeStudent: function (student) {
    let index = this.students.indexOf(student);
    if (index !== -1) {
      this.students.splice(index, 1);
    }
  },
  removeTeacher: function () {
    this.teacher = {};
  },
  removeStudent: function (studentName) {
    this.students = this.students.filter(
      (student) => student.name !== studentName
    );
  },
};

const dataScience = {
  name: "Data Science",
  students: [],
  teacher: {},
  addStudent: function (student) {
    this.students.push(student);
  },
  addTeacher: function (teacher) {
    this.teacher = teacher;
  },
  removeStudent: function (student) {
    let index = this.students.indexOf(student);
    if (index !== -1) {
      this.students.splice(index, 1);
    }
  },
  removeTeacher: function () {
    this.teacher = {};
  },
  removeStudent: function (studentName) {
    this.students = this.students.filter(
      (student) => student.name !== studentName
    );
  },
};

// Ex.3 students
const student1 = {
  name: "Maja",
  age: 19,
  gender: "female",
  subjects: [],
  enlistToSubject: function (subject) {
    this.subjects.push(subject);
    subject.addStudent(this);
  },
};

const student2 = {
  name: "Arthur",
  age: 20,
  gender: "male",
  subjects: [],
  enlistToSubject: function (subject) {
    this.subjects.push(subject);
    subject.addStudent(this);
  },
};

const student3 = {
  name: "Peter",
  age: 21,
  gender: "male",
  subjects: [],
  enlistToSubject: function (subject) {
    this.subjects.push(subject);
    subject.addStudent(this);
  },
};

const student4 = {
  name: "Uffe",
  age: 21,
  gender: "male",
  subjects: [],
  enlistToSubject: function (subject) {
    this.subjects.push(subject);
    subject.addStudent(this);
  },
};

const student5 = {
  name: "Ingela",
  age: 20,
  gender: "female",
  subjects: [],
  enlistToSubject: function (subject) {
    this.subjects.push(subject);
    subject.addStudent(this);
  },
};

// Ex.4 teachers
const teacher1 = {
  name: "Thomas Andersson",
  subjects: [],
  addSubject: function (subject) {
    if (!this.subjects.includes(subject)) {
      this.subjects.push(subject);
      subject.addTeacher(this);
    } else {
      console.log(`Subject ${subject.name} is already added!`);
    }
  },
};

const teacher2 = {
  name: "Maria Svensson",
  subjects: [],
  addSubject: function (subject) {
    if (!this.subjects.includes(subject)) {
      this.subjects.push(subject);
      subject.addTeacher(this);
    } else {
      console.log(`Subject ${subject.name} is already added!`);
    }
  },
};

// Ex.5
/* teacher1.subjects.unshift(discreteMath);
console.log(teacher1);

// Ex.6
school.students.unshift(student1);
console.log(student1);

// Ex.7
function addSubjectToTeacher(subject, teacher) {
  // add the subject to the teacher's subject array
  teacher.subjects.push(subject);

  // replace the empty teacher object in the subject with the teacher
  subject.teacher = teacher;

  // return the teacher
  return teacher;
}

console.log(addSubjectToTeacher(discreteMath, teacher1));
*/

// Ex.10
//add students
// function addListOfStudents(student) {
//   school.students.push(student);
// }
school.addStudent(student1);
school.addStudent(student2);
school.addStudent(student3);
school.addStudent(student4);
school.addStudent(student5);

function displayAllStudents() {
  console.log("Display students:");
  for (let student of school.students) {
    // display the values
    console.log(student);
  }
}
displayAllStudents();

// add teachers
function addListOfTeachers(teacher) {
  school.teachers.push(teacher);
}
school.addTeacher(teacher1);
school.addTeacher(teacher2);

//add subjects for teachers
teacher1.addSubject(discreteMath);
teacher1.addSubject(dataScience);
teacher2.addSubject(businessEnglish);

function displayAllTeachers() {
  console.log("Display teachers:");
  for (let teacher of school.teachers) {
    // display the values
    console.log(teacher);
  }
}
displayAllTeachers();
//add subjects for students
student1.enlistToSubject(discreteMath);
student2.enlistToSubject(discreteMath);
student3.enlistToSubject(dataScience);
student4.enlistToSubject(dataScience);
student5.enlistToSubject(businessEnglish);
student5.enlistToSubject(discreteMath);
student5.enlistToSubject(dataScience);

function displayAllSubjects() {
  console.log("Display subjects:", school);

  const map = {};

  for (let student of school.students) {
    for (let subject of student.subjects) {
      map[subject.name] = subject;
    }
  }

  for (let subject in map) {
    console.log(map[subject]);
  }
}
displayAllSubjects();

//Other checks
console.log("remove student");
discreteMath.removeStudent("Maja");
console.log("display subject", discreteMath);
console.log("remove teacher");
school.fireTeacher("Thomas Andersson");
console.log("display teachers", school.teachers);
