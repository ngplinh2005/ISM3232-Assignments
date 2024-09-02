// Task 1: Variables and Data Types

let employeeName ="John Doe";
const employeeID =12345
var isActive = true; 
console.log(employeeName,typeof employeeName);
console.log(employeeID, typeof employeeID);
console.log(isActive, typeof isActive);

// Task 2: Compound Data Types

let products = ["shirt", "cup", "shoes"]
const productDetails = {
    productName: products,
    price: 990.98,
    inStock: true
}
console.log(products, productDetails)

// Task 3: Assignment Operators

let accountBalance = 3467

accountBalance += 135
console.log("After adding: $" + accountBalance)

accountBalance -= 78
console.log("After subtracting: $" + accountBalance)

accountBalance *= 2
console.log("After multiplying: $" + accountBalance)

accountBalance /= 1.15
console.log("After splitting: $" + accountBalance)

accountBalance %= 3
console.log("Remainder: $" + accountBalance)

// Task 4: Comparison Operators

let employeeScore1 = 98
let employeeScore2 = 34

console.log("Is employeeScore1 greater than employeeScore2?", employeeScore1 > employeeScore2)
console.log("Is employeeScore1 less than employeeScore2?", employeeScore1 < employeeScore2)
console.log("Is employeeScore1 greater than or equal to employeeScore2?", employeeScore1 >= employeeScore2)
console.log("Is employeeScore1 less than or equal to employeeScore2?", employeeScore1 <= employeeScore2)
console.log("Are employeeScore1 and employeeScore2 equal?", employeeScore1 === employeeScore2)
console.log("Are employeeScore1 and employeeScore2 not equal?", employeeScore1 !== employeeScore2)

// Task 5: Logical Operators

let hasKeyCard = true
let hasPermission = false

let fullAccess = hasKeyCard && hasPermission
console.log("Full Access to Area:", fullAccess)

let partialAccess = hasKeyCard || hasPermission
console.log("Partial Access to Area:", partialAccess)

let deniedAccess = !hasPermission
console.log("Denied Access to Area:", deniedAccess)