/*
* File: app.ts & app.js
* Author: Czövek Balázs
* Copyright: 2024, Czövek Balázs
* Group: Szoft I/1/N
* Date: 2024-05-30
* Github: https://github.com/CatNipSniffer/
* Licenc: GNU GPL
*/

const SzamitGomb = document.querySelector('#Szamit')
const AInput = Number(document.querySelector('#a'))
const BInput = Number(document.querySelector('#b'))
const CInput = Number(document.querySelector('#c'))
const VolumeOutput = Number(document.querySelector('#Volume'))

function Kiíras(){
    SzamitGomb.addEventListener('click' => {

    })
}
function TerfogatSzamitas(){
    VolumeOutput = 4/3*(Math.PI*AInput*BInput*CInput)
    console.log(VolumeOutput)
}
TerfogatSzamitas()
