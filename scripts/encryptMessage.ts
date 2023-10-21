import { abc } from './abc'
import { key, message } from '../message.json'

if (key.length !== abc.length) {
  console.error('Длина ключа шифрования в message.json не совпадает с длиной алфавита')
}

const eTable = new Array(abc.length).fill(0)

for (let i = 0; i < key.length; i++) {
  const k = abc.findIndex((c) => c === key[i])
  if (k === -1) {
    console.error(`Алфавит не содержит символ '${key[i]} (${i})'`)
  }

  eTable[k] = i
}

const fMsg = message.toLocaleLowerCase()

let eMsg = ''
for (let i = 0; i < fMsg.length; i++) {
  const cI = abc.findIndex((c) => c === fMsg[i])
  if (cI === -1) continue

  eMsg += abc[eTable[cI]]
}

console.log('Зашифрованное сообщение:')
console.log(eMsg)
