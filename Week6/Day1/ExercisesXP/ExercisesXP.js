// Exercise 1
/*
//In the example, the promise should reject
compareToTen(15)
  .then(result => console.log(result))
  .catch(error => console.log(error))

//In the example, the promise should resolve
compareToTen(8)
  .then(result => console.log(result))
  .catch(error => console.log(error))
*/

function compareToTen(num) {
    return new Promise((resolve, reject) => {
      if (num <= 10) {
        resolve('Number is less than or equal to 10');
      } else {
        reject('Number is greater than 10');
      }
    });
  }

// Exercise 2

const myPromise = new Promise((resolve, reject) => {
    // Simulate the delay of 4 seconds 
    setTimeout(() => {
      resolve("success");
    }, 4000);
  });
  
  // Handle the resolved promise
  myPromise.then(result => {
    console.log(result);
  }).catch(error => {
    console.log(error); 
  });

// Exercise 3

const resolvedPromise = Promise.resolve(3);

const rejectedPromise = Promise.reject("Boo!");

resolvedPromise
  .then(value => {
    console.log("Resolved with:", value);  
  })
  .catch(error => {
    console.log("Error:", error);
  });

rejectedPromise
  .then(value => {
    console.log("Resolved with:", value);
  })
  .catch(error => {
    console.log("Error:", error); 
  });

