function print(text) {
  console.log(text);
}
/**
 * Эту функцию нужно поменять так,
 * чтобы функция sayHello работала корректно
 */
function isValid(name) {
  if (name ===' '|| !name.length > 4 || name.length === 4){
return true
 } 
return false
}

/**
 * Эту функцию трогать не нужно
 */
function sayHello() {
  const userName = prompt('Введите ваше имя');
  if (isValid(userName)) {
    print(`Welcome back, ${userName}!`);
  } else {
    print('Некорректное имя');
  }
}