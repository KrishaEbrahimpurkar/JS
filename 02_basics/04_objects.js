// singleton
//const tinderUser = new Object()
const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser = {
    email: "some@gail.com",
    fullname: {
        userfullname: {
            firstname:"krisha",
            lastname: "ebrahimpurkar"
        }
    }
}

//console.log(regularUser.fullname.userfullname.lastname);
//console.log(regularUser.fullname?.userfullname.lastname);//used instead of if else, if certain value is there or not

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj4 = {5: "c", 6: "d"}


//const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}
//console.log(obj3)

// const users = [
//     {
//         id:  1,
//         email: "k@gmail.com"
//     },
//     {

//     },
//     {

//     }
// ]

// users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

//console.log(tinderUser.hasOwnProperty("isLoggedIn"));

// Destructuring of objects

const course = {
    coursename: "js",
    price: 1000,
    courseInstructor: "krisha"
}

//course.courseInstructor

const {courseInstructor:instructor} = course
console.log(instructor);

//APIs

// JSON example
// {
//     "name": "krisha",
//     "course_name": "js",
//     "price": "free"
// }

