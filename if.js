let age = prompt('Сколько вам лет?');

// if (age < 18) {
//     alert('Вы можете идти');
// } else if (age > 100) {
//     alert('Поздно')
// } else {
//     alert('рановато еще');
// }

switch (age) {
    case '18':
        alert('Вы можете войти');
        break;
    case '100':
        alert('Войдите');
        break;
    default:
        alert('Значение неизвестно');



}