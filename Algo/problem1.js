//Problem 1: Sum of Distinct Elements from Two Sets

/*
FUNCTION findDistinctSum(set1, set2)
    distinctSet = COPY(set1)
    FOR EACH element IN set2 DO
        IF element NOT IN set1 THEN
            ADD element TO distinctSet
        END IF
    END FOR
    sum = 0
    FOR EACH element IN distinctSet DO
        sum = sum + element
    END FOR
    RETURN sum
END FUNCTION

// Example usage
set1 = [3, 1, 7, 9]
set2 = [2, 4, 1, 9, 3]
distinctSum = findDistinctSum(set1, set2)
OUTPUT distinctSum  // Output: 13

*/


//implementation

function findDistinctSum(set1, set2) {
    let distinctSet = [...set1]; // Initialize distinctSet as a copy of set1
  
    // Check each element in set2
    for (let element of set2) {
      if (!set1.includes(element)) {
        // If the element is not present in set1, add it to distinctSet
        distinctSet.push(element);
      }
    }
  
    let sum = 0;
    // Calculate the sum of all elements in distinctSet
    for (let element of distinctSet) {
      sum += element;
    }
  
    return sum; // Return the sum of distinct elements
  }
  
  // Example usage
  let set1 = [3, 1, 7, 9];
  let set2 = [2, 4, 1, 9, 3];
  let distinctSum = findDistinctSum(set1, set2);
  console.log(distinctSum); 
  