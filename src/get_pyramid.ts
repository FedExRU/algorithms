/**
 * Напишите алгоритм вывода пирамиды из звездочек с n уровнями.
 * 
 * Кол-во звезд--> 1   *         *             1 <-- Уровень
 *                 3  ***       ***            2 
 *                 5 *****     *****           3 
 *                 7          *******          4
 *                 9         *********         5
 *
 */
const WHITESPACE = `\u00A0`
const STAR = `*`
const MIN_LEVELS = 3

const levelArg: number = Number(process.argv[2] || MIN_LEVELS)

export const getPyramid = (maxLevel: number = levelArg): string => {
  let pyramid = ''

  for (let i = 0; i < maxLevel; i++) {
    const whiteSpaces = WHITESPACE.repeat(maxLevel - i - 1)
    pyramid += `${whiteSpaces}${STAR.repeat((i * 2) + 1)}${whiteSpaces}\n`
  }

  return pyramid
}

console.log(getPyramid(levelArg))
