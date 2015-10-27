const doExamples = () => {
    class Person {
        constructor(name) {
            this.name = name;
            this.colors = ["red"];
        }
        sayName() {
            return this.name;
        }
    }

    class Student extends Person {
        constructor(name, faculty) {
            super(name);
            this.faculty = faculty;
        }
        sayFaculty() {
            return this.faculty;
        }
    }

    const person = new Person("Ihor R");

    console.log(person.sayName());

    const student = new Student("Reshetnov", "CS");

    console.log(student.sayName());
    console.log(student.sayFaculty());

    class GradeStudent extends Student {
        constructor(name, faculty, grade) {
            super(name, faculty);
            this.grade = grade;
        }
        sayGrade() {
            return this.grade;
        }
    }

    const gradeStudent = new GradeStudent("Greg", "History", 3);

    console.log(gradeStudent.sayName());
    console.log(gradeStudent.sayFaculty());
    console.log(gradeStudent.sayGrade());

    console.log(student.sayName());
    console.log(student.sayFaculty());

    student.faculty = "CS2";
    console.log(student.sayFaculty());
    console.log(gradeStudent.sayFaculty());

    console.log(gradeStudent instanceof Person);
    console.log(gradeStudent instanceof Student);
    console.log(gradeStudent instanceof GradeStudent);

    const baseWorker = {
        work: 'coal miner',
        age : 23,
        tools: ["lopata", "kirka"]
    };

    const worker1 = Object.create(baseWorker);
    const worker2 = Object.create(baseWorker);

    worker2.work = "some";
    worker2.tools.push("molot");
    console.log(worker1.work);
    console.log(worker1.tools);
    console.log(worker2.work);
    console.log(worker2.tools);
    console.log(student.colors);
    student.colors.push("blue");
    console.log(student.colors);
    console.log(person.colors);
};

export default {
    doExamples
};
