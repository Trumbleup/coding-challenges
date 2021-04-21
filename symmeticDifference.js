// Find the Symmetric Difference
// The mathematical term symmetric difference (△ or ⊕) of two sets is the set of elements which are in either of the two sets but not in both. For example, for sets A = {1, 2, 3} and B = {2, 3, 4}, A △ B = {1, 4}.

// Symmetric difference is a binary operation, which means it operates on only two elements. So to evaluate an expression involving symmetric differences among three elements (A △ B △ C), you must complete one operation at a time. Thus, for sets A and B above, and C = {2, 3}, A △ B △ C = (A △ B) △ C = {1, 4} △ {2, 3} = {1, 2, 3, 4}.

// Create a function that takes two or more arrays and returns an array of their symmetric difference. The returned array must contain only unique values (no duplicates).


function sym(args) {
    let argumentsArray = [...arguments];
    let symDiffArray = argumentsArray[0];
    const symDiffFunc = (arr1, arr2) => {
        let symDiff = [];
        arr1.forEach((val, i) => {
            if (!arr2.includes(val)) {
                symDiff.push(val)
            }
        });
        arr2.forEach((val, i) => {
            if (!arr1.includes(val)) {
                symDiff.push(val)
            }
        });
        return symDiff;
    }
    for (let i = 1 ; i <= argumentsArray.length - 1 ; i++) {
        symDiffArray = symDiffFunc(symDiffArray, argumentsArray[i]);
    }
    symDiffArray.forEach((val, i) => {
        symDiffArray.forEach((nextVal, j) => {
            if (i == j) {
                return
            } else if (val == nextVal) {
                symDiffArray.splice(j, 1);
            }
        })
    });
    return symDiffArray.sort((a,b) => a - b);
}

console.log(sym([1, 2, 3, 3], [5, 2, 1, 4]));