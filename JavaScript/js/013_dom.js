// DOM --> DOCUMENT OBJECT MANIPULATED

let lead = document.querySelector('div.lead'),
    wrapper = document.querySelector('.wrapper'),
    container = document.querySelector('#container')

lead.innerHTML += '<p>This is a paragraph of div</p>'; // html müdahelesi yapabilirsin
lead.innerText += 'add word with innerText'; // sadece içerik değiştirir kodları da düz yazı olarak yazar
console.log(lead);


const mainChild = document.querySelector('main > *'); // sadece main'in altındakiler gelsin


// toplu çağırmalar cevap olarak dizi döndürür
let allQuery = document.querySelectorAll('div');
console.log(allQuery);
console.log(allQuery[1]);


// HTML Collections -> OBJECT
let paragraph = document.getElementsByTagName('p');
console.log(paragraph);

let wrapper2 = document.getElementsByClassName('wrapper');
console.log(wrapper2[0]);

for(let item of wrapper2) {
  console.log(item);
}

let allDivide = document.querySelectorAll('div');
allDivide.forEach(divide => {
  console.log(divide.innerText);
})


// Prank Code -> document.body.innerText = document.querySelector('html').innerHTML


// JS de CSS düzenleme
lead.style.backgroundColor="red"
lead.style.color="white"
lead.style.margin = '0';
lead.style.textAlign = 'center';
lead.style.padding = '50px';



// ATTRIBUTE
const link = document.querySelector('a');
console.log(link);

link.textContent = 'Google link';
link.setAttribute('href', 'https://www.google.com.tr/');

console.log(link.getAttribute('href'));
link.setAttribute('class', 'google-link')

// link değişkenindeki tag'da attribute varmı
if(link.hasAttributes()){
  console.log(link.attributes)
}



// CLASSLIST
const div = document.createElement('div')
console.log(div.outerHTML) // html elementini en kapsayıcı şekilde yazdırır


// html tagına class ekleme silme
div.classList.add("foo");
console.log(div.outerHTML)

console.log(div.classList.contains("foo")); // div'in foo diye class'ı varmı

div.classList.remove("foo");
console.log(div.outerHTML)

let i=0;
div.classList.toggle("visible", i < 10); // i<10 ise visible ekle varsa da sil


// toplu class ekleme, silme
div.classList.add("foo", "bar", "baz");
div.classList.remove("foo", "bar", "baz");


// spread operator ile dizidekileri class'a ekleme, silme
const cls = ["foo", "bar"];
div.classList.add(...cls);
div.classList.remove(...cls);


// replace ile class değiştirme
div.classList.replace("visible", "unvisible");



// PARENT & CHILD
const main  = document.querySelector('main');
console.log(main.children);

// 1.METOD
for(let item of main.children) {
  console.log(item);
}

// 2.METOD
Array.from(main.children).forEach(item => {
  item.classList.add('foreach-class');
})

const head = document.querySelector('h1');
console.log(head.parentElement);
console.log(head.nextElementSibling);
console.log(head.previousElementSibling);