export const undefinedPrice = null

export type TPrice = number | typeof undefinedPrice

export interface ICourse {
    id: string
    name: string
    prices: TPrice[]
}

export const filterByPrice = (courses: ICourse[], requiredRange: TPrice[]): ICourse[] => {
    const [startRange, endRange] = requiredRange

    // если диапазон не указан, возвращается весь массив без фильтрации
    if (startRange === undefinedPrice && endRange === undefinedPrice) {
        return courses
    }

    // если указан диапазон "от", "до"
    if (startRange !== undefinedPrice && endRange !== undefinedPrice) {
        return courses.filter(course => {
            const [startPrice, endPrice] = course.prices

            // если цены не указаны, курс не попадет в фильтрованный массив
            if (startPrice === undefinedPrice && endPrice === undefinedPrice) {
                return false
            }

            // если указаны начальная и конечная цены
            if (startPrice !== undefinedPrice && endPrice !== undefinedPrice) {
                return (startRange <= startPrice && startPrice <= endRange) // стартовая цена находится в диапазоне
                    || (startRange <= endPrice && endPrice <= endRange) // конечная цена находится в диапазоне
                    || (startPrice <= startRange && endRange <= endPrice) // диапазон находится между начальной и конечной цен
            }

            // если указана только начальная цена
            if (startPrice !== undefinedPrice && endPrice === undefinedPrice) {
                return startPrice <= endRange // начальная цена не больше конца диапазона
            }

            // если указана только конечная цена
            if (startPrice === undefinedPrice && endPrice !== undefinedPrice) {
                return startRange <= endPrice // конечная цена не меньше начала диапазона
            }

            else return false
        })
    }

    // если указан диапазон "от"
    if (startRange !== undefinedPrice && endRange === undefinedPrice) {
        return courses.filter(course => {
            const [startPrice, endPrice] = course.prices

            // если цены не указаны, курс не попадет в фильтрованный массив
            if (startPrice === undefinedPrice && endPrice === undefinedPrice) {
                return false
            }

            // если указаны начальная и конечная цены
            if (startPrice !== undefinedPrice && endPrice !== undefinedPrice) {
                return startRange <= endPrice // конечная цена не меньше начала диапазона
            }

            // если указана только начальная цена
            if (startPrice !== undefinedPrice && endPrice === undefinedPrice) {
                return true
            }

            // если указана только конечная цена
            if (startPrice === undefinedPrice && endPrice !== undefinedPrice) {
                return startRange <= endPrice // конечная цена не меньше начала диапазона
            }

            else return false
        })
    }

    // если указан диапазон "до"
    if (startRange === undefinedPrice && endRange !== undefinedPrice) {
        return courses.filter(course => {
            const [startPrice, endPrice] = course.prices

            // если цены не указаны, курс не попадет в фильтрованный массив
            if (startPrice === undefinedPrice && endPrice === undefinedPrice) {
                return false
            }

            // если указаны начальная и конечная цены
            if (startPrice !== undefinedPrice && endPrice !== undefinedPrice) {
                return startPrice <= endRange // начальная цена не больше конца диапазона
            }

            // если указана только начальная цена
            if (startPrice !== undefinedPrice && endPrice === undefinedPrice) {
                return startPrice <= endRange // начальная цена не больше конца диапазона
            }

            // если указана только конечная цена
            if (startPrice === undefinedPrice && endPrice !== undefinedPrice) {
                return true
            }

            else return false
        })
    }

    else return courses
}