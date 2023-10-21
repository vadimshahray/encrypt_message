## Настройка рабочей среды

Проект работает в среде Node.js. Для его корректной работы необходимо установить на свой ПК Node.js
версии не ниже указанной в [`package.json`](package.json) в секции [`engines.node`](package.json#L14).

После этого нужно установить `yarn`, используя команду:

```shell
npm install -g yarn
```

Далее необходимо установить зависимости проекта, используя команду:

```shell
yarn install
```

## Генерация ключа шифрования

Для того, чтобы сгенерировать ключ, необходимо выполнить
следующую команду:

```shell
yarn gen-key
```

Сгенерированный ключ отобразиться в окне консоли.

## Шифрование сообщения

Данные для шифрования считываются из файла [`message.json`](message.json). Ключ `key` - ключ шифрования, ключ
`message` - текст для шифрования.

Чтобы запустить скрипт шифрования сообщения, потребуется ввести данную команду:

```shell
yarn encrypt-msg
```
