// switch(key){ <=SYNTAX
//     casevalue:

//         break;

//         default:
//             break;
// }

const month = 3
switch (month) {
    case 1:
        console.log("January")
        break;
    case 2:
        console.log("Febuary")
        break;
    case 3:
        console.log("March")
        break;
    case 4:
        console.log("April")
        break;
    case 5:
        console.log("May")
        break;
    case 6:
        console.log("June")
        break;

    default:
        console.log("default case match")
        break;
}
// if in above switch case, break is commeneted, it executes the complete code after the match case as well
const month = "march"
switch (month) {
    case "jan":
        console.log("January")
        break;
    case "feb":
        console.log("Febuary")
        break;
    case "march":
        console.log("March")
        break;
    default:
        console.log("default case match")
        break;
}