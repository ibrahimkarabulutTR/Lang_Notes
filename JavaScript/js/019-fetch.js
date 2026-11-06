// FETCH

const baseURL = 'https://jsonplaceholder.typicode.com'

// en sade biçimle fetch
/* fetch(`${baseURL}/todos/1`)
.then(response => {
	console.log(response)
	if(!response.ok) throw new Error(`HTTP hatası' Durum: ${response.status}`)
		return response.json() // json'u objeye çevir geri döndür
})
.then(data => {
	console.log('veri başarıyla alındı')
	console.log(data)
})
.catch(error => {
	console.log(error)
})
.finally(() => console.log('işlem sorunsuz tamamlandı')) */


// CRUD WITH FETCH()
// --> POST 
async function addTodo() {
	const newTodo = {
		userId: 1,
		title: 'I added new todo',
		completed: false
	}

	try {
		const response = await fetch(`${baseURL}/posts`, {
			method: 'POST',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify(newTodo)
		})
		if(!response.ok) {
			throw new Error(`HTTP Hatası! Durum: ${response.status}`)
		}
		const addingInput = await response.json()
		console.log('sunucuya başarıyla eklendi')
		console.log('eklenen veri: ', addingInput)
	} catch(error) {
		console.error("Veri gönderilirken hata:", error);
	} finally {
		console.log('işlem sorunsuz tamamlandı')
	}
}

addTodo()


// --> Read GET
async function readPost(){
	try{
		const response = await fetch(`${baseURL}/posts`, {
			method: 'GET'
		})

		if(!response.ok) throw new Error(`HTTP hatası kata kodu: ${response.status}`)

		const posts = await response.json()
		console.log('Başarıyla Getirildi:', posts.slice(0,5));
		return posts
	} catch(error) {
		console.error('Gönderi oluşturulurken hata oluştu:', error);
	}
}
readPost()


// GET istenilen id
async function getPostId(postId){
	try{
		const response = await fetch(`${baseURL}/posts/${postId}`)

		if(!response.ok) throw new Error(`HTTP hatası kata kodu: ${response.status}`)

		const post = await response.json()
		console.log('Başarıyla Getirildi:', post)
		return post
	} catch(error) {
		console.error('Gönderi oluşturulurken hata oluştu:', error);
	}
}
getPostId(10)


// PUT tüm data değişir PATCH özel yerler değişir
const postData = {userId: 31,	title: 'I added new todom'}

async function patchData(postId, postData){
	try{
		const response = await fetch(`${baseURL}/posts/${postId}`,{
			method: 'PATCH',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify(postData)
		})

		if(!response.ok) throw new Error(`HTTP hatası kata kodu: ${response.status}`)

		const updatedPost = await response.json()
		console.log('Başarıyla Güncellendi:', updatedPost)
		return updatedPost
	} catch(error) {
		console.error('Gönderi oluşturulurken hata oluştu:', error);
	}
}
patchData(10, postData)


// --> DELETE 
async function deleteData(postId){
	try{
		const response = await fetch(`${baseURL}/posts/${postId}`,{
			method: 'DELETE'
		})

		if(!response.ok) throw new Error(`HTTP hatası kata kodu: ${response.status}`)

		const deletedPost = await response.json()
		console.log('Başarıyla Silindi id:', postId, deletedPost)
		return deletedPost
	} catch(error) {
		console.error('Gönderi oluşturulurken hata oluştu:', error);
	}
}
deleteData(10)