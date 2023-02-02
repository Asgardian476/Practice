// let name='jhon';
// let age =   30;
// let loveCats    =   true;
// let color   =   null;
// let list;
// age=45;
// console.log(age);
// const numbers = new Array(1,2,3,4,5,6,7);
// numbers [2]=9;
// numbers[6]=0;
// numbers.push('hola');
// let last_item = numbers.pop('hola');
// let First_item = numbers.shift();
// console.log(First_item);
// console.log(last_item);
// console.log(numbers);
// console.log(numbers.length);
// console.log(numbers.indexOf('4'));
// const myArray=['red',4,true,null,[1,2,'hi',4,true]];
// console.log(myArray[4][2]);
// let firstname='Jhon';
// let lastName='Smith';
// let age=30;

// const person =
// [
//     {
//     firstName: 'Jhon',
//     lastName: 'Smith',
//     age: 30,
//     pets: ['Dogs', 'Cats'],
//     address:{
//         street:'Baker Street',
//         city:'London',
//         state:'Houston'
//     }
// },
// {
//     firstName: 'Mary',
//     lastName: 'Smith',
//     age: 28,
//     pets: ['Dogs', 'Cats'],
//     address:{
//         street:'Baker Street',
//         city:'London',
//         state:'Houston'
//     }
// }
// ];
// person.email='perso@email.com';
// delete person.age;
// console.log(person);
// let key = 'firstName';
// console.log(person['lastName']);

// const { firstName, lastName, address:{state}}=person;
// console.log(firstName, lastName);
// const personJSON = JSON.stringify(person);
// console.log(JSON.parse(personJSON));

//FUNCTION
// function hello(firstName, lastName){
//     console.log(`Hello ${firstName} ${lastName}`);
// }

// hello('Jhon','Smith');

// function calcPercent(number) {
//     return number/100;
    
// }
// console.log(calcPercent(50));

// const convPerc =(num) => num/100;
// console.log(convPerc(75));

//loops
// let i = 0;
// while(i<10){
//     console.log(i);
//     i++;
// }

// for (let i = 0; i < 10; i++) 
// {
//     console.log(i); 
// }


// for(let people of person){
//     console.log(people);
// }

// person.forEach(function(people){console.log(person);});
// person.forEach(people => console.log(person));

// const pname = person.map(people => people.name);
// console.log(pname);
// const pageU30 = person.filter(people => people.age<30);
// console.log(pageU30);

// let color='red';
// if (color=='red') {
//     console.log(color);    
// }

// let age =21;
// if (age < 30 && age > 10) {
//     console.log(age);    
// }

// if (condition) {
    
// } else if(codition) {
    
// }
// else {

// }

// let animal='cats';
// const likesCats = animal ==='cat'?true:false;
// console.log(likesCats);

// switch (animal) {
//     case 'Dog':
//         console.log('Dog');
//         break;
//     case 'cat':
//         console.log('cat');
//         break;
//     default:
//         console.log('Neither');
//         break;
// }

// const list= document.getElementById('list');
// console.log(list);
// const list= document.querySelector('#list');
// const items= document.querySelector('.list-item');
// const itemsA= document.querySelectorAll('.list-item');
// list.lastElementChild.remove();
// itemsA.forEach(item => { console.log(item.textContent)});
// console.log(itemsA);
// list.firstElementChild.innerHTML="New Item";
// list.lastElementChild.style.background ='red';
// console.log(list);

//events

const btn = document.getElementById('myBtn');
// btn.addEventListener('click',function(e));
btn.addEventListener('mouseover', (e) => {btn.style.background='blue';});
