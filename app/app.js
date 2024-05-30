/*
* File: app.ts & app.js
* Author: Czövek Balázs
* Copyright: 2024, Czövek Balázs
* Group: Szoft I/1/N
* Date: 2024-05-30
* Github: https://github.com/CatNipSniffer/
* Licenc: GNU GPL
*/


var SzamitGomb = document.querySelector('#Szamit')
var AInput = document.querySelector('#a').value
var BInput = document.querySelector('#b').value
var CInput = document.querySelector('#c').value
var VolumeOutput = document.querySelector('#Volume').value
SzamitGomb.addEventListener('click', Szamit)

function Szamit(){
    var test = 0
    test = 3/4*(AInput*BInput*CInput*Math.PI)
    console.log(Number(test))
}