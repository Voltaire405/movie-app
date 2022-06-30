export function get(endpoint) {
    return fetch("https://api.themoviedb.org/3" + endpoint, {
        headers: {
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MTY5ZmU0NmY0ZDRiNDYwZTU1YzZhOTQ1Zjc2OWVhMCIsInN1YiI6IjYyYTUzZGQzZDU1Njk3MThjNmE1MzMyMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-YrR3W1AyisycRI3ig3XSMw5ulfxAR62i0a_AlgSLzk',
            'Content-Type': 'application/json;charset=utf-8'
        }
    })
        .then((response) => response.json());

}