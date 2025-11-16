let day;
let date = new Date().getDay()

switch (date) {
    case 0:
        day = "sunday"
        break;
    case 1:
      day = "monday"
        break;
    case 2:
        day = "teusday"
        break;
    case 3:
         day = "wednesday"
        break;
    case 4:
        day = "thursday"
        break;
    case 5:
        day = "friday"
         break;
    case 6:
        day = "saturday"
        break
        default:
            text = "looking forward to today"                
}

console.log(`Today is ${day.toUpperCase()}`);
