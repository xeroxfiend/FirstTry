let countToTen = []

for (let i = 1; i <= 10; i++) {
    countToTen.push(i)
}

console.log(countToTen)

// trying to remake the deduping function

function logThat(item) {
    console.log(item)
}

dupArray = [0, 1, 3, 3, 5, 4, 6, 6, 7, 8, 1, 2, 6, 8, 9]

function deDup(array, callback) {
    for (let i = 0; i < array.length; i++) {
        for (j = 0; j < array.length; i++) {
            if (array[i] === array[j] && i !== j) {
                array.splice(i, 1)
            }
        }
    } callback(array)
}

deDup(dupArray, logThat)