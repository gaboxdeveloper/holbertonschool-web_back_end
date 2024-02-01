export default function updateUniqueItems(groceries) {
  if (!(groceries instanceof Map)) throw TypeError('Cannot process');
  for (const [item, count] of groceries) {
    if (count === 1) groceries.set(item, 100);
  }
  return groceries;
}
