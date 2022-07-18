/**
 * a type
 * @beta
 */
export type Type = 'standard';

/**
 * newy new guy
 * @param a a thing
 * @param b b thing
 * @alpha
 */
export function bizz(a: string, b: string): string;

/**
 * newy new guy
 * @param a a thing
 * @param b b thing
 * @param c c thing
 * @beta
 */
export function bizz(a: string, b: string, c: string): string;

/**
 * a thing for a thing
 * @param a id
 * @returns returns the param
 * @beta
 */
export function bizz(...args: string[]): string {
	return args[0];
}

/**
 * thing for a thing
 * @beta
 */
export interface Foo {
	/**
	 * very experimental
	 * @alpha
	 */
	foo: string;

	/**
	 * very experimental
	 * @experimental
	 */
	a: string;
}
