// Base class: Person
class Person {
  constructor(name, age) {
    this._name = name; // Using underscore to indicate "private-like" property
    this._age = age;
  }

  // Getter method for 'name'
  get name() {
    return this._name;
  }

  // Setter method for 'age'
  set age(newAge) {
    if (typeof newAge === 'number' && newAge > 0) {
      this._age = newAge;
    } else {
      console.log('Invalid age');
    }
  }

  // Getter for 'age' to retrieve it
  get age() {
    return this._age;
  }
}

// Subclass: Student, extending Person
class Student extends Person {
  study() {
    console.log(`${this.name} is studying`);
  }
}

// Subclass: Teacher, extending Person
class Teacher extends Person {
  teach() {
    console.log(`${this.name} is teaching`);
  }
}

// Example usage

// Creating a Person object
const person = new Person("John", 25);
console.log(person.name); // Output: John

person.age = 30; // Using setter
console.log(person.age); // Output: 30

// Creating a Student object
const student = new Student("Alice", 22);
student.study(); // Output: Alice is studying

// Creating a Teacher object
const teacher = new Teacher("Bob", 40);
teacher.teach(); // Output: Bob is teaching

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
