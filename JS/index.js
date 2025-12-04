// // console.log(a);
// // //hoisting
// // var a = 10;
// // //global scope / Function scope
// // console.log(a);

// // //ES6
// // //let and const
// // //console.log(b); //ReferenceError
// // //temporal dead zone
// // let b = 20;
// // b = 130;
// // //Block scope
// // console.log(b);
// // //{
// // //let b = 30;
// // //console.log(b);
// // //}

// // console.log(c);
// // const c = 40;
// // c = 70; //TypeError

// // console.log(c);

// // //Functions
// // //1. Named Functions
// // //function declaration
// // function namedFunction() {
// //   console.log("Named Function");
// //   console.log("Named Function");
// //   console.log("Named Function");
// // }

// // //Function Call/Invocation
// // namedFunction();

// // //funcExp();
// // //2. Function Expressions
// // let funcExp = function () {
// //   console.log("Function Expression");
// // };

// // funcExp();

// // //3. Arrow Functions
// // let arrow = () => {
// //   console.log("Arrow Function");
// // };

// // arrow();

// // //4. Callback Functions and 5. IIFE (Immediately Invoked Function Expression)

// // (() => {
// //   console.log("Callback and IIFE");
// // })();

// // // const addTwoNumbers = () => {
// // //     let num1 = 10;
// // //     let num2 = 20;
// // //     let sum = num1 + num2;
// // //     console.log("Sum:", sum);
// // // 
// // // };


// // const addTwoNumbers = (parameter1, parameter2) => {
// //   let num1 = parameter1 || 10; //default value is 10
// //   let num2 = parameter2 || 20; //default value will be 20
// //   let sum = num1 + num2;
// //   console.log(`Sum: $(sum)`, sum);
// // };
// // addTwoNumbers(20, 50);
// // addTwoNumbers(40, 60);
// // addTwoNumbers();

// let a =10;
// let b ="2";
// console.log(a / b);
// console.log(a == b);

// let c = [1, 2, 3, "ass"];
// let d = [1, 2, 3, "ass"];
// console.log(c[0] === d[0]);

// let arr = [1,2,3,4,5,6];

// //for loop
// for(let i =0; i<arr.length; i++) {
//     console.log(i, arr[i]);

// }
// console.log(arr);

// let arr1=[1,2,3,4,5,6]
// //forEach

// arr1.forEach((element, index) => {
//     console.log(element, index);
// });

// let arr2 = [1,2,3,4,5,6];
// //let aa =arr.map((el,ind)=> {
// //return el+ind;
// //})

// let aa = arr.map((el,ind)=> el+ind);
// console.log(arr2);
// console.log(aa);

// let a = [1,2,3,4,5,6,7,8,9];

// //filter: Truthy Values
// let b = a.filter((el, ind) => {
//     return ind > 4;
// })

// console.log(b);

// //reduce : return a single value
// let c = a.reduce((acc, el, index) =>{
//     console.log(acc, el);
//     return (acc+el);
// }, 200);
// console.log(c);

// let obj = {
//     a: 10,
//     b: 20,
//     data: {
//         d: 30,
//         c: 40,
//     }
// }

let arr = [
  {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  },
  {
    "id": 2,
    "name": "Ervin Howell",
    "username": "Antonette",
    "email": "Shanna@melissa.tv",
    "address": {
      "street": "Victor Plains",
      "suite": "Suite 879",
      "city": "Wisokyburgh",
      "zipcode": "90566-7771",
      "geo": {
        "lat": "-43.9509",
        "lng": "-34.4618"
      }
    },
    "phone": "010-692-6593 x09125",
    "website": "anastasia.net",
    "company": {
      "name": "Deckow-Crist",
      "catchPhrase": "Proactive didactic contingency",
      "bs": "synergize scalable supply-chains"
    }
  },
  {
    "id": 3,
    "name": "Clementine Bauch",
    "username": "Samantha",
    "email": "Nathan@yesenia.net",
    "address": {
      "street": "Douglas Extension",
      "suite": "Suite 847",
      "city": "McKenziehaven",
      "zipcode": "59590-4157",
      "geo": {
        "lat": "-68.6102",
        "lng": "-47.0653"
      }
    },
    "phone": "1-463-123-4447",
    "website": "ramiro.info",
    "company": {
      "name": "Romaguera-Jacobson",
      "catchPhrase": "Face to face bifurcated interface",
      "bs": "e-enable strategic applications"
    }
  },
  {
    "id": 4,
    "name": "Patricia Lebsack",
    "username": "Karianne",
    "email": "Julianne.OConner@kory.org",
    "address": {
      "street": "Hoeger Mall",
      "suite": "Apt. 692",
      "city": "South Elvis",
      "zipcode": "53919-4257",
      "geo": {
        "lat": "29.4572",
        "lng": "-164.2990"
      }
    },
    "phone": "493-170-9623 x156",
    "website": "kale.biz",
    "company": {
      "name": "Robel-Corkery",
      "catchPhrase": "Multi-tiered zero tolerance productivity",
      "bs": "transition cutting-edge web services"
    }
  },
  {
    "id": 5,
    "name": "Chelsey Dietrich",
    "username": "Kamren",
    "email": "Lucio_Hettinger@annie.ca",
    "address": {
      "street": "Skiles Walks",
      "suite": "Suite 351",
      "city": "Roscoeview",
      "zipcode": "33263",
      "geo": {
        "lat": "-31.8129",
        "lng": "62.5342"
      }
    },
    "phone": "(254)954-1289",
    "website": "demarco.info",
    "company": {
      "name": "Keebler LLC",
      "catchPhrase": "User-centric fault-tolerant solution",
      "bs": "revolutionize end-to-end systems"
    }
  },
  {
    "id": 6,
    "name": "Mrs. Dennis Schulist",
    "username": "Leopoldo_Corkery",
    "email": "Karley_Dach@jasper.info",
    "address": {
      "street": "Norberto Crossing",
      "suite": "Apt. 950",
      "city": "South Christy",
      "zipcode": "23505-1337",
      "geo": {
        "lat": "-71.4197",
        "lng": "71.7478"
      }
    },
    "phone": "1-477-935-8478 x6430",
    "website": "ola.org",
    "company": {
      "name": "Considine-Lockman",
      "catchPhrase": "Synchronised bottom-line interface",
      "bs": "e-enable innovative applications"
    }
  },
  {
    "id": 7,
    "name": "Kurtis Weissnat",
    "username": "Elwyn.Skiles",
    "email": "Telly.Hoeger@billy.biz",
    "address": {
      "street": "Rex Trail",
      "suite": "Suite 280",
      "city": "Howemouth",
      "zipcode": "58804-1099",
      "geo": {
        "lat": "24.8918",
        "lng": "21.8984"
      }
    },
    "phone": "210.067.6132",
    "website": "elvis.io",
    "company": {
      "name": "Johns Group",
      "catchPhrase": "Configurable multimedia task-force",
      "bs": "generate enterprise e-tailers"
    }
  },
  {
    "id": 8,
    "name": "Nicholas Runolfsdottir V",
    "username": "Maxime_Nienow",
    "email": "Sherwood@rosamond.me",
    "address": {
      "street": "Ellsworth Summit",
      "suite": "Suite 729",
      "city": "Aliyaview",
      "zipcode": "45169",
      "geo": {
        "lat": "-14.3990",
        "lng": "-120.7677"
      }
    },
    "phone": "586.493.6943 x140",
    "website": "jacynthe.com",
    "company": {
      "name": "Abernathy Group",
      "catchPhrase": "Implemented secondary concept",
      "bs": "e-enable extensible e-tailers"
    }
  },
  {
    "id": 9,
    "name": "Glenna Reichert",
    "username": "Delphine",
    "email": "Chaim_McDermott@dana.io",
    "address": {
      "street": "Dayna Park",
      "suite": "Suite 449",
      "city": "Bartholomebury",
      "zipcode": "76495-3109",
      "geo": {
        "lat": "24.6463",
        "lng": "-168.8889"
      }
    },
    "phone": "(775)976-6794 x41206",
    "website": "conrad.com",
    "company": {
      "name": "Yost and Sons",
      "catchPhrase": "Switchable contextually-based project",
      "bs": "aggregate real-time technologies"
    }
  },
  {
    "id": 10,
    "name": "Clementina DuBuque",
    "username": "Moriah.Stanton",
    "email": "Rey.Padberg@karina.biz",
    "address": {
      "street": "Kattie Turnpike",
      "suite": "Suite 198",
      "city": "Lebsackbury",
      "zipcode": "31428-2261",
      "geo": {
        "lat": "-38.2386",
        "lng": "57.2232"
      }
    },
    "phone": "024-648-3804",
    "website": "ambrose.net",
    "company": {
      "name": "Hoeger LLC",
      "catchPhrase": "Centralized empowering task-force",
      "bs": "target end-to-end models"
    }
  }
]

let b = arr.map((name) => {
    return name.username;
});

console.log(b);

let c =arr.filter((el) =>{
    return alert.id%2 ===0;
}).map((el) => el.name).join("");

console.log(c);