
function checkNumber(num) {
  if (typeof num === "number") {
    console.log(`${num} is a number`);
  } else {
    console.log(`${num} is not a number`);
  }
}

const checkString = function(str) {
  if (typeof str === "string") {
    console.log(`${str} is a string`);
  } else {
    console.log(`${str} is not a string`);
  }
};

const checkArray = arr => {
  if (Array.isArray(arr)) {
    console.log(`${arr} is an array`);
  } else {
    console.log(`${arr} is not an array`);
  }
};


function checkObject(obj) {
  if (typeof obj === "object" && !Array.isArray(obj)) {
    console.log(`${obj} is an object`);
  } else {
    console.log(`${obj} is not an object`);
  }
}


const checkBoolean1 = bool => {
  if (typeof bool === "boolean") {
    console.log(`${bool} is a boolean`);
  } else {
    console.log(`${bool} is not a boolean`);
  }
};




function checkNumber(num) {
  switch (typeof num) {
    case "number":
      console.log(`${num} is a number`);
      break;
    default:
      console.log(`${num} is not a number`);
  }
}

const checkString1 = function(str) {
  switch (typeof str) {
    case "string":
      console.log(`${str} is a string`);
      break;
    default:
      console.log(`${str} is not a string`);
  }
};


const checkArray1 = arr => {
  switch (typeof arr) {
    case "object":
      if (Array.isArray(arr)) {
        console.log(`${arr} is an array`);
      } else {
        console.log(`${arr} is not an array`);
      }
      break;
    default:
      console.log(`${arr} is not an array`);
  }
};


function checkObject(obj) {
  switch (typeof obj) {
    case "object":
      if (!Array.isArray(obj)) {
        console.log(`${obj} is an object`);
      } else {
        console.log(`${obj} is not an object`);
      }
      break;
    default:
      console.log(`${obj} is not an object`);
  }
}


const checkBoolean = bool => {
  switch (typeof bool) {
    case "boolean":
      console.log(`${bool} is a boolean`);
      break;
    default:
      console.log(`${bool} is not a boolean`);
  }
};



class Animal {
  constructor(name) {
    this.name = name;
  }

  makeSound() {
    console.log("The animal makes a sound");
  }
}

class Dog extends Animal {
}

class Cat  extends Animal {
}


