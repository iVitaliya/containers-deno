// deno-lint-ignore-file no-inferrable-types
const dt = new Date(Date.now());

export const getTime = (date: Date) => {
    let status: string = "",
        mins: string = "",
        secs: string = "";

    if (date.getHours() >= 12) {
        status = "PM";
    } else {
        status = "AM";
    }

    // https://github.com/iVitaliya/logger-go/blob/eac18f71945ef4ef7ef9e3b6664c457f7776f384/utils/dater.go#L22
};

export const getDay = (date: Date) => {
    const d = date.getDay();
    let day: string = "";

    if (d === 1 || d === 21 || d === 31) {
        day = `${d}st`;
    } else if (d === 2 || d === 22) {
        day = `${d}nd`;
    } else if (d === 3 || d === 23) {
        day = `${d}rd`;
    } else {
        day = `${d}th`;
    }

    return day;
};

export const getMonth = (date: Date): string => {
	let month: string = "";

	switch (date.getMonth()) {
		case 1:
			month = "January";
			break;

        case 2:
            month = "February";
            break;

        case 3:
            month = "March";
            break;

        case 4:
            month = "April";
            break;

        case 5:
            month = "May";
            break;

        case 6:
            month = "June";
            break;

        case 7:
            month = "July";
            break;

        case 8:
            month = "August";
            break;

        case 9:
            month = "September";
            break;

        case 10:
            month = "October";
            break;

        case 11:
            month = "November";
            break;

        case 12:
            month = "December";
            break;
	}

    return month;
};
