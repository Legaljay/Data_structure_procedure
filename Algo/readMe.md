
## Problem 1: Sum of Distinct Elements from Two Sets

### findDistinctSum(set1, set2)
This function takes two sets as input, set1 and set2, and returns the sum of all distinct elements present in either set. It finds the distinct elements by comparing each element of set2 with set1 and adding the elements that are not already present in set1. It then calculates the sum of all distinct elements and returns the result.

#### Parameters
- `set1`: An array representing the first set of elements.
- `set2`: An array representing the second set of elements.

#### Returns
- The sum of all distinct elements present in either set.



## Problem 2: Checking Orthogonality of Vectors using Dot Product
Certainly! Here's the documentation for the JavaScript code:

### Introduction
This code provides functionality to check the orthogonality of vectors using the dot product. It includes a procedure for the dot product calculation and two algorithms to check for orthogonality between pairs of vectors.

### dot_product Procedure
The `dot_product` procedure calculates the dot product of two vectors, `v1` and `v2`. It iterates over the elements of the vectors and accumulates the product of corresponding elements. The procedure does not return a value but modifies the `ps` variable to store the dot product.

### CheckOrthogonality Algorithm
The `CheckOrthogonality` algorithm checks the orthogonality between pairs of vectors using the dot product procedure. It takes a list of vectors as input and performs a nested loop to compare each pair of vectors. For each pair, it calculates the dot product using the `dot_product` procedure and checks if the dot product is zero. If the dot product is zero, it indicates orthogonality between the vectors. The algorithm outputs a message to the console stating whether the vectors are orthogonal or not.

### CheckOrthogonalityWithFunction Algorithm
The `CheckOrthogonalityWithFunction` algorithm is similar to the `CheckOrthogonality` algorithm, but it uses a function for the dot product calculation. The `dot_product` function is defined within this algorithm. It takes two vectors, `v1` and `v2`, and calculates the dot product by iterating over the elements and accumulating the product. The function returns the dot product value. The algorithm then uses the function to calculate the dot product between pairs of vectors and checks for orthogonality, outputting the result to the console.

### Usage
To use the code, follow these steps:
1. Define the vectors you want to check for orthogonality. Represent each vector as an array of numbers, where each element corresponds to a component of the vector.
2. Call the `CheckOrthogonality` algorithm or the `CheckOrthogonalityWithFunction` algorithm, passing the vectors as input.
3. The algorithm will compare each pair of vectors and determine whether they are orthogonal or not. The results will be printed to the console.

Example usage:
```javascript
let vectors = [
  [1, 0, 2],
  [0, 2, 0],
  [3, 1, 4],
  [2, 2, -2]
];

console.log("Using CheckOrthogonality:");
CheckOrthogonality(vectors);

console.log("Using CheckOrthogonalityWithFunction:");
CheckOrthogonalityWithFunction(vectors);
```

### Output
The output of the algorithms will be displayed in the console. For each pair of vectors, the code will print a message stating whether the vectors are orthogonal or not.

Please note that this documentation assumes the vectors are represented as arrays, and the code provided follows the structure and logic described in the comments and pseudo code.

This code can be used to efficiently check for orthogonality between pairs of vectors using the dot product, providing a valuable tool for vector analysis and calculations.