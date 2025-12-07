export default function groupBy<T, K extends string | number | symbol>(
  arr: T[],
  keySelector: (item: T) => K
): Record<K, T[]> {
  return arr.reduce((acc, item) => {
    (acc[keySelector(item)] ??= []).push(item);
    return acc;
  }, {} as Record<K, T[]>);
}
