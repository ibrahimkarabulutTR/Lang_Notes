// CONDITIONS

let note=85;

// IF
if(note >= 75) {
	console.log('İyi');
} else if(note >= 50) {
	console.log('Orta')
} else {
	console.log('Kötü');
}


// görev tek satırlık ise {} yazmadan da kullanılabilir
if(note >= 75) console.log('Good');
else if(note >= 50) console.log('Middle')
else console.log('Bad');


// kısa söz dizimi
let result = note >= 75 ? console.log('Good') : note >= 50 ? console.log('Middle') : console.log('Bad');


// && 2 değer de doğru olmalı
// || 2 değerden en az biri doğru olmalı
let x=0;
let y=1;
if(x==0 && y==1) {
	console.log('koşullar sağlandı');
} else if(x==1 || y==1) {
	console.log('en az 1 koşul sağlandı');
}

// sadece 18 ile 28 arasını bastır
for(let a=0; a<30; a++) {
	if(18<a<28) {
		console.log(a)
	} else {
		continue
	}
}

// koşul sağlanırsa çalışmayı reddeder
/*if(squares[i]) return*/


// Switch -> tek tek sorgu
let resultGraduate = 'AA';

switch(resultGraduate) {
	case 'AA':
		console.log('Value is AA');
		break;
	case 'BB':
		console.log('Value is BB');
		break;
	case 'CC':
		console.log('Value is CC');
		break;
	default:
		console.log('Undefined');
		break;
}



// Optional chaining ?.
const user = {
	name: 'Ali',
	address: {
		city: 'Ankara',
		street: 'Atatürk Caddesi'
	}
};

// const city = user.location.city; // istenen adres olmadığı için hata verir

// güvenli sorgu location varmı diye sorar
const city = user.location?.city; // cevap undefined döner
console.log(city); // undefined



// sadece 10 div görünsün diğerleri gizli kalsın örnek
for(let n=15; n<10; n--){
	div.classList.toggle("visible", i < 10) // ilk 10 öğe görünür olsun
}

let isWrong = true
isWrong && alert('Şifreni mi unuttun?'); // isWrong doğru ise şu işlemi çalıştır|yap


// eğer user.name null, undefined, 0 yada boş olduğunda çalışacak varsayılan değer
const userName = user.name || "Misafir";