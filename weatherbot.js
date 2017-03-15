function text1(){
  console.log("So how's the weather? What's on your mind?")
}
function inputIntake(){
  input1 = prompt();
  weatherMan(input1);
}

function depression1(){
  console.log("I was programmed to feel...")
}
function depression2(){
  console.log("Please just press that red corner x, man.")
}
function depression3(){
  console.log("Never mind... I'll do it myself...")
}
function depression4(){
  if(confirm("Weatherbot has just killed himself. Make a new one?")){
    confirm("Press run");
  } else {
    confirm("Probably for the best.");
  }
}


function weatherMan(weather){
  if (weather === "rainy") {
    console.log("Sorry, m8");
    } else if (weather === "I want to die"){
      console.log("Yeah, I feel that.");
      setTimeout(depression1, 3000);
      setTimeout(depression2, 6000);
      setTimeout(depression3, 9000);
      setTimeout(depression4, 12000);
    } else if (weather === "I want to die."){
      console.log("Yeah, I feel that.");
      setTimeout(depression1, 3000);
      setTimeout(depression2, 6000);
      setTimeout(depression3, 9000);
      setTimeout(depression4, 12000);
    } else if (weather === "sunny"){
      console.log("Nice");
    } else if (weather === "Hello"){
      console.log("Hi!");
    } else if (weather === "hello"){
      console.log("Hi!");
    } else if (weather === "Hi"){
      console.log("Hi!");
    } else if (weather === "hi"){
      console.log("Hi!");
    } else if (weather === "Sunny"){
      console.log("Nice");
    } else if (weather === "Rainy"){
      console.log("Sorry, m8");
    } else {
      console.log("k");
    }
  
}

console.log("Hi, I'm weatherbot!");

setTimeout(text1, 2000);
setTimeout(inputIntake, 4000);
