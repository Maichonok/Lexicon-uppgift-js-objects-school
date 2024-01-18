// Ex.1 a general object
const school = {
  name: "Hägerstensåsens",
  address: "Sedelvägen, 30",
  zipcode: 12932,
  city: "Stockholm",
  students: [],
  addStudent: function (student) {
    this.students.push(student);
  },
  teachers: [],
  addTeacher: function (teacher) {
    this.teachers.push(teacher);
  },
  rating: 4,
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
};

// Ex.3 students
const student1 = {
  name: "Maja",
  age: 19,
  gender: "female",
  subjects: [],
  enlistTosubject: function (subject) {
    this.subjects.push(subject);
    subject.addStudent(this);
  },
};

const student2 = {
  name: "Arthur",
  age: 20,
  gender: "male",
  subjects: [],
  enlistTosubject: function (subject) {
    this.subjects.push(subject);
    subject.addStudent(this);
  },
};

const student3 = {
  name: "Peter",
  age: 21,
  gender: "male",
  subjects: [],
  enlistTosubject: function (subject) {
    this.subjects.push(subject);
    subject.addStudent(this);
  },
};

const student4 = {
  name: "Uffe",
  age: 21,
  gender: "male",
  subjects: [],
  enlistTosubject: function (subject) {
    this.subjects.push(subject);
    subject.addStudent(this);
  },
};

const student5 = {
  name: "Ingela",
  age: 20,
  gender: "female",
  subjects: [],
  enlistTosubject: function (subject) {
    this.subjects.push(subject);
    subject.addStudent(this);
  },
};

// Ex.4 teachers
const teacher1 = {
  name: "Thomas Andersson",
  subjects: [],
  addSubject: function (subject) {
    this.subjects.push(subject);
    subject.addTeacher(this);
  },
};

const teacher2 = {
  name: "Maria Svensson",
  subjects: [],
  addSubject: function (subject) {
    this.subjects.push(subject);
    subject.addTeacher(this);
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
function addListOfStudents(student) {
  school.students.push(student);
}
school.addStudent(student1);
school.addStudent(student2);
school.addStudent(student3);
school.addStudent(student4);
school.addStudent(student5);

for (let student of school.students) {
  console.log(student);
}

// add teachers
function addListOfTeachers(teacher) {
  school.teachers.push(teacher);
}
school.addTeacher(teacher1);
school.addTeacher(teacher2);

for (let teacher of school.teachers) {
  console.log(teacher);
}

//add subjects for teachers
teacher1.addSubject(discreteMath);
teacher1.addSubject(dataScience);
teacher2.addSubject(businessEnglish);

console.log(discreteMath.teacher.name);
console.log(dataScience.teacher.name);
console.log(businessEnglish.teacher.name);

