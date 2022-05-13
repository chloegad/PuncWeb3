



let scalevalue = 25

var selectedPunc = []

var puncs = ["punc-option1", 
    "punc-option2",
    "punc-option3",
    "punc-option4",
    "punc-option14",
    "punc-option17",
    "punc-option5",
    "punc-option6",
   "punc-option7",
   "punc-option12",
   "punc-option10",
   "punc-option19",
   "punc-option8", 
   "punc-option9",
   "punc-option11", 
   "punc-option12",
   "punc-option13",
   "punc-option15",
   "punc-option16",
   "punc-option18",
   "punc-option20",
   "punc-option21",
   "punc-option22",
   "punc-option23",
   "punc-option24",
   "punc-option25",
   "punc-option27",
   "punc-option28",
   "punc-option29",
   "punc-option30",
   "punc-option31",
   "punc-option32",
   "punc-option33",
   "punc-option34",
   "punc-option35",
   "punc-option36",
   "punc-option37",
   "punc-option38",
   "punc-option39",
   "punc-option40",
   "punc-option41",
   "punc-option42",
   "punc-option43",
   "punc-option44",
   "punc-option45",
   "punc-option46",
   "punc-option47",
   "punc-option48",
   "punc-option49",
   "punc-option50",
   "punc-option51",
   "punc-option52",
   "punc-option53",
   "punc-option54",
   "punc-option55",
   "punc-option56",
   ]


    



document.addEventListener("keydown", function (e) {
    e.preventDefault();

    if (e.key === '(') {

        

        document.getElementById('punc-option1').style.display = "block";
        document.getElementById('punc-option12').style.display = "block";
        document.getElementById('punc-option10').style.display = "block";
        document.getElementById('punc-option19').style.display = "block";

    
    for (let i=0; i < puncs.length; i++) {
            for (let j=0; j<selectedPunc.length; j++) {
                if (puncs[i] === selectedPunc[j]) {
                    console.log(selectedPunc[j], "j");
                    document.getElementById(`${puncs[i]}`).style.display = "block";
                }
            }
        }



    }  else if (e.key === '[') {

             for (let i=0; i < puncs.length; i++) {
            for (let j=0; j<selectedPunc.length; j++) {
                if (puncs[i] === selectedPunc[j]) {
                    console.log(selectedPunc[j], "j");
                    document.getElementById(`${puncs[i]}`).style.display = "block";
                }
            }
        }

        document.getElementById('punc-option2').style.display = "block";
        document.getElementById('punc-option11').style.display = "block";
        document.getElementById('punc-option22').style.display = "block";
        document.getElementById('punc-option15').style.display = "block";

    } else if (e.key === '?') {

            for (let i=0; i < puncs.length; i++) {
            for (let j=0; j<selectedPunc.length; j++) {
                if (puncs[i] === selectedPunc[j]) {
                    console.log(selectedPunc[j], "j");
                    document.getElementById(`${puncs[i]}`).style.display = "block";
                }
            }
        }

        document.getElementById('punc-option3').style.display = "block";
        document.getElementById('punc-option13').style.display = "block";
        document.getElementById('punc-option20').style.display = "block";
        document.getElementById('punc-option38').style.display = "block";

    } else if (e.key === '!') {

        for (let i=0; i < puncs.length; i++) {
            for (let j=0; j<selectedPunc.length; j++) {
                if (puncs[i] === selectedPunc[j]) {
                    console.log(selectedPunc[j], "j");
                    document.getElementById(`${puncs[i]}`).style.display = "block";
                }
            }
        }

        document.getElementById('punc-option4').style.display = "block";
        document.getElementById('punc-option14').style.display = "block";
        document.getElementById('punc-option17').style.display = "block";
        document.getElementById('punc-option7').style.display = "block";



    } else if (e.key === '>') {

            for (let i=0; i < puncs.length; i++) {
            for (let j=0; j<selectedPunc.length; j++) {
                if (puncs[i] === selectedPunc[j]) {
                    console.log(selectedPunc[j], "j");
                    document.getElementById(`${puncs[i]}`).style.display = "block";
                }
            }
        }

        document.getElementById('punc-option5').style.display = "block";
        document.getElementById('punc-option36').style.display = "block";
        document.getElementById('punc-option46').style.display = "block";
        document.getElementById('punc-option42').style.display = "block";

    } else if (e.key === '"') {

            for (let i=0; i < puncs.length; i++) {
            for (let j=0; j<selectedPunc.length; j++) {
                if (puncs[i] === selectedPunc[j]) {
                    console.log(selectedPunc[j], "j");
                    document.getElementById(`${puncs[i]}`).style.display = "block";
                }
            }
        }

        document.getElementById('punc-option6').style.display = "block";
        document.getElementById('punc-option53').style.display = "block";
        document.getElementById('punc-option51').style.display = "block";
        document.getElementById('punc-option52').style.display = "block";
    } else if (e.key === '.') {

            for (let i=0; i < puncs.length; i++) {
            for (let j=0; j<selectedPunc.length; j++) {
                if (puncs[i] === selectedPunc[j]) {
                    console.log(selectedPunc[j], "j");
                    document.getElementById(`${puncs[i]}`).style.display = "block";
                }
            }
        }

        document.getElementById('punc-option37').style.display = "block";
        document.getElementById('punc-option39').style.display = "block";
        document.getElementById('punc-option25').style.display = "block";
        document.getElementById('punc-option24').style.display = "block";
    } else if (e.key === '-') {
            for (let i=0; i < puncs.length; i++) {
            for (let j=0; j<selectedPunc.length; j++) {
                if (puncs[i] === selectedPunc[j]) {
                    console.log(selectedPunc[j], "j");
                    document.getElementById(`${puncs[i]}`).style.display = "block";
                }
            }
        }

        document.getElementById('punc-option41').style.display = "block";
        document.getElementById('punc-option33').style.display = "block";
        document.getElementById('punc-option34').style.display = "block";
        document.getElementById('punc-option40').style.display = "block";
    } else if (e.key === '*') {
            for (let i=0; i < puncs.length; i++) {
            for (let j=0; j<selectedPunc.length; j++) {
                if (puncs[i] === selectedPunc[j]) {
                    console.log(selectedPunc[j], "j");
                    document.getElementById(`${puncs[i]}`).style.display = "block";
                }
            }
        }

        document.getElementById('punc-option9').style.display = "block";
        document.getElementById('punc-option44').style.display = "block";
        document.getElementById('punc-option43').style.display = "block";
        document.getElementById('punc-option45').style.display = "block";
    } else if (e.key ==='{') {
            for (let i=0; i < puncs.length; i++) {
            for (let j=0; j<selectedPunc.length; j++) {
                if (puncs[i] === selectedPunc[j]) {
                    console.log(selectedPunc[j], "j");
                    document.getElementById(`${puncs[i]}`).style.display = "block";
                }
            }
        }

        document.getElementById('punc-option21').style.display = "block";
        document.getElementById('punc-option18').style.display = "block";
        document.getElementById('punc-option35').style.display = "block";
        document.getElementById('punc-option27').style.display = "block";
    } 
     else if (e.key == ':') {
            for (let i=0; i < puncs.length; i++) {
            for (let j=0; j<selectedPunc.length; j++) {
                if (puncs[i] === selectedPunc[j]) {
                    console.log(selectedPunc[j], "j");
                    document.getElementById(`${puncs[i]}`).style.display = "block";
                }
            }
        }

        document.getElementById('punc-option50').style.display = "block";
        document.getElementById('punc-option47').style.display = "block";
        document.getElementById('punc-option48').style.display = "block";
        document.getElementById('punc-option49').style.display = "block";
    }else if (e.key == ';') {
            for (let i=0; i < puncs.length; i++) {
            for (let j=0; j<selectedPunc.length; j++) {
                if (puncs[i] === selectedPunc[j]) {
                    console.log(selectedPunc[j], "j");
                    document.getElementById(`${puncs[i]}`).style.display = "block";
                }
            }
        }

        document.getElementById('punc-option32').style.display = "block";
        document.getElementById('punc-option54').style.display = "block";
        document.getElementById('punc-option55').style.display = "block";
        document.getElementById('punc-option56').style.display = "block";

    }else if (e.key == ',') {
            for (let i=0; i < puncs.length; i++) {
            for (let j=0; j<selectedPunc.length; j++) {
                if (puncs[i] === selectedPunc[j]) {
                    console.log(selectedPunc[j], "j");
                    document.getElementById(`${puncs[i]}`).style.display = "block";
                }
            }
        }

        document.getElementById('punc-option28').style.display = "block";
        document.getElementById('punc-option29').style.display = "block";
        document.getElementById('punc-option30').style.display = "block"; 
        document.getElementById('punc-option31').style.display = "block";  
    }
});


let item; 

document.addEventListener("click", function (e) {
  
    let element = e.target || e.srcElement;
    
   
    let id = element.id

    item = document.getElementById(id);

    console.log(item)
});


document.addEventListener("keydown", function (e) {
    e.preventDefault();
    if (e.key === 'Backspace') {
        item.style.display = "none";
    } else if (e.key === 'ArrowUp') {
        console.log("arrowupclicked")
        item.style.height = scalevalue + '%';
        item.style.width = scalevalue + '%';
        scalevalue = scalevalue + 10
    } else if (e.key === 'ArrowDown') {
        item.style.height = scalevalue + '%';
        item.style.width = scalevalue + '%';
        scalevalue = scalevalue - 10
    } else if (e.key === 'ArrowRight') {
        item.style.transform = 'rotate(45deg)';
    } else if (e.key === 'ArrowLeft') {
        item.style.transform = 'rotate(-70deg)';
    }
});


document.getElementById('punc-option1').addEventListener('mousedown', hideothers);
function hideothers (
    ){ 
    
    if (!selectedPunc.includes('punc-option1')) { selectedPunc.push('punc-option1') }

    document.getElementById('punc-option12').style.display = "none"
    document.getElementById('punc-option10').style.display = "none"
    document.getElementById('punc-option19').style.display = "none"


if (selectedPunc.includes('punc-option10')) { 
    document.getElementById('punc-option10').style.display = "block"
    }

if (selectedPunc.includes('punc-option12')) { 
    document.getElementById('punc-option12').style.display = "block"
    }

if (selectedPunc.includes('punc-option19')) { 
    document.getElementById('punc-option19').style.display = "block"
    }
}


document.getElementById('punc-option10').addEventListener('mousedown', hideagain);
function hideagain (
    ){ 

if (!selectedPunc.includes('punc-option10')) { selectedPunc.push('punc-option10') }

    document.getElementById('punc-option12').style.display = "none"
    document.getElementById('punc-option1').style.display = "none"
    document.getElementById('punc-option19').style.display = "none"


if (selectedPunc.includes('punc-option12')) { 
    document.getElementById('punc-option12').style.display = "block"


    }

if (selectedPunc.includes('punc-option1')) { 
    document.getElementById('punc-option1').style.display = "block"
    

    }

if (selectedPunc.includes('punc-option19')) { 
    document.getElementById('punc-option19').style.display = "block"
    

    }
}

document.getElementById('punc-option12').addEventListener('mousedown', hideagain1);
function hideagain1 (
    ){ 

if (!selectedPunc.includes('punc-option12')) { selectedPunc.push('punc-option12') }

    document.getElementById('punc-option10').style.display = "none"
    document.getElementById('punc-option1').style.display = "none"
    document.getElementById('punc-option19').style.display = "none"


if (selectedPunc.includes('punc-option10')) { 
    document.getElementById('punc-option10').style.display = "block"


    }

if (selectedPunc.includes('punc-option1')) { 
    document.getElementById('punc-option1').style.display = "block"
    

    }

if (selectedPunc.includes('punc-option19')) { 
    document.getElementById('punc-option19').style.display = "block"
    

    }
}

document.getElementById('punc-option19').addEventListener('mousedown', hideagain5);
function hideagain5 (
    ){ 

if (!selectedPunc.includes('punc-option19')) { selectedPunc.push('punc-option19') }

    document.getElementById('punc-option12').style.display = "none"
    document.getElementById('punc-option1').style.display = "none"
    document.getElementById('punc-option10').style.display = "none"


if (selectedPunc.includes('punc-option12')) { 
    document.getElementById('punc-option12').style.display = "block"


    }

if (selectedPunc.includes('punc-option1')) { 
    document.getElementById('punc-option1').style.display = "block"
    

    }

if (selectedPunc.includes('punc-option10')) { 
    document.getElementById('punc-option10').style.display = "block"
    

    }
}



document.getElementById('punc-option2').addEventListener('mousedown', hideagain2);
function hideagain2 (
    ){ 

if (!selectedPunc.includes('punc-option2')) { selectedPunc.push('punc-option2') }


    document.getElementById('punc-option11').style.display = "none"
    document.getElementById('punc-option22').style.display = "none"
    document.getElementById('punc-option15').style.display = "none"

if (selectedPunc.includes('punc-option11')) { 
    document.getElementById('punc-option11').style.display = "block"


    }

if (selectedPunc.includes('punc-option15')) { 
    document.getElementById('punc-option15').style.display = "block"
    

    }

if (selectedPunc.includes('punc-option22')) { 
    document.getElementById('punc-option22').style.display = "block"
    

    }
}

document.getElementById('punc-option11').addEventListener('mousedown', hideagain6);
function hideagain6 (
    ){ 

if (!selectedPunc.includes('punc-option11')) { selectedPunc.push('punc-option11') }


    document.getElementById('punc-option2').style.display = "none"
    document.getElementById('punc-option22').style.display = "none"
    document.getElementById('punc-option15').style.display = "none"

if (selectedPunc.includes('punc-option2')) { 
    document.getElementById('punc-option2').style.display = "block"


    }

if (selectedPunc.includes('punc-option15')) { 
    document.getElementById('punc-option15').style.display = "block"
    

    }

if (selectedPunc.includes('punc-option22')) { 
    document.getElementById('punc-option22').style.display = "block"
    

    }
}

document.getElementById('punc-option22').addEventListener('mousedown', hideagain7);
function hideagain7 (
    ){ 

if (!selectedPunc.includes('punc-option22')) { selectedPunc.push('punc-option22') }


    document.getElementById('punc-option11').style.display = "none"
    document.getElementById('punc-option2').style.display = "none"
    document.getElementById('punc-option15').style.display = "none"

if (selectedPunc.includes('punc-option11')) { 
    document.getElementById('punc-option11').style.display = "block"


    }

if (selectedPunc.includes('punc-option15')) { 
    document.getElementById('punc-option15').style.display = "block"
    

    }

if (selectedPunc.includes('punc-option2')) { 
    document.getElementById('punc-option2').style.display = "block"
    

    }
}

document.getElementById('punc-option15').addEventListener('mousedown', hideagain8);
function hideagain8 (
    ){ 

if (!selectedPunc.includes('punc-option15')) { selectedPunc.push('punc-option15') }


    document.getElementById('punc-option11').style.display = "none"
    document.getElementById('punc-option22').style.display = "none"
    document.getElementById('punc-option2').style.display = "none"

if (selectedPunc.includes('punc-option11')) { 
    document.getElementById('punc-option11').style.display = "block"


    }

if (selectedPunc.includes('punc-option2')) { 
    document.getElementById('punc-option2').style.display = "block"
    

    }

if (selectedPunc.includes('punc-option22')) { 
    document.getElementById('punc-option22').style.display = "block"
    

    }
}

document.getElementById('punc-option3').addEventListener('mousedown', hideagain9);
function hideagain9 (
    ){ 

if (!selectedPunc.includes('punc-option3')) { selectedPunc.push('punc-option3') }


    document.getElementById('punc-option13').style.display = "none"
    document.getElementById('punc-option20').style.display = "none"
    document.getElementById('punc-option38').style.display = "none"

if (selectedPunc.includes('punc-option13')) { 
    document.getElementById('punc-option13').style.display = "block"


    }

if (selectedPunc.includes('punc-option20')) { 
    document.getElementById('punc-option20').style.display = "block"
    

    }

if (selectedPunc.includes('punc-option38')) { 
    document.getElementById('punc-option38').style.display = "block"
    

    }
}

document.getElementById('punc-option13').addEventListener('mousedown', hideagain10);
function hideagain10 (
    ){ 

if (!selectedPunc.includes('punc-option13')) { selectedPunc.push('punc-option13') }


    document.getElementById('punc-option3').style.display = "none"
    document.getElementById('punc-option20').style.display = "none"
    document.getElementById('punc-option38').style.display = "none"

if (selectedPunc.includes('punc-option20')) { 
    document.getElementById('punc-option20').style.display = "block"


    }

if (selectedPunc.includes('punc-option3')) { 
    document.getElementById('punc-option3').style.display = "block"
    

    }

if (selectedPunc.includes('punc-option38')) { 
    document.getElementById('punc-option38').style.display = "block"
    

    }
}
document.getElementById('punc-option20').addEventListener('mousedown', hideagain11);
function hideagain11 (
    ){ 

if (!selectedPunc.includes('punc-option20')) { selectedPunc.push('punc-option20') }


    document.getElementById('punc-option13').style.display = "none"
    document.getElementById('punc-option3').style.display = "none"
    document.getElementById('punc-option38').style.display = "none"

if (selectedPunc.includes('punc-option38')) { 
    document.getElementById('punc-option38').style.display = "block"


    }

if (selectedPunc.includes('punc-option3')) { 
    document.getElementById('punc-option3').style.display = "block"
    

    }

if (selectedPunc.includes('punc-option13')) { 
    document.getElementById('punc-option13').style.display = "block"
    

    }
}
document.getElementById('punc-option38').addEventListener('mousedown', hideagain12);
function hideagain12 (
    ){ 

if (!selectedPunc.includes('punc-option38')) { selectedPunc.push('punc-option38') }


    document.getElementById('punc-option13').style.display = "none"
    document.getElementById('punc-option20').style.display = "none"
    document.getElementById('punc-option3').style.display = "none"

if (selectedPunc.includes('punc-option20')) { 
    document.getElementById('punc-option20').style.display = "block"


    }

if (selectedPunc.includes('punc-option3')) { 
    document.getElementById('punc-option3').style.display = "block"
    

    }

if (selectedPunc.includes('punc-option13')) { 
    document.getElementById('punc-option13').style.display = "block"
    

    }
}


document.getElementById('punc-option4').addEventListener('mousedown', hideagain3);
function hideagain3 (
    ){ 
if (!selectedPunc.includes('punc-option4')) { selectedPunc.push('punc-option4') }



    document.getElementById('punc-option14').style.display = "none"
    document.getElementById('punc-option17').style.display = "none"
    document.getElementById('punc-option7').style.display = "none"

if (selectedPunc.includes('punc-option14')) { 
    document.getElementById('punc-option14').style.display = "block"


    }

if (selectedPunc.includes('punc-option17')) { 
    document.getElementById('punc-option17').style.display = "block"
    

    }

if (selectedPunc.includes('punc-option7')) { 
    document.getElementById('punc-option7').style.display = "block"
    

    }
}

document.getElementById('punc-option14').addEventListener('mousedown', hideagain13);
function hideagain13 (
    ){ 
if (!selectedPunc.includes('punc-option14')) { selectedPunc.push('punc-option14') }



    document.getElementById('punc-option17').style.display = "none"
    document.getElementById('punc-option4').style.display = "none"
    document.getElementById('punc-option7').style.display = "none"

if (selectedPunc.includes('punc-option17')) { 
    document.getElementById('punc-option17').style.display = "block"


    }

if (selectedPunc.includes('punc-option4')) { 
    document.getElementById('punc-option4').style.display = "block"
    

    }

if (selectedPunc.includes('punc-option7')) { 
    document.getElementById('punc-option7').style.display = "block"
    

    }
}

document.getElementById('punc-option17').addEventListener('mousedown', hideagain14);
function hideagain14 (
    ){ 
if (!selectedPunc.includes('punc-option17')) { selectedPunc.push('punc-option17') }



    document.getElementById('punc-option4').style.display = "none"
    document.getElementById('punc-option14').style.display = "none"
    document.getElementById('punc-option7').style.display = "none"

if (selectedPunc.includes('punc-option4')) { 
    document.getElementById('punc-option4').style.display = "block"


    }

if (selectedPunc.includes('punc-option14')) { 
    document.getElementById('punc-option14').style.display = "block"
    

    }

if (selectedPunc.includes('punc-option7')) { 
    document.getElementById('punc-option7').style.display = "block"
    

    }
}

document.getElementById('punc-option7').addEventListener('mousedown', hideagain15);
function hideagain15 (
    ){ 
if (!selectedPunc.includes('punc-option7')) { selectedPunc.push('punc-option7') }



    document.getElementById('punc-option14').style.display = "none"
    document.getElementById('punc-option4').style.display = "none"
    document.getElementById('punc-option17').style.display = "none"

if (selectedPunc.includes('punc-option14')) { 
    document.getElementById('punc-option14').style.display = "block"


    }

if (selectedPunc.includes('punc-option4')) { 
    document.getElementById('punc-option4').style.display = "block"
    

    }

if (selectedPunc.includes('punc-option17')) { 
    document.getElementById('punc-option17').style.display = "block"
    

    }
}

document.getElementById('punc-option5').addEventListener('mousedown', hideagain16);
function hideagain16 (
    ){ 
if (!selectedPunc.includes('punc-option5')) { selectedPunc.push('punc-option5') }



    document.getElementById('punc-option36').style.display = "none"
    document.getElementById('punc-option46').style.display = "none"
    document.getElementById('punc-option42').style.display = "none"

if (selectedPunc.includes('punc-option36')) { 
    document.getElementById('punc-option36').style.display = "block"


    }

if (selectedPunc.includes('punc-option46')) { 
    document.getElementById('punc-option46').style.display = "block"
    

    }

if (selectedPunc.includes('punc-option42')) { 
    document.getElementById('punc-option42').style.display = "block"
    

    }
}

document.getElementById('punc-option36').addEventListener('mousedown', hideagain17);
function hideagain17 (
    ){ 
if (!selectedPunc.includes('punc-option36')) { selectedPunc.push('punc-option36') }



    document.getElementById('punc-option5').style.display = "none"
    document.getElementById('punc-option46').style.display = "none"
    document.getElementById('punc-option42').style.display = "none"

if (selectedPunc.includes('punc-option5')) { 
    document.getElementById('punc-option5').style.display = "block"


    }

if (selectedPunc.includes('punc-option46')) { 
    document.getElementById('punc-option46').style.display = "block"
    

    }

if (selectedPunc.includes('punc-option42')) { 
    document.getElementById('punc-option42').style.display = "block"
    

    }
}

document.getElementById('punc-option46').addEventListener('mousedown', hideagain51);
function hideagain51 (
    ){ 
if (!selectedPunc.includes('punc-option46')) { selectedPunc.push('punc-option46') }



    document.getElementById('punc-option36').style.display = "none"
    document.getElementById('punc-option5').style.display = "none"
    document.getElementById('punc-option42').style.display = "none"

if (selectedPunc.includes('punc-option36')) { 
    document.getElementById('punc-option36').style.display = "block"


    }

if (selectedPunc.includes('punc-option5')) { 
    document.getElementById('punc-option5').style.display = "block"
    

    }

if (selectedPunc.includes('punc-option42')) { 
    document.getElementById('punc-option42').style.display = "block"
    

    }
}

document.getElementById('punc-option42').addEventListener('mousedown', hideagain18);
function hideagain18 (
    ){ 
if (!selectedPunc.includes('punc-option42')) { selectedPunc.push('punc-option42') }



    document.getElementById('punc-option36').style.display = "none"
    document.getElementById('punc-option46').style.display = "none"
    document.getElementById('punc-option5').style.display = "none"

if (selectedPunc.includes('punc-option36')) { 
    document.getElementById('punc-option36').style.display = "block"


    }

if (selectedPunc.includes('punc-option46')) { 
    document.getElementById('punc-option46').style.display = "block"
    

    }

if (selectedPunc.includes('punc-option5')) { 
    document.getElementById('punc-option5').style.display = "block"
    

    }
}

document.getElementById('punc-option6').addEventListener('mousedown', hideagain19);
function hideagain19 (
    ){ 
if (!selectedPunc.includes('punc-option6')) { selectedPunc.push('punc-option6') }



    document.getElementById('punc-option53').style.display = "none"
    document.getElementById('punc-option51').style.display = "none"
    document.getElementById('punc-option52').style.display = "none"

if (selectedPunc.includes('punc-option53')) { 
    document.getElementById('punc-option53').style.display = "block"


    }

if (selectedPunc.includes('punc-option51')) { 
    document.getElementById('punc-option51').style.display = "block"
    

    }

if (selectedPunc.includes('punc-option52')) { 
    document.getElementById('punc-option52').style.display = "block"
    

    }
}


document.getElementById('punc-option53').addEventListener('mousedown', hideagain20);
function hideagain20 (
    ){ 
if (!selectedPunc.includes('punc-option53')) { selectedPunc.push('punc-option53') }



    document.getElementById('punc-option6').style.display = "none"
    document.getElementById('punc-option51').style.display = "none"
    document.getElementById('punc-option52').style.display = "none"

if (selectedPunc.includes('punc-option6')) { 
    document.getElementById('punc-option6').style.display = "block"


    }

if (selectedPunc.includes('punc-option51')) { 
    document.getElementById('punc-option51').style.display = "block"
    

    }

if (selectedPunc.includes('punc-option52')) { 
    document.getElementById('punc-option52').style.display = "block"
    

    }
}


document.getElementById('punc-option51').addEventListener('mousedown', hideagain21);
function hideagain21 (
    ){ 
if (!selectedPunc.includes('punc-option51')) { selectedPunc.push('punc-option51') }



    document.getElementById('punc-option53').style.display = "none"
    document.getElementById('punc-option6').style.display = "none"
    document.getElementById('punc-option52').style.display = "none"

if (selectedPunc.includes('punc-option53')) { 
    document.getElementById('punc-option53').style.display = "block"


    }

if (selectedPunc.includes('punc-option6')) { 
    document.getElementById('punc-option6').style.display = "block"
    

    }

if (selectedPunc.includes('punc-option52')) { 
    document.getElementById('punc-option52').style.display = "block"
    

    }
}


document.getElementById('punc-option52').addEventListener('mousedown', hideagain22);
function hideagain22 (
    ){ 
if (!selectedPunc.includes('punc-option52')) { selectedPunc.push('punc-option52') }



    document.getElementById('punc-option53').style.display = "none"
    document.getElementById('punc-option51').style.display = "none"
    document.getElementById('punc-option6').style.display = "none"

if (selectedPunc.includes('punc-option53')) { 
    document.getElementById('punc-option53').style.display = "block"


    }

if (selectedPunc.includes('punc-option51')) { 
    document.getElementById('punc-option51').style.display = "block"
    

    }

if (selectedPunc.includes('punc-option6')) { 
    document.getElementById('punc-option6').style.display = "block"
    

    }
}

document.getElementById('punc-option7').addEventListener('mousedown', hideagain23);
function hideagain23 (
    ){ 
if (!selectedPunc.includes('punc-option7')) { selectedPunc.push('punc-option7') }



    document.getElementById('punc-option39').style.display = "none"
    document.getElementById('punc-option25').style.display = "none"
    document.getElementById('punc-option24').style.display = "none"

if (selectedPunc.includes('punc-option39')) { 
    document.getElementById('punc-option39').style.display = "block"


    }

if (selectedPunc.includes('punc-option25')) { 
    document.getElementById('punc-option25').style.display = "block"
    

    }

if (selectedPunc.includes('punc-option24')) { 
    document.getElementById('punc-option24').style.display = "block"
    

    }
}


document.getElementById('punc-option39').addEventListener('mousedown', hideagain24);
function hideagain24 (
    ){ 
if (!selectedPunc.includes('punc-option39')) { selectedPunc.push('punc-option39') }



    document.getElementById('punc-option25').style.display = "none"
    document.getElementById('punc-option24').style.display = "none"
    document.getElementById('punc-option7').style.display = "none"

if (selectedPunc.includes('punc-option7')) { 
    document.getElementById('punc-option7').style.display = "block"


    }

if (selectedPunc.includes('punc-option24')) { 
    document.getElementById('punc-option24').style.display = "block"
    

    }

if (selectedPunc.includes('punc-option25')) { 
    document.getElementById('punc-option25').style.display = "block"
    

    }
}

document.getElementById('punc-option25').addEventListener('mousedown', hideagain25);
function hideagain25 (
    ){ 
if (!selectedPunc.includes('punc-option25')) { selectedPunc.push('punc-option25') }



    document.getElementById('punc-option39').style.display = "none"
    document.getElementById('punc-option24').style.display = "none"
    document.getElementById('punc-option7').style.display = "none"

if (selectedPunc.includes('punc-option7')) { 
    document.getElementById('punc-option7').style.display = "block"


    }

if (selectedPunc.includes('punc-option24')) { 
    document.getElementById('punc-option24').style.display = "block"
    

    }

if (selectedPunc.includes('punc-option39')) { 
    document.getElementById('punc-option39').style.display = "block"
    

    }
}
document.getElementById('punc-option24').addEventListener('mousedown', hideagain26);
function hideagain26 (
    ){ 
if (!selectedPunc.includes('punc-option24')) { selectedPunc.push('punc-option24') }



    document.getElementById('punc-option25').style.display = "none"
    document.getElementById('punc-option39').style.display = "none"
    document.getElementById('punc-option7').style.display = "none"

if (selectedPunc.includes('punc-option7')) { 
    document.getElementById('punc-option7').style.display = "block"


    }

if (selectedPunc.includes('punc-option39')) { 
    document.getElementById('punc-option39').style.display = "block"
    

    }

if (selectedPunc.includes('punc-option25')) { 
    document.getElementById('punc-option25').style.display = "block"
    

    }
}

document.getElementById('punc-option41').addEventListener('mousedown', hideagain27);
function hideagain27 (
    ){ 
if (!selectedPunc.includes('punc-option41')) { selectedPunc.push('punc-option41') }



    document.getElementById('punc-option33').style.display = "none"
    document.getElementById('punc-option34').style.display = "none"
    document.getElementById('punc-option40').style.display = "none"

if (selectedPunc.includes('punc-option33')) { 
    document.getElementById('punc-option33').style.display = "block"


    }

if (selectedPunc.includes('punc-option34')) { 
    document.getElementById('punc-option34').style.display = "block"
    
    }

if (selectedPunc.includes('punc-option40')) { 
    document.getElementById('punc-option40').style.display = "block"
    

    }
}

document.getElementById('punc-option33').addEventListener('mousedown', hideagain28);
function hideagain28 (
    ){ 
if (!selectedPunc.includes('punc-option33')) { selectedPunc.push('punc-option33') }



    document.getElementById('punc-option41').style.display = "none"
    document.getElementById('punc-option34').style.display = "none"
    document.getElementById('punc-option40').style.display = "none"

if (selectedPunc.includes('punc-option41')) { 
    document.getElementById('punc-option41').style.display = "block"


    }

if (selectedPunc.includes('punc-option34')) { 
    document.getElementById('punc-option34').style.display = "block"
    

    }

if (selectedPunc.includes('punc-option40')) { 
    document.getElementById('punc-option40').style.display = "block"
    

    }
}
document.getElementById('punc-option34').addEventListener('mousedown', hideagain29);
function hideagain29 (
    ){ 
if (!selectedPunc.includes('punc-option34')) { selectedPunc.push('punc-option34') }



    document.getElementById('punc-option33').style.display = "none"
    document.getElementById('punc-option41').style.display = "none"
    document.getElementById('punc-option40').style.display = "none"

if (selectedPunc.includes('punc-option33')) { 
    document.getElementById('punc-option33').style.display = "block"


    }

if (selectedPunc.includes('punc-option41')) { 
    document.getElementById('punc-option41').style.display = "block"
    

    }

if (selectedPunc.includes('punc-option40')) { 
    document.getElementById('punc-option40').style.display = "block"
    

    }
}
document.getElementById('punc-option40').addEventListener('mousedown', hideagain30);
function hideagain30 (
    ){ 
if (!selectedPunc.includes('punc-option40')) { selectedPunc.push('punc-option40') }



    document.getElementById('punc-option33').style.display = "none"
    document.getElementById('punc-option34').style.display = "none"
    document.getElementById('punc-option41').style.display = "none"

if (selectedPunc.includes('punc-option33')) { 
    document.getElementById('punc-option33').style.display = "block"


    }

if (selectedPunc.includes('punc-option34')) { 
    document.getElementById('punc-option34').style.display = "block"
    

    }

if (selectedPunc.includes('punc-option41')) { 
    document.getElementById('punc-option41').style.display = "block"
    

    }
}

document.getElementById('punc-option9').addEventListener('mousedown', hideagain31);
function hideagain31 (
    ){ 
if (!selectedPunc.includes('punc-option9')) { selectedPunc.push('punc-option9') }



    document.getElementById('punc-option44').style.display = "none"
    document.getElementById('punc-option43').style.display = "none"
    document.getElementById('punc-option45').style.display = "none"

if (selectedPunc.includes('punc-option44')) { 
    document.getElementById('punc-option44').style.display = "block"


    }

if (selectedPunc.includes('punc-option43')) { 
    document.getElementById('punc-option43').style.display = "block"
    

    }

if (selectedPunc.includes('punc-option45')) { 
    document.getElementById('punc-option45').style.display = "block"
    

    }
}

document.getElementById('punc-option44').addEventListener('mousedown', hideagain32);
function hideagain32 (
    ){ 
if (!selectedPunc.includes('punc-option44')) { selectedPunc.push('punc-option44') }



    document.getElementById('punc-option9').style.display = "none"
    document.getElementById('punc-option43').style.display = "none"
    document.getElementById('punc-option45').style.display = "none"

if (selectedPunc.includes('punc-option9')) { 
    document.getElementById('punc-option9').style.display = "block"


    }

if (selectedPunc.includes('punc-option43')) { 
    document.getElementById('punc-option43').style.display = "block"
    

    }

if (selectedPunc.includes('punc-option45')) { 
    document.getElementById('punc-option45').style.display = "block"
    

    }
}
document.getElementById('punc-option43').addEventListener('mousedown', hideagain33);
function hideagain33 (
    ){ 
if (!selectedPunc.includes('punc-option43')) { selectedPunc.push('punc-option43') }



    document.getElementById('punc-option44').style.display = "none"
    document.getElementById('punc-option9').style.display = "none"
    document.getElementById('punc-option45').style.display = "none"

if (selectedPunc.includes('punc-option44')) { 
    document.getElementById('punc-option44').style.display = "block"


    }

if (selectedPunc.includes('punc-option9')) { 
    document.getElementById('punc-option9').style.display = "block"
    

    }

if (selectedPunc.includes('punc-option45')) { 
    document.getElementById('punc-option45').style.display = "block"
    

    }
}

document.getElementById('punc-option45').addEventListener('mousedown', hideagain34);
function hideagain34 (
    ){ 
if (!selectedPunc.includes('punc-option45')) { selectedPunc.push('punc-option45') }



    document.getElementById('punc-option44').style.display = "none"
    document.getElementById('punc-option43').style.display = "none"
    document.getElementById('punc-option9').style.display = "none"

if (selectedPunc.includes('punc-option44')) { 
    document.getElementById('punc-option44').style.display = "block"


    }

if (selectedPunc.includes('punc-option43')) { 
    document.getElementById('punc-option43').style.display = "block"
    

    }

if (selectedPunc.includes('punc-option9')) { 
    document.getElementById('punc-option9').style.display = "block"
    

    }
}

document.getElementById('punc-option21').addEventListener('mousedown', hideagain35);
function hideagain35 (
    ){ 
if (!selectedPunc.includes('punc-option21')) { selectedPunc.push('punc-option21') }



    document.getElementById('punc-option18').style.display = "none"
    document.getElementById('punc-option35').style.display = "none"
    document.getElementById('punc-option27').style.display = "none"

if (selectedPunc.includes('punc-option18')) { 
    document.getElementById('punc-option18').style.display = "block"


    }

if (selectedPunc.includes('punc-option35')) { 
    document.getElementById('punc-option35').style.display = "block"
    

    }

if (selectedPunc.includes('punc-option27')) { 
    document.getElementById('punc-option27').style.display = "block"
    

    }
}

document.getElementById('punc-option18').addEventListener('mousedown', hideagain36);
function hideagain36 (
    ){ 
if (!selectedPunc.includes('punc-option18')) { selectedPunc.push('punc-option18') }



    document.getElementById('punc-option21').style.display = "none"
    document.getElementById('punc-option35').style.display = "none"
    document.getElementById('punc-option27').style.display = "none"

if (selectedPunc.includes('punc-option21')) { 
    document.getElementById('punc-option21').style.display = "block"


    }

if (selectedPunc.includes('punc-option35')) { 
    document.getElementById('punc-option35').style.display = "block"
    

    }

if (selectedPunc.includes('punc-option27')) { 
    document.getElementById('punc-option27').style.display = "block"
    

    }
}

document.getElementById('punc-option35').addEventListener('mousedown', hideagain37);
function hideagain37 (
    ){ 
if (!selectedPunc.includes('punc-option35')) { selectedPunc.push('punc-option35') }



    document.getElementById('punc-option18').style.display = "none"
    document.getElementById('punc-option21').style.display = "none"
    document.getElementById('punc-option27').style.display = "none"

if (selectedPunc.includes('punc-option18')) { 
    document.getElementById('punc-option18').style.display = "block"


    }

if (selectedPunc.includes('punc-option21')) { 
    document.getElementById('punc-option21').style.display = "block"
    

    }

if (selectedPunc.includes('punc-option27')) { 
    document.getElementById('punc-option27').style.display = "block"
    

    }
}

document.getElementById('punc-option27').addEventListener('mousedown', hideagain38);
function hideagain38 (
    ){ 
if (!selectedPunc.includes('punc-option27')) { selectedPunc.push('punc-option27') }



    document.getElementById('punc-option18').style.display = "none"
    document.getElementById('punc-option35').style.display = "none"
    document.getElementById('punc-option21').style.display = "none"

if (selectedPunc.includes('punc-option18')) { 
    document.getElementById('punc-option18').style.display = "block"


    }

if (selectedPunc.includes('punc-option35')) { 
    document.getElementById('punc-option35').style.display = "block"
    

    }

if (selectedPunc.includes('punc-option21')) { 
    document.getElementById('punc-option21').style.display = "block"
    

    }
}

document.getElementById('punc-option50').addEventListener('mousedown', hideagain39);
function hideagain39 (
    ){ 
if (!selectedPunc.includes('punc-option50')) { selectedPunc.push('punc-option50') }



    document.getElementById('punc-option47').style.display = "none"
    document.getElementById('punc-option48').style.display = "none"
    document.getElementById('punc-option49').style.display = "none"

if (selectedPunc.includes('punc-option47')) { 
    document.getElementById('punc-option47').style.display = "block"


    }

if (selectedPunc.includes('punc-option48')) { 
    document.getElementById('punc-option48').style.display = "block"
    

    }

if (selectedPunc.includes('punc-option49')) { 
    document.getElementById('punc-option49').style.display = "block"
    

    }
}
document.getElementById('punc-option47').addEventListener('mousedown', hideagain40);
function hideagain40 (
    ){ 
if (!selectedPunc.includes('punc-option47')) { selectedPunc.push('punc-option47') }



    document.getElementById('punc-option50').style.display = "none"
    document.getElementById('punc-option48').style.display = "none"
    document.getElementById('punc-option49').style.display = "none"

if (selectedPunc.includes('punc-option50')) { 
    document.getElementById('punc-option50').style.display = "block"


    }

if (selectedPunc.includes('punc-option48')) { 
    document.getElementById('punc-option48').style.display = "block"
    

    }

if (selectedPunc.includes('punc-option49')) { 
    document.getElementById('punc-option49').style.display = "block"
    

    }
}

document.getElementById('punc-option48').addEventListener('mousedown', hideagain41);
function hideagain41 (
    ){ 
if (!selectedPunc.includes('punc-option48')) { selectedPunc.push('punc-option48') }



    document.getElementById('punc-option47').style.display = "none"
    document.getElementById('punc-option50').style.display = "none"
    document.getElementById('punc-option49').style.display = "none"

if (selectedPunc.includes('punc-option47')) { 
    document.getElementById('punc-option47').style.display = "block"


    }

if (selectedPunc.includes('punc-option50')) { 
    document.getElementById('punc-option50').style.display = "block"
    

    }

if (selectedPunc.includes('punc-option49')) { 
    document.getElementById('punc-option49').style.display = "block"
    

    }
}
document.getElementById('punc-option49').addEventListener('mousedown', hideagain42);
function hideagain42 (
    ){ 
if (!selectedPunc.includes('punc-option49')) { selectedPunc.push('punc-option49') }



    document.getElementById('punc-option47').style.display = "none"
    document.getElementById('punc-option48').style.display = "none"
    document.getElementById('punc-option50').style.display = "none"

if (selectedPunc.includes('punc-option47')) { 
    document.getElementById('punc-option47').style.display = "block"


    }

if (selectedPunc.includes('punc-option48')) { 
    document.getElementById('punc-option48').style.display = "block"
    

    }

if (selectedPunc.includes('punc-option50')) { 
    document.getElementById('punc-option50').style.display = "block"
    

    }
}
document.getElementById('punc-option32').addEventListener('mousedown', hideagain43);
function hideagain43 (
    ){ 
if (!selectedPunc.includes('punc-option32')) { selectedPunc.push('punc-option32') }



    document.getElementById('punc-option54').style.display = "none"
    document.getElementById('punc-option55').style.display = "none"
    document.getElementById('punc-option56').style.display = "none"

if (selectedPunc.includes('punc-option54')) { 
    document.getElementById('punc-option54').style.display = "block"


    }

if (selectedPunc.includes('punc-option55')) { 
    document.getElementById('punc-option55').style.display = "block"
    

    }

if (selectedPunc.includes('punc-option56')) { 
    document.getElementById('punc-option56').style.display = "block"
    

    }
}
document.getElementById('punc-option54').addEventListener('mousedown', hideagain44);
function hideagain44 (
    ){ 
if (!selectedPunc.includes('punc-option54')) { selectedPunc.push('punc-option54') }



    document.getElementById('punc-option32').style.display = "none"
    document.getElementById('punc-option55').style.display = "none"
    document.getElementById('punc-option56').style.display = "none"

if (selectedPunc.includes('punc-option32')) { 
    document.getElementById('punc-option32').style.display = "block"


    }

if (selectedPunc.includes('punc-option55')) { 
    document.getElementById('punc-option55').style.display = "block"
    

    }

if (selectedPunc.includes('punc-option56')) { 
    document.getElementById('punc-option56').style.display = "block"
    

    }
}

document.getElementById('punc-option55').addEventListener('mousedown', hideagain45);
function hideagain45 (
    ){ 
if (!selectedPunc.includes('punc-option55')) { selectedPunc.push('punc-option55') }



    document.getElementById('punc-option54').style.display = "none"
    document.getElementById('punc-option32').style.display = "none"
    document.getElementById('punc-option56').style.display = "none"

if (selectedPunc.includes('punc-option54')) { 
    document.getElementById('punc-option54').style.display = "block"


    }

if (selectedPunc.includes('punc-option32')) { 
    document.getElementById('punc-option32').style.display = "block"
    

    }

if (selectedPunc.includes('punc-option56')) { 
    document.getElementById('punc-option56').style.display = "block"
    

    }
}
document.getElementById('punc-option56').addEventListener('mousedown', hideagain46);
function hideagain46 (
    ){ 
if (!selectedPunc.includes('punc-option56')) { selectedPunc.push('punc-option56') }



    document.getElementById('punc-option54').style.display = "none"
    document.getElementById('punc-option55').style.display = "none"
    document.getElementById('punc-option32').style.display = "none"

if (selectedPunc.includes('punc-option54')) { 
    document.getElementById('punc-option54').style.display = "block"


    }

if (selectedPunc.includes('punc-option55')) { 
    document.getElementById('punc-option55').style.display = "block"
    

    }

if (selectedPunc.includes('punc-option32')) { 
    document.getElementById('punc-option32').style.display = "block"
    

    }
}
document.getElementById('punc-option28').addEventListener('mousedown', hideagain47);
function hideagain47 (
    ){ 
if (!selectedPunc.includes('punc-option28')) { selectedPunc.push('punc-option28') }



    document.getElementById('punc-option31').style.display = "none"
    document.getElementById('punc-option29').style.display = "none"
    document.getElementById('punc-option30').style.display = "none"

if (selectedPunc.includes('punc-option31')) { 
    document.getElementById('punc-option31').style.display = "block"


    }

if (selectedPunc.includes('punc-option29')) { 
    document.getElementById('punc-option29').style.display = "block"
    

    }

if (selectedPunc.includes('punc-option30')) { 
    document.getElementById('punc-option30').style.display = "block"
    

    }
}
document.getElementById('punc-option31').addEventListener('mousedown', hideagain48);
function hideagain48 (
    ){ 
if (!selectedPunc.includes('punc-option31')) { selectedPunc.push('punc-option31') }



    document.getElementById('punc-option28').style.display = "none"
    document.getElementById('punc-option29').style.display = "none"
    document.getElementById('punc-option30').style.display = "none"

if (selectedPunc.includes('punc-option28')) { 
    document.getElementById('punc-option28').style.display = "block"


    }

if (selectedPunc.includes('punc-option29')) { 
    document.getElementById('punc-option29').style.display = "block"
    

    }

if (selectedPunc.includes('punc-option30')) { 
    document.getElementById('punc-option30').style.display = "block"
    

    }
}
document.getElementById('punc-option29').addEventListener('mousedown', hideagain49);
function hideagain49 (
    ){ 
if (!selectedPunc.includes('punc-option29')) { selectedPunc.push('punc-option29') }



    document.getElementById('punc-option31').style.display = "none"
    document.getElementById('punc-option28').style.display = "none"
    document.getElementById('punc-option30').style.display = "none"

if (selectedPunc.includes('punc-option31')) { 
    document.getElementById('punc-option31').style.display = "block"


    }

if (selectedPunc.includes('punc-option28')) { 
    document.getElementById('punc-option28').style.display = "block"
    

    }

if (selectedPunc.includes('punc-option30')) { 
    document.getElementById('punc-option30').style.display = "block"
    

    }
}

document.getElementById('punc-option30').addEventListener('mousedown', hideagain50);
function hideagain50 (
    ){ 
if (!selectedPunc.includes('punc-option30')) { selectedPunc.push('punc-option30') }



    document.getElementById('punc-option31').style.display = "none"
    document.getElementById('punc-option29').style.display = "none"
    document.getElementById('punc-option28').style.display = "none"

if (selectedPunc.includes('punc-option31')) { 
    document.getElementById('punc-option31').style.display = "block"


    }

if (selectedPunc.includes('punc-option29')) { 
    document.getElementById('punc-option29').style.display = "block"
    

    }

if (selectedPunc.includes('punc-option28')) { 
    document.getElementById('punc-option28').style.display = "block"
    

    }
}
$( function() {
    $( "#punc-option1" ).draggable( { containment: ".punc-option-container" } );
    $( "#punc-option2" ).draggable( { containment: ".punc-option-container" } );
    $( "#punc-option3" ).draggable( { containment: ".punc-option-container" } );
    $( "#punc-option4" ).draggable( { containment: ".punc-option-container" } );
    $( "#punc-option5" ).draggable( { containment: ".punc-option-container" } );
    $( "#punc-option6" ).draggable( { containment: ".punc-option-container" } );
    $( "#punc-option7" ).draggable( { containment: ".punc-option-container" } );
    $( "#punc-option8" ).draggable(  { containment: ".punc-option-container" } );
    $( "#punc-option9" ).draggable({ containment: ".punc-option-container" } );
    $( "#punc-option10" ).draggable({ containment: ".punc-option-container" } );
    $( "#punc-option11" ).draggable({ containment: ".punc-option-container" } );
    $( "#punc-option12" ).draggable({ containment: ".punc-option-container" } );
    $( "#punc-option13" ).draggable({ containment: ".punc-option-container" } );
    $( "#punc-option14" ).draggable({ containment: ".punc-option-container" } );
    $( "#punc-option15" ).draggable({ containment: ".punc-option-container" } );
    $( "#punc-option16" ).draggable({ containment: ".punc-option-container" } );
    $( "#punc-option17" ).draggable({ containment: ".punc-option-container" } );
    $( "#punc-option18" ).draggable({ containment: ".punc-option-container" } );
    $( "#punc-option19" ).draggable({ containment: ".punc-option-container" } );
    $( "#punc-option20" ).draggable({ containment: ".punc-option-container" } );
    $( "#punc-option21" ).draggable({ containment: ".punc-option-container" } );
    $( "#punc-option22" ).draggable({ containment: ".punc-option-container" } );
    $( "#punc-option23" ).draggable({ containment: ".punc-option-container" } );
    $( "#punc-option24" ).draggable({ containment: ".punc-option-container" } );
    $( "#punc-option25" ).draggable({ containment: ".punc-option-container" } );
    $( "#punc-option27" ).draggable({ containment: ".punc-option-container" } );
    $( "#punc-option28" ).draggable({ containment: ".punc-option-container" } );
    $( "#punc-option29" ).draggable({ containment: ".punc-option-container" } );
    $( "#punc-option30" ).draggable({ containment: ".punc-option-container" } );
    $( "#punc-option31" ).draggable({ containment: ".punc-option-container" } );
    $( "#punc-option32" ).draggable({ containment: ".punc-option-container" } );
    $( "#punc-option33" ).draggable({ containment: ".punc-option-container" } );
    $( "#punc-option34" ).draggable({ containment: ".punc-option-container" } );
    $( "#punc-option35" ).draggable({ containment: ".punc-option-container" } );
    $( "#punc-option36" ).draggable({ containment: ".punc-option-container" } );
    $( "#punc-option37" ).draggable({ containment: ".punc-option-container" } );
    $( "#punc-option38" ).draggable({ containment: ".punc-option-container" } );
    $( "#punc-option39" ).draggable({ containment: ".punc-option-container" } );
    $( "#punc-option40" ).draggable({ containment: ".punc-option-container" } );
    $( "#punc-option41" ).draggable({ containment: ".punc-option-container" } );
    $( "#punc-option42" ).draggable({ containment: ".punc-option-container" } );
    $( "#punc-option43" ).draggable({ containment: ".punc-option-container" } );
    $( "#punc-option44" ).draggable({ containment: ".punc-option-container" } );
    $( "#punc-option45" ).draggable({ containment: ".punc-option-container" } );
    $( "#punc-option46" ).draggable({ containment: ".punc-option-container" } );
    $( "#punc-option47" ).draggable({ containment: ".punc-option-container" } );
    $( "#punc-option48" ).draggable({ containment: ".punc-option-container" } );
    $( "#punc-option49" ).draggable({ containment: ".punc-option-container" } );
    $( "#punc-option50" ).draggable({ containment: ".punc-option-container" } );
    $( "#punc-option51" ).draggable({ containment: ".punc-option-container" } );
    $( "#punc-option52" ).draggable({ containment: ".punc-option-container" } );
    $( "#punc-option53" ).draggable({ containment: ".punc-option-container" } );
    $( "#punc-option54" ).draggable({ containment: ".punc-option-container" } );
    $( "#punc-option55" ).draggable({ containment: ".punc-option-container" } );
    $( "#punc-option56" ).draggable({ containment: ".punc-option-container" } );
  } );


function toggleText(){
  var y = document.querySelector(".type");
  if (y.style.display === "none") {
    y.style.display = "block";
  } else {
    y.style.display = "none";
  }
};


  



