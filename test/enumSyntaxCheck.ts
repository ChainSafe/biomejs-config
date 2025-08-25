type EnumLike<T> = T[keyof T];

export const SolarEnum = {
  Earth: "earth",
  Sun: "sun",
} as const;
export type Solar = EnumLike<typeof SolarEnum>;
