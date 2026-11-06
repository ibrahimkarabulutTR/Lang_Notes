// OBJECT

// 1.METOD
let tryObj = new Object({
  "name": "ibrahim"
})

// 2.METOD
let profile = {
	id: 210235,
	name: 'İbrahim',
	surname: 'Karabulut',
	email: 'job.ibrahimkarabulut@gmail.com',
	lang: ['Html', 'CSS3', 'JavaScript', 'PHP', 'GO', 'Java'],
	company: {
		name: 'Mutena Studio',
		foundatingDate: '10.02.2023',
		services: ['Software', 'Ads Agency', 'Social Media', 'Security'],
		experience: ['Microsoft', 'Google', 'Apple']
	},
	employee: [
		{
			name: 'A*** B******',
			job: 'CEO'
		},
		{
			name: 'R**** K*****',
			job: 'CTO'
		},
		{
			name: 'D*** F******',
			job: 'DevOps'
		}
	],
	// function declaration
	printLang() {
		this.lang.forEach(element => {
			console.log(element)
		})
	},
	// function expressions
	printCompany: function() {
		for(let item in this.company) {
			console.log(`${item}: ${this.company[item]}`)
		}
	},
	// arrow function expressions
	printEmployee: () => {
		profile.employee.forEach((item, index) => {
			console.log(`[${index}] => ${item['name']}: ${item.job}`)
		})
	}
}

console.log(typeof profile) // profile değişkeninin tipini verir
console.log(profile) // objeyi bastırır
console.log(profile.name) // objedeki ismi verir
console.log(profile['surname']) // objedeki soyadı verir
console.log(profile['e'+'mail']) // objedeki soyadı verir
console.log(profile.lang) // objedeki lang dizisini verir
console.log(profile.lang[2]) // objedeki lang dizisinde 2 numarayı verir
profile.gender = "Man" // objeye dışarıdak özellik ve değer ekleme, gender key'i(anahtarı) ve Man entries'i() kaydını yazdırır
profile.printLang() // objedeki printLang fonksiyonu çalıştır
profile['printCompany']() // objedeki printCompany fonksiyonu çalıştır
profile['printEmployee']()
profile.graduate = {} // obje içinde graduate objesi aç
profile.graduate.college = true // graduate objesine  college: true ekle
// Property --> fonksiyon obje ile ilişkili



// CONSTRUCTOR

// METOD 1
/* function personConstructorFunc(name, surname, age) {
	const obj = {}
	obj.name = name
	obj.surname = surname
	obj.age = age
	obj.fullName = function() {
		return obj.name+" "+obj.surname
	}
	return obj
}
const carpenterPerson = new personConstructorFunc("Abdullah", "Ökmen", "26")
console.log(carpenterPerson)
console.log(carpenterPerson.fullName()) */


// METOD 2 -> THIS
/* function personConstructorThis(name, surname, age) {
	console.log(this)
	this.name = name
	this.surname = surname
	this.age = age
	this.fullName = function() {
		return this.name+" "+this.surname
	}
	console.log(this)
}

const doctorPerson = new personConstructorThis('Serhat', 'Tekik', 25)
console.log(doctorPerson)
console.log(doctorPerson.fullName()) */


// METOD 3 -> OBJECT CREATE
const objectCreatePerson = {
	name: "NULL",
	surname: "NULL",
	age: "NULL",
	fullName: function() {
		return this.name+" "+this.surname
	}
}

// objeye fonksiyon eklemekten hızlıdır
objectCreatePerson.prototype.createRandomID = function() {
  return Math.trunc(Math.Random()*name.length)
};

const armyPerson = Object.create(objectCreatePerson) // create ile yeni nesne oluşturmadan varolanı kopyalar bellek tasarrufu yapar
armyPerson.name = 'Mete'
armyPerson.surname = 'Yarar'
console.log(armyPerson)
console.log(armyPerson.fullName())
console.log(armyPerson.name)
console.log(armyPerson.hasOwnProperty('name')) // armyPerson'un name özelliği kullanıldığı için var
console.log("name" in armyPerson) // armyPerson'un içinde kopyaladığı objeden dolayı name özelliği var
// OBJECT --> name + surname + age + fullName --> objectCreatePerson
// objectCreatePerson prototype --> object'ten miras alır

console.log(Object.getPrototypeOf(armyPerson))
// OBJECT --> name + surname + age + fullName --> Person Constructor --> gurcan
// gurcan prototype --> Person Constructor prototype --> object inheritance

armyPerson.job = 'Soldier'
armyPerson.toString = function() {
	return 'METE'
}
console.log(armyPerson.toString())
// OBJECT --> name + surname + age + fullName --> objectCreatePerson + job --> armyPerson



// NEW OBJECT SYNTAX
// 1- Shorthand Properties
let name = 'Arin', age = 20
/*const myObj = {
	name: name,
	age: age
} */
const myObj = {
	name,
	age
}
console.log(myObj.name)
console.log(myObj.age)


// 2- Computed Property Names
let comProp = 'name'
let myObj1 = {
	[comProp]: 'Arin'
}
console.log(myObj1)


// 3- Object Destructuring
let {name: myVar1, surname: myVar2} = profile
console.log(myVar1, myVar2)

let {name, surname} = profile
console.log(name, surname)


const books = [
  {
    title: "1984",
    author: "George Orwell",
    pageNumber: 328
  },
  {
    title: "Hayvan Çiftliği",
    author: "George Orwell",
    pageNumber: 152
  },
  {
    title: "Cesur Yeni Dünya",
    author: "Aldous Huxley",
    pageNumber: 311
  },
  {
    title: "Fahrenheit 451",
    author: "Ray Bradbury",
    pageNumber: 192
  }
];
for(const {title, author, pageNumber} of books){
	console.log(`${title} --> ${author} [${pageNumber}]`)
}


// 4- Spread ile objeyi seçme ve atama (...)
const booksCopy = {...books}
console.log(booksCopy)

// birleştirme
const data1 = {
	name: 'Arin',
	age: 40
}
const data2 = {
	job: 'Student',
	graduate: 'College'
}
const personData = {...data1, school: 'Fatih Sultan Mehmet College', ...data2}
console.log(personData)


// 5- REST ile değeri parçalama
const {title, ...details} = books
console.log(title)
console.log(details)

// 7- Object keys, values, entries
console.log(Object.keys(books))
console.log(Object.values(books))
console.log(Object.entries(books))



// DATE OBJECT
const now = new Date() // timestamp yani zamanı milisaniye cinsinden verir
console.log(now) // Tue Nov 03 2026 15:04:25 GMT+0300 (Türkiye Standart Saati)
console.log(typeof now) // object
console.log(not.getFullYear()) // 2026
console.log(now.getMonth()) // 10
console.log(now.getDate()) // 3 -> bulunduğun ayın kaçıncı gün olduğunu söyler
console.log(now.getDay()) // 3 -> bulunduğun haftanın kaçıncı gün olduğunu söyler
console.log(now.getHours()) // 15
console.log(now.getMinutes()) // 4
console.log(now.getSeconds()) // 15
console.log(now.getTime()) // timestamp(milisaniyeyi) verir
console.log(now.toDateString()) // Tue Nov 03 2026
console.log(now.toTimeString()) // 15:04:25 GMT+0300 (Türkiye Standart Saati)
console.log(now.toLocaleTimeString()) // 15:04:25
console.log(now.toLocaleString()) // 03.11.2026 15:04:25


const startDate = new Date('08/15/2018 8:45:00') // zaman verip timestampini almak
const diff = now.getTime() - startDate.getTime(); // verilen zaman ile günümüz arasındaki farkı almak
console.log(diff);

const sec = Math.round(diff/1000);
const min = Math.round(sec/60);
const hour = Math.round(min/60);
const day = Math.round(hour/24);
const year = Math.round(day/365);

console.log(`Video kayıt işlemi başlayalı ${sec} saniye oldu.`);
console.log(`Video kayıt işlemi başlayalı ${min} dakika oldu.`);
console.log(`Video kayıt işlemi başlayalı ${hour} saat oldu.`);
console.log(`Video kayıt işlemi başlayalı ${day} gün oldu.`);
console.log(`Video kayıt işlemi başlayalı ${year} yıl oldu.`);


const timeStamp = 164685465521;
console.log(new Date(timeStamp)); // timestamp verip tarih almak:  Sat Mar 22 1975 04:57:45 GMT+0300 (Türkiye Yaz Saati)