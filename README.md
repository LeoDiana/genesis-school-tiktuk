# genesis-school-tiktuk
Practical task for Genesis Front-End School

## Завдання
 
Створити сайт-аналог TikTuk

## Реалізовані завдання
- стрічка новин
- сторінка юзера
- пагінація постів в стрічці новин
- пропрацьовані помилки від API (ErrorHandler компонент)
- адаптив під мобільну версію
- анімація завантаження відео
- автоматичне програвання відео коли воно з'являється в полі зору
- відео можна поставити на паузу

### Запити до API
Якщо з якихось причин не потрібно звератись до API, то в файлі `/api/apiCalls.ts` можна змінити константу `GET_DATA_FROM_API`. При `true` данні будуть братись з API, при `false` - з бережених даних в JSON

### Routing
в додатку реалізовано два роути:
- `/` - стрічка з новинами. Перейти на неї можна натиснувши на лого в навбарі
- `/user/:username` - сторінка юзера. Перейти на неї можна натиснувши на аваратку чи ім'я користувача в пості на сторінці новин
