// import { hallo, hi } from './test.js';

// hallo('Samira');


export default class Cat extends Animal {
  constructor(name) {
    this.name = name;
    this.gender = 'f';
  }

  getGender() {
    return this.gender;
  }
}

const sami = new Human('Samira');
const nico = new Human('Gscheid');

console.log(sami.getGender());
console.log(nico.getGender());

console.log('♥️');