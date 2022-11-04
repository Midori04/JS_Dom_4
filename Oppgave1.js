function getNumber() {
    let numberList = 0;
    let count = 1;
    let mittnummer = document.querySelector("#inputnumber").value;

    while (mittnummer > count) {
        if (mittnummer % count == 0) { numberList += count }
        count += 1;
    }
    document.querySelector("#inputnumber").value = ""
    if (numberList == mittnummer) {
        document.querySelector("#result").innerText = `Number ${mittnummer} er perfekt!`
    } else {
        document.querySelector("#result").innerText = `Number ${mittnummer} er ikke perfekt!`
    }
}
function getRandom() {
    let numberList = 0;
    let count = 1;
    let mittnummer = Math.round(Math.random() * 100)

    while (mittnummer > count) {
        if (mittnummer % count == 0) { numberList += count }
        count += 1;
    }
    document.querySelector("#inputnumber").value = ""
    if (numberList == mittnummer) {
        document.querySelector("#result").innerText = `Number ${mittnummer} er perfekt!`
    } else {
        document.querySelector("#result").innerText = `Number ${mittnummer} er ikke perfekt!`
    }
}

const colorInput = document.querySelector("#VelgEnFarge").addEventListener("input", function () {
    const minFarge = document.querySelector("#VelgEnFarge").value;
    document.body.style.backgroundColor = minFarge;
});


document.querySelector("#velgRange1").oninput = function () {
    const g = document.querySelector("#velgRange2").value;
    const b = document.querySelector("#velgRange3").value;
 const r = document.querySelector("#velgRange1").value;
 console.log(r);

 document.body.style.backgroundColor = `rgb(${r},${g},${b})`

}

document.querySelector("#velgRange2").oninput = function () {
    const r = document.querySelector("#velgRange1").value;
    const b = document.querySelector("#velgRange3").value;
    const g = document.querySelector("#velgRange2").value;
    console.log(g);

    document.body.style.backgroundColor = `rgb(${r},${g},${b})`
   }

   document.querySelector("#velgRange3").oninput = function () {
    const r = document.querySelector("#velgRange1").value;
    const g = document.querySelector("#velgRange2").value;
    const b = document.querySelector("#velgRange3").value;
    console.log(b);

    document.body.style.backgroundColor = `rgb(${r},${g},${b})`
   }


// document.body.style.backgroundColor = 'rgb('+r+','+g
