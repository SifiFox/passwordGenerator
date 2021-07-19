let alphabet = 'abcdefghjkmnopqrstuvwxyz';
alphabet = alphabet + alphabet.toUpperCase() + '0123456789' + ':.!_?%';
alphabet = alphabet.split('');

function generate(length, alphabet_arr, limit) {
    var passwd = '';                            // Будующий пароль
    var arIndexes = new Uint8Array(length);
    window.crypto.getRandomValues(arIndexes);    // Генерируем криптостойкие ПС индексы массива алфавита

    for(var i = 0; i < arIndexes.length; i++) {
        var ind = arIndexes[i] & limit;            // Выделяем нужное кол-во бит индекса
        passwd += alphabet_arr[ind];        // Записываем символ в будующий пароль
    }

    return passwd;
}

function onClick() {
    var length = document.getElementById('len').value;
    var passwd;
    if(length == '')
        length = 10;
    passwd = generate(length, alphabet, alphabet.length - 1);
    document.getElementById('passwd').value = passwd;
}