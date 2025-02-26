export function removeAccents(str: string) {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

export function getTitleHeader(str: string) {
  return str.replace("/", "").toUpperCase();
}

export const getUniqueValues = <T, K extends keyof T>(
  data: T[],
  field: K
): T[K][] => {
  const values = data.map((item: T) => item[field]);
  return [...new Set(values)];
};
