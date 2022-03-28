let scalevalue = 25


document.addEventListener("keydown", function (e) {
    e.preventDefault();
    if (e.key === '(') {
        document.getElementById('punc-option1').style.display = "block";
        document.getElementById('punc-option12').style.display = "block";
        document.getElementById('punc-option10').style.display = "block";
        document.getElementById('punc-option19').style.display = "block";
    } else if (e.key === '[') {
        document.getElementById('punc-option2').style.display = "block";
        document.getElementById('punc-option11').style.display = "block";
        document.getElementById('punc-option22').style.display = "block";
        document.getElementById('punc-option15').style.display = "block";

    } else if (e.key === '?') {
        document.getElementById('punc-option3').style.display = "block";
        document.getElementById('punc-option13').style.display = "block";
        document.getElementById('punc-option20').style.display = "block";
        document.getElementById('punc-option38').style.display = "block";

    } else if (e.key === '!') {
        document.getElementById('punc-option4').style.display = "block";
        document.getElementById('punc-option14').style.display = "block";
        document.getElementById('punc-option17').style.display = "block";
        document.getElementById('punc-option37').style.display = "block";

    } else if (e.key === '>') {
        document.getElementById('punc-option5').style.display = "block";
        document.getElementById('punc-option26').style.display = "block";

    } else if (e.key == '<') {
        document.getElementById('punc-option5').style.display = "block";
        document.getElementById('punc-option26').style.display = "block";
    } else if (e.key === '"') {
        document.getElementById('punc-option6').style.display = "block";
        document.getElementById('punc-option16').style.display = "block";
    } else if (e.key === '.') {
        document.getElementById('punc-option7').style.display = "block";
        document.getElementById('punc-option39').style.display = "block";
        document.getElementById('punc-option25').style.display = "block";
    } else if (e.key === '-') {
        document.getElementById('punc-option8').style.display = "block";
        document.getElementById('punc-option33').style.display = "block";
        document.getElementById('punc-option34').style.display = "block";
        document.getElementById('punc-option32').style.display = "block";
    } else if (e.key === '*') {
        document.getElementById('punc-option9').style.display = "block";
    } else if (e.key ==='{') {
        document.getElementById('punc-option21').style.display = "block";
        document.getElementById('punc-option18').style.display = "block";
    } else if (e.key == ':') {
        document.getElementById('punc-option24').style.display = "block";
    }else if (e.key == ';') {
        document.getElementById('punc-option').style.display = "block";
    }else if (e.key == ',') {
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


document.getElementById('punc-option1').addEventListener('click', hideothers);
function hideothers (
    ){ document.getElementById('punc-option12').style.display = "none"
    document.getElementById('punc-option10').style.display = "none"
    document.getElementById('punc-option19').style.display = "none"

}


document.getElementById('punc-option10').addEventListener('click', hideagain);
function hideagain (
    ){ document.getElementById('punc-option12').style.display = "none"
    document.getElementById('punc-option1').style.display = "none"
    document.getElementById('punc-option19').style.display = "none"

}

document.getElementById('punc-option3').addEventListener('click', hideagain2);
function hideagain2 (
    ){ document.getElementById('punc-option13').style.display = "none"
    document.getElementById('punc-option20').style.display = "none"
    document.getElementById('punc-option38').style.display = "none"

}


document.getElementById('punc-option4').addEventListener('click', hideagain3);
function hideagain3 (
    ){ document.getElementById('punc-option14').style.display = "none"
    document.getElementById('punc-option17').style.display = "none"
    document.getElementById('punc-option37').style.display = "none"

}


document.getElementById('punc-option2').addEventListener('click', hideagain4);
function hideagain4 (
    ){ document.getElementById('punc-option11').style.display = "none"
    document.getElementById('punc-option22').style.display = "none"
    document.getElementById('punc-option15').style.display = "none"

}

// document.addEventListener("keydown", function (e) {
//     e.preventDefault();
//      if (e.key === 'Backspace') {
//         // this removes the item completely 
//         item.remove('punc-option1');
// } else if (e.key === 'ArrowUp') {
//        var object = document.getElementById('punc-option1');
//     object.style.height = '40%';
//     object.style.width = 'auto';
//        var object = document.getElementById('punc-option2');
//     object.style.height = '40%';
//     object.style.width = 'auto';
//       var object = document.getElementById('punc-option3');
//     object.style.height = '40%';
//     object.style.width = 'auto';
//        var object = document.getElementById('punc-option4');
//     object.style.height = '40%';
//     object.style.width = 'auto';
// } else if (e.key == 'ArrowDown') {
//     var object = document.getElementById('punc-option1');
//     object.style.height = '10%';
//     object.style.width = 'auto';
//     var object = document.getElementById('punc-option2');
//     object.style.height = '10%';
//     object.style.width = 'auto';
//     var object = document.getElementById('punc-option3');
//     object.style.height = '10%';
//     object.style.width = 'auto';
//     var object = document.getElementById('punc-option4');
//     object.style.height = '10%';
//     object.style.width = 'auto';
// } else if (e.key == 'ArrowRight') {
//     var object = document.getElementById('punc-option1'); 
//     object.style.transform = 'rotate(20deg)'; 
// } else if (e.key == 'ArrowLeft') {
//     var object = document.getElementById('punc-option1'); 
//     object.style.transform = 'rotate(-50deg)'; 
// }
// }); 


$( function() {
    $( "#punc-option1" ).draggable();
    $( "#punc-option2" ).draggable();
    $( "#punc-option3" ).draggable();
    $( "#punc-option4" ).draggable();
    $( "#punc-option5" ).draggable();
    $( "#punc-option6" ).draggable();
    $( "#punc-option7" ).draggable();
    $( "#punc-option8" ).draggable();
    $( "#punc-option9" ).draggable();
    $( "#punc-option10" ).draggable();
    $( "#punc-option11" ).draggable();
    $( "#punc-option12" ).draggable();
    $( "#punc-option13" ).draggable();
    $( "#punc-option14" ).draggable();
    $( "#punc-option15" ).draggable();
    $( "#punc-option16" ).draggable();
    $( "#punc-option17" ).draggable();
    $( "#punc-option18" ).draggable();
    $( "#punc-option19" ).draggable();
    $( "#punc-option20" ).draggable();
    $( "#punc-option21" ).draggable();
    $( "#punc-option22" ).draggable();

  } );


function toggleText(){
  var y = document.querySelector(".type");
  if (y.style.display === "none") {
    y.style.display = "block";
  } else {
    y.style.display = "none";
  }
}
// dragElement(document.getElementById("punc-option1"));

// function dragElement(elmnt) {
 
//   var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
//   if (document.getElementById(elmnt.id)) {
      
//     // elmnt.onmousedown = dragMouseDown; 
//     dragMouseDown(elmnt);
//   }

//   function dragMouseDown(e) {
//     e = e || window.event;
//     e.preventDefault();
//     // get the mouse cursor position at startup:
//     pos3 = e.clientX;
//     pos4 = e.clientY;
//     // document.onmouseup = closeDragElement;
//     // call a function whenever the cursor moves:
//     // document.onmousemove = elementDrag;
//     elementDrag(elmnt);

//   }

//   function elementDrag(e) {
//      console.log("dragged")
//     e = e || window.event;
//     e.preventDefault();
//     // calculate the new cursor position:
//     pos1 = pos3 - e.clientX;
//     pos2 = pos4 - e.clientY;
//     pos3 = e.clientX;
//     pos4 = e.clientY;
//     // set the element's new position:
//     elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
//     elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
//   }

//   function closeDragElement() {
//     // stop moving when mouse button is released:
//     document.onmouseup = null;
//     document.onmousemove = null;
//   }
// }

