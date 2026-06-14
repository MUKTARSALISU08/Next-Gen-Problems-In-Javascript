// Traffic light system

let light = "yellow";

if (light === "red") {
  console.log("Stop");
} else if (light === "yellow") {
  console.log("Slow down");
} else if (light === "green") {
  console.log("Go");
} else {
  console.log("Invalid traffic light color");
}

let lightSwitch = "yellow";

switch (lightSwitch) {
  case "red":
    console.log("Stop");
    break;
  case "yellow":
    console.log("Slow down");
    break;
  case "green":
    console.log("Go");
    break;
  default:
    console.log("Invalid traffic light color");
}
