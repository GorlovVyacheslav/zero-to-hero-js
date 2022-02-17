// /*
//  1.
// * Напишите функцию которая будет принимать 1 аргумент и в зависимости от типа аргумента
// *
// * Если тип аргумента число или объект -> возвращать true
// * Если тип аргумента функция -> возвращать false
// * Если тип аргумента Строка и длина этой строки не равна 10 -> возвращать "длина вашей строки: <длина строки>
// *                            Если длина 10 -> 'you win'
// * */

function onearguments() {
  if (typeof isNaN || typeof {}) return true;
  if (typeof function () {}) return false;
  if (typeof 'string' && String.length != 10)
    return 'Длина вашей строки: <String.length>';
  if ((String.length = 10)) return 'you win';
  console.log(onearguments);
}
onearguments();
// /*
//  2. Перепишите задачу FizzBuzz, но с использованием цикла.
//  Расчет чисел должен идти до 100
//  */

function fizzBuzz100(number) {
  for (let i = 1; i <= 100; i++) {
    if (!(i % 3) && !(i % 5)) {
      console.log('FizzBuzz');
    } else if (!(i % 3)) {
      console.log('Fizz');
    } else if (!(i % 5)) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }
  console.log(fizzBuzz100);
}
fizzBuzz100();

// // 1. FizzBuzz 3, 5, 3 && % 5

// // function FizzBuzz(number) {}

// // function fizzBuzz100(number) {}

// // /*
//  3. Напишите функцию которая принимает 1 аргумент - массив
//  И возвращает новый массив содержащий типы значений переменных
//  */
function task3() {
  Const myArray = [1, null, undefined, 'str', {}, [], function() { }];
  return [if (typeof 1) = 'number', if (typeof null) = 'object', if (typeof undefined) = undefined,
   if (typeof 'str') = 'string', if (typeof {}) = 'object',
    if(typeof []) = 'object', if(typeof function(){}) = 'function'
  ]
}
task3(myArray);
console.log(task3);

// // typeof

// // let arr = [1, null, undefined, 'str', {}, [], function() {}];
// // let arr = ['number', 'object', undefined, 'string', 'object', 'object', 'function'];

// // /*
//  1. @@SUPER@@. Вам дан массив array, содержащий внутри объекты.
//  Напишите функцию которая внутри цикла проходится по каждому элементу массива
//  И проверяет какой тип данных содержит свойство age, если age NaN,
//  тогда добавляет данному объекту свойство unknownAge: true
cons superArray = [{}]
function () {
  if(typeof age )

}
