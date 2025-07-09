function camelToSnake(str: string): string {
  return str.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);
}

type Primitive = string | number | boolean | null | undefined | symbol | bigint;

export type SnakeCaseDeep<T> = T extends
  | Primitive
  | Date
  | RegExp
  | ((...args: unknown[]) => unknown)
  | Map<unknown, unknown>
  | Set<unknown>
  ? T
  : T extends Array<infer U>
    ? Array<SnakeCaseDeep<U>>
    : T extends object
      ? { [K in keyof T as K extends string ? string : K]: SnakeCaseDeep<T[K]> }
      : T;

export const transformToSnakeCase = <T>(obj: T): SnakeCaseDeep<T> => {
  if (Array.isArray(obj)) {
    return (obj as unknown[]).map((item) => transformToSnakeCase(item)) as SnakeCaseDeep<T>;
  }

  if (obj !== null && typeof obj === 'object' && obj.constructor === Object) {
    const result: Record<string, unknown> = {}; // Use 'unknown' instead of 'any' for values
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        const snakeKey = camelToSnake(key);
        result[snakeKey] = transformToSnakeCase((obj as Record<string, unknown>)[key]);
      }
    }
    return result as SnakeCaseDeep<T>;
  }

  return obj as SnakeCaseDeep<T>;
};

// Helper to check if a value is a plain object
function isObject(value: unknown): value is Record<string, unknown> {
  return value !== null && typeof value === 'object' && !Array.isArray(value);
}

// Function to convert a single string from snake_case to camelCase
function snakeToCamel(s: string): string {
  return s.replace(/(_\w)/g, (m) => m[1].toUpperCase());
}

/**
 * Recursively transforms all keys of an object from snake_case to camelCase.
 * @param obj The object to transform.
 * @returns A new object with camelCase keys.
 */
export function transformToCamelCase<T>(obj: unknown): T {
  if (!isObject(obj)) {
    return obj as T;
  }

  const newObj: { [key: string]: unknown } = {};
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const camelKey = snakeToCamel(key);
      const value = obj[key];

      // Recursively call the function for nested objects, otherwise assign the value.
      newObj[camelKey] = isObject(value) ? transformToCamelCase(value) : value;
    }
  }
  return newObj as T;
}
