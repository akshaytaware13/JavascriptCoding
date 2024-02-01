class User {
  constructor(email, password) {
    (this.email = email),
    (this.password = password);
  }

  get password() {
    return this._password.toUpperCase(); 
  }
  set password(val) {
    this._password = val.toUpperCase();
  }
}

const akshay = new User("akshay@gmail.com", "def");
console.log(akshay);


const users = new User("test@gmail.com", "abc");
console.log(users);