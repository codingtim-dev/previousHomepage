// Some random colors
const colors = ["#62DCA1", "#68E2EA", "#A653E8"];

const numBalls = 35;
const balls = [];


let contain = document.createElement("div")
contain.style.position ="absolute"
contain.style.top = "0"
contain.style.width ="100%"
contain.style.height = "3000px"

contain.style.zIndex = "-10"

let balldiv = document.createElement("div");
balldiv.classList.add("ballcontainer");







document.body.append(contain);
contain.append(balldiv)


for (let i = 0; i < numBalls; i++) {
  let ball = document.createElement("div");
  ball.classList.add("ball");
  ball.style.background = colors[Math.floor(Math.random() * colors.length)];
  ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
  ball.style.top = `${Math.floor(Math.random() * 3000)}px`;
  ball.style.transform = `scale(${Math.random()})`;
  ball.style.width = `${Math.random() * 1.5}em`;
  ball.style.height = ball.style.width;
  
 

  balls.push(ball);
  balldiv.append(ball);

  
}

// Keyframes
balls.forEach((el, i, ra) => {
  let to = {
    x: Math.random() * (i % 2 === 0 ? -11 : 11),
    y: Math.random() * 12
  };

  let anim = el.animate(
    [
      { transform: "translate(0, 0)" },
      { transform: `translate(${to.x}rem, ${to.y}rem)` }
    ],
    {
      duration: (Math.random() + 1) * 2000, // random duration
      direction: "alternate",
      fill: "both",
      iterations: Infinity,
      easing: "ease-in-out"
    }
  );
});
