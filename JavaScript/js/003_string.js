let text = '  Hi, my name is İbrahim Karabulut my birthday is 01.01.2001   '

// sorguyu değişkenin içinde arar Boolean döndürür
console.log(text.includes('name'))


// değer uzunluğu Number olarak gösterir
console.log(text.length)


// değer sorgu ile mi başladı Boolean döndürür
console.log(text.startsWith('Hi'))


// değer sorgu ile mi bitti Boolean döndürür
console.log(text.endsWith('.'))


// sorgu ilk nerede kullandığını söyler Number döndürür
console.log(text.indexOf('is'))
console.log(text.search('is'))


// sorgu en son nerede kullandığını söyler Number döndürür
console.log(text.lastIndexOf('is'))


// girilen no'da ne olduğunu söyler
console.log(text.charAt(8))


// yazıyı büyük yada küçük hale çevirir
console.log(text.toUpperCase())
console.log(text.toLowerCase())

// yazıyı istenilen alfabeye göre büyük yada küçük hale çevirir
console.log(text.toLocaleUpperCase('tr'))
console.log(text.toLocaleLowerCase('tr'))


// değerden istenilen çıktı aralığı (başlangıç, bitiş)
console.log(text.substring(5,25))
console.log(text.slice(5,25))

// değerden istenilen çıktı aralığı (başlangıç, kaç adım sonrası)
console.log(text.substr(5,5))


// değişkende girilen değeri yeni değerle değiştirir
console.log(text.replace('name is', 'names'))


// değişkenin başı ve sonundaki boşlukları temizler
console.log(text.trim())


// değişkenin kaç kere basılacığını söyler
console.log(text.repeat(2))


// değişken tipini verir
console.log(typeof text)

// tip sorgusu için
console.log(typeof text === 'number')

// değişkeni String halde bastırır
console.log(text.toString())

// değişkenin değerini alır
console.log(text.valueOf(),"de")


// değişkenin değerini değiştirmek için
text = Boolean(text)
console.log(typeof text)
text = String(text)
console.log(typeof text)


// değişkeni nerelerden bölüp, parçalayıp diziye aktaracağını seçer
const textArr = text.split(' ')
console.log(textArr)

// dizi değişkenini istenilen değer ile birleştirip string hale getirir.
const textStr = textArr.join(' ');
console.log(textStr)