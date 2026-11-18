// DOM --> DOCUMENT OBJECT MANIPULATED

const section = document.createElement('section') // section tag'ı oluşur
section.innerText = "innerText ile oluşturulmuş içerik" // sadece içerik değişikliği
section.textContent += "textContent ile oluşturulmuş içerik" // sadece içerik değişikliği
section.innerHTML += "<b>innerHTML ile oluşturulmuş tag'lı içerik</b>" // güvenlik önlemsiz tag'lı içerik ekleme
console.log(section.outerHTML) // 
document.body.append(section) // section'u body'ye kaydetme


// XSS korumalı içerik ekleme
const policy = trustedTypes.createPolicy('contentPolicy', {
  createHTML: input => DOMPurify.sanitize(input)
})
const secureInput = policy.createHTML('<b>Merhaba</b>')



// HTML Çağırma
// querySelector ile tekil
let lead = document.querySelector('div.lead'), // ilk lead classlı div gelsin
    wrapper = document.querySelector('.wrapper'), // ilk wrapper classlı element gelsin
    container = document.querySelector('#container') // ilk container idli element gelsin

const mainChild = document.querySelector('main > *'); // main'in hemen altındaki ilk element


// SelectorAll -> Dizi döndürür
let allQuery = document.querySelectorAll('div');
console.log(allQuery);
console.log(allQuery[1]);


// HTML Collections -> Obje döndürür
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
section.style.backgroundColor="red"
section.style.color="white"
section.style.margin = '0';
section.style.textAlign = 'center';
section.style.padding = '50px';



// ATTRIBUTE
const link = document.querySelector('a'); // a tagını değişkene ata
link.textContent = 'Google link'; // içerik ekle
link.setAttribute('href', 'https://www.google.com.tr/'); // attribute ekle
link.setAttribute('class', 'google-link') // ettribute değiştir
console.log(link.getAttribute('href')); // attribute değeri çağır
link.removeAttribute("disabled") // attribute sil

// link'te attribute kontrolü
if(link.hasAttributes()){
  console.log(link.attributes)
}



// CLASSLIST
// html tagına class ekleme silme
section.classList.add("foo");
console.log(section.outerHTML)

console.log(section.classList.contains("foo")); // section'in foo diye class'ı varmı

section.classList.remove("foo");
console.log(section.outerHTML)

let i=0;
section.classList.toggle("visible", i < 10); // i<10 ise visible ekle varsa da sil


// toplu class ekleme, silme
section.classList.add("foo", "bar", "baz");
section.classList.remove("foo", "bar", "baz");


// spread operator ile dizidekileri class'a ekleme, silme
const cls = ["foo", "bar"];
section.classList.add(...cls);
section.classList.remove(...cls);


// replace ile class değiştirme
section.classList.replace("visible", "unvisible");



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