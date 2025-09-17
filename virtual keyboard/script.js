let capsOn = false;
let shiftOn = false;
const display = document.getElementById('display');

const mouse_click = document.querySelectorAll('[data-key]')

mouse_click.forEach((key_element)=>{
    key_element.addEventListener('click', e => {
        const char= e.target.dataset.key;
        if(char === 'spacebar'){
            display.value += ' ';
        }
        else if(char === 'del'){
            display.value = display.value.slice(0, -1);
        }
        else if(char === 'tab'){
            display.value += '   ';
        }
        else if(char === 'caps-lock'){
            capsOn = !capsOn;
        }
        else if(char === 'esc'){
            display.value = '';
        }
        else if(['left-key', 'right-key', 'up-key', 'down-key'].includes(char)){
            console.log(`Move cursor: ${char}`);
        }
        else{
            if(capsOn || shiftOn){
                display.value += char.toUpperCase();
                shiftOn = false;
            }else{
                display.value += char
            }
        }
    })

})

key_element().toUpperCase()

// const myInput = document.getElementById('display');

// myInput.addEventListener('keydown', (e) => {
//     console.log('KeyDOWN:', e.key, e.code);
// });

// myInput.addEventListener('keyup', (e) => {
//     console.log('KeyUP:', e.key, e.code);
// });

// // While keypress is less used, here's how it behaves for comparison
// myInput.addEventListener('keypress', (e) => {
//     console.log('KeyPRESS (character-generating only):', e.key, e.code);
// });


// const wkey = document.querySelector('[data-key="w"]')
// const qkey = document.querySelector('[data-key="q"]')