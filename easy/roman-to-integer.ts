function romanToInt(s: string): number {
    const romanToValue = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }

    let result = 0

    for (let i = 0; i < s.length; i++) {
        const currentValue = romanToValue[s[i]]
        const nextValue = romanToValue[s[i+1]]

        if (nextValue > currentValue) {
            result += (nextValue - currentValue)
            i++
        } else {
            result += currentValue
        }
    }

    return result
};