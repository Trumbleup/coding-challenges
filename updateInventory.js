function updateInventory(arr1, arr2) {
    const currentList = arr1;
    const newList = arr2;

    const handleDuplicateItems = (currentInv, newInv) => {
        currentInv.forEach((currentItem, i) => {
            let currentItemName = currentItem[1]; 
            newInv.forEach((newItem, j) => {
                let newItemName = newItem[1];
                if (currentItemName == newItemName) {
                    currentItem[0] += newItem[0];
                }
            })
        })
        return currentInv
    }
    const handleNonDuplicateItems = (currentInv, newInv) => {
        const currentInvNames = currentInv.map(item => item[1]);
        newInv.forEach((newItem, i) => {
            const newItemName = newItem[1];
            currentInvNames.forEach(currentItemName => {
                if (newItemName == currentItemName) {
                    newInv.splice(i, 1);
                }
            }) 
        })
        return currentInv.concat(newInv);
    }

    const duplicateUpdatedList = handleDuplicateItems(currentList, newList);
    const overallUpdatedList = handleNonDuplicateItems(duplicateUpdatedList, newList);
    const sortedFinalList = overallUpdatedList.sort((a, b) => {
        const nameA = a[1].toUpperCase();
        const nameB = b[1].toUpperCase();

        if (nameA < nameB) {
            return -1
        }
        if (nameB < nameA) {
            return 1
        }
        return 0
    });

    return sortedFinalList;
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);