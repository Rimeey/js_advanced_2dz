'use strict'

const imgs = document.querySelectorAll('img');

let srcs = [];
imgs.forEach(element => {srcs.push(element.src)});
console.log(srcs); // 1

let alts = [];
imgs.forEach(element => {alts.push(element.alt)});
console.log(alts); // 2

let classes = []
imgs.forEach(element => {classes.push(element.className)});
console.log(classes); // 3

imgs.forEach(element => {element.setAttribute('title', element.alt)}); // 4

for(let i = 0; i != 4; i++) {
    imgs[i].style.backgroundColor = 'green'; 
} // 5