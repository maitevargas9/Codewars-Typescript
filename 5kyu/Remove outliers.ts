/*
Description

You are given an array of numbers, some of which are outliers. Your goal is to remove all outliers and return the 
result.

Detecting outliers
An outlier is defined here as a number that is:
Greater than the calculated upper limit UQ + 1.5(UQ - LQ)
Less than the calculated lower limit LQ - 1.5(UQ - LQ)
Where LQ is the lower quartile and UQ is the upper quartile.

Note: If an element is equal to the upper or lower limit, it is not an outlier!

More about Quartiles
Quartiles separate the data set into four equally-sized quarters. It is an extension of the concept of the median, 
which splits the data into two equally-sized halves. When each half of the data is split in half again, you end up 
with four quartiles.

For example, consider the data set:
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] // length = 11

The median of the entire data set is the "middle" value of the sorted array. Splitting the data in half yields the 
following:
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
                ^ Median = 6              
[1, 2, 3, 4, 5]   [7, 8, 9, 10, 11]

Each of these halves have their own "median", which are the upper and lower quartiles.

[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
                ^ Median = 6    
[1, 2, 3, 4, 5]   [7, 8, 9, 10, 11]
       ^ LQ = 3          ^ UQ = 9

More rules for calculating median and quartiles:
If the number of elements in the array is even, the median is the average of the two center elements.
If the number of elements in the array is odd, the median is the single center element.
If the median is a single element, do not include it in either half when calculating a quartile.
If the median is an average of two elements, the two elements which make up the median are included when calculating
a quartile.

Here are some further examples you can use for your own tests:
[1, 2]                    => Median 1.5   LQ 1    UQ 2
[1, 2, 3]                 => Median 2     LQ 1    UQ 3
[1, 2, 3, 4]              => Median 2.5   LQ 1.5  UQ 3.5
[1, 2, 3, 4, 5]           => Median 3     LQ 1.5  UQ 4.5
[1, 2, 3, 4, 5, 6]        => Median 3.5   LQ 2    UQ 5
[1, 2, 3, 4, 5, 6, 7]     => Median 4     LQ 2    UQ 6
[1, 2, 3, 4, 5, 6, 7, 8]  => Median 4.5   LQ 2.5  UQ 6.5

The input
You will be given an array of floating-point numbers. As an example:
[1, 4, 2, 5, 1000000, 3, 9]
Note: The median of this data is 4, the lower quartile is 2, and the upper quartile is 9.

The output
You will return an array of floating-point numbers that equals the original array, removing all outliers.
Note: since outlier detection relies on the interquartile range, which will change when elements are removed, you may
need to repeat the process more than once to remove all outliers.
You may return the remaining elements in any order.
*/

export const removeOutliers = (data: number[]): number[] => {
  if (data.length < 2) {
    return data;
  }

  const calculateQuartiles = (arr: number[]): { LQ: number; UQ: number } => {
    const sorted = [...arr].sort((a, b) => a - b);
    const median = (nums: number[]): number => {
      const mid = Math.floor(nums.length / 2);
      return nums.length % 2 === 0
        ? (nums[mid - 1] + nums[mid]) / 2
        : nums[mid];
    };

    const midIndex = Math.floor(sorted.length / 2);
    const lowerHalf = sorted.slice(0, midIndex);
    const upperHalf =
      sorted.length % 2 === 0
        ? sorted.slice(midIndex)
        : sorted.slice(midIndex + 1);

    return { LQ: median(lowerHalf), UQ: median(upperHalf) };
  };

  let filteredData = [...data];
  let prevLength = 0;

  while (prevLength !== filteredData.length) {
    prevLength = filteredData.length;
    const { LQ, UQ } = calculateQuartiles(filteredData);
    const lowerLimit = LQ - 1.5 * (UQ - LQ);
    const upperLimit = UQ + 1.5 * (UQ - LQ);

    filteredData = filteredData.filter(
      (num) => num >= lowerLimit && num <= upperLimit
    );
  }

  return filteredData;
};
