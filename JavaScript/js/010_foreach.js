// FOREACH

const a = callBackA => {
	let age = 24
	callBackA(age)
}

a(function(value){
	console.log(value)
})



let student = ['Ahmet', 'Mehmet', 'Mahmut']

// student dizi uzunluğu kadar Hi yazdır
student.forEach(() => {
	console.log('Hi')
})



// person= öğrenci adı, id= sıra numarası sıra ile alakalı ilki değeri ikincisi sıra no verir
student.forEach(function(person, id) {
	console.log(`${id}: ${person}`);
})



// dışarıdan fonksiyon çağırma
const print = function(person, id) {
	console.log(`${id}: ${person}`);
}
student.forEach(print);



// Foreach örnek
let menu =  ['Home', 'About', 'Gallery', 'Contact'];
const ul = document.querySelector('ul');
menu.forEach(function(item){
	ul.innerHTML += '<li>'+item+'</li>';
})