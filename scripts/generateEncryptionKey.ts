import { abc } from './abc'
import { getRandomInt } from './utils'

const key = abc.slice()

for (let i = key.length - 1; i > 0; i--) {
  const r = getRandomInt(i)

  const temp = key[i]
  key[i] = key[r]
  key[r] = temp
}

console.log('Ключ шифрования:', key.join(''))
