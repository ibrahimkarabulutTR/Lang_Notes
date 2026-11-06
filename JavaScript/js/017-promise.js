// PROMISE

/* promise işlemin olumlu yada olumsuz bir sonuç döndüreceğine hatasız kod çalışacağına dair söz verir.
thraddan çıkartılır yeni sıralama da ilk kimin işi biterse onu sıraya alır
Promise Durumları
-Pending (undefined)
-Pending (fullfilled)
-Rejected (promise state)
*/

let data = ['Ali', 'Bülent', 'Murat']

// resolve olumlu, reject olumsuz cevap
const searchData = new Promise((resolve, reject) => {
	if(data && data.length>0) {
		if(data.length>5) {
			resolve(data)
		}else{
			resolve('eksik data geldi')
		}
	}else{
		reject('data gelmedi hata kodu: 404')
	}
})
console.log(searchData) // promise objesi gelir

// METOD 1
searchData
	.then((sonuc) => {
		console.log('Başarılı: '+sonuc)
	})
	.catch((hata) => {
		console.log('Başarısız: '+hata)
	})
	.finally(() => {
		console.log("İşlem Tamamlandı")
	})

// METOD 2
searchData.then(
	() => {console.log('Veriler Alındı.')},
	() => {console.log('Veriler Alınamadı.')}
)


// sync günlük hayat kullanmı örnek promise reuse
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

const addNewBook = book => {
	return new Promise((resolve, reject) => {
		books.push(book)
		resolve(books)
		reject('hata')
	})
}
addNewBook({name: "Yüz Yıllık Yalnızlık", author: "Gabriel García Márquez"})
  .then(() => {
  	console.log('Kitap Eklendi')
  	listBook()
  })
  .catch((message) => {
  	console.log(message)
  })