
## Problem 1: Sum of Distinct Elements from Two Sets

### findDistinctSum(set1, set2)
This function takes two sets as input, set1 and set2, and returns the sum of all distinct elements present in either set. It finds the distinct elements by comparing each element of set2 with set1 and adding the elements that are not already present in set1. It then calculates the sum of all distinct elements and returns the result.

#### Parameters
- `set1`: An array representing the first set of elements.
- `set2`: An array representing the second set of elements.

#### Returns
- The sum of all distinct elements present in either set.



## Problem 2: Checking Orthogonality of Vectors using Dot Product

### dotProduct(v1, v2)
This procedure calculates the dot (scalar) product of two vectors, v1 and v2. It multiplies each corresponding element of the vectors and accumulates the products. The resulting sum is stored in a variable named `ps`.

#### Parameters
- `v1`: An array representing the first vector.
- `v2`: An array representing the second vector.

### checkOrthogonality(vectors)
This function checks for orthogonality among a given set of vectors. It takes an array of vectors as input and iterates through all possible pairs of vectors. For each pair, it calls the `dotProduct` procedure to calculate the dot product. If the dot product is zero, indicating orthogonality, the pair's indices are added to the `orthogonalPairs` array. Finally, the function returns the array of pairs of indices representing the orthogonal vectors.

#### Parameters
- `vectors`: An array of arrays, where each inner array represents a vector.

#### Returns
- An array of pairs of indices representing the orthogonal vectors.

## Example Usage
This section demonstrates example usage of the `checkOrthogonality` function with sample inputs and expected outputs.

For Problem 2:
- `vectors` is [[1, 0, 2], [0, 2, 0], [3, 1, 4], [2, 2, -2]]
- The expected output of `checkOrthogonality(vectors)` is [[0, 1], [1, 2]], representing the pairs of indices corresponding to orthogonal vectors.

Please note that the code snippets and documentation provided here are based on the updated pseudo code representation, and further adjustments might be necessary if you decide to implement them in a specific programming language.