function numJewelsInStones(jewels: string, stones: string): number {
    let jewelCount = 0;
    const stonesArray = stones.split("");

    jewels.split("").forEach(jewelType => {
        const matchingStones = stonesArray.filter(stone => stone === jewelType);
        jewelCount += matchingStones.length;
    });

    return jewelCount;
}
