// değişken true(doğru) yada false(yanlış) döndürür
let answer = true;
answer = false;
console.log(answer);


let email = "job.ibrahimkarabulut@gmail.com";

// değişken değer ile mi başladı
console.log(email.startsWith('j'))

// değişkende girilen sorgu varmı Boolean döndürür
let query = email.includes("@");
console.log(query);

let names = ["Ahmet", "Mehmet", "Mahmut"];
let query2 = names.includes("A");
console.log(query2);


// Koşullar
let age = 23;
console.log(age == 23);
// === değişken tipi de dahil eşit mi
console.log(age === "25"); 
console.log(age !=  23);
console.log(age <   23);
console.log(age <=  23);
console.log(age >   23);
console.log(age >=  23);
// değer aynı tip farklı yada tip aynı değer farklı
console.log(age !== "25");
console.log(age !== 24); 


let noun = "Ahmet";
console.log(noun == "Ahmet");
console.log(noun == "ahmet");
console.log(noun <  "ahmet");
console.log(noun >  "Mahmut");

let boolean  = Boolean("");   // false çünkü boş
let boolean1 = Boolean("a"); // True çünkü değer var
let boolean2 = Boolean(0);   // False çünkü değer 0
let boolean3 = Boolean(1);   // True çünkü değer 1
console.log(boolean, boolean1, boolean2, boolean3);