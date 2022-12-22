import { faker } from '@faker-js/faker';



export class Profile {
  //  country and city and street have to correspond
  constructor() {
    this.sex = faker.name.sexType()
    this.firstName = faker.name.firstName(this.sex)
    this.lastName = faker.name.lastName(this.sex)
    this.birthday = faker.date.birthdate()
    this.birthYear = this.birthday.getFullYear()
    this.birthMonth = this.birthday.getMonth()+1
    this.age = (new Date().getFullYear()) - this.birthYear
    this.birthDay = this.birthday.getDate()
    this.country = faker.address.country()
    this.city = faker.address.cityName()
    /*this.pseudo = 
    this.password = 
    this.postalCode = */
    //this.email = faker.internet.email();
  }
  get Profile() {
  console.log(`Profile : \n sex: ${this.sex}\n firstName: ${this.firstName}\n lastName: ${this.lastName}\n birthday: ${this.birthday}\n birthYear: ${this.birthYear}\n birthMonth: ${this.birthMonth}\n age: ${this.age}\n birthDay: ${this.birthDay}\n country: ${this.country}\n city: ${this.city}`)
  }
}
