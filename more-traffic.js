let light = "red";

function nextLight() {
  switch (light) {
    case "red":
      light = "green";
      break;
    case "green":
      light = "yellow";
      break;
    case "yellow":
      light = "red";
      break;
  }
  console.log("The next light is:" + light);
}

// To make it automatic
// run nextlight over and over again every 2 seconds

setInterval(nextLight, 2000);
