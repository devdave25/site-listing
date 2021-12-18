// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type AnyOnClickHandler<T = void> = (...props: any[]) => T;

export type UnknownObject = { [key: string]: unknown };
