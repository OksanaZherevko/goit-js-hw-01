
// Напиши скрипт проверки количества товаров на складе.
//Есть переменные total (количество товаров на складе) и ordered (единиц товара в заказе).
//Сравни эти значения и по результатам выведи:
//Если в заказе указано число, превышающее количество товаров на складе, то выведи сообщение "На складе недостаточно твоаров!".
//В другом случае выводи сообщение "Заказ оформлен, с вами свяжется менеджер".
//Проверь работоспособность кода с разными значениями переменной ordered, например 20, 80 и 130.

const ordered = 100; //количество товаров на складе
const total = 100; //количество единиц товара в заказе

const message = total > ordered ? 'На складе недостаточно товаров!' : 'Заказ оформлен, с вами свяжется менеджер';

console.log(message);

//Работоспособность кода с ordered, например 20:
//const ordered = 100; //количество товаров на складе
//const total = 20; //количество единиц товара в заказе
//const message = total > ordered ? 'На складе недостаточно товаров!' : 'Заказ оформлен, с вами свяжется менеджер';
//console.log(message);


//Работоспособность кода с ordered, например 80:
//const ordered = 100; //количество товаров на складе
//const total = 80; //количество единиц товара в заказе
//const message = total > ordered ? 'На складе недостаточно товаров!' : 'Заказ оформлен, с вами свяжется менеджер';
//console.log(message);


//Работоспособность кода с ordered, например 130:
//const ordered = 100; //количество товаров на складе
//const total = 130; //количество единиц товара в заказе
//const message = total > ordered ? 'На складе недостаточно товаров!' : 'Заказ оформлен, с вами свяжется менеджер';
//console.log(message);


//конструкция if ... else
//const total = 100; //количество товаров на складе
//const ordered = 130; //количество единиц товара в заказе

//if (ordered >= total) {
  
//  console.log('Заказ оформлен, с вами свяжется менеджер');
//} else {
//  console.log('На складе недостаточно товаров!');
//}

