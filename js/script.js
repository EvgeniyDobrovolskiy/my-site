"use strick";
console.log('hello world');



            //ПЕРЕМЕНЫЕ
 var secondInMinutes =60;
 var minutesInHour = 60;
 var secondInHour = minutesInHour *secondInMinutes;
 secondInHour;
 var hoursInDay =24;
 var secondsInDay = secondInHour*hoursInDay;
 secondsInDay;
 var daysInYear =365;
 var secondsInYear = secondsInDay*daysInYear ;
 secondsInYear;
 var age=29;
 var myYearInSecond=secondsInYear*age;
 myYearInSecond;

 var highFives = 0;
 ++highFives;


 var score = 10;
 score += 7;

 score -= 3;
  
 "Суперпупердлиннаястрока".length;
 23
 var java = "Java";
java.length;
4
var script = "Script";
script.length;
6
var javascript = java + script;
javascript.length;
10
var myName = "Ник";
myName[0];
"Н"
myName[1];
"и"
myName[2];
"к"

 var longString = "Эта длинная строка такая длинная";
longString.slice(4, 18);

"длинная строка"
var longString = "Эта длинная строка такая длинная";
longString.slice(4);

"длинная строка такая длинная"
"Эй, как дела?".toUpperCase();
"ЭЙ, КАК ДЕЛА?"

"эЙ, кАК деЛа?".toLowerCase();
"эй, как дела?"

//МАСИВЫ


var animals=["Белый медведь", "Мартышка", "Кот", "Пес", "Лама"];//-масив
animals.push ("жираф"); //-добавляет к масиву єлемент в конец списка
animals.unshift("конь"); //-добавляет к масиву єлемент в начало списка
animals.pop();//удаляет у массива последний єлемент
animals.shift();// удаляет первый элемент масива
// что бы сохранить элемент присваеваем ему переменную  
var firstAnimal = animals.shift();// значение сохраниться в переменной  firstAnimal

//ОБЬЕДИНЕНИЕ МАСИВОВ
var furryAnimals = ["Альпака", "Кольцехвостый лемур", "Йети"];//Переменная с элементами 1-ого массива
var scalyAnimals = ["Удав", "Годзилла"];//Переменная с элементами 2-ого массива
var furryAndScalyAnimals = furryAnimals.concat(scalyAnimals);//Вызываем метод .concat для сцепления(соединения) 2-х масивов
furryAndScalyAnimals;//массив, в начале которого будут элементы из первого масива
["Альпака", "Кольцехвостый лемур", "Йети", "Удав", "Годзилла"]
furryAnimals;
["Альпака", "Кольцехвостый лемур", "Йети"]
scalyAnimals;
["Удав", "Годзилла"]

//обьединение нескольких масивов
var furryAnimals = ["Альпака", "Кольцехвостый лемур", "Йети"];
var scalyAnimals = ["Удав", "Годзилла"];
var featheredAnimals = ["Ара", "Додо"];
var allAnimals = furryAnimals.concat(scalyAnimals, featheredAnimals);
allAnimals;
["Альпака", "Кольцехвостый лемур", "Йети", "Удав", "Годзилла",
"Ара", "Додо"]


//Поиск индекса элемента в массиве
.indexOf("элемент");//добавляеться после имени переменной
var colors = ["красный", "зеленый", "синий"];
colors.indexOf("синий");
2// индекс элемента
colors.indexOf("зеленый");
1// индекс элемента

colors[2];// команда colors[2] вернет "синий", 
"синий"
colors.indexOf("синий");//а colors.indexOf("синий")вернет 2.
2

var insects = ["Пчела", "Муравей", "Пчела", "Пчела", "Муравей"];
insects.indexOf("Пчела");
0// возвращает 1-вый эллемент


var boringAnimals = ["Мартышка", "Кот", "Рыба", "Ящерица"];
boringAnimals.join();//можно соединить все элементы массива в одну большую строку
"Мартышка,Кот,Рыба,Ящерица"

var boringAnimals = ["Мартышка", "Кот", "Рыба", "Ящерица"];
boringAnimals.join(" - ");// в скоочках можно указать знак разделения строки
"Мартышка - Кот - Рыба - Ящерица"
boringAnimals.join("*");// в скоочках можно указать знак разделения строки
"Мартышка*Кот*Рыба*Ящерица"
boringAnimals.join(" и ");// в скоочках можно указать знак разделения строки
"Мартышка и Кот и Рыба и Ящерица"


//Использование Math.random()

Math.random();//при каждом вызове возвращает случайное число от 0 до 1
0.8945409457664937
Math.random();
0.3697543195448816
Math.random();
0.48314980138093233

//умножьте Math.random() на 10
Math.random() * 10;
7.648027329705656
Math.random() * 10;
9.7565904534421861
Math.random() * 10;
0.21483442978933454

//Округление с помощью Math.floor()
Math.floor(3.7463463);
3
Math.floor(9.9999);
9
Math.floor(0.793423451963426);
0

Math.floor(Math.random() * 4);
2 // может выпасть 0, 1, 2 или 3


var randomWords = ["Взрыв", "Пещера", "Принцесса", "Карандаш"];
var randomIndex = Math.floor(Math.random() * 4);
randomWords[randomIndex];
'Взрыв'
//ккороткая записть 
var randomWords = ["Взрыв", "Пещера", "Принцесса", "Карандаш"];
randomWords[Math.floor(Math.random() * 4)];