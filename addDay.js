function dateAdd(typeOfIncrement, addFactor, referenceDate) {
    let newDate;
    const dateInArray = [];
    const sanitizedTypeOfIncrement = typeOfIncrement.toLowerCase();


    const dates = {
        day: parseInt(referenceDate[8] + referenceDate[9]),
        month: parseInt(referenceDate[5] + referenceDate[6]),
        year: parseInt(
            referenceDate[0] + referenceDate[1] + referenceDate[2] + referenceDate[3]
        ),
    };

    switch (sanitizedTypeOfIncrement) {
        case "year":
            dates.year = addYear(addFactor, dates.year);
            break;
    }
    dateInArray.push(dates.year, dates.month, dates.day);

    newDate = dateInArray.join("-");
    return newDate;
}

console.log(dateAdd("year", -2000, "2022-02-27"));

// date format = yyyy-mm-dd


function addYear(addFactor, referenceYear) {
    return referenceYear += addFactor;
}


function returnHowManyDaysAreInMonth(month, year) {

    const sanitizedMonth = month.toLowerCase();

    switch (sanitizedMonth) {
        case "january":
            return 31;
        case "february":
            let daysInFebruary;
            if (itsLeapYear(year)) {
                daysInFebruary = 29;
            } else {
                daysInFebruary = 28;
            }
            return daysInFebruary;
        case "march":
            return 31;
        case "april":
            return 30;
        case "may":
            return 31;
        case "june":
            return 30;
        case "july":
            return 31;
        case "august":
            return 31;
        case "september":
            return 30;
        case "october":
            return 31;
        case "november":
            return 30;
        case "december":
            return 31;
    }
}

function itsLeapYear(year) {
    return parseInt(year) % 4 === 0;
}