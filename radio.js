// Массив с вариантами ответов для радио кнопок
const options = [
    'Вариант 1',
    'Вариант 2',
    'Вариант 3',
  ];
  
  // Функция для создания шаблона радио кнопок
  function createRadioTemplate() {
    const radioContainer = document.createElement('div');
  
    // Создание радио кнопок на основе вариантов ответов
    options.forEach((option, index) => {
      const radioWrapper = document.createElement('div');
      const radioInput = document.createElement('input');
      const radioLabel = document.createElement('label');
  
      radioInput.type = 'radio';
      radioInput.name = 'radioOption';
      radioInput.value = option;
  
      radioLabel.textContent = option;
  
      radioWrapper.appendChild(radioInput);
      radioWrapper.appendChild(radioLabel);
  
      radioContainer.appendChild(radioWrapper);
    });
  
    return radioContainer;
  }
  
  // Пример использования:
  const radioTemplate = createRadioTemplate();
  document.body.appendChild(radioTemplate);
  