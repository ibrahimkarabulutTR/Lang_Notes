// ASYNC AWAIT

/* async eklemek demek bu işlemi bekleme sonraki işlemlere geç demek bunlara ayrı bir sıralama açılır
yeni sıralama da ilk kimin işi biterse onun cevabı döner*/
async function asyncFunction() {
	return 'Merhaba'
}
asyncFunction
	.then(result => console.log(result))
	.catch(message => console.log(message))


console.log('deneme 1') // sonra yazılmasına rağmen ilk işleme alınır


// promise olduğu için threaddan çıkartılır
function getPerson(){
	return new Promise((resolve, reject) => {
		console.log('işlem başlatılıyor...')
		setTimeout(() => {
			console.log('kullanıcı bilgisi getirildi')
			resolve({id: 1, name: 'Rıdvan Çelik'})
		}, 2000)
	})
}

getPerson()
	.then(person => {
		console.log('no: ',person.id)
		console.log('kullanıcı: ',person.name)
	})
	.catch(e => console.log(e))
	.finally(() => console.log('işlem sorunsuz tamamlandı'))

// async ve promise kullanımı
function promiseGetPerson(){
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log('promise kullanıcı bilgisi getirildi')
			resolve({id: 1, name: 'Rıdvan Çelik (promised)'})
		}, 2000)
	})
}

async function executePerson(){
	try {
		console.log('Promise işlem başlatılıyor...')
		const person = await promiseGetPerson()
		console.log('no: ',person.id)
		console.log('kullanıcı: ',person.name)
	}catch(e){
		consol.log(e)
	}finally{
		console.log('işlem tamamlandı')
	}
}
executePerson()