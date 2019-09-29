'use strict';
// Напиши функцию findBestEmployee(employees),
// которая принимает объект сотрудников и возвращает имя самого продуктивного
// (который выполнил больше всех задач). Сотрудники и кол-во выполненых задач содержатся
// как свойства объекта в формате "имя":"кол-во задач".

const findBestEmployee = function(employees) {
  let max = 0;
  let name;
  const key = Object.keys(employees);

  for (const keys of key) {
    if (max < employees[keys]) {
      max = employees[keys];
      name = keys;
      // Object.entries(name);
      // Object.entries(max);
      // console.log(name);
      // console.log(max);
    }
  }
  return {
    name,
    max,
  };
};

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  }),
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }),
); // lux
