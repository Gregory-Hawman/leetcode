// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
// Find two lines that together with the x-axis form a container, such that the container contains the most water.
// Return the maximum amount of water a container can store.
// Notice that you may not slant the container.

// Example 1:
// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.

// Example 2:
// Input: height = [1,1]
// Output: 1
 
// Constraints:
// n == height.length
// 2 <= n <= 105
// 0 <= height[i] <= 104

// find the largest number in the array // and it's position in array
// test each number against that largest number (distance from highest) * (height)
function mostWater(height) {
    let trackedHeights = {}
    let arr = new Array()
    console.log('ARR',arr)
    let largest = [0, 0]

    for (let i = 0; i < height.length; i++) {
        // if (height[i] in trackedHeights){
        //     console.log(trackedHeights[height[i]])
        //     trackedHeights[height[i]].push(height[i])
        // } else {
        //     trackedHeights[height[i]] = arr.push(i)
        // }
        console.log(trackedHeights)
        if (height[i] > largest[0]){
            largest = []
            largest.push(height[i])
            largest.push(i)
        }
    }
    console.log(largest);
    let maxArea = 0
    for (let i = 0; i < height.length; i++) {
        let dist = Math.abs(largest[1] - i)
        let area = dist * height[i]
        if (area > maxArea) {
            maxArea = area
        }
    }

    return maxArea
}

let arr1 = [1,8,6,2,5,4,8,3,7]
//let arr2 =[1,1]

console.log(mostWater(arr1))
//console.log(mostWater(arr2))