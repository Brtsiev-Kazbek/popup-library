# popup-library
Библиотека для быстрого создания PopUp уведомлений на вашем сайте

## Подключение:
Для начала вам необходимо подключить **popup.css** (Стили для PopUp уведомлений) и **popup.js** (Логика PopUp уведомлений).

Для подключения, необходимо скачать данные файлы и скопировать их в директорию сайта.

Код для подключения:

    <link rel="stylesheet" href="popup.css">
    <script src="popup.js"></script>`

## Использование:
Создание PopUp уведомления:

```javascript
<div>
</div>

<script>
	let div = document.querySelector('div');
	
	let popup = new Popup(div); //Передаем объект, который будет PopUp уведомлением.
	
	popup.show('glide'); //Вывести PopUp уведомление с анимацией скольжения.
	
	popup.hide('glide'); //Скрыть выведенное PopUp уведомление.
	
	popup.timeShow('glide', 2); //Вывести PopUp уведомление на 2 секунды.
</script>
```
**Существующие на данный момент анимации:**
1. **glide** - анимация скольжения.
2. **flash** - анимация мерцания.
3. **turn** - анимация поворота.
(Передавать имена в качестве строки)

**Для стилизации PopUp увеломления** рекомендуется **создать дочерний блок** PopUp элемента (тот, который передавали при создании PopUp уведомления), **и давать стили ему**.
