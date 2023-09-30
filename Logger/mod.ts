import { formatString } from "../utilities.ts";
import { colorifyState, colorifyTime, colorMessage } from "./coloring.ts";

const log_time = colorifyTime();
const print = console.log;
const sorter = function (...value: string[]) {
  // deno-lint-ignore no-inferrable-types
  let str: string = "";

  for (const val of value) {
    str += ` ${val}`;
  }

  return str;
};

function Info(...message: string[]): void {
  const state = colorifyState("info");

  print(formatString(
    "{0} {1} {2}",
    log_time,
    state,
    colorMessage(
      sorter(...message),
    ),
  ));
}

function Debug(...message: string[]): void {
  const state = colorifyState("debug");

  print(formatString(
    "{0} {1} {2}",
    log_time,
    state,
    colorMessage(
      sorter(...message),
    ),
  ));
}

function Warn(...message: string[]): void {
  const state = colorifyState("warn");

  print(formatString(
    "{0} {1} {2}",
    log_time,
    state,
    colorMessage(
      sorter(...message),
    ),
  ));
}

function Error(...message: string[]): void {
  const state = colorifyState("error");

  print(formatString(
    "{0} {1} {2}",
    log_time,
    state,
    colorMessage(
      sorter(...message),
    ),
  ));
}

function Fatal(...message: string[]): void {
  const state = colorifyState("fatal");

  print(formatString(
    log_time,
    state,
    colorMessage(
      sorter(...message),
    ),
  ));
  Info("Shutting down due to FATAL error...");

  Deno.exit(1);
}

export const Logger = {
  Info,
  Debug,
  Warn,
  Error,
  Fatal
};
