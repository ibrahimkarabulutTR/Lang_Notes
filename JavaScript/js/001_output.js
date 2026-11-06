// OUTPUT

// Ekrana çıktı verir
document.write('Hello World');


// JS DOM ve toplu değişken tanımlama
let p_html 		= document.querySelector('p#p-inner-html'),
		p_text 		= document.querySelector('#p-inner-text'),
		p_content = document.querySelector('#p-text-content')


// DOM ile HTML müdahele
p_html.innerHTML = '<h1>Hello World</h1>'
p_text.innerText = '<small>Text with html code</small>'
p_content.textContent ='Only text'


// Ekrana bildirim verir
alert('Hello Alert')
window.alert('Window Alert')


// * Bildirimden input alır
let isim = prompt("Adınız nedir?", "Misafir");


// Konsolda çıktı verir
console.log('Hello Console')
console.log(isim) // değişkeni konsolda yazar
console.error('404 not found')
console.table(['apple', 'juicy', 'watermelon', 'strawberry'])
// ...