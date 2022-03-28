document.addEventListener('DOMContentLoaded', e => {
  // customizable variables
  let item_show = 3;  
  let transition = "0.95s ease-out";
  
  // initial state    
  let carousel_items = document.querySelectorAll(".carousel-item");
  let item_num = carousel_items.length;

  let active_item = carousel_items[0];
  let r_item = carousel_items[1];
  let l_item = carousel_items[item_num-1];

  let item_width = active_item.clientWidth;
  let item_height = active_item.clientHeight;
  let radius = item_show * item_width / 2;
  
  let r_head = 2; // index of the next item to show on the right side
  let l_head = item_num-2;  // index of the next item to show on the left side

  shift_to_active(active_item);
  shift_to_left(l_item);
  shift_to_right(r_item);

  for(let i=2;i<item_num-1;i++)
    shift_to_back(carousel_items[i]);
  
  let carousel_center = origin(active_item);
  
  document.onmouseover = e => {
    let x = e.clientX, y = e.clientY;  
    let { x: center_x, y: center_y, width, height } = carousel_center;

    if(x<center_x-width/2 && x>center_x-radius && y>center_y-height/1.25 && y<center_y+height/1.25){
      // slide to right --> 
      shift_to_back(r_item);
      shift_to_right(active_item);
      shift_to_active(l_item);

      r_item = active_item;
      active_item = l_item;

      l_item = carousel_items[l_head--];
      r_head--;
      if(l_head<0) l_head = item_num-1;
      if(r_head<0) r_head = item_num-1;

      shift_to_left(l_item);   
    }

    if(x>center_x+width/2 && x<center_x+radius && y>center_y-height/1.25 && y<center_y+height/1.25){
      // shift left <--
      shift_to_back(l_item);
      shift_to_left(active_item);
      shift_to_active(r_item);

      l_item = active_item;
      active_item = r_item;

      r_item = carousel_items[r_head++];
      l_head++;
      if(l_head>=item_num) l_head = 0;
      if(r_head>=item_num) r_head = 0;
      shift_to_right(r_item);  
    }
  }
  
  // get carousel's center coordinates, width and height
  function origin(elem) {
    let rect = elem.getBoundingClientRect();
    let left = rect.left + (window.pageXOffset || document.documentElement.scrollLeft),
        top = rect.top + (window.pageYOffset || document.documentElement.scrollTop),
        width = elem.clientWidth,
        height = elem.clientHeight,
        x = left + width/2,
        y = top + height/2;
    return { x, y, width, height};
  }

  function shift_to_right(elem) {
    elem.style.transform = `translateX(${radius-item_width/2}px) translateZ(400px)`;
    elem.style["z-index"] = `${item_num-10}`;
    elem.style.transition = transition;

  }

  function shift_to_left(elem) {
    elem.style.transform = `translateX(${-radius+item_width/2}px) translateZ(400px)`;
    elem.style["z-index"] = `${item_num-10}`;
    elem.style.transition = transition;
  }

  function shift_to_active(elem) {
    elem.style.transform = "translateX(0) scale(1.25) translateZ(800px)";
    elem.style["z-index"] = `${item_num}`;
    elem.style.transition = transition;
    
  }

  function shift_to_back(elem) {
    elem.style.transform = "translateX(0) translateZ(0)";
    elem.style["z-index"] = `${item_num-20}`;
    elem.style.transition = transition;
  }  
});

document.querySelector('#video').defaultPlaybackRate = 3.5;


function toggleText(){
  var y = document.querySelector(".type");
  if (y.style.display === "none") {
    y.style.display = "block";
  } else {
    y.style.display = "none";
  }
}
// document.querySelector('#video').play();