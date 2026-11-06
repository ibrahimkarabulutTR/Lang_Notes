// MODULES -> import(ithalat) = dışarıdan çağırma, export(ihracat) = dışarıya gönderme

// diziyi dışarı çıkartma
export let months = ['Jan', 'Feb', 'Mar', 'Apr', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

// Diziyi dışarıdan(başka sayfadan) çağırmak için
/* 
	import { months } from 'modules.js'
	console.log(months) 
*/


// Class'ı dışarı çıkartma
export class User {
  constructor(name) {
    this.name = name;
  }
}

/* 
	import { User } from 'modules.js'
	const user1 = new User('Alice')
	console.log(user1.name) // Alice 
*/


// Fonksiyonları tanımlayıp sonradan dışarı gönderme
function sayHello(user) {
  alert(`Hello, ${user}!`);
}
function sayGoodbye(user) {
  alert(`Goodbye, ${user}!`);
}

export { sayHello, sayGoodbye } // Toplu gönderme
export { sayHello as greet, sayGoodbye as farewell } // Takma ad ile gönderme 


// Çağırma yöntemleri
// import { sayHello, sayGoodbye } from 'modules.js' // KLASİK
// Kullanım
/* sayHello('John');   // Alerts: Hello, John!
sayGoodbye('John'); // Alerts: Goodbye, John! */


// Obje Haline Alma
/* import * as myModule from 'modules.js';
myModule.sayHello('Namespace User'); // Alerts: Hello, Namespace User! */


// Takma İsim ile Alma
/* import { sayHello as greet, sayGoodbye as farewell } from 'modules.js' */



// Varsayılan Gönderme
/* 
	export default ['Apple', 'Banana', 'Cherry', 'Date'];
	// Varsayılanda ismi çağırırken verirsin
	import defaultFruits from 'modules.js';
	console.table(defaultFruits); // ['Apple', 'Banana', ...] 
*/


// İsim Altında İmport
/* 
	import * as moduleWithDefault from 'modules.js';
	console.log(moduleWithDefault.default); // ['Apple', 'Banana', ...] 
*/


// İsimsiz Varsayılan Class
export default class {
  constructor() { console.log("Default unnamed class instantiated."); }
}

/*
	import MyUnnamedClass from 'modules.js';
	const obj = new MyUnnamedClass(); 
*/


// İsimsiz Fonksiyon
function defaultGreeting(user) {
  alert(`Default greeting: Welcome, ${user}!`);
}
export { defaultGreeting as default }

/*
	import greeting from 'modules.js';
	greeting('Bob'); // Alerts: Default greeting: Welcome, Bob! 
*/


// Varsayılan ile toplu gönderim
export default class MainUser { // varsayılan modül
  constructor(name) {
    this.name = name;
  }
}
export function utilityFunction() { // isimli fonksiyon
  console.log("Utility function called.");
}
/*
	import { default as MainUser, utilityFunction } from 'modules.js';
	const user = new MainUser('Grace');
	utilityFunction(); 
*/