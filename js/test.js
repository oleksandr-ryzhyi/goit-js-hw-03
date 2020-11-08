"use strict";

// const isComing = prompt('Please, confirm hotel reservation');

// console.log(isComing);

// let cost;
// const subscription = 'free'

// switch (subscription) {
//     case 'free':
//         cost = 0;
//         break;

//     case 'pro':
//         cost = 100;
//         break;

//     case 'premium':
//         cost = 500;
//         break;

//     default:
//         console.log('Error!!!');
// }

// console.log(cost);

// let counter = 0;

// while (counter < 5) {
//   console.log('counter: ', counter);
//   counter += 1;
// }

// let password = "";

// do {
//   password = prompt("Введите пароль длиннее 4-х символов", "");
// } while (password.length < 5);

// console.log("Ввели пароль: ", password);

// const max = 10;

// for (let i = 0; i < max; i += 1) {
//   console.log(i);
// }

// const target = 3;
// let sum = 0;

// for (let i = 0; i <= target; i += 1) {
//   sum += i;
// }

// console.log(sum);

// const max = 10;

// for (let i = 0; i < max; i += 1) {
//   console.log(`${max} % ${i} = `, max % i);
// }

/*
 * Используем цикл для вывода только нечетных чисел.
 * Для чётных i срабатывает continue, выполнение тела прекращается
 * и управление передаётся на следующую итерацию.
 */
// const number = 10;

// for (let i = 0; i < number; i += 1) {
//   if (i % 2 === 0) {
//     continue;
//   }

//   console.log("Нечетное i: ", i); // 1, 3, 5, 7, 9
// }

const friends = ["David", "Michael", "John"];
// console.log(friends);
// console.log(friends.length);
// console.log(friends[0]);
// console.log(friends[2]);

// friends[2] = "Alex";
// friends[3] = "Dexter";
// console.log(friends);

// friends.length = 4;
// console.log(friends.length);
// console.log(friends);

// for (let i = 0; i < friends.length; i += 1) {
//   console.log(friends[i]);
// }

for (const friend of friends) {
  console.log(friend);
}

// const string = "javascript";
// for (const character of string) {
//   console.log(character);
// }

const friendNameToFind = "Alex";
let message;

for (const friend of friends) {
  if (friend === friendNameToFind) {
    message = "Друг найден";
    break;
  }
  message = "Друг не найден";
}
console.log(message);
