// CONDITIONS

let note=85;

// IF
if(note >= 75) {
	console.log('Good');
} else if(note >= 50) {
	console.log('Middle')
} else {
	console.log('Bad');
}


// görev tek satırlık ise {} yazmadan da kullanılabilir
if(note >= 75) console.log('Good');
else if(note >= 50) console.log('Middle')
else console.log('Bad');


// diğer metod
let result = note >= 75 ? console.log('Good') : note >= 50 ? console.log('Middle') : console.log('Bad');


// && 2 değer de doğru olmalı
// || 2 değerden en az biri doğru olmalı
let x=0;
let y=1;
if(x==0 && y==1) {
	console.log('all conditions are true');
} else if(x==1 || y==1) {
	console.log('1 of true 1 of false');
}

// sadece 18 ile 28 arasını bastır
for(let a=0; a<30; a++) {
	if(18<a<28) {
		console.log(a)
	} else {
		continue
	}
}



// Switch
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



// ekstra taktikler
let i = 5
div.classList.toggle("visible", i < 10) // eğer i 10'dan küçükse toggle çalıştır


// sadece 10 div görünsün diğerleri gizli kalsın örnek
for(let n=15; n<10; n--){
	div.classList.toggle("visible", i < 10) // ilk 10 öğre için geçerli süreç
}


isAdmin && deleteUser(userId); // isAdmin doğru ise deleteUser() çalıştırır


// eğer settings.user null, undefined, 0 yada boş olduğunda çalışacak varsayılan değer
const userName = settings.user || "Misafir";