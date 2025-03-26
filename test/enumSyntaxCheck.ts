type EnumLike<T> = T[keyof T];

export const SolarEnum = {
  Sun: "sun",
  Earth: "earth",
} as const;
export type Solar = EnumLike<typeof SolarEnum>;
