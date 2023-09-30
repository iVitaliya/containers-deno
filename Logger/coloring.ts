import { colors } from "../dependencies.ts";
import {
  LoggerSeverity,
  LoggerStatus,
  LoggerStatusType,
  LoggerTimeConfig,
} from "../typedefs/Logger.ts";
import { formatString } from "../utilities.ts";
import { getTime } from "./time.ts";

const {
  green,
  brightBlue,
  brightGreen,
  brightYellow,
  red,
  white,
  brightRed,
  brightWhite,
  gray,
  dim,
  brightBlack,
} = colors;

export function colorifyTime(): string {
  return formatString("{0}{1}{2}", gray("["), getTime(), gray("]"));
}

export function colorifyState(severity: LoggerSeverity): string {
  const identifySeverity = function (sev: LoggerSeverity) {
    // deno-lint-ignore no-inferrable-types
    let s: string = "";

    switch (sev) {
      case "info":
        s = brightBlue("INFO");
        break;

      case "debug":
        s = green("DEBUG");
        break;

      case "warn":
        s = dim(brightYellow("WARNING"));
        break;

      case "error":
        s = brightRed("ERROR");
        break;

      case "fatal":
        s = red("FATAL");
        break;
    }

    return s;
  };

  const str = formatString("{0}{1}{2}", gray("("), identifySeverity(severity), gray(")"));
  return str;
}

export function colorMessage(message: string): string {
  return brightWhite(message);
}