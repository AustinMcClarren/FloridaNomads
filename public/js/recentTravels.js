const newFormHandler = async (event) => {
	event.preventDefault();

	const name = document.querySelector("#project-name").value.trim();
	const needed_funding = document
		.querySelector("#project-funding")
		.value.trim();
	const description = document.querySelector("#project-desc").value.trim();

	if (name && needed_funding && description) {
		const response = await fetch(`/api/projects`, {
			method: "POST",
			body: JSON.stringify({ name, needed_funding, description }),
			headers: {
				"Content-Type": "application/json",
			},
		});

		if (response.ok) {
			document.location.replace("/profile");
		} else {
			alert("Failed to create project");
		}
	}
};


//POINTS ADDED EACH TIME YOU SAVE OR UPLOAD.
function addPoints() {
	let points = 0;
	let pointsDisplay = document.getElementById("pointsystem");

	document.addEventListener("click", function () {
		points++;
		pointsDisplay.textContent = points;
	});
}








// new code
// function playGif() {
//   var gifContainer = document.getElementById("gif-container");
//   gifContainer.style.display = "flex"; // Show the GIF container
//   setTimeout(function() {
//     gifContainer.style.display = "none"; // Hide the GIF container after 3 seconds
//   }, 3000);

//!!!!! INSERT CODE HERE FOR WHAT HAPPENS AFTER UPLOAD !!
