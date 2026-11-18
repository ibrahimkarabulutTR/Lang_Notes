// CLASS -> Obje şablonudur
// Bir sınıfınız olduğunda, bu sınıfı kullanarak nesneler oluşturabilirsiniz:


// Class Declaration (büyük harfle başlaması standarttır)
class Waiter {
	// parametre ekleme
	constructor(name, surname, age) {
		this.name = name
		this.surname = surname
		this.age = age
	}
	fullName() {
		return `${this.name + " " + this.surname}`
	}
	static showName = 'Waiter Person'
}


// Class Expression
const Customer = class {
	constructor(name, surname, age) {
		this.name = name
		this.surname = surname
		this.age = age
	}
	fullName() {
		return `${this.name + " " + this.surname}`
	}
	graduate = ['primary school', 'middle school', 'high school']
	static showName = 'Customer Person'
	static specialMethod() {
		console.log('special thinking')
	}
}


const Abdullah = new Customer('Abdullah', 'Ökmen', 25) // sınıf'a argüman ekleyip obje oluşturma
console.log(Abdullah)
console.log(Abdullah.name)
console.log(Abdullah.fullName())

// console.log(Customer.fullName()) // hata verir çünkü fullName Objeye ait sınıfa değil

// ama static öğeler ise sınıf'a ait özelliklerdir
console.log(Customer.showName)
Customer.specialMethod()

// console.log(Abdullah.showName) // hata verir çünkü sınıfın özelliğini obje de çağırmış
Abdullah.graduate.push('college')

console.log(typeof Abdullah) // Object
console.log(typeof Customer) // Function
console.log(Abdullah instanceof Customer)


// EngineerCustomer'a Customer eklenerek sınıfı genişletir
class EngineerCustomer extends Customer {
	constructor(name, surname, age, job){
		super(name, surname, age)
		this.job = job
	}
	getMoney() {
		console.log('Earn Money')
	}
}
// EngineerCustomer Property = EngineerCustomer [subclass(child)] + Customer [superclass(parent))]


const İbrahim = new EngineerCustomer('İbrahim', 'Kenan', '35', 'CNC')

console.log(Abdullah instanceof Customer)
console.log(İbrahim instanceof Engineer)


// Kullanım örneği
class CustomArray extends Array {
	shuffle() {
		this.sort(() => Math.random() - 0.5)
	}
}

const listNums = [10,25,68,52,65]

function shuffleArray(e) {
  let myArray = new CustomArray(...e)
  myArray.sort() // küçükten büyüğe sıralar
  myArray.shuffle() // karıştırıp sıralar
  myArray = myArray.join(', ')
  return myArray
}

console.log(shuffleArray(listNums))