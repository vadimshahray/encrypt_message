import { abc } from './abc'
import { key, message } from '../message.json'

if (key.length !== abc.length) {
  console.error('Длина ключа шифрования в message.json не совпадает с длиной алфавита')
}

const fMsg = message.toLocaleLowerCase()

let eMsg = ''
for (let i = 0; i < fMsg.length; i++) {
  const cI = abc.findIndex((c) => c === fMsg[i])
  if (cI === -1) continue

  eMsg += key[cI]
}

console.log('Зашифрованное сообщение:', '\n' + eMsg)
