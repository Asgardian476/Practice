const body = document.body;
// body.append('Hello World', ' bye');
//const div = document.createElement('div');
// div.innerText = 'Hello World';
//div.textContent = 'Hello World 2';//not recommended
// div.innerHTML = '<strong>Hello World 2</strong>';

//This is a better Approach
// const strong = document.createElement('strong');
// strong.innerText = 'Hello World';
// div.append(strong);


const div = document.querySelector('div');
const spanHi = document.querySelector('#hi');
const spanbye = document.querySelector('#bye');

// spanbye.remove();//deletes
//div.append(spanbye);//adds it back
// console.log(spanHi.getAttribute('id'));
// console.log(spanHi.id);
// spanHi.setAttribute('id', 'olhol');
// spanHi.id='ohk';
// spanHi.removeAttribute('id');
// console.log(spanHi.dataset.longerName);
// spanHi.dataset.newName ='hey';
spanbye.classList.add('jk-haha');
spanbye.classList.remove('jk-haha');
spanbye.classList.toggle('jk-haha');
spanbye.style.backgroundColor='red';
console.log(spanbye.classList);
body.append(div);

// div.removeChild(spanbye);
// div.append(spanbye);

