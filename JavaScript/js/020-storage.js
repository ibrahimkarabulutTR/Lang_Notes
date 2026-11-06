// STORAGE (LOCAL & SESSION)

/*
	localStorage (pc ye kaydeder pencere kapansa dahi kayıtlı kalır)
	sessionStorage (pencere kapanınca kayıtlar silinir)
	setItem() değişken tanımlar
	getItem() değişken çağırır
	removeItem() değişkeni siler
	key() numara ile değişken çağırır
	clear() localdeki yada oturumdaki kayıları siler
*/

// xStorage.setItem('key', 'value')
localStorage.setItem('mode','dark')
sessionStorage.setItem('logged','true')

// xStorage.getItem('key')
localStorage.getItem('mode')
sessionStorage.getItem('logged')

// xStorage.key(0)
console.log(localStorage.key(0))
console.log(sessionStorage.key(0))

// xStorage.removeItem('key')
console.log(sessionStorage.removeItem('name'))
console.log(sessionStorage.getItem('name'))

// xStorage.clear()
localStorage.clear();
sessionStorage.clear();