// const arrayOfCategory = ['book', 'shoe', 'frozen', 'beauty', 'book', 'shoe', 'frozen', 'beauty', 'book', 'shoe', 'frozen', 'beauty', 'book', 'shoe', 'frozen', 'beauty', 'book', 'shoe', 'frozen', 'beauty', 'book', 'shoe', 'frozen', 'beauty'];
// console.log(arrayOfCategory);

// // Function to calculate the frequency of each category
// // const calculateFrequency = (arr) => {
// //   const frequency = {};

// //   arr.forEach(category => {
// //     if (frequency[category]) {
// //       frequency[category]++;
// //     } else {
// //       frequency[category] = 1;
// //     }
// //   });

// //   return frequency;
// // }
// const calculateFrequency = (arr) => {
//     const frequency = {};
//     const uniqueCategories = new Set(arr);
  
//     uniqueCategories.forEach(category => {
//       let count = 0;
//       arr.forEach(item => {
//         if (item === category) {
//           count++;
//         }
//       });
//       frequency[category] = count;
//     });
  
//     return frequency;
//   }
  

// const categoryFrequency = calculateFrequency(arrayOfCategory);
// console.log(categoryFrequency);


// Count Elements With Maximum Frequency

var maxFrequencyElements = function(nums) {
    var frequency = {};
    
    // Count the frequency of each element
    nums.forEach(item => {
        frequency[item] = (frequency[item] || 0) + 1;
    });

    // Find the maximum frequency
    const maxFreq = Math.max(...Object.values(frequency));

    // Count the total number of elements with the maximum frequency
    let totalMaxFreqElements = 0;
    for (const count of Object.values(frequency)) {
        if (count === maxFreq) {
            totalMaxFreqElements += count;
        }
    }

    return totalMaxFreqElements;
};

// nums = [1,2,2,3,1,4]
nums = [1,2,3,4,5]
console.log(maxFrequencyElements(nums));