// CLOSURE
function sayac() {
  let sayac = 0; // Bu değişken gizli backpack'te tutulur

  function mekanizma() {
    sayac++; // üst soydaki sayac'a erişir
    console.log(sayac);
  }

  return mekanizma; // iç fonksiyon dışa geri döner
}

const btnSayac = sayac(); // dış fonksiyon invoke edilir
// bundan sonraki çalıştırmalarda içteki fonksiyon invoke edilir
btnSayac(); // Çıktı: 1
btnSayac(); // Çıktı: 2
btnSayac(); // Çıktı: 3



// günlük hayattan örnek
function alisverisSepeti() {
	let urunler = []
	function sepeteEkle(urun) {
		urunler.push(urun)
		console.log(`${urun.ad} sepete eklendi.`)
	}
	function sepetiGoster() {
		console.log('Sepetinizdeki ürünler:', urunler)
	}
	return {
		ekle: sepeteEkle,
		goster: sepetiGoster
	}
}

const sepetim = alisverisSepeti()
sepetim.ekle({ ad: 'Monster', fiyat: '19.000' })
sepetim.ekle({ ad: 'Lenovo', fiyat: '25.000' })
sepetim.goster()
console.log(sepetim.urunler)


// günlük hayat örnek 2
const button = document.createElement('button')
button.innerText="Buraya Tıkla"
document.body.append(button)
function btn() {
  let i=0;
  button.innerText = `${i} kez tıklandı`
  button.addEventListener('click', function() {
    i++
    button.innerText = `${i} kez tıklandı`
  });
}

btn()