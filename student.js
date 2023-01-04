export class Student {
  #name;
  #tel;
  #email;
  #gender;
  constructor(name, tel, email, gender, pay) {
    this.#name = name;
    this.#tel = tel;
    this.#email = email;
    this.#gender = gender;
    this.pay = pay;
  }
}
