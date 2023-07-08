//Problem 2: Checking Orthogonality of Vectors using Dot Product

/*

PROCEDURE dotProduct(v1, v2)
    ps = 0
    FOR i = 0 TO LENGTH(v1) - 1 DO
        ps = ps + (v1[i] * v2[i])
    END FOR
    RETURN ps
END PROCEDURE

FUNCTION checkOrthogonality(vectors)
    orthogonalPairs = EMPTY ARRAY
    FOR i = 0 TO LENGTH(vectors) - 2 DO
        FOR j = i + 1 TO LENGTH(vectors) - 1 DO
            ps = dotProduct(vectors[i], vectors[j])
            IF ps = 0 THEN
                ADD [i, j] TO orthogonalPairs
            END IF
        END FOR
    END FOR
    RETURN orthogonalPairs
END FUNCTION

// Example usage
vectors = [[1, 0, 2], [0, 2, 0], [3, 1, 4], [2, 2, -2]]
orthogonalPairs = checkOrthogonality(vectors)
OUTPUT orthogonalPairs  // Output: [[0, 1]]



*/

//implementation

// Procedure: dotProduct calculates the dot product of two vectors v1 and v2
function dotProduct(v1, v2) {
    let ps = 0; // Variable to store the dot product
    for (let i = 0; i < v1.length; i++) {
      ps += v1[i] * v2[i]; // Accumulate the product of corresponding elements
    }
    return ps; // Return the dot product
  }
  
  // Function: checkOrthogonality checks for orthogonality among the given set of vectors
  function checkOrthogonality(vectors) {
    let orthogonalPairs = []; // Array to store pairs of orthogonal vectors
    for (let i = 0; i < vectors.length - 1; i++) {
      for (let j = i + 1; j < vectors.length; j++) {
        let ps = dotProduct(vectors[i], vectors[j]); // Call the dotProduct procedure and store the result
        if (ps === 0) {
          orthogonalPairs.push([i, j]); // Add the indices of orthogonal vectors to orthogonalPairs
        }
      }
    }
    return orthogonalPairs; // Return the array of orthogonal pairs
  }
  
  // Example usage
  let vectors = [[1, 0, 2], [0, 2, 0], [3, 1, 4], [2, 2, -2]];
  let orthogonalPairs = checkOrthogonality(vectors);
  console.log(orthogonalPairs); 
  
  