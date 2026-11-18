// FUNCTIONS

// Function Declaration -> Hoisted -> this atadan miras alır
function printText() {
	console.log('Hello World')
}
printText() // () invoke etmek çalıştırmak


// parametreli fonksiyon
function printName(name, surname) {
	console.log(name, surname)
}
printName('İbrahim','Karabulut') // parametrelere argüman ekleme


// varsayılan parametreli fonksiyon argüman girmeden çağrılabilir
function defaultPrinter(name='name', surname='surname'){
	console.log(name, surname);
}
defaultPrinter('İbrahim');


// Function return
const plus = function(x,y) {
	return x+y;
}
console.log(plus(5,10));


// First Class Function Expression -> fonksiyon ismi isteğe bağlıdır -> this atadan miras alır
// const fcLogger = function logger(value) // looger isteğe bağlı bir işi yok
const fcLogger = function(value) {
	console.log(value)
}
fcLogger('Hi arrow function')


// Arrow Function Expression -> this mirası ilk ata fonksiyondan alır
const arrowLogger = value => {
	console.log(value)
}
arrowLogger('Hi arrow function')

// tek satırlık arrow fonksiyon
const area1 = (value) => console.log(value);


// arrow fonksiyona this atama
function response(status, server) {
  console.log(`Merhaba ${this.names}, durum: ${status}, sunucu: ${server}`);
}

const person = {
	name: "İbrahim"
}

selamVer.call(person, "Aktif", "Faal") // call da this objesi hariç argümanlar ayrı ayrı yazılır
selamVer.apply(person, ["Aktif", "Faal"]) // apply da this objesi hariç argümanlar dizi içinde yazılır
selamVer.bind(person, "Aktif", "Faal")() // bind da this objesi hariç argümanlar ayrı ayrı yazılır hemen çalıştırmak için ()
const selamFunc = selamVer.bind(person, "Aktif", "Faal") // atama yapılır sonra kullanmak için
selamFunc()
const selamFunc1 = selamVer.bind(person, "Aktif") // kısmi uygulama
selamFunc("Faal")
// bilgileriSoyle.bind(araba, ...ozellikler); // özellikler dizisini tek tek bind a ekleyip çalıştırmak için


// setTimeout gibi fonksiyonlar global metodlardır bundan dolayı globaldir
const elis = {
	func: function(){
		console.log(this === elis)
		setTimeout(function() {
			console.log(this === elis)
			console.log(this === window)
		}, 2000)
	}
}
elis.func()



// Function with method
let username = 'İbrahim'
const bigNamePrint = () => username.toUpperCase();
console.log(bigNamePrint());


// fonksiyonlar onclick vs ile html de çağrılabilir


// fonksiyonda fonksiyon istenebilir yada çağrılabilir
const addFive = function (num, func){
	console.log(num + func())
}
addFive(10, function(){return 5})
console.log(addFive.length) /* kaç tane parametresi olduğunu söyler */


// iç içe yada return edilen fonksiyon
const myFunc = function (num) {
	return function toDouble(){
		console.log(num * 2)
	}
}
myFunc(2)() // ilk fonksiyon argüman istemiş

const result = myFunc(4)
result()


/* IIFE immediately invocable function expression */
console.log(20 + (function (){return 10})());

// eğer üst üste fonksiyon invoke edeceksen sonuncu hariç diğerilerinin sonuna ; eklenmeli

// IIFE (immediately invocable function expression)
const sum = function () {
	console.log(5 + 12)
}();

(function() {
	console.log(5 + 12)
})();