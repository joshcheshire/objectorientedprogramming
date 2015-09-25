//Object oriented programming
		//- programming paradigm basedon the creation of objects
		//- Methods(callable properties), properties, key value pairs
		//-Free floating variables is a bad practice---var name 1, var name 2 etc,



// Constructors- functions that define our data format
//				- Properties and methods
//				-Think of constructors as a set of blueprints

// Class - We define constructor functions for our classes

// Instances - Manifesting a blueprint with actual data


// name
// age
// bulgyEyes
// color
// length
// weight
// tailDetachability
// sexualOrientation
// genderIdentity

 // var Iguana = function(name, color, bulgyEyes, tubbiness){
 // 	// under the hood, 'this' is an empty object
 // 	//var this ={}
 // 	this.name = name;
 // 	this.color = color;
 // 	this.bulgyEyes = bulgyEyes;
 // 	this.tubbiness = tubbiness;
 // 	this.eat = function(){
 		// console.log(this)
 		// console.log(this.name + '' + 'is eating. Om nom nom.....');


 	//}

 	//under the hood: without a return stmt, functions return undefined
 	//with 'new' keyword:
 	//return this

 //}

 // var myArray = [1,2,3]
 // myArray.join()


//  var myIguana = new Iguana('ChubChub', 'Aquamarine', true, true)
//  console.log(myIguana)

 
// var Herbert = new Iguana('Herbert', 'Brown', true, true)
// console.log(Herbert)



 //iguana is the name of our class and the values we are assigning to it are the constructor function  line 27
 //the eat method is attached to our iguana object

 // var myFunc=function(){
 // 	console.log(this)
 // }
 // myFunc()






//In Class CHALLENGE \\

//create a quote class and constructor function w/ 2 properties: text and author
// create an instance of the quote class and store in a variable
//console log the value of the instance
//bonus: have default values if text and author are not passed in --- the bonus has been achieved by using || inside the quote function

// var Quote= function(quoteText, quoteAuthor){

// 	this.text = quoteText || 'This is so empty......';
// 	this.author = quoteAuthor || 'Anonymous';


// }

// var venkman = new Quote('We came, we saw, we kicked its ass!', 'Dr. Peter Venkman')
// 	console.log(venkman)


// var stantz = new Quote (' Total protonic reversal.', ' Dr. Ray Stantz')
// 	console.log(stantz)

// var empty = new Quote ()
// console.log(empty)



//------------------------------Prototype

// var Iguana = function(name, color, bulgyEyes, tubbiness){
//  	// under the hood, 'this' is an empty object
//  	//var this ={}
//  	this.name = name;
//  	this.color = color;
//  	this.bulgyEyes = bulgyEyes;
//  	this.tubbiness = tubbiness;
// //  	this.eat = function(){
// //  		console.log(this.name + '' + 'is eating. Om nom nom.....');


// // }
// }




// var chubchub= new Iguana('ChubChub', 'Aquamarine', true, true)
//  // console.log(myIguana)

 
// var Herbert = new Iguana('Herbert', 'Brown', true, true)
// // console.log(Herbert)


// Iguana.prototype.eat = function(){
// 	console.log( this.name + 'is eating. Yummy')


// }  

// Iguana line 109 will have precedence over the proptotype if its not commented out. Line 127 will not work if line 109 isnt commented out \\




// -=-=-=-=- IN CLASS CHALLENGE -=-=-=-=-==\\

// 1. update the quote class to have 2 methods to its prototype
// 	a. method to count the number of words in the quote
// 	b. method to console log an uppercase version of the quote with exclamation points






// var Quote= function(quoteText, quoteAuthor){

// 	this.text = quoteText || 'This is so empty......';
// 	this.author = quoteAuthor || 'Anonymous';


// }

// var venkman = new Quote('We came, we saw, we kicked its ass!', 'Dr. Peter Venkman')
// 	// console.log(venkman)


// var stantz = new Quote (' Total protonic reversal.', ' Dr. Ray Stantz')
// 	// console.log(stantz)

// var empty = new Quote ()
// // console.log(empty)





// Quote.prototype.countwords = function(){
// 	console.log( this.text.split(' ').length)    // in the console: venkman.countwords() will return 8, first we need to split it into an array 

// }

// Quote.prototype.yell = function(){

// console.log( this.text.toUpperCase() + "!!!!!")


// }


//-=-=-=-=--=-=-=-=--==-=-= O O P   DEMO -=-=-=-=-=-=-=-=-=-=-=-=\\




// var Burglar = function(name, dexterity, ninja){
// 	this.name      =  name
// 	this.dexterity = dexterity
// 	this.ninja     = ninja
// 	this.stuff     = ['diamonds', 'cash', 'guns', 'dagger of +3 dexterity', 'glass eyeball']

// }



// var Burglar = function(name, which){
// 	this.name      =  name + which
// 	this.dexterity = Math.ceil(Math.random() * 10)
// 	this.ninja     = this.dexterity > 7
// 	this.stuff     = ['diamonds', 'cash', 'guns', 'dagger of +3 dexterity', 'glass eyeball']

// }





// Burglar.prototype.burgle = function(victim){       //defining how objects interact with eachother
// 	this.stuff.push(victim.stuff.pop())           // what we're doing here is we're popping an item from the victims array
// 	console.log(this.name + ' now has ' + this.stuff.join(', ') + '.')
// 	console.log(victim.name + ' now has ' + this.stuff.join(', ') + '.')
// 	console.log('-=-=-=-=-=-=---===-')
// }


// var steve = new Burglar('Steve', 4, false)

// // console.log(steve)


// var otherDanielle = new Burglar('Danielle', 10, true)

// // steve.burgle(otherDanielle)
// // steve.burgle(otherDanielle)
// // steve.burgle(otherDanielle)
// // steve.burgle(otherDanielle)


// // otherDanielle.burgle(steve)


// var cityOfThieves = []

// for( var i =0; i<20; i++){

// cityOfThieves.push(new Burglar('steve', i))
// }


// var randomBurgle = function(){
// 	var burglar =cityOfThieves[Math.floor(Math.random() * cityOfThieves.length)]

// 	var victim  =cityOfThieves[Math.floor(Math.random() * cityOfThieves.length)]

// burglar.burgle(victim)

// }
// //var burgleInterval
// randomBurgle()

//--=-=-=-=-=-= 9/22 Call, Apply and bind

// ----CALL-----


// var whatsMyName = function(){
//}

// you can have as many args as needed in the whatsmyname fx
// var whatsMyName = function (excited ) {

// 	var ending = excited ? '!! ': '.' 
// // 	// if()

// 	console.log('My name is ' + this.name + ending)
// }

// // whatsMyName()

// var alice={    //is the host object {

// 	name: 'Alice',
// }

// // // call whatsmyname using the Alice object as the context, i.e the valuefor 'this'

// // //Arguments for the original function are offset by one, bc the first argument isthe context.
// // //The second arg is the first parameter for the original function



// // whatsMyName.call(alice, false)


// //----apply----\\


// // whatsMyName.apply(alice, [true, 'second arg', 'third arg'])


// var myNumbers= [1,20,1000,22,3334]

// //console.log(Math.max(myNumbers)) 
// //this wont work, we need to now use apply

// console.log(Math.max.apply(null,myNumbers))  // we are using null so its clear that the context is irrelevant in this case, and math.max will show the largest # in the array


// var map = function(callback){
// for(var i=0; i< this.length; i++)
// 	var output[i] = callback(this[i])
// 	}
// 		return output
// 	}



///-=-=-=-=-=BIND-=-=-=-=-=-=-\\

// var whatsMyName = function (excited ) {

// 	var ending = excited ? '!! ': '.' 
// // 	// if()

// 	console.log('My name is ' + this.name + ending)
// }



// var bob = {

// 	name: 'Bob'
// }
// //bind returns a new fx
// //bobSaysHi is exactly the same as WhatsMyName, but all references to 'this' are replaced with Bob


// // var bobSaysHi = whatsMyName.bind(bob)

// // bobSaysHi(true)

// var carlos = {

// 	name: 'Carlos'
// }

// var carlosIsHappyToMeetYou = whatsMyName.bind(carlos, true)   // if you were to pass in false in the function on line 342, the value would still be true bc we bound it

// carlosIsHappyToMeetYou()

//-=--=-=-=-==-INHERITANCE-=-=-=-=-=-=-=\\


// var Monkey = function(name, color){
// 	this.name = name
// 	this.color = color
// }
// Monkey.prototype.climb = function(tree){
// 	console.log(this.name + ' climbs the ' + tree + 'tree' )
// }

// var george = new Monkey('George', 'navajo white')
// george.climb('palm')

// 	var FlyingMonkey = function(name, color, wingspan){
//      this.name = name
//      this.color = color
//      this.wingspan=wingspan

// 	}


// FlyingMonkey.prototype.climb = function(tree){
// 	console.log(this.name + ' climbs the ' + tree + 'tree' )
// }

// FlyingMonkey.prototype.fly=function(){
// 	console.log(this.name + 'flew ' + this.wingspan * 10 + ' feet')
// }

// var FlyingMonkey = function(name, color, wingspan){
// 	//this={empty object}
// 	//we only pass in name and color, because the base class only cares about name and color.
// 	Monkey.call(this, name, color)
// 	this.wingspan=wingspan
// }
// FlyingMonkey.prototype = new Monkey()

// FlyingMonkey.prototype.fly = function(){
// 	console.log(this.name + ' flew ' + this.wingspan * 10 + ' feet')
// }



// var EvilGeorge = new FlyingMonkey( 'EvilGeorge', 'dodger blue', 9)
// // EvilGeorge.climb('oak')
// EvilGeorge.fly()


//-=-=-=--=--=-=-=-==-Namespacing

// 1. Encapsulate methods and variables
//		eliminates global variables - maybe more than 1 developer on the project- don't want variable names to collide
//     



// var helloLibrary ={
// 	numberHellos :0,
// 	sayHi = function(){
// 		console.log('hi')
// 		this.numberHellos ++

// },
// 
// var yellHi= function(){
// 	console.log('HI')
// 	this.numberHellos++
// 	}

// }






// // var numberHellos = 0
// // var sayHi = function(){
// // 	console.log('hi')
// // 	numberHellos ++
// // } 

// // var yellHi= function(){
// // 	console.log('HI')
// // 	numberHellos++
// // }


// helloLibrary.sayHi()
// sayHi()
// yellHi()
// yellHi()

// console.log(numberHellos)



//-=--=-=-Privacy-=-=-=-=-=\\ takes advantage of closure to hide certain variables and methods

// var myFunc = function(){
// 		var something = 'hello!';

// 		return function(){
// 			return something
// 		}
// }

// var newFunc = myFunc()


//=-=-=-=--=-=-=-=---=

//----this is our library- the problem is we still hav varibles in the global space, so we need to declare PersonSetUp

// var PersonSetUp = function(){
// 	var people = []
// 	var Person = function(firstName, lastName, profession){

// 		this.firstName = firstName;
// 		this.lastName = lastName;
// 		this.profession = profession;
// 		people.push(this);
// 	}

// 	Person.listPeople = function(){
// 		return People
// 	}
// 	//createInfo is a PRIVATE METHOD - there's no way to access it outside of this fx
// 	var createInfo = function(person){
// 		return person.firstName + '  is a very talented  ' + person.profession + '.';

// 	}

// 	Person.prototype.whoDat = function(){
// 		return createInfo(this)
// 		//this would refer to hansel or whatever host object the method is being called
// 		// hansel.whoDat()


// 	}
// 	return Person
// }
// //-------------------\\



// //--this is where we are creating things with our own code & invoking the fx



// // var makeAPerson = PersonSetUp()
// var hansel = new makeAPerson('Hansel', '[]', 'Professional Turtle Rider');
// var gretel = new makeAPerson('Gretel', '{}', 'Crumb Droppah');



//-=-=-=-Immediately Invoked Function Expressions

var IEFE = (function(dog){
	return dog

}) 

console.log(IEFE('doberman'))









