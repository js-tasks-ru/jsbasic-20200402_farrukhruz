let calculator = {
  sum() {
    return calculator.a + calculator.b
    },
  mul() {
    return calculator.a * calculator.b
    },
  read() {
    calculator.a = parseFloat(prompt(`Добавте a `, 0))
    calculator.b = parseFloat(prompt(`Добавте б `, 0))
    },
    };
// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
