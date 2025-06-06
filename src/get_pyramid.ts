/**
 * Напишите алгоритм вывода пирамиды из звездочек с n уровнями.
 * 
 * Кол-во звезд--> 1   *         *             1 <-- Уровень
 *                 3  ***       ***            2 
 *                 5 *****     *****           3 
 *                 7          *******          4
 *                 9         *********         5
 *
 * Одна звезда есть всегда. На каджом новом уровне вложенности кол-во звезд увеличивается на 2.
 * 
 * Нужно выести сначала пробелы, потом звездочки, потом снова пробелы.
 * 
 * Сколько нужно пробелов с одной стороны? макс.уровень - текущий уровень - 1 (потому что есть одна звездочка)
 * Сколько нужно звездочек? Текущий уровень * 2 + 1  (потому что есть одна звездочка)
 */
const WHITESPACE = `\u00A0`
const STAR = `*`
const MIN_LEVELS = 3

const levelArg: number = Number(process.argv[2] || MIN_LEVELS)

export const getPyramid = (maxLevel: number = levelArg): string => {
  if (maxLevel < 3) {
    throw Error(`Pyramid size cannot be less than ${MIN_LEVELS} levels!`)
  }

  let pyramid: string = ''

  for (let i = 0; i < maxLevel; i++) {
    const whitespaces = WHITESPACE.repeat(maxLevel - i - 1)
    pyramid += whitespaces + STAR.repeat(i * 2 + 1)  + whitespaces + `\n`
  }

  return pyramid
}

console.log(getPyramid(levelArg))
