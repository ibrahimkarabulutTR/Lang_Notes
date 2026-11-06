// ARRAY

// 1. Method
let cars = ['TOGG', 'BYD', 'Cherry', 'Tesla']
// 2. Method
let phone = new Array('Apple', 'Samsung', 'Xiaomi', 'Huawei')

console.log(cars[0], cars[1], cars[2])
console.log(cars[cars.length - 1])

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
cars = cars.concat('Zeekr')
cars[cars.length] = "Volkswagen";

// dizi sonundaki elemanı siler
cars.pop()

// dizi başına eleman ekler
cars.unshift('Toyota')

// dizi başındaki elemanı siler
cars.shift()


// dizi elemanlarının arasına girilen değer ile birleştirip String yapar
let carCatalog = cars.join(', ')
console.log(carCatalog)

let carCatalogString = carCatalog.split(', ') // Stringi girilen değer yerlerinden parçalar diziye atar
console.log(carCatalogString)



console.log(cars.sort()) // diziyi küçükten büyüğe sıralar orjinal dosyayı değiştirir
console.log(cars) // değişmiş dizi

console.log(cars.reverse()) // diziyi büyükten küçüğe sıralar orjinal dosyayı değiştirir
console.log(cars) // değişmiş dizi

console.log(cars.toSorted()) // diziyi büyükten küçüğe sıralar orjinal dosyayı değiştirmez
console.log(cars) // orjinal dizide değişme yok

console.log(cars.toReversed()) // diziyi küçükten büyüğe sıralar orjinal dosyayı değiştirmez
console.log(cars) // orjinal dizide değişme yok