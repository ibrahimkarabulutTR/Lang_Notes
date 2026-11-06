// CLASS -> kişisel değiştirilebilir fonksiyon

/* Constructor fonksiyonlarda dışarıdan fonksiyon eklemek kod karmaşasına neden olur
	prototype eklersen de sonradan değişiklik(kişiselleştirme) yapamazsın bu yüzden büyük kullanımlar için Class kullanılır. */

// Class Declaration (ilk harfin büyük olması önerilir)
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


const Abdullah = new Customer('Abdullah', 'Ökmen', 25) // class çağırma argüman ekleme
console.log(Abdullah)
console.log(Abdullah.name)
console.log(Abdullah.fullName())
// console.log(Customer.fullName()) // hata verir çünkü person bir iskelet bu yapılar boş ve tanımlanacak değişkene ait olurlar
// ama static öğeler ise person'a ait
console.log(Customer.showName)
Customer.specialMethod()
// tanımlandığı değişkenler kullanamaz
// console.log(Abdullah.showName) // hata verir
Abdullah.graduate.push('college')
console.log(typeof Abdullah)
console.log(typeof Customer)
console.log(Abdullah instanceof Customer)


class EngineerCustomer extends Customer {
	constructor(name, surname, age, job){
		super(name, surname, age)
		this.job = job
	}
	getMoney() {
		console.log('Earn Money')
	}
}

/* Engineer Person'u referans alır kendi özellikleri ile genişletir (extends eder) 
Engineer --> subclass (child), Person --> superclass (parent) */
const İbrahim = new Engineer('İbrahim', 'Kenan', '35', 'CNC')

console.log(Abdullah instanceof Person)
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