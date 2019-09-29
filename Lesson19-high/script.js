'use strict';

const output = document.getElementById('output'),
    catButton = document.getElementById('cat'),
    dogButton = document.getElementById('dog'),
    body = document.querySelector('body');


body.addEventListener('click', (event) => {
    let target = event.target;
    if (target.id === 'cat') {
        getData('https://aws.random.cat/meow');
    }
    if (target.id === 'dog') {
        getData('https://random.dog/woof.json');
    } 
});

const getData = (link) => {

    fetch(link)
        .then((response) => {
            if (response.status !== 200) {
                throw new Error('error');
            }
            //Нельзя обращаться к response.json() в любом виде до return (response.json());
            //даже через console.log(), так как тело ответа блокируется(wtf?!)
            //https://stackoverflow.com/questions/53511974/javascript-fetch-failed-to-execute-json-on-response-body-stream-is-locked
            return (response.json());
        })
        .then((data) => {            
            let url = Object.values(data)[0];
            if (/g$/i.test(url) || /f$/i.test(url)) {
                output.innerHTML = `<h2>${(link.match(/(cat|dog)/g))}</h2>
                <img src="${url}" width = "500">`;
            } else {
                output.innerHTML = `<h2>${link.match(/(cat|dog)/g)}</h2>
                <video width = "500" controls>
                    <source src="${url}">
                </video>`;}
        })
        .catch(error => console.error(error));
};