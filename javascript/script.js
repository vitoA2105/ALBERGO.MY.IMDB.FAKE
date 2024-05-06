function searchMovies() {
    const searchInput = document.getElementById('searchInput').value;
    const apiKey = '99736de'; // Inserisci la tua chiave API OMDB qui
    const apiUrl = `http://www.omdbapi.com/?s=${searchInput}&apikey=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            displayMovies(data.Search);
        })
        .catch(error => console.log('Si è verificato un errore:', error));
}

function displayMovies(movies) {
    const searchResults = document.getElementById('searchResults');
    searchResults.innerHTML = '';

    if (movies) {
        movies.forEach(movie => {
            const movieElement = document.createElement('div');
            movieElement.classList.add('movie');
            movieElement.innerHTML = `
                <img src="${movie.Poster}" alt="${movie.Title}">
                <h3>${movie.Title}</h3>
                <p>Anno: ${movie.Year}</p>
            `;
            searchResults.appendChild(movieElement);
        });
    } else {
        searchResults.innerHTML = 'Nessun risultato trovato';
    }
}