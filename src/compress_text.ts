/**
 * Напишите алгоритм сжатия заданной строки путем замены последовательностей 
 * одинаковых символов одним символом и числом, определяющим количество его 
 * повторений. Например, строку "aaabbbbbcc" следует сжать в "a3b5c2".
 */

const textArg: string = process.argv[2]

export const compressText = (text: string): string => {
  if (!text?.length) {
    throw Error('text argument cannot be empty!')
  }
  let compressedText: string = text[0]
  let repeatCount = 1

  for (let i = 1; i < text.length; i++) {
    if (text[i] === text[i - 1]) {
      repeatCount++
    } else {
      compressedText += `${repeatCount}${text[i]}`
      repeatCount = 1
    }
  }

  compressedText += `${repeatCount}`

  return compressedText
}

console.log(compressText(textArg))

