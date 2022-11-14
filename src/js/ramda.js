global Promise*/
// import * as BadApi from '../lesson3/api-callback'

// let some = new Promise((resolve, reject) => {
//     window.setTimeout(() => {
//     Math.random() > 0.5 ? resolve() : reject()
//     }, 200)
// });

// console.log(some);
// some.then((res) => {
//     console.log(res);
// })

// BadApi.userReg( (res)=> {
//     console.log(res);    
//     BadApi.userAuth(res.id, (resAuth) => {
//         console.log(resAuth);
//     }, (e) =>)
// console.log(e.msg);
// });

import 'babel-polyfill'

const str = 'Я люблю работать';
console.log(str.charAt(6))

const strC = '';
console.log(strC.concat('Я ', 'ты'));

const strEnds = 'Я ты, он она, вместе!'
const resWith = strEnds.endsWith('вместе!');  // true
const resWithEnds = strEnds.endsWith('вместе', strEnds.length - 1);  // true
console.log(resWith);
console.log(resWithEnds);
//--------------------------------
const strIncludes = 'Репрезентативная система, пример как слуховая или зюрительная'
// const strInc = strIncludes.includes('з', str.lengt); // начиная поиск с 36 символа к нету в строке
const strInc = strIncludes.includes('з', strIncludes.indexOf('ю') + 1)
console.log(strInc);
//---------------------------------
const matchMT = 'abca'.match(/a/gi); // array | null
console.log(matchMT);
//------------------------------------
const padStartMT = 'adc'.padStart(6,'набор символов'); // new str | str
console.log(padStartMT);
const padEndMT = 'adc'.padEnd(6,'набор символов'); // new str | str
console.log(padEndMT);
//-------------------------------
const repratMT = 'Я не повторяю '.repeat(2); // str 
console.log(repratMT);
//----------------------------------
const replaceMT = 'Я заменяю местами'.replace('за', 'не')
const replaceMTS = 'Я заменяю местами'.replace(/а/gi, 'А')
console.log(replaceMT);
console.log(replaceMTS);
//------------------------------------
import R, { add } from 'ramda'
import { _ } from 'core-js';
// import { Math } from 'core-js';

const res = add(2, 3);
console.log(res);
//----------------------------------
const mapping = R.addIndex(R.map)
const result = mapping((val, ar) => val + ar, ['a', 'b', 'c'])
console.log(result);
//-------------------------------------------
const arr = [0, 1, 2, 3, 4];
const resASJ = R.adjust(1, (val) => val.toString(), arr)
console.log(resASJ);
//---------------------------------------
// const strAll = ['Я', 'ты', 'он', 'он', 'вместе!'] // false
const strAll = ['он', 'он'] // true
const resAll = R.all(R.equals('он'), strAll); // все элементы должны удовлетворять условию функции и тогда вернет true
console.log(resAll);
//---------------------------------
const isQueen = R.propEq('rank', 'Q')
const isSpade = R.propEq('suit', '♠︎')
const isQueenOfSpades = R.allPass([isQueen, isSpade]);
const isQuinNew = isQueenOfSpades({rank: 'Q', suit: '♠︎'}); // true
console.log(isQuinNew);
//----------------------
const t = R.always(new Set([{a: 1, b: 2}])); // теперь это обьекt t я могу его вызвать как функцию
console.log(t())
const userRandom = {
    user: null,
    pass: null,
    random: t()
}
console.log(userRandom.random);
//-----------------------------------
const andR = R.and(false, false); // вернет true если оба аргумента true
console.log(andR);
//----------------------------------------
const any = R.any((a) => Math.random(a) * 25 )([1])
console.log(any);
//--------------------
const apert = R.aperture(4,[1,2,3,4,5,6]);
console.log(apert);
//------------------------
const append = R.append(2,[{a:1, b:2}])
console.log(append);
const prepend = R.prepend(2,[{a:1, b:2}])
console.log(prepend);
//-----------------------
const gMetric = R.applySpec({
    sum: R.add,
    nested: {
        mul: R.multiply
    }
})
console.log(gMetric(2, 3));
console.log(R.multiply(2)(4));

// y(x) {
//     console.log(x*1);
// };
// y(2);

function y(x) {
    return x*1;
} 
let sum = y(2);
// let s = <h1>`выаыв ${e}`</h1>
let a = document.querySelector('.elem1');
a.innerHTML =`<strong></strong><em>${sum}</em>`
console.log('==================================== 14.03.2019');
// ---------------------------------
const myArr = [1,2,3,4,5,6,7,8]
const myString = ['я', 'ты', 'он', 'она']
// R.forEach(element => console.log(element), myArr); 
// const summ = myArr.forEach((el) => console.log(el * 2));
// R.forEach(element => console.log( element * 2 ), myArr);

const mapp = myArr.map((x) => x * 2);
console.log(mapp);
const mapRamda = R.map((el)=> el.replace(/он/gi, 'они'), myString);
console.log(mapRamda);

const filterRamda = R.filter((el) => el % 2 === 0, myArr);
console.log(filterRamda); // массив с функция вернула true для элементов // четные числа
const rejectRamda = R.reject((el)=> el % 2 === 0, myArr);
console.log(rejectRamda); // массив с функция вернула false для элементов // нечетные числа

const findRamda = R.find((el) => el % 2 === 0, myArr)
console.log(findRamda);

const reduceRamda = R.reduce((accum, value) => accum + value, 2, myArr);
console.log(reduceRamda); // 38 

const isEven = x => x % 2 === 0 // мы знаем что любое четное число является не четным
const complement = R.find(isEven, myArr)
console.log(complement); // увидим 2
const newComplement = R.find(R.complement(isEven), myArr)
console.log(newComplement); // увидим 1

const employers = {
    age: 18,
    naturalizedDate: true,
    birthCountry: 'OUR_COUNTRY'
}
//--------------------------------------------------
// const wasBornInCountry = person => person === employers.birthCountry
const wasBornInCountry = person => R.equals(person, employers.birthCountry) 
const wasCountry = person => R.identical(person, employers.birthCountry)
console.log(wasCountry(employers)); // В дополнение к equals есть ещё identical для определения, являются ли два значения ссылками на то же пространство в памяти.
const wasNaturalized = person => Boolean(employers.naturalizedDate)
const isOver18 = (person) => R.gte(person, employers.age)
// const isCitizen = person => wasBornInCountry('OUR_COUNTRY') || wasNaturalized(person)
// const isEligibleVote = person => isCitizen(person) && isOver18(19)
// Но иногда нам нужно применить &&, || и ! к различным значениям. Для подбоных случаев Ramda предоставляет нам функции and, or и not. Я думаю следующим образом: and, or и not работают со значениями, в то время как both, either и complement работают с функциями.
const isCitizen = R.either(wasBornInCountry, wasNaturalized);
const isEligibleVote = R.both(isCitizen, isOver18)
console.log(`Человек гражданин страны? ${isCitizen(employers)} и старше 18 лет? ${isEligibleVote(18)}`);
console.log('==================================== 15.03.2019');
// Ramda также предоставляет gt для >, lt для < и lte для <=
// -----------------------------

// Конвеер --------------------
// const multiply = (a, b) => a * b
// const addOne = x => x + 1
// const square = x => x * x
 
// const operate = (x, y) => {
//   const product = multiply(x, y)
//   const incremented = addOne(product)
//   const squared = square(incremented)
 
//   return squared
// }

// const operat = (x, y) => square(addOne(multiply(x, y)))
// console.log(operat(2, 3));
// const operate = R.pipe(
//     multiply,
//     addOne,
//     square
// )

const square = (x) => R.multiply(x, x)
const operate = R.compose (
    square,
    R.inc,
    R.multiply
)(2, 2)
console.log(operate)
// Конвеер --------------------
// Каррирование ---------------
const book = [
        {
            title: 'arr',
            year: 1990
        },
        {
            title: 'barr',
            year: 2010
        },
        {
            title: 'sarr',
            year: 2005
        }
    ];

// const publishedInYear = (book, year) => book.year === year;
// const publishedInYear = (year) => (book) => R.equals(book.year, year)

// const titlesForYear = (books, year) => {
// //   const selected = R.filter(publishedInYear(year), books)
// const selected = R.filter(R.partial(publishedInYear, [year]), books)  
// //Теперь, когда мы вызывем filter, publishedInYear(year) немедленно вызывается и возвращает функцию, которая берёт книгу, что как раз и нужно для filter
//   return R.map(book => book.title, selected)
// }

// // const publishedInYear = R.curry((year, book) => R.equals(book.year, year))
// const publishedInYear = R.curry((book, year) => R.equals(book.year, year))
// // flip меняет местами аргументы
// const titlesForYear = (books, year) => {    
// // const selected = R.filter(R.flip(publishedInYear)(year), books)  
// const selected = R.filter(publishedInYear(R.__, year), books)  

//     return R.map(book => book.title, selected)
// }
// // Более общий вариант — это аргумент „заполнитель“ (__).
// console.log(titlesForYear(book, 2010));

// const zapolnit = R.curry((a, b, c) => console.log(a, b, c));
// zapolnit(R.__, 'b', 'c');

const publishedInYear = R.curry((year, book) => R.equals(book.year, year))

const titlesForYear = R.curry((year, books ) => 
    R.compose(
        R.map(book => book.title),
        R.filter(publishedInYear(year))
        )(books)
    )
    // параметр года — это конфигурация(что мы ищем?),  данные идут последними book (где мы ищем?)
console.log(titlesForYear(2010, book))

// ----------------------
// const arrMy = [1, 2, 3];
console.log( R.gte(R.and(2, 3), 2)) // 2 b 3 >= 2 // true
console.log(R.isNil(null))
console.log(R.isEmpty(''));

const settings = {
    lineWidth: null
}
// const lineWidth = R.isNil(settings.lineWidth)
// defaultTo проверяет второй аргумент на isNil. Если проверка провалилась он вернёт полученное значение, в ином случае вернёт первый аргумент, переданный ей.
const lineWidth = R.defaultTo(90, settings.lineWidth)
console.log(lineWidth);
console.log('========== 16.03.2019 ==========');
const person = {
    birthCountry: 'OUR_COUNTRY',
    naturalizationDate: '',
    age: null
}

const wasBornCountry = person => R.equals(person.birthCountry, 'OUR_COUNTRY')
const wasNatural = person => Boolean(person.naturalizationDate)
const isOver17 = person => R.gte(person.age, 18)
 
const isCiti = R.either(wasBornInCountry, wasNaturalized)
 
const isEligibleToVote = R.both(isOver18, isCitizen)

console.log(`Человек гражданин страны? ${isCiti()} и старше 18 лет? ${isEligibleToVote(person.age)}`);

const forever21 = age => age >= 21 ? 21 : age + 1;
console.log(forever21(20));

// const forever = age => R.ifElse(R.gte(R.__, 21), R.always(21), (a) => a)(age)
// const foreverIdentyty = age => R.ifElse(R.gte(R.__, 21), R.always(21), R.identity)(age)
// const forever = age => R.ifElse(R.gte(R.__, 21), R.always(21), R.identity)(age)
// identity может принять больше одного аргумента, но всегда вернёт только первый. Если мы хотим вернуть что-то другое, отличное от первого аргумента, для этого существует более общая функция nthArg. Это гораздо менее распространённая ситуация, чем использование identity.
// const forever = age => R.ifElse(R.gte(R.__, 21), R.always(21), R.inc)(age)
// console.log(forever(2));

// Выражение ifElse, в котором одна из логических ветвей является тождественностью, также является типичным патеррном, так что Ramda предоставляет нам больше сокращающих методов.
// Если первая ветвь условия является тождественностью, мы можем использовать unless. Если мы перевернём наше условие на использование gte(__, 16), мы можем использовать unless.
const forever = age => R.when(R.gte(R.__, 21), R.always(21))(age)
console.log(forever(11));
const forever2 = age => R.unless(R.gte(R.__, 21), R.always(21))(age)
console.log(forever2());
// Ramda также предоставляет функцию cond, которая может заменить выражение switch или цепочку выражений if...then...else.
const water = temperature => R.cond([
    [R.gte(50),   R.always('water freezes at  gte 50°C')],
    [R.equals(50), R.always('water boils at 100°C')],
    [R.T,           temp => `nothing special happens at ${temp}°C`]
  ])(temperature)
  console.log(`water - обычная func) res = ${water(50)}`);
  
  console.log('Бесконечная нотация ');
  //Существует два основных руководящих принципа в Ramda, о которых мы уже говорили в третьей части.
    // 1. Передавать данные последними
    // 2. Каррировать все вещи
  //Эти два принципа ведут к стилю, который функциональные программисты называют "бесточечным". Я люблю думать о бесточечном коде как о "Данные? А где данные? Здесь нигде нет данных"

const forEr = R.ifElse(R.gte(R.__, 21), R.always(21), R.inc) // бесточечная
console.log(`Бесточечная с инкрементом 6 + 1 = ${forEr(6)}`);

const alwaysDrivingAge = R.when(R.lt(R.__, 16), R.always(16)) // 
console.log(`Бесточечная с тождеством ${alwaysDrivingAge(28)}`);

const waterNotDot = R.cond([
    [R.equals(100),   R.always('water freezes at gte 50°C')],
    [R.equals(50), R.always('water boils at 100°C')],
    [R.T,           temp => `nothing special happens at ${temp}°C`]
  ])
  console.log(`waterNotDot func ${waterNotDot(49)}`);

const titlesYear = R.curry((year, books) =>
  R.pipe(
    R.filter(publishedInYear(year)),
    R.map(book => book.title)
  )(books)
)
console.log(titlesYear(1990, book));
  // Обратите внимание, что books встречается лишь дважды: один раз как последний параметр в списке аргументов (данные идут последними!), 
  // - и однажды в самом конце функции, когда мы применяем наш конвеер. 
  // - Это похоже на паттерн, который мы видели с age ранее, так давайте применим к этой ситуации похожую трансформацию:
const titlesYearNotDot = year =>
  R.pipe(
    R.filter(publishedInYear(year)),
    R.map(book => book.title)
  )
console.log(`titlesYearNotDot = ${titlesYearNotDot(2010)(book)}`)
// Оно работает! Теперь у нас есть бесточечная версия titlesYearNotDot.

// const wasCount = person => R.equals(person.birthCountry, 'OUR_COUNTRY')
// const wasNatura = person => Boolean(person.naturalizationDate)
// const isOverAge = person => R.gte(person.age, 18)
// const isCitiz = person => R.either(wasBornInCountry, wasNaturalized)(person)
// const isCitiz = R.either(wasBornInCountry, wasNaturalized)
// const isEliToVote = person => R.both(isOver18, isCitizen)(person)
// const isEliToVote = R.both(isOver18, isCitizen)

// Без каррироания
// const wasCount = person => R.equals('OUR_COUNTRY', R.prop('birthCountry', person))
// const wasNatura = person => Boolean(R.prop('naturalizationDate', person))
// const isOverAge = person => R.gte(R.prop('age', person), 18)

// Каррироание
// Далее, давайте используем каррирование, природное свойство equals и gte, 
// - для того чтобы создать новые функции, к которым будет применяться результат вызова prop:
// const wasCount = person => R.equals('OUR_COUNTRY') (R.prop('birthCountry', person))
// const wasNatura = person => Boolean(R.prop('naturalizationDate', person))
// const isOverAge = person => R.gte(18)(R.prop('age', person))

// Это всё ещё выглядит более худшим вариантом, но всё же давайте продолжим. 
// Давайте применим преимущество каррирования снова для всех вызовов prop:
// const wasCount = person => R.equals('OUR_COUNTRY')(R.prop('birthCountry'))(person)
// const wasNatura = person => Boolean(R.prop('naturalizationDate'))(person)
// const isOverAge = person => R.gte(18)(R.prop('age'))(person)
// Снова как-то не очень. Но теперь мы видим знакомый паттерн. Все наши функции имеют тот самый образ f(g(person)), 
// - и как мы знаем из второй части, это эквивалентно compose(f, g)(person)
// const wasCount = R.equals('OUR_COUNTRY')(R.prop('birthCountry'))
// const wasNatura = Boolean(R.prop('naturalizationDate'))
// const isOverAge = R.gte(18)(R.prop('age'))
// &&
// --------------------------------------------------------------------------
// const wasCount = R.compose(R.equals('OUR_COUNTRY'), R.prop('birthCountry'))
// const wasNatura = R.compose(Boolean, R.prop('naturalizationDate'))
// const isOverAge = R.compose(R.gte(18), R.prop('age'))
// // Когда мы начинали, не было очевидно, что наши методы делали две вещи. Они 
// // - обращались к свойству объекта и подготавливали некоторые операции с его значением. Этот рефакторинг в - 
// // - бесточечный стиль сделал это очень явным
// const isCitiz = R.either(wasCount, wasNatura)

// const isEliToVote = R.both(isOverAge, isCitiz)

// console.log(`Человек гражданин страны? ${isCitiz()} и старше 18 лет? ${isEliToVote(person.age)}`);
// ------------------------------------------------------------------------------

const personsArray = [
    {
        name: 'Nicolac',
        age: 19,
        birthCountry: 'OUR_COUNTRY',
        naturalizationDate: true
    },
    {
        name: 'Franchecko',
        age: 22,
        birthCountry: 'OUR_COUNTRY',
        naturalizationDate: false
    },
    {
        name: 'Artyr',
        age: 15,
        birthCountry: 'Dublin',
        naturalizationDate: true
    }
]

const personsObject = 
    {          
        name: 'Nicolac',
        age: 19,
        birthCountry: 'OUR_COUNTRY',
        naturalizationDate: true,
        address: {
            city: 'Moscov',
            zipCode: 765983
        }
    }


// Там, где prop читает одно свойство объекта и возвращает его значение, 
// - pick читает множество свойств из объекта и возвращает новый объект только с ними.
// Если мы просто хотим знать, что наш объект имеет свойство, без чтения его значения, 
// - мы можем использовать функцию has для проверки его свойств, а также hasIn для проверки цепочки прототипов: 
const newPeople = R.pick(['name', 'age'], personsObject)
console.log(newPeople);
const hasPeopleProps = R.hasIn('name', personsObject)
console.log(hasPeopleProps);
// Обратите внимание на то, что path более прощающий, чем prop. path вернёт undefined, если что-либо на пути 
// - (включая оригинальный аргумент) окажется в значении null или undefined, в то время как prop в таких ситуациях вызовет ошибку.
const pathPeople = R.path(['address', 'zipCode'], personsObject)
console.log(pathPeople);
// propOr и pathOr подобны prop и path, совмещённым с defaultTo. 
 // - Они предоставляют вам возможность указать значение по умолчанию для свойства или пути, которые не будут найдены в изучаемом объекте.
const propPathOr = R.pathOr('not address path', ['addres', 'zipCode'], personsObject)
console.log(propPathOr);
// keys возвращает массив, содержащий все названия всех известных свойств объекта. values вернёт значения этих свойств. 
 // - Эти функции могут быть полезны при совмещении с функциями итерации по коллекциям, о которых мы узнали в первой части.
const keyVal = R.keys(personsObject)
console.log(keyVal);
// Добавление, обновление и удаление свойств ------------------
// оператор присваивания: person.name = 'New name'.
// В нашем функциональном, неизменяемом мире, вместо этого мы можем использовать assoc: 
const updatedPersonName = R.assoc('name', 'Artem', personsObject)
console.log(updatedPersonName);
const updatedPersons = R.assocPath(['address', 'city'], 'Dubai', personsObject)
console.log(updatedPersons);

// dissoc / dissocPath / omit
// Что насчёт удаления свойств? 
// - Императивно, мы можем захотеть сказать delete person.age. В Ramda, мы будем использовать dissoc:
// const updatedPersonDissoc = R.dissoc('name', personsObject)
// const updatedPersonDissoc = R.dissocPath(['address', 'zipCode'], personsObject)
// Обратите внимание, что pick и omit немного похожи и очень красиво дополняют друг друга. Они очень удобны для белых списков -
// - (сохранять только определённый набор свойств, используя pick) и чёрных списков (избавляться от определённых свойств через использование omit).
const updatedPersonDissoc = R.omit(['name', 'address'], personsObject)
console.log(updatedPersonDissoc);

const wasCount = R.compose(R.equals('OUR_COUNTRY'), R.prop('birthCountry'))
const wasNatura = R.compose(Boolean, R.prop('naturalizationDate'))
const isOverAge = R.compose(R.gte(R.__, 18), R.prop('age'))

const isQuotes = R.compose (
    R.both(isOverAge),
    R.either(wasCount)
)(wasNatura)
console.log(`Этот человек имеет право голоса? ${isQuotes(personsArray[2])}`);

const isCitiz = R.either(wasCount, wasNatura)
const isEliToVote = R.both(isOverAge, isCitiz)

console.log(`Человек гражданин страны? ${isCitiz(personsArray)} и старше 18 лет? ${isEliToVote(personsArray)}`);


// Трансформация объектов ----------------------------------------------------------------------------------------------------------------
// Теперь мы знаем достаточно для того чтобы работать с объектами в ---------------------------------
// - декларативном и иммутабельном стиле. Давайте напишем функцию celebrateBirthday, которая обновляет возраст персоны на её день рождения.

const nextAge = R.compose(R.inc, R.prop('age'))
// Это очень распространённый паттерн. Вместо того чтобы обновлять свойство на новое значение, 
// - мы в действительности хотим изменить значение через применение функции к старому значению, как мы здесь и сделали
// Ramda ещё раз спасает нас с функцией evolve.evolve принимает объект и позволяет указать функции трансформации для тех свойств, 
// - которые мы желаем изменить. Давайте отрефакторим celebrateBirthday на использование evolve:
// const newCelebratybirthday = person => R.assoc('age', nextAge(person), personsObject)
const newCelebratybirthday = R.evolve({ age: R.inc })
// Данный код говорит, что мы преобразуем указанный объект (который не отображается в силу бесточечного стиля) через создание нового объекта 
// - с теми же свойствами и значениями, но свойство age будет получено через применение inc к оригинальному значению свойства age.
console.log(newCelebratybirthday(personsObject));
// Обратите внимание, что evolve не добавляет новые свойства; если вы укажете трансформацию для свойства, которое не встречается в 
// - обрабатываемом объекте, evolve просто проигнорирует его.

// а сегодняшний день в Ramda имеются такие функции как mergeDeepLeft, mergeDeepRight для рекурсивного 
// - глубокого слияния объектов, а также другие методы для слияний).
// Обратите внимание, что merge принимает только два аргумента. Если у вас есть желание объединить множество объектов в один, 
// - вы можете использовать mergeAll, который принимает массив объектов для объединения

// Я обычно создаю свою утилиту под названием reverseMerge. Она может быть написана как const reverseMerge = flip(merge). 
// - Вызов flip меняет местами первые два аргумента функции, которая к нему применяется.
// function f(a, b, options = {}) {
//     const defaultOptions = { value: 42, local: true }
//     const finalOptions = merge(defaultOptions, options)
//   }
// Обратите внимание, что merge принимает только два аргумента. Если у вас есть желание объединить множество объектов в один, вы можете 
// - использовать mergeAll, который принимает массив объектов для объединения.
const selects = {
    local: false,
    dispathes: 'Redux'
}
const defaultOptions = { local: true, value: 42 }
console.log(R.merge(defaultOptions, selects));
// мы получили чудесный набор инструментов для работы с объектами в декларативном и неизменяемом стиле. Теперь мы можем читать, добавлять, 
// - обновлять, удалять и трансформировать свойства в объектах без изменения оригинальных объектов. И мы можем делать все эти штуки в таком стиле, который позволит легко комбинировать функции между собой.
// ------------------------ Object ---------------------------------

// Array ------------------------------------------------------------
// "Иммутабельность и массивы" =---------------------------------------------
// Эквивалент prop для массива — это nth; эквивалент для pick — это slice, и эквивалент для has — это contains. Давайте взглянем на них: 
const numbers = [10, 20, 30, 40, 50, 60]
console.log(R.nth(3, numbers)); // => 40  (индексы с нуля)
console.log(R.nth(-2, numbers)); // => 50 (отрицательные числа стартуют с конца массива)
console.log(R.slice(2, 5, numbers)); // => [30, 40, 50] // Slice берёт два индекса и возвращает подмассив, который начинается на первом индексе (начиная с нуля) и включает все элементы до второго индекса, но не включая элемент этого индекса
console.log(R.contains(40, numbers)); // true

// Получение доступа к первому и последнему элементам массива довольно распространено, так что Ramda предоставляет короткие функции для этих случаев,
console.log(R.head(numbers)); // 10
console.log(R.last(numbers)); // 60
// Она также предоставляет функции для получения всех элементов, кроме первого (tail), всех, кроме последнего (init)
console.log(R.tail(numbers)); // => [20, 30, 40, 50, 60]
console.log(R.init(numbers)); // => [10, 20, 30, 40, 50]
// первых N элементов (take(N)), и последних N элементов (takeLast(N)):
console.log(R.take(3, numbers)); // => [10, 20, 30]
console.log(R.takeLast(3, numbers)); // => [40, 50, 60]

// Добавляем, обновляем и удаляем элементы массива
// Изучая работу с объектами, мы узнали о функциях assoc, dissoc и omit для добавления, обновления и удаления свойств.
// assoc для объектов. Наиболее распространённые — это insert и update, но Ramda также предоставляет методы append и prepend для типичных 
// - случаев добавления элементов в начало и конец массива. insert, append, и prepend добавляют новые элементы в массив; update "заменяет" 
// - определённый элемент в массиве новым значением.

console.log(R.insert(2, 25, numbers)); // => [10, 20, 25, 30, 40, 50, 60]
console.log(R.append(70, numbers));    // => [10, 20, 25, 30, 40, 50, 60, 70]
console.log(R.prepend(0, numbers));    // => [0, 10, 20, 25, 30, 40, 50, 60]
console.log(R.update(1, 25, numbers)); // => [10, 25, 30, 40, 50, 60]

// Для объединения двух объектов в один, мы ранее узнали о методе merge. 
// - Ramda также предоставляет метод concat для выполнения той же операции с массивами.
const concatAfter = R.flip(R.concat)
console.log(R.concat(numbers, [70, 80, 90]));    // => [10, 20, 25, 30, 40, 50, 60, 70, 80, 90]
const newArrayNumbers = concatAfter(numbers, [70, 80, 90]);    // => [70, 80, 90, 10, 20, 25, 30, 40, 50, 60]

// Ramda также предоставляет несколько возможностей для удаления элементов. remove удаляет элементы по их индексу, в то время как without удаляет их по их значению. 
// - Также есть такие методы как drop и dropLast для типичных случаев, когда мы удаляем элементы из начала или конца массива.
console.log(R.remove(0, 3, newArrayNumbers));  // => [10, 20, 25, 30, 40, 50, 60]
console.log(R.without('70', newArrayNumbers)); // => [80, 90, 10, 20, 25, 30, 40, 50, 60]
console.log(R.drop(4, newArrayNumbers)); // => [20, 25, 30, 40, 50, 60]
console.log(R.dropLast(6, newArrayNumbers)); // => [70, 80, 90]
// Обратите внимание, что remove принимает индекс и количество, в то время как slice принимает два индекса. 

// Преобразование элементов --------------------------------------------------------------------------------------
// Также как и с объектами, мы можем пожелать обновить элемент массива, применив функцию к оригинальному значению.
// const numbers = [10, 20, 30, 40, 50, 60]
// // умножим третий элемент массива на 10 а обновим 0
console.log(R.update(0, R.multiply(10, R.nth(2, numbers)), numbers ) ); // [300, 20, 30, 40, 50, 60]
// Чтобу упростить этот типичный случай, Ramda предоставляет метод adjust, который работает очень похожим образом на evolve для объектов. 
// - Но в отличии от evolve, adjust работает только с одним элементом массива.
console.log(R.adjust(3, R.multiply(10), newArrayNumbers));
//Теперь у нас есть инструменты для работы с массивами и объектами в декларативном и иммутабельном стиле. Это позволяет нам строить программы, 
// - состоящие из маленьких, функциональных строительных блоков, совмещая функции, которые будут делать то, что нам нужно, и всё это без 
// - изменения всех наших структур данных.
// -=-----------------------------------------------------------------------------------------------------------------

// Линзы ---------------------------------------
// Что ещё за линзы?
// Линза объединяет функцию-"геттер" и функцию-"сеттер" в один механизм. Ramda предоставляет набор функций для работы с линзами.
// Мы можем думать о линзах как о чём-то, что фокусируется на определённой части большой структуры данных.

// Линзы могут пригодиться, если мы имеем определённую комплексную структуру данных, от которой мы желаем абстрагироваться при вызове кода. 
// - Вместо того чтобы предоставлять структуру или предоставлять геттеры, сеттеры и трансформеры для каждого доступного свойства, вместо этого мы можем предоставлять линзы.
// Клиентский код далее может работать с нашими структурами данных через использование view, set и over 
// - без связки с точной формой структуры данных

const employer = {
    name: 'Randy',
    socialMedia: {
      github: 'randycoulman',
      twitter: '@randycoulman'
    }
  }
//   Здесь мы используем методы prop и path как наши функции-геттеры, а также assoc и assocPath как наши функции-сеттеры.
//   const nameLens = lens(prop('name'), assoc('name'))
//   const twitterLens = lens(
//     path(['socialMedia', 'twitter']),
//     assocPath(['socialMedia', 'twitter'])
//   )
// Обратите внимание, что мы продублировали аргументы с названием свойства и путём к нужному свойству для этих функций. К счастью, 
// - Ramda предоставляет классные сокращения для наиболее распространённых ситуаций использования линз: lensProp, lensPath и lensIndex.
// lensProp создаёт линзу, которая фокусируется на свойстве объекта
// lensPath создаёт линзу, которая фокусируется на вложенном свойстве объекта
// lensIndex создаёт линзу, которая фокусируется на элементе массива

// Что я могу делать со всем этим?
// Ramda предоставляет три функции для работы с линзами.
// -- view читает значение линзы
// -- set обновляет значение линзы
// -- over применяет функцию трансформации к линзе

const nameLess = R.lensProp('name');
const twitterLens = R.lensPath(['socialMedia','twitter'])
console.log(R.view(nameLess, employer));
console.log(R.set(twitterLens, '@randy', employer))
console.log(R.over(nameLess, R.toUpper, employer))
// В течении этой серии статей, мы узнали, что Ramda имеет несколько основных принципов, которыми движется её API:
// Данные идут последними: почти все функции принимают параметр с данными последним аргументом.
// Каррирование: почти каждая функция в Ramda "каррирована". То есть, вы можете вызвать функцию только с частью неоходимых аргументов, и получить новую функцию, которая будет ожидать оставшиеся аргументы. Как только все аргументы будут предоставлены — оригинальная функция будет вызвана.
// Эти два принципа позволяют нам писать очень чистый функциональный код, который объединяет базовые строительные блоки в более мощные операции.
//--------------------------------------------------------------------------------------------------------------------------------
const sortByFirstItem = R.sortBy(R.prop(0));
const pairs = [[-1, 1], [-2, 2], [-3, 3]];
console.log(sortByFirstItem(pairs)); //=> [[-3, 3], [-2, 2], [-1, 1]

const sortByNameCaseInsensitive = R.sortBy(R.compose(R.toLower, R.prop('name')));
const tolik = {
    name: 'Alice',
    age: 101
  };
  const bob = {
    name: 'Bob',
    age: -10
  };
  const clara = {
    name: 'clara',
    age: 314.159
  };
const people = [clara, tolik, bob]
console.log(sortByNameCaseInsensitive(people));

const xyz = { x: 1, y: 2, z: 3 };
const prependKeyAndDouble = (num, key, obj) => key + (num * 2);
// Функция применяется к трем аргументам: (значение, ключ, объект) . Если важно только значение, используйте mapвместо этого.
console.log(R.mapObjIndexed(prependKeyAndDouble, xyz)); //=> { x: 'x2', y: 'y4', z: 'z6' }

const personsWhere = [
     {
        name: 'Rick',
        age: 19,
        city: 'Moscow',
        sng: true
    },
    {
        name: 'Dick',
        age: 22,
        city: 'Dubai',
        sng: false    
    },
    {
        name: 'Artur',
        age: 9,
        city: 'Washington',
        sng: false
    }
];
// const pers = personsWhere.filter((sng) => R.equals(false, sng.sng)) 
// const persWhere = R.filter((person) => R.where(R.prop('sng', person), )) 
// const persona = personsWhere.find((person) => R.equals(false, person.sng)) 
// console.log(persWhere)

// console.log(R.where ,(R.slice(0, personsWhere.length, personsWhere)));
// console.log(R.path(['0', 'sng'], personsWhere ));