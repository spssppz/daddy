fetch("noindex/games.html")
	.then(response => {
		return response.text()
	})
	.then(data => {
		document.querySelector(".slots").innerHTML = data;
	});