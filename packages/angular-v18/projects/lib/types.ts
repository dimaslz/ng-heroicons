import { OUTLINE_ICONS, SOLID_ICONS } from './constants';

type Replace<T extends string, S extends string, D extends string,
  A extends string = ""> = T extends `${infer L}${S}${infer R}` ?
  Replace<R, S, D, `${A}${L}${D}`> : `${A}${T}`
type Kebab<S extends string> = S extends `${infer T}${infer U}`
  ? U extends Uncapitalize<U>
    ? `${Uncapitalize<T>}${Kebab<U>}`
    : `${Uncapitalize<T>}-${Kebab<U>}`
  : '';

export type T_SOLID_ICONS = Replace<Kebab<keyof typeof SOLID_ICONS>, "-solid-icon-component", "">;
export type T_OUTLINE_ICONS = Replace<Kebab<keyof typeof OUTLINE_ICONS>, "-outline-icon-component", "">;

export type NgHeroiconsModuleConfig = {
	stroke?: number;
	default?: 'outline' | 'solid'
};