    function calculatePercentage() {
      // Получаем значения из полей ввода
      var number = parseFloat(document.getElementById('numberInput').value);
      var percentage = parseFloat(document.getElementById('percentageInput').value);

      // Получаем элемент, в который будем выводить результат
      var resultElement = document.getElementById('result');

      // Проверяем, являются ли введенные значения числами
      if (isNaN(number) || isNaN(percentage)) {
        resultElement.innerHTML = 'Пожалуйста, введите числовые значения.';
        return;
      }

      // Вычисляем процент от числа
      var result = (percentage / 100) * number;

      // Выводим результат на страницу
      resultElement.innerHTML = percentage + '% от ' + number + ' составляет ' + result;
    }