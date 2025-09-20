let capsOn = false;
let shiftOn = false;
let current_mode = "keyboard";


const switchEl = document.querySelector(".switch");
const slider = document.querySelector(".slider");
const options = document.querySelectorAll(".switch .option");
const display = document.getElementById("display");
const mouseKeys = document.querySelectorAll("[data-key]");

// =============================
// Initialization
// =============================
function init() {
  initModeSwitch();
  initMouseMode();
  initKeyboardMode();
}

// =============================
// Mode Switch (Keyboard <-> Mouse)
// =============================
function initModeSwitch() {
  options.forEach((option, index) => {
    option.addEventListener("click", () => {
      options.forEach((opt) => opt.classList.remove("active"));
      option.classList.add("active");
      current_mode = option.dataset.value;

      // Move slider
      slider.style.transform = `translateX(${index * 150}px)`;

      console.log("Mode:", current_mode);
    });
  });
}

// =============================
// Mouse Mode
// =============================
function initMouseMode() {
  mouseKeys.forEach((keyEl) => {
    keyEl.addEventListener("click", (e) => {
      if (current_mode !== "mouse") return;
      e.preventDefault();

      const char = e.target.dataset.key;
      if (char) type(char);
    });
  });
}

// =============================
// Keyboard Mode
// =============================
function initKeyboardMode() {
  document.addEventListener("keydown", (e) => {
    if (current_mode !== "keyboard") return;

    e.preventDefault();
    const dataKey = mapPhysicalKeyToDataKey(e);

    if (dataKey) {
      highlightKey(dataKey);
      type(dataKey);
    }
  });

  document.addEventListener("keyup", (e) => {
    const dataKey = mapPhysicalKeyToDataKey(e);
    if (dataKey) unHighlightKey(dataKey);
  });
}

// =============================
// Key Mapping
// =============================
function mapPhysicalKeyToDataKey(e) {
  switch (e.key) {
    case " ": return "spacebar";
    case "Backspace": return "del";
    case "Enter": return "return";
    case "Tab": return "tab";
    case "Escape": return "esc";
    case "CapsLock": return "caps-lock";
    case "Shift": return "shift";
    case "ArrowLeft": return "left-key";
    case "ArrowRight": return "right-key";
    case "ArrowUp": return "up-key";
    case "ArrowDown": return "down-key";
    default:
      if (e.key.length === 1) return e.key.toLowerCase();
      return null;
  }
}

// =============================
// Key Visual Feedback
// =============================
function highlightKey(dataKey) {
  const vKey = document.querySelector(`[data-key="${dataKey}"]`);
  if (vKey) vKey.classList.add("active-physical-key");
}

function unHighlightKey(dataKey) {
  const vKey = document.querySelector(`[data-key="${dataKey}"]`);
  if (vKey) vKey.classList.remove("active-physical-key");
}

// =============================
// Typing Logic
// =============================
function type(char) {
  if (char === "spacebar") {
    display.value += " ";
  } else if (char === "del") {
    display.value = display.value.slice(0, -1);
  } else if (char === "tab") {
    display.value += "   ";
  } else if (char === "caps-lock") {
    capsOn = !capsOn;
  } else if (char === "esc") {
    display.value = "";
  } else if (char === "return") {
    display.value += "\n";
  } else if (char === "shift") {
    shiftOn = true;
  } else if (["left-key", "right-key", "up-key", "down-key"].includes(char)) {
    console.log(`Move cursor: ${char}`);
  } else {
    if (/[a-z]/i.test(char)) {
      display.value += (capsOn || shiftOn) ? char.toUpperCase() : char.toLowerCase();
    } else {
      display.value += char;
    }
    shiftOn = false;
  }
}

// =============================
// Start App
// =============================
init();





// const switchEl = document.querySelector(".switch");
// const slider = document.querySelector(".slider");
// const options = document.querySelectorAll(".switch .option");

// //Display context in input field
// const display = document.getElementById('display');

// //By default the capslock and shift is off.
// let capsOn = false;
// let shiftOn = false;
// let current_mode = "keyboard";
// //the toggle bar is set to keyboard mode
// // let current_mode = option.dataset.value;

// //the toggle functionality switching from keyboard to mouse mode

// options.forEach((option, index) => {
//   option.addEventListener("click", () => {
//     options.forEach(opt => opt.classList.remove("active"));
//     option.classList.add("active");
//     current_mode = option.dataset.value;
//     // Move slider
//     slider.style.transform = `translateX(${index * 150}px)`;

//     console.log("Mode:", current_mode);
//   });
// });




// //event listner when the mode is mouse
// const mouse_click = document.querySelectorAll('[data-key]')

// mouse_click.forEach((key_element)=>{
//     key_element.addEventListener('click', e => {
//         if(current_mode === "mouse"){
// // document.addEventListener("keydown", (e)=>{
//     e.preventDefault();
//     // console.log("key Pressed", e.key);

//             const char= e.target.dataset.key;
//             if(char){
//                 type(char);
//             }

            
//         }
//     })

// })




// /**
//  *  @type(): this function has the functionality of all the keys, when pressed.
//  */

// function type(char){
//     if(char === 'spacebar'){
//                 display.value += " ";
//             }
//             else if(char === 'del'){
//                 display.value = display.value.slice(0, -1);
//             }
//             else if(char === 'tab'){
//                 display.value += '   ';
//             }
//             else if(char === 'caps-lock'){
//                 capsOn = !capsOn;
//             }
//             else if(char === 'esc'){
//                 display.value = '';
//             }
//             else if(char === 'return'){
//                 display.value += "\n";
//             }
//             else if(char === "shift"){
//                 shiftOn = true;
//             }
//             else if(['left-key', 'right-key', 'up-key', 'down-key'].includes(char)){
//                 console.log(`Move cursor: ${char}`);
//             }
//             else{
//                 if(/[a-z]/i.test(char)){
//                     display.value += (capsOn || shiftOn) ? char.toUpperCase() : char.toLowerCase();
//                 }else{
//                     display.value += char
//                 }
//                 shiftOn = false;
//             }
// }



// // map physical key event to virtual keyboard data-key
// function mapPhysicalKeyToDataKey(e) {
//     switch (e.key) {
//         case " ": return "spacebar";
//         case "Backspace": return "del";
//         case "Enter": return "return";
//         case "Tab": return "tab";
//         case "Escape": return "esc";
//         case "CapsLock": return "caps-lock";
//         case "Shift": return "shift";
//         case "ArrowLeft": return "left-key";
//         case "ArrowRight": return "right-key";
//         case "ArrowUp": return "up-key";
//         case "ArrowDown": return "down-key";
//         default:
//             // letters, numbers, symbols
//             if (e.key.length === 1) {
//                 return e.key.toLowerCase();
//             }
//             return null;
//     }
// }

// // physical keyboard listener
// document.addEventListener("keydown", (e) => {
//     if (current_mode !== "keyboard") return    // only when in keyboard mode
    
//         e.preventDefault(); // stop actual typing in <input> or <textarea>
//         const dataKey = mapPhysicalKeyToDataKey(e);

//         if (dataKey) {
//             // visual press feedback
//             const vKey = document.querySelector(`[data-key="${dataKey}"]`);
//             if (vKey) vKey.classList.add("active-physical-key");

//             // call your unified typing logic
//             type(dataKey);
        
//     }
// });

// // remove visual highlight when key released
// document.addEventListener("keyup", (e) => {
//     const dataKey = mapPhysicalKeyToDataKey(e);
//     if (dataKey) {
//         const vKey = document.querySelector(`[data-key="${dataKey}"]`);
//         if (vKey) vKey.classList.remove("active-physical-key");
//     }
// });

























