// VARIABLES -> VAR, LET, CONST

// VAR -> Global Scope, Functional Scope, Hoisting, lokal & global farkı, değiştirilebilir
var person = 'İbrahim'
person = 'Halil İbrahim'
console.log(person) // değişkeni bastırmak için


var nick // değiştirilebilir olduğu için değersiz tanımlanabilir


function returnVarPerson1() {
	console.log(person) // dışarıdaki değer içeride çağrılabilir
	person = "Halil İbrahim Karabulut" // değiştirdiğimiz değişken global olduğu için orjinal değeri bundan sonra değiştirir
	console.log(person)
}
returnVarPerson1() 
console.log(person) // içerideki değişiklik globale yansır


function returnVarPerson2() {
	// aynı değişken içeride tanımlanırsa çağırdığında öncelik lokaldeki değişkenin
	console.log(person) // var değişkeni hoisted'dir tanımdan önce çağrılabilir ama undefined hatası verir
	var person = 'Ahmet' // lokal > globalden baskın
	console.log(person) // içerideki değer gelir
	console.log(window.person) // değer dışarıda tanımlandığı için globaldir ve global olan window objesine yazılmıştır
}
returnVarPerson2()
console.log(person) // globaldeki değişken değişime uğramaz

// NOT: var functional scope yani bir fonksiyonun dışına çıkamaz ama miras bırakır geri kalan if, for vs. var'ı kısıtlamaz




// LET -> Block Scope, lokal & global farkı, değiştirilebilir
let profile = 'Muhammed'
profile = 'Muhammed Emin'
console.log(profile)


let nickname // değiştirilebilir olduğu için değersiz tanımlanabilir


function returnLetPeople1() {
	console.log(profile) // dışarıdaki değer içeride çağrılabilir
	profile = 'Muhammedül Emin' // değiştirdiğimiz değişken global olduğu için orjinal değeri bundan sonra değiştirir
	console.log(profile)
}
returnLetPeople1()
console.log(profile) // içerideki değişiklik globale yansır


function returnLetPerson2() {
	// console.log(profile) // lokalde aynı değişken olduğu için globalden değer gelmez, hoisted olmadığı için hata verir
	let profile = 'Mehmet' // aynı değişken içeride tanımlanırsa dışarıdaki kullanılmaz
	console.log(profile) // içerideki değer gelir
}
returnLetPerson2()
console.log(profile) // globaldeki değişken değişime uğramaz

// NOT: let için her {} sınırdır ve bu sınırın dışına çıkamaz ama miras bırakır



// CONST -> Blockscope, lokal & global farkı, değiştirilemez
// const birthDay gibi değersiz tanımlanmaz
const birthDay = '01.01.2001'
// birthDay = '01.01.2000' hata verir


const passwd = 'rg68ew9g4tr5g69rth'
let salt = ['!+&(+', '?&/()=&%']

// const değiştirilemez ama manipüle edilebilir
console.log(passwd.concat(...salt))


// dizi ve objelerin içeriğini değiştirebiliriz çünkü yapıyı değiştirmiyoruz
const points = [25, 56, 69]
points.pop()
points.push(85)
console.log(points)

const profile = {
	name: 'İbrahim Karabulut',
	lang: ['TR', 'EN']
}
profile.lang.push("DE")
console.log(profile)
Object.freeze(profile) // objelerde değişikliği durdurmak için



// çoklu değişken tanımlama
let kindergarten = false,
		primaryEducation = true,
		secondarySchool = true,
		highSchool = true,
		university = true
		


// çıktıyı + ile bağlarsan arasına boşluk ekler
console.log('1) Hello my name is '+personName+' and my birthday is '+birthDay)

// , ile bağlarsan boşluk eklemez
console.log('2) Hello my name is',personName,'and my birthday is',birthDay)

// metin içinde çağırma
console.log(`3) Hello my name is ${personName} and my birthday is ${birthDay}`)