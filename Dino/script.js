const dino = document.querySelector(".dino");
const gameContainer = document.getElementById("game-container")

let is_dino_jumping = false;
const max_height = 150;
const step = 5;
const interval = 20;

let jump_height = 0;

function jump() {
  if (is_dino_jumping === true) {
    return;
  }
  is_dino_jumping = true;
  jump_height = 0;

  let jumpUp = setInterval(() => {
    jump_height += step;
    dino.style.bottom = jump_height + "px";

    if (jump_height >= max_height) {
      clearInterval(jumpUp);

      let jumpDown = setInterval(() => {
        jump_height -= step;
        dino.style.bottom = jump_height + "px";
        if (jump_height <= 0) {
          clearInterval(jumpDown);
          is_dino_jumping = false;
        }
      }, interval);
    }
  }, interval);
}

document.addEventListener("keydown", (e) => {
  if (e.code === "Space" || e.code === "ArrowUp") {
    jump();
  }
});

function create_cactus(){
    const cactus = document.createElement("img");
    const types = ["/Dino/assets/cactus1.png", "/Dino/assets/cactus3.png"]

    cactus.src = types[Math.floor(Math.random() * types.length)];
    cactus.classList.add("cactus");
    cactus.style.right = "0px;"
    gameContainer.appendChild(cactus);

    moveCactus(cactus);
}

function moveCactus(cactus){
    let cactus_Position = 0;

    const timer = setInterval(()=>{
        cactus_Position += 5;
        cactus.style.right = cactus_Position + "px";

        if(cactus_Position > 800){
            clearInterval(timer);
            cactus.remove();
        }
    }, 20);
}