

function divideNumbers(a,b) {
  try {
    if (b === 0) { 
      console.error("Division by zero is not allowed.");
    } else {
      const result = a / b; 
      console.log(result);
    }
  } catch (error) {
    console.error("Error", error.message);
  } finally {
    console.log("Execution complete.");
  }
}

divideNumbers(10,5)







function greet(name) {
    name="Keiona"
    try {
        if ((name === undefined)) {
            console.log("Hello, Guest");
        } else {
            console.log("Hello, " + name);
        }
    } catch (error) {
        console.error("Error", error.message);
    } finally {
        // console.log("Done")
    }
}


greet();
// Fix the Code:

// Correct the code so it:
// Checks if name is undefined properly.
// Logs: "Hello, Guest!" if no name is provided.
// -+ -->