// constructor
const tinderUser = new Object(); //singleton

// const tinderUser = {}; //non-singleton

tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
  email: "some@gmail.com",
  fullname: {
    userfullname: {
      firstname: "nitesh",
      lastname: "bawari",
    },
  },
};

// console.log(regularUser.fullname.userfullname);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
const obj4 = { 5: "a", 6: "b" };

// const obj3 = { obj1, obj2 }; //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
// const obj3 = Object.assign(obj1, obj2, obj4); // { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }
// console.log(obj1); //here, obj1 is changed as it is treated as target & all the values are stored in it

// Object.assign returns to third object, SYNTAX->  Object.assign(target, source);
const obj3 = Object.assign({}, obj1, obj2, obj4);
// console.log(obj1); //here, obj1 is as it is

// const obj3 = { ...obj1, ...obj2 }; //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
// console.log(obj3);

const users = [
  {
    id: 1,
    email: "h@gmail.com",
  },
  {
    id: 3,
    email: "j@gmail.com",
  },
  {
    id: 4,
    email: "k@gmail.com",
  },
];
// the way to access objects in array
// console.log(users[1]); // { id: 3, email: 'j@gmail.com' }
// console.log(tinderUser);

// console.log(Object.keys(tinderUser)); //returns keys in an array
// console.log(Object.values(tinderUser)); // [ '123abc', 'Sammy', false ]   //values in an array
//returns arrays inside an array [key, value]
// console.log(Object.entries(tinderUser)); // [ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]

// console.log(tinderUser.hasOwnProperty("isLoggedIn")); // tells if a property is present or not

const course = {
  coursename: "js in full power",
  price: "freeee",
  courseInstructor: "rakesh",
};

// console.log(course.courseInstructor);

// destructing object (we just shortened course.courseInstructor to instructor with the below syntax)

const { price } = course; // const { property_name: new_shorthand (optional) } = obj_name
console.log(price);
const { courseInstructor: instructor } = course;
console.log(instructor);

// {
//     "name": "hitesh",             //it's a JSON
//     "coursename": "js in hindi",
//     "price": "free"
// }

// [{}, {}, {}]; // another format for JSON
