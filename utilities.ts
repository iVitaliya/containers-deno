export function formatString(original: string, ...replacements: string[]) {
  let result = original;

  for (let i = 0; i < replacements.length; i++) {
    if (original.includes("{" + i + "}")) {
      result = result.replace("{" + i + "}", replacements[i]);
    }
  }

  return result;
}

export function defaultEquals<T>(a: T, b: T): boolean {
  return a == b;
}