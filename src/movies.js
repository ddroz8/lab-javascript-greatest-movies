// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    return moviesArray.map(function(element) {
    return element.director;
    })
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    let dramaSpielberg = moviesArray.filter(element => element.director === "Steven Spielberg").filter(element => element.genre.includes("Drama"))
    return dramaSpielberg.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if(!moviesArray.length){
        return 0;
    }
    const average = moviesArray.reduce((accumulator,currentValue) => {
        if(!currentValue.score){
            return accumulator;
        }
        else return accumulator + currentValue.score; //suma de puntuaciones
    }, 0) / moviesArray.length; //dividir entre numero de películas
    return Math.round(average * 100) / 100; //para redondear resultado a 2 decimales
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let averageDrama = moviesArray.filter(element => element.genre.includes("Drama"));
    return scoresAverage(averageDrama);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    let year = moviesArray.sort((movie1, movie2) => {
        return movie1.year - movie2.year;
    })
    return year;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const orderedMovies = moviesArray.map((element) => element.title) //array de titulos de peliculas
    orderedMovies.sort((a,b) => {
        return a-b;
    })
    return orderedMovies.slice(0,20);
}
  

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {

}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {

}

/*Ej. 1 Corrección profe
    const result = [];
    moviesArray.forEach((movie) => {
        if (result.indexOf(movie.director) === -1){
            result.push(movie.director);
        }
    });
    return result;

    //otro
    return moviesArray.map((el)=>el.director
*/
