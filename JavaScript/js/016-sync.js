// SYNCHRONOUS - CALL - THREAD

/* 
JavaScript tek iş parçacıklıdır (single-threaded) yani aynı anda sadece tek bir satır kod çalıştırabilir.
- Senkron (Synchronous): Kodlar yukarıdan aşağıya, sırayla çalışır. Bir satırdaki işlem bitmeden bir sonraki satıra geçilmez.
- Asenkron (Asynchronous): Zaman alabilecek işlemler (API istekleri, dosya okuma, süre aşımı vb.) arka plana atılır.
*/

// single thread sync
console.log('asking test 1)', 10>5)
console.log('asking test 2)', '5' == 5)
console.log('asking test 3)', '5' === 5)


// yürütme sırası call stack(çağrı yığını)
function UITest(){
	let test=true
	if(test) {
		console.log('runing UI test')
		CompileTest()
		console.log('UI & Compile test succesfully finished')
	}
}
function CompileTest(){
	let test=true
	if(test) {
		console.log('running Compile test')
	}
}

UITest()


// kod bir sonraki işleve atlamaz sabırla ve sırayla işlerin bitmesini bekler
function task(message) {
	let n = 100000
	while(n>0){
		n--
	}
	console.log(message)
}

console.log(1)

setTimeout(() => {
	console.log(2)
}, 1000)

task("n equal 0")

console.log(3)


// Call Back
const rate = () => console.log(' Do you want to rate our website ?')
setTimeout(rate, 10000)


// günlük hayat örnek kullanım
const books = [
  {name: "Savaş ve Barış",author: "Lev Tolstoy"},
  {name: "Suç ve Ceza",author: "Fyodor Dostoyevski"},
  {name: "Küçük Prens",author: "Antoine de Saint-Exupéry"},
  {name: "1984",author: "George Orwell"},
];

const listBook = () => {
	books.forEach((book, index) => {
		console.log(index, book.name, book.author)
	})
}

const addNewBook = (book, callBack) => {
	books.push(book)
	callBack()
}

addNewBook({name: "Yüz Yıllık Yalnızlık",author: "Gabriel García Márquez"}, listBook)