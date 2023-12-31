/*sum questions*/
/* no repeatable values, such as [2,5,4,5]//no repeatable value

/*1. return value of twoSum*/
//my though -sort
/**
 * @param {Number[]} arr
 * @param {Number} target
 * @return {Number}
 */
function twoSum(arr, target) {
    arr.sort((a, b) => a - b);//ascending
    let r = 0, l = arr.length - 1;
    let res = [];
    while (r < l) {
        if (arr[r] + arr[l] < target) {
            r++;
        }
        else if (arr[r] + arr[l] > target) {
            l--;
        }
        else {
            res.push(r);
            res.push(l);
        }
    }
    return res;
}
//return index of twoSum
/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number[]}
 */
function twoSum2(arr, target) {
    let map = new Map();
    for (let i = 0, j = arr.length - 1; i < arr.length; i++) {
        map.set(arr[i], i);
        if (map.has(target - arr[i])) {
            return [[map.get(target - arr[i]), i]];
        }
    }
    return [];
}
//return index of twoSum, but input one has duplicates, you should make result be unique
//eg: [1,2,5,3,4,3,4] -> 7 [2,5] [3,4]
function twoSum3(arr, target) {
    arr.sort((a, b) => a - b);//make ascending order
    let i = 0; j = arr.length - 1;
    let res = [];
    while (i < j) {
        let val1 = arr[i], val2 = arr[j];
        if (arr[i] + arr[j] < target) {
            while (i < j && arr[i] === val1) i++;
        }
        else if (arr[i] + arr[j] > target) {
            while (i < j && arr[j] === val2) j--;
        }
        else {
            res.push([i, j]);
            while (i < j && arr[i] === val1) i++;
            while (i < j && arr[j] === val2) j--;
        }
    }
    return res;
}
/* 3Sum */
function threeSum(nums, target = 0) {
    nums.sort((a, b) => a - b);
    let res = [];
    for (let i = 0; i < nums.length;) {
        let val = nums[i];
        let twoSum = twoSum4(nums, i + 1, target - nums[i]);
        if (twoSum) {
            for (let x of twoSum) {
                res.push([nums[i], ...x]);
            }
        }
        while (i < nums.length && val === nums[i])
            i++;
    }
    return res;
}
function twoSum4(nums, start, target) {
    let i = start;
    let j = nums.length - 1;
    let res = [];
    while (i < j) {
        let sum = nums[i] + nums[j];
        let val1 = nums[i];
        let val2 = nums[j];
        if (sum < target) {
            while (i < j && nums[i] === val1)
                i++;
        }
        else if (sum > target) {
            while (i < j && nums[j] === val2)
                j--;
        }
        else {
            res.push([nums[i], nums[j]]);
            while (i < j && nums[i] === val1)
                i++;
            while (i < j && nums[j] === val2)
                j--;
        }
    }
    return res;
}
/*4Sum*/
function nSum(nums, n, start, target) {
    let res = [];
    if (n < 2 || nums.length < n) return res;
    else if (n === 2) {
        let i = start;
        let j = nums.length - 1;
        while (i < j) {
            sum = nums[i] + nums[j];
            let var1 = nums[i];
            let var2 = nums[j];
            if (sum < target)
                while (i < j && nums[i] === var1) i++;
            else if (sum > target)
                while (i < j && nums[j] === var2) j--;
            else {
                res.push([i, j]);
                while (i < j && nums[i] === var1) i++;
                while (i < j && nums[j] === var2) j--;
            }
        }
        //return res;
    }
    else {
        for (let i = start; i < nums.length;) {
            let val = nums[i];
            let nSum = nSum(nums, n - 1, i + 1, target - nums[i])
            if (nSum)
                for (let x of twoSum) {
                    res.push([nums[i], ...x]);
                }
            while (i < nums.length && val === nums[i])
                i++;
        }
        //return res;
    }
    return res;
}