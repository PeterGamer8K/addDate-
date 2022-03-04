function dateAdd(typeOfIncrement, addFactor, referenceDate) {
    const content = {};
    content.dateInArray = [];

    main();

    function main() {
        sanitizeUserInput();
        separateDateInVariables();
        addTheDate();
    }

    function sanitizeUserInput() {
        content.sanitizedTypeOfIncrement = typeOfIncrement.toLowerCase();
        content.sanitizedReferenceDate = referenceDate;
        content.sanitizeAddFactor = parseInt(addFactor);
    }

    function separateDateInVariables() {
        content.dates = {
            day: parseInt(referenceDate[8] + referenceDate[9]),
            month: parseInt(referenceDate[5] + referenceDate[6]),
            year: parseInt(
                referenceDate[0] + referenceDate[1] + referenceDate[2] + referenceDate[3]
            ),
        };
    }

    function addTheDate() {
        switch (content.sanitizedTypeOfIncrement) {
            case "year":
                content.dates.year = addYear(content.sanitizeAddFactor, content.dates.year);
                break;
            default:
                throw new Error("Invalid type of increment: " + content.sanitizedTypeOfIncrement);
        }
    }
    content.dateInArray.push(content.dates.year, content.dates.month, content.dates.day);
    content.newDate = content.dateInArray.join("-");
    return content.newDate;
}

console.log(dateAdd("year", 13, "2022-02-27"));

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