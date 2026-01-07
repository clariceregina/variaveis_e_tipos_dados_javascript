// variables var (deprecated), let and const

var name  = 'Joyce'
let age  = 52
const city  = 'São Paulo'

// user input

let inputName  = prompt('What is your name?')
console.log(inputName)

// 'ok'/'cancel' dialogue box

let response  = confirm('Do you want to continue?')
console.log(response) // return true or false

// alert message to users

alert('Welcome to the site!')

// string concatenation

const name2 = 'Yellow'
const greeting = 'Nice to meet you, ' + name2 + '!'
console.log(greeting)

// template literals
const name3 = 'Bruce'
const greeting2 = `Nice to meet you, ${name3}!`
console.log(greeting2)

// number type
let number1 = 6
let number2 = 5.5
console.log(number1 + number2)

// boolean type
const variableTrue = true
const variableFalse = false
console.log(variableTrue, variableFalse)

// null type
let responseNull = null
console.log(responseNull)

// undefined type
let undefinedType
console.log(undefinedType)

// data type (typeof)
let data = true
console.log(typeof data)

// length string propertie
let size = 'word'
console.log(size.length)

// charAt string method - find characters index in a string
let characters = 'world cup'
console.log(characters.charAt(3))

// array type
let fruits = ['mango', 'banana', 'apple']
console.log(fruits)

// array indexes
let shopList = ['bag', 't-shirt', 'hat']

console.log(shopList)

console.log(shopList[0])

console.log(shopList.length)

shopList[1] = 'sunglasses'
console.log(shopList)

shopList[shopList.length] = 'shoes' // add element in the end
console.log(shopList)

// objects

const car = {
	carBrand: 'Toyota',
	model: 'Corolla',
	year: 2020
}
console.log(typeof car)
console.log(car)

// adding properties to an empty object

const car2 = {}
car2.carBrand = 'Volkswagen'
car2.model = 'Gol'
car2.year = 2019
console.log(car2)

// adding variables to an empty object using short sintaxe, hiding the value when key-value have the same name

const title = 'The second sex'
const author = 'Simone de Beauvoir'
const year = 1949
const book = {
	title,
	author,
	year
}
console.log(book)

// accessing an object property using dot notation
const person = {
	firstName: 'Ameli',
	lastName: 'Andrew',
	age: 25
}
console.log(person.firstName)

// accessing an object property using bracket notation
console.log(person['age'])

// updating an object property using dot notation
person.firstName = 'Leno'

// updating an object property using bracket notation
person['lastName'] = 'Joe'
console.log(person)

// object with arrays as properties
const book2 = {
	title: 'Feminist Theory',
	author: 'bell hooks',
	year: 1984,
	tags: ['feminist theory', 'critical theory', 'social justice']
}

console.log(book2.title)
console.log(book2.tags[1])

// array of objects

const book3 = [
	{
		title: 'Feminist Theory',
		author: 'bell hooks',
		year: 1984,
	},
	{
		title: 'The second sex',
		author: 'Simone de Beauvoir',
		year: 1949,
		ratings: [10.0, 5.5, 7.5]
	}
]

console.log(book3[0])
console.log(book3[1].title)
console.log(book3[1].ratings[2])

// to delete a property from an object
delete book3[1].title
console.log(book3[1])
