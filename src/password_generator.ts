/**
 * Напишите алгоритм генерации пароля длины n. Пароль должен генерироваться случайным образом и содержать
 * как минимум одну заглавную букву, одну строчную, одну цифру и один специальный символ.
 */
const lengthArgument: number = Number(process.argv[2])

const letters = 'abcdefghijklmnopqrstuvwxyz'
const numbers = '1234567890'
const specialChars = '!@#$%^&*()_+-=~'

const MIN_LENGTH = 4

const getChar = (uppercase?: boolean) => {
  const char = letters[Math.floor(Math.random() * letters.length)]

  return uppercase ? char.toUpperCase() : char
}

const getNumber = () => numbers[Math.floor(Math.random() * numbers.length)]

const getSpecialChar = () => specialChars[Math.floor(Math.random() * specialChars.length)]

export const generatePassword = (length: number) => {
  if (length < MIN_LENGTH) {
    throw Error(`Password should be at least ${MIN_LENGTH} characters!`)
  }

  const password = [
    getChar(),
    getChar(true),
    getNumber(),
    getSpecialChar()
  ]

  while(password.length !== length) {
    const randomNumber = Math.floor(Math.random() * 4)

    if (randomNumber === 0) {
      password.push(getChar())
    } else if (randomNumber === 1) {
      password.push(getChar(true))
    } else if (randomNumber === 2) {
      password.push(getNumber())
    } else {
      password.push(getSpecialChar())
    }
  }

  return password.sort(() => Math.random() - 0.5).join('')
}

console.log(generatePassword(lengthArgument))