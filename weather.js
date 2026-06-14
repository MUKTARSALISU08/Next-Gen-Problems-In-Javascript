let temp = 25;

if (temp > 40) {
  console.log("Wear a loose and light clothing");
} else if (temp > 30) {
  console.log("Wear a light clothing");
} else if (temp > 20) {
  console.log("Wear a warm clothing");
} else if (temp > 10) {
  console.log("Wear a jacket");
} else {
  console.log("Wear a heavy coat");
}

let tempSwitch = 25;
switch (true) {
  case tempSwitch > 40:
    console.log("Wear a loose and light clothing");
    break;
  case tempSwitch > 30:
    console.log("Wear a light clothing");
    break;
  case tempSwitch > 20:
    console.log("Wear a warm clothing");
    break;
  case tempSwitch > 10:
    console.log("Wear a jacket");
    break;
  default:
    console.log("Wear a heavy coat");
}
