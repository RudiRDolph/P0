"use strict";

let numberOfFilms;

//ввод количества фильмов с проверками
function start() {
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms) || numberOfFilms == undefined) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

//ввод фильм-оценка х2 c проверками
function enterFilmRanks() {
    for (let i = 0; i < 2; i++) {
        const a = prompt ('Один из просмотренных фильмов', ''),
              b = prompt ('Оценка', '');
    
        if (a != null && b != null && a != '' && b != '' && a.length < 50 && (!isNaN(b))) {
            personalMovieDB.movies[a] = b;
            console.log ('done!');
        } else {
            console.log ('enter error!');
            i--;
        }
    }
}

//реакция на количество
function reactionCount() {
    if (personalMovieDB.count < 50) {
        alert ('Иди смотреть кинцо, быдло!');
    } else if (personalMovieDB.count < 100) {
        alert ('Маладца!');
    } else {
        alert ('Да вы человек высокой культуры!');
    }
}

//реакция на оценку
//тернарный оператор
function reactionRank() {
    (+personalMovieDB.movies[a] < 10) ? alert ('Да вы кинокритик, мсье!') : alert ('А не жирно?'); 
}

//особые реакции
function reactionSpecial() {
    switch (personalMovieDB.count) { 
        //ТОЛЬКО СТРОГОЕ. ТОЛЬКО СРАВНЕНИЕ ===, если ты, блядь, не понял.
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
}

//проверка приватности и вывод объекта
function showMyDB () {
    if (!personalMovieDB.privat) {
        console.log(personalMovieDB);
    } else {
        console.log('privacy error')
    }

}

//вопрос о жанрах
function writeYourGenres () {
    for (let i = 0; i < 3; i++){
        personalMovieDB.genres[i] = prompt (`Ваш любимый жанр №${i + 1}`);
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}; 

enterFilmRanks();
reactionCount();
//reactionRank();
reactionSpecial();
writeYourGenres();
showMyDB();


