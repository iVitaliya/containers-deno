import { colors, datetime } from "../dependencies.ts";
import { LoggerStatusType, LoggerTimeConfig, LoggerStatus } from "../typedefs/Logger.ts";

const {
    green, brightGreen, brightYellow,
    red, white, brightRed, brightWhite,
    gray, dim, brightBlack
} = colors;

export const getTime = (configuration: LoggerTimeConfig): string => {
    // Format: <Month In Name> the <Day>th in <Year> @ <Time> <AM/PM>

    if (configuration.of_now === false) {
        if (!configuration.else) throw new Error("[ERROR : TIME_CONVERTER] The 'else' parameter in the getTime() function configuration must be equal to a valid Date number");

        return `${datetime.format("MM-dd-yyyy hh:mm a")}`
    }
};
