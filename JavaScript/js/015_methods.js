// METHODS

const students = [
	{name: 'Murat', point: 70, passed: false, support: false},
	{name: 'Fırat', point: 42, passed: false, support: false},
	{name: 'Serhat', point: 68, passed: false, support: false},
	{name: 'Levent', point: 89, passed: false, support: false},
	{name: 'Burak', point: 23, passed: false, support: false}
]

// FILTER sadece şartı sağlayanları süzer işlem yapar
const passedStudents = students.filter(index => {
  if(index['point'] >= 50) {
    index['passed'] = true
    return index
  }
})

// MAP hepsini dönüştürür üstünde işlem yapar
const allStudents = students.map(index => {
	if(index.point < 50) {
		index.point+=10
		index.support=true
		if(index.point >= 50) index.passed = true
    return index
	}else{
    return index
  }
})

console.log(students)
console.log(passedStudents)
console.log(allStudents)
console.log(students)


// REDUCE
// dizideki sayıları toplama, ortalama alma vs.
let stdLength = 0
const sumPoint = students.reduce((ave, index) => {
  stdLength++
  return ave+index.point
}, 0) / stdLength
console.log(sumPoint)


// koşula göre sayma
const passedStudent = students.reduce((sayac, index) => {
	if(index.point>=50) {
		return sayac++
	}
	return sayac
}, 0)
console.log(passedStudent)


// gruplama yapmak için
const passedGroup = students.reduce((group, student) => {
    const passed = student.passed;
    if (!group[passed]) {
        group[passed] = [];
    }
    group[passed].push(student);
    return group;
}, {});

console.log(passedGroup);


// iç içe dizileri birleştirme
const arrNums = [1,2,[2,5,5],5,[5,2,56,45]]
const flatArray = arrNums.reduce((acc,item) => {
  return acc.concat(item)
},[])
console.log(flatArray)


// FIND & FINDINDEX
const firstHighPoint = students.find(student => student.point > 75);
console.log(firstHighPoint);


const objectIndex = students.findIndex(student => student.name == 'Levent')
students[objectIndex].name = 'Bülent'
console.log(students)