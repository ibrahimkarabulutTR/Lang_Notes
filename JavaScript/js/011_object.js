// OBJECT

// boş obje tanım
let styleObj = new Object()
let shortObj = {}


// 1.METOD
// objede anahtar için "" zorunluluğu yok
let user = new Object({
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

// PROPERTY --> Profile = Object inheritance(toString, ...) + Profile(name, surname, ...)



/* 
	objedeki değerleri this ile fonksiyonda kullanmak için prototype ile dışarıdan eklenmesi önerilir
	çünkü normal fonksiyonda veya obje içinde kullanılırsa aynı değer her seferinde yeniden üretilir
*/

// örnek this'li fonksyion kullanımı
profile.prototype.fullName = function() {
  return `{this.name} ${this.surname}`
};
// objeye fonksiyon dışarıdan da eklenebilir
profile.createRandomID = function() {
  return Math.trunc(Math.Random()*100)
};



// CONSTRUCTOR(obje üretici fonksiyon) -> new anahtarı obje oluşturur

// 1.Metod
function personConstructorFunc(name, surname, age) {
	const obj = {}
	obj.name = name
	obj.surname = surname
	obj.age = age
	return obj
}
const carpenterPerson = new personConstructorFunc("Abdullah", "Ökmen", "26")
console.log(carpenterPerson)



// 2.Metod -> THIS
function personConstructorThis(name, surname, age) {
	console.log(this) // herhangi bir değer yok
	this.name = name
	this.surname = surname
	this.age = age
	console.log(this) // değerleri gösterir
}

const doctorPerson = new personConstructorThis('Serhat', 'Tekik', 25)
console.log(doctorPerson)



// 3.Metod -> OBJECT CREATE
const objectCreatePerson = {
	name: "NULL",
	surname: "NULL",
	age: "NULL",
}


const armyPerson = Object.create(objectCreatePerson) // create ile yeni nesne oluşturmadan varolanı kopyalar bellek tasarrufu yapar
armyPerson.name = 'Mete'
armyPerson.surname = 'Yarar'
console.log(armyPerson)
console.log(armyPerson.name)
console.log(armyPerson.hasOwnProperty('name')) // armyPerson'un name özelliği kullanıldığı için var
console.log("name" in armyPerson) // armyPerson'un içinde kopyaladığı objeden dolayı name özelliği var


armyPerson.job = 'Soldier'
armyPerson.toString = function() {
	return 'METE'
}
console.log(armyPerson.toString())


console.log(Object.getPrototypeOf(armyPerson))
// armyPerson.property = Object inheritance + objectCreatePerson(name, surname, age) + armyPerson(job, toString)



// NEW OBJECT SYNTAX

// 1- Shorthand Properties
let firstName = 'Arin',
	lastName = 'Demir',
	age = 20

const normObject = {
	firstName: firstName,
	lastName: lastName,
	age: age
}

const shortObject = {
	firstName,
	lastName,
	age
}

console.log(normObject.name)
console.log(shortObject.age)



// 2- Computed Property Names
let comProp = 'name'
let myObj1 = {
	[comProp]: 'Arin'
}
console.log(myObj1)


// 3- Object Destructuring
let {name: profileName, surname: profileSurname} = profile
console.log(profileName, profileSurname)

let {name, surname} = profile
console.log(name, surname)


for(const {name, job} of profile.employee){
	console.log(`${name} --> ${job}`)
}


// 4- Spread ile objeyi seçme ve atama (...)
const personCopy = {...profile}
console.log(personCopy)


// Obje birleştirme
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
const {title, ...details} = profile
console.log(title)
console.log(details)


// 7- Object (keys, values, entries)
console.log(Object.keys(profile))
console.log(Object.values(profile))
console.log(Object.entries(profile))



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