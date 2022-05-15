//enables button to select tables
const cn = document.querySelector('#mandarin');
const ct = document.querySelector('#cantonese');
const hkn = document.querySelector('#hokkien');

document.querySelector('#mandarinBtn').addEventListener('click', mandarinBtn)
document.querySelector('#cantoneseBtn').addEventListener('click', cantoneseBtn)
document.querySelector('#hokkienBtn').addEventListener('click', hokkienBtn)

function mandarinBtn() {
     cn.classList.toggle('hidden')
     ct.classList.add('hidden')
     hkn.classList.add('hidden')
}

function cantoneseBtn() {
     cn.classList.add('hidden')
     ct.classList.toggle('hidden')
     hkn.classList.add('hidden')
}

function hokkienBtn() {
     cn.classList.add('hidden')
     ct.classList.add('hidden')
     hkn.classList.toggle('hidden')
}


//submit button




//iterates through tables selected and compares C1 of each
var table = document.getElementById("mytab1");
for (var i = 0, cell; cell = table.cells[i]; i++) {
     //iterate through cells
     //cells would be accessed using the "cell" variable assigned in the for loop
}


//if the same 




//if an entry exclusive to either T1 or T2


