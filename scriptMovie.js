

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}; 

const a = prompt('один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?'),
      c = prompt('один из последних просмотренных фильмов?', ''),
      d = prompt('На сколько оцените его?');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);

if (personalMovieDB.count < 50) {
    alert ('Иди смотреть кинцо, быдло!');
} else if (personalMovieDB.count < 100) {
    alert ('Маладца!');
} else {
    alert ('Да вы человек высокой культуры!');
}

(personalMovieDB.movies[a] < 10) ? alert ('Да вы кинокритик, мсье!') : alert ('А не жирно?'); //тернарный оператор

switch (personalMovieDB.count) { //СТРОГОЕ СРАВНЕНИЕ! ТОЛЬКО СТРОГОЕ. ТОЛЬКО СРАВНЕНИЕ ===, если ты, блядь, не понял.
    case 0:
        alert ('Ты как из пещеры вылез?');
        break;
    case 1:
        alert ('Ну и как тебе "прибытие поезда"?');
        break;
    case 2:
        alert ('да ты ещё даже не совсем безнадёжен!');
        break;
    default:
        alert ('ну посмотрел и посмотрел. Чо бухтеть-то?');
        break;
}