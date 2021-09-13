"use strict";

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    //ввод количества фильмов с проверками
    start: function() {
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count) || personalMovieDB.count == undefined) {
            personalMovieDB.count = +prompt('Сколько фильмов посмотрел?', '');
        }
    },

    //Ввод оценки с проверкой
    enterFilmRanks: function() {
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
    },

    //реакция на количество
    reactionCount: function() {
        if (personalMovieDB.count < 50) {
            alert ('Иди смотреть кинцо, быдло!');
        } else if (personalMovieDB.count < 100) {
            alert ('Маладца!');
        } else {
            alert ('Да вы человек высокой культуры!');
        }
    },
    
    //реакция на оценку
    //тернарный оператор
    reactionRank: function() {
        for (let key in personalMovieDB.movies) {
            if (personalMovieDB.movies[key] < 10) {
                alert (`${key} : Да вы кинокритик, мсье!`);
            } else {
                alert (`${key} : А не жирно?`);
            }
        }
    },
    
    //особые реакции
    reactionSpecial: function() {
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
    },
    
    //проверка приватности и вывод объекта
    showMyDB: function() {
        if (!personalMovieDB.privat) {
            console.log(personalMovieDB);
        } else {
            console.log('privacy error');
        }
    
    },
    
    //вопрос о жанрах
    writeYourGenres: function() {
        for (let i = 0; i <= 2; i++) {
            let genre = prompt(`Любимый жанр №${i+1}`);
            if (genre == '' || genre == null) {    
                i--;
            } else {
                personalMovieDB.genres[i] = genre;
            }
        }
        
        personalMovieDB.genres.forEach((item, i) => {
        console.log(`Любимый жанр №${i+1} - это ${item}`);
        });
    },

    //переключатель приватности
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        } 
    },
}; 


personalMovieDB.start();
personalMovieDB.enterFilmRanks();
personalMovieDB.reactionCount();
personalMovieDB.reactionRank();
personalMovieDB.reactionSpecial();
personalMovieDB.writeYourGenres();
personalMovieDB.showMyDB();
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB();