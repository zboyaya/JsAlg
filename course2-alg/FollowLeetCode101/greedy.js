//1.1 Greedy Algorithm
/**
 * Assign Cookies
 * @param { Number[]} hungry
 * @param {Number[]} cookieSize
 * @return {Number}
 */
function getNumberOfKids(hungry, cookieSize) {
    let arr1 = hungry.sort(ascendingSort);
    let arr2 = cookieSize.sort(ascendingSort);
    let i = 0, j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] <= arr2[j]) i++;
        j++;
    }
    return i;
}
function ascendingSort(a, b) {
    return a - b;
}
console.log(getNumberOfKids([1, 2, 3], [1, 2, 3]));
/**
 * Assign Candy
 * @param {Number} kids
 * @return {Number}
 */
function getMinCandyNum(kids) {
    if (kids === null) return 0;
    //kids.sort(ascendingSort);
    let res = 0;
    let acc = 1;
    let temp = kids[0];
    for (let i of kids) {
        if (i === temp) {
            res += acc;
        }
        else if (i < temp) {
            acc--;
            if (acc === 0) {
                acc = 1;
                res++;
            }
            temp = i;
            res += acc;
        }
        else {
            acc++;
            temp = i;
            res += acc;
        }
    }
    return res;
}

function getMinCandyNum2(kids) {
    if (kids === null) return 0;
    let arr = new Array(kids.length).fill(1);
    for (let i = 1; i < kids.length; i++) {
        if (kids[i] > kids[i - 1])//check i-1 's right
            arr[i] = arr[i-1]+1;//right + 1
    }
    for (let i = kids.length - 1; i > 0; i--) {
        if (kids[i] < kids[i - 1])//check i - 1's left
            arr[i-1] = Math.max(arr[i-1], arr[i] + 1);//
    }
    return arr.reduce((a, b) => a + b);

}
console.log(`q2 answer is ${getMinCandyNum([1, 0, 2, 0, 4])}`)
console.log(`q2 answer is ${getMinCandyNum2([1, 0, 2, 0, 4])}`)

/**
 * @param {Number[][]} myRange
 * @return {Number}
 */
//input [[1,2],[1,3],[2,4]]
//output 1 (minimum number of riding off)
function easeOverlapIntervals(myRange){
    let res = 0;
    //1. sort with each of tail number such as 2,3,4
    myRange.sort(function(a,b) {
        return a[1]-b[1];
    });
    let prev = myRange[0][1];
    for(let i = 1; i< myRange.length; i++){//Start from second
        if(myRange[i][0] < prev){
            res++;//discard [1,3]
        }
        else
        prev = myRange[i][1]//let prev become second one
    }
    return res;
}
console.log(easeOverlapIntervals([[1,2],[1,3],[2,4]]));