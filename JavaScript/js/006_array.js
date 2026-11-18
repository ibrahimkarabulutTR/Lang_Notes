// ARRAY

// boş dizi tanım
let list = new Array()
let shortList = []


 // 9'lu dizi oluştur değerleri null olsun
let nullList = new Array(9).fill(null)


// 1. Metod
let cars = ['TOGG', 'BYD', 'Cherry', 'Tesla']


// 2. Metod
let phone = new Array('Apple', 'Samsung', 'Xiaomi', 'Huawei')

console.log(cars[0], cars[1], cars[2])
console.log(cars[cars.length - 1]) // sonuncuyu bastırır


const ul = document.createElement('ul')
document.body.append(ul)
cars.forEach(item => {
	ul.innerHTML += "<li>"+item+"</li>"
})


// dizide seçilen bölümü değiştir
cars[2] = 'Devrim'


// dizide sorgu varmı Boolean döndürür
console.log(cars.includes('BYD'))

// sorgu ilk nerede kullanıldı
console.log(cars.indexOf('Toyota'))


// dizi uzunluğunu Number döndürür
console.log(cars.length)


// dizi sonuna eleman ekler
cars.push('Amperino')
cars[cars.length] = "Volkswagen";

// concat veriyi değiştirmez anlık manipule eder
console.log(cars.concat('Devrim'))
cars = cars.concat('Zeekr')


// dizi sonundaki elemanı siler
cars.pop()


// dizi başına eleman ekler
cars.unshift('Toyota')


// dizi başındaki elemanı siler
cars.shift()


// dizi elemanlarının arasına girilen değer ile birleştirip String yapar
let carCatalog = cars.join(', ')
console.log(carCatalog)


// String'i, girilen değer yerlerinden parçalar diziye atar
let carCatalogString = carCatalog.split(', ') 
console.log(carCatalogString)


console.log(cars.sort()) // diziyi küçükten büyüğe olacak şekilde değiştirir
console.log(cars) // değişmiş dizi

console.log(cars.reverse()) // diziyi büyükten küçüğe olacak şekilde değiştirir
console.log(cars) // değişmiş dizi

console.log(cars.toSorted()) // diziyi küçükten büyüğe geçici sıralar
console.log(cars) // orjinal dizide değişme yok

console.log(cars.toReversed()) // diziyi büyükten küçüğe geçici sıralar
console.log(cars) // orjinal dizide değişme yok