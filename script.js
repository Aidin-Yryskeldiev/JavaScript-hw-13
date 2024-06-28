fetch("https://rickandmortyapi.com/api/character")
	.then((response) => response.json())
	.then(({ results: characters }) => {
		characters.forEach(({ id, image, name, status, species, type, gender }) => {
			const characterCard = document.createElement("div");
			characterCard.className = `character-card ${status.toLowerCase()}`;
			characterCard.innerHTML = `
            <img src="${image}" alt="${name}">
            <h3>${name}</h3>
            <p>Status: ${status}</p>
            <p>Species: ${species}</p>
            <p>Type: ${type || "Unknown"}</p>
            <p>Gender: ${gender}</p>
          `;
			characterCard.addEventListener("click", () => {
				alert(`ID карточки: ${id}`);
			});
			document.body.appendChild(characterCard);
		});
	})
	.catch((error) => console.error("Error fetching characters:", error));
