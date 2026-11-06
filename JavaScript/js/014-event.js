// EVENT

// Fare eventleri
let div = document.createElement("div")
div.innerText = "Hello Event"
document.body.append(div)

div.addEventListener("click", () => { console.log("Tıklandı!"); }); // tıklama ile çalışır
div.addEventListener("dblclick", () => { console.log("Çift Tıklandı!"); }); // çift tıklama ile çalışır
div.addEventListener("mouseenter", () => { console.log("mouse divin üstünde"); }); // üstüne gelince çalışır
div.addEventListener("mouseleave", () => { console.log("mouse divden ayrıldı"); }); // mouse divin üstünden gidince çalışır
div.addEventListener("mousemove", () => { console.log("mouse hareket ediyor"); }); // mouse hareket edince çalışır

// event bubbling(olay kabacıklanması): div içindeki buton tıklanınca hem div hem buton eventi tetiklenir
// önlemek için e.stopPropagation() kullanılır


// Klavye eventleri
// tuşa basıldığında çalışır
document.addEventListener("keydown", (e) => {
    if (e.target.code === "Enter") { // target (tıklanan, tetiklenen)
        console.log("Enter tuşuna basıldı!");
    }else if(e.code === "keyW") {
			console.log("w tuşuna basıldı")
		}
});

// tuşu bırakınca çalışır
document.addEventListener("keyup", (e) => {...});


// Form eventleri
/*
	- submit: form gönderildiğinde çalışır sayfa varsayılanını işlevleri engelemek için e.preventDefault()
	- input: input ve textarea içi her değiştiğinde çalışır (arama çubukları için önerilir)
	- change: input değeri değiştiğinde çalışır
	- focus: input tıklandığında(odaklandığında) çalışır
	- blur: inputtan çıkınca (odak kaybolunca) çalışır
*/


// Pencere ve Sayfa eventleri
/*
	- DOMContentLoaded: html belgesi yüklenip iskelet oluşunca çalışır görseller vs beklenmez(en güvenli başlangıç seçeneği)
	- load: tüm dosyalar tam yüklendiğinde çalışır
	- resize: tarayıcı pencere boyutu değiştiğinde çalışır
	- scroll: sayfa veya bir kutu kaydırıldığında çalışır (Infinite scroll veya "yukarı çık" butonu için kullanılır).
*/