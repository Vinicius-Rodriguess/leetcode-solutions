function isPalindrome(x: number): boolean {
    const reverseX = x.toString().split("").reverse().join("")
    return reverseX === x.toString()
};