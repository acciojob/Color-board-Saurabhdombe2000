//your JS code here. If required.
const container = document.querySelector(".container");
// const squares = 800;

// Function to generate random color
function getRandomColor(){
	const letters = "0123456789ABCDEF";
	let color = "#";
	for(let i=0; i<6; i++} {
	color += letters[math.floor(math.random() * 16)]
  }
return color;
}

 // Create 800 squares
for (let i=0; i<=800; i++) {
	const square = document.createElement("div");
	square.classList.add("square");
	

	square.addEventListener("mouseover" () => {
		const color = getRandomColor;
		square.style.backgroundColor = color;

		 // Reset color after 1 second
		setTimeout(() => {
			square.style.backgroundColor = "#1d1d1d";
		}, 1000);
	});
	container.appendChild(square);
}

