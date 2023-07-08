//Problem 2: Checking Orthogonality of Vectors using Dot Product

/*

PROCEDURE dotProduct(v1, v2)
 Algorithm: dot_product(v1, v2)
    Initialize variable ps to 0
    For i from 0 to length of v1 - 1
        Multiply the ith element of v1 with the ith element of v2 and add the result to ps
    End For
    Return ps
End Algorithm

Algorithm: CheckOrthogonality(vectors)
    For each pair of vectors (v1, v2) in vectors
        Calculate dot product using dot_product procedure:
        Set dp = dot_product(v1, v2)
        If dp is equal to 0
            Print "Vectors v1 and v2 are orthogonal"
        Else
            Print "Vectors v1 and v2 are not orthogonal"
        End If
    End For
End Algorithm

Algorithm: CheckOrthogonalityWithFunction(vectors)
    Function: dot_product(v1, v2)
        Initialize variable ps to 0
        For i from 0 to length of v1 - 1
            Multiply the ith element of v1 with the ith element of v2 and add the result to ps
        End For
        Return ps
    End Function

    For each pair of vectors (v1, v2) in vectors
        Calculate dot product using dot_product function:
        Set dp = dot_product(v1, v2)
        If dp is equal to 0
            Print "Vectors v1 and v2 are orthogonal"
        Else
            Print "Vectors v1 and v2 are not orthogonal"
        End If
    End For
End Algorithm



*/

//implementation

// Procedure: dot_product calculates the dot product of two vectors v1 and v2
function dot_product(v1, v2) {
    let ps = 0;
    for (let i = 0; i < v1.length; i++) {
      ps += v1[i] * v2[i];
    }
    return ps;
  }
  
  // Algorithm: CheckOrthogonality
  function CheckOrthogonality(vectors) {
    for (let i = 0; i < vectors.length - 1; i++) {
      for (let j = i + 1; j < vectors.length; j++) {
        let dp = dot_product(vectors[i], vectors[j]);
        if (dp === 0) {
          console.log("Vectors v" + i + " and v" + j + " are orthogonal");
        } else {
          console.log("Vectors v" + i + " and v" + j + " are not orthogonal");
        }
      }
    }
  }
  
  // Algorithm: CheckOrthogonalityWithFunction
  function CheckOrthogonalityWithFunction(vectors) {
    // Function: dot_product
    function dot_product(v1, v2) {
      let ps = 0;
      for (let i = 0; i < v1.length; i++) {
        ps += v1[i] * v2[i];
      }
      return ps;
    }
  
    for (let i = 0; i < vectors.length - 1; i++) {
      for (let j = i + 1; j < vectors.length; j++) {
        let dp = dot_product(vectors[i], vectors[j]);
        if (dp === 0) {
          console.log("Vectors v" + i + " and v" + j + " are orthogonal");
        } else {
          console.log("Vectors v" + i + " and v" + j + " are not orthogonal");
        }
      }
    }
  }
  
  // Example usage
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
  
  