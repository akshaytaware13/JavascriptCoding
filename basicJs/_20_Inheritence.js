class User {
  constructor(username) {
    this.username = username;
  }

  logme() {
    console.log(`userName is ${this.username}`);
  }
}

class Teacher extends User {
  constructor(userName, Email, Password) {
    super(userName), (this.Email = Email), (this.Password = Password);
  }

  addCourse() {
    console.log(`A new course was added by ${this.username}`);
  }
}

const abc = new Teacher("Test", "test@gmail.com", "123");
abc.addCourse()