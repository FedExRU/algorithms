/**
 * Напишите алгоритм генерации пароля длины n. Пароль должен генерироваться случайным образом и содержать
 * как минимум одну заглавную букву, одну строчную, одну цифру и один специальный символ.
 */

const arg: string = process.argv[2]

const MIN_PASSWORD_LENGTH = 4

const alphabet = 'abcdefghijklmnopqrstuvwxyz'

const numbers = '01234567890'

const specialChars = '~!@#$%^&*()_+-=`<>/|\\'

const getRandomChar = (isUpperCase = false): string => {
  const char = alphabet[Math.floor(Math.random() * alphabet.length)]

  if (isUpperCase) {
    return char.toLocaleUpperCase()
  }

  return char
}

const getRandomNumber = (): string => numbers[Math.floor(Math.random() * numbers.length)]

const getRandomSpecialChar = (): string => specialChars[Math.floor(Math.random() * specialChars.length)]

const generatePassword = (length = MIN_PASSWORD_LENGTH) => {
  if (length < MIN_PASSWORD_LENGTH) {
    throw new Error(`Password length must me greater than ${MIN_PASSWORD_LENGTH} characters!`)
  }

  const password = [
    getRandomChar(),
    getRandomChar(true),
    getRandomNumber(),
    getRandomSpecialChar()
  ]

  while (password.length < length) {
    const symbolTypeDetection = Math.floor(Math.random() * 3)

    if (symbolTypeDetection === 0) {
      password.push(getRandomChar())
    }
    if (symbolTypeDetection === 1) {
      password.push(getRandomChar(true))
    }
    if (symbolTypeDetection === 2) {
      password.push(getRandomNumber())
    }
    if (symbolTypeDetection === 3) {
      password.push(getRandomSpecialChar())
    }
  }

  return password.sort(() => Math.random() - Math.random()).join('')
}

console.log(generatePassword(Number(arg)))