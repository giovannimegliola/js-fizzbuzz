


for (let i = 1; i <= 100; i++) {
  const square = document.createElement("div");
  

  if (i % 3 === 0 && i % 5 === 0) {
    square.textContent = "FizzBuzz";
    square.style.backgroundColor = "yellow";

  } else if (i % 3 === 0) {
    square.textContent = "Fizz";
    square.style.backgroundColor = "red";

  } else if (i % 5 === 0) {
    square.textContent = "Buzz";
    square.style.backgroundColor = "blue";

  } else {
    square.textContent = i;
    square.style.backgroundColor = "green";
  }

  document.querySelector(".container").appendChild(square);
}