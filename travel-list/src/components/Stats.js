export default function Stats({ items }) {
  const numItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  return (
    <footer className="stats">
      <p>
        {numItems === 0
          ? "Start Adding Items to your packing List 🚀"
          : packedItems !== numItems
          ? `🧳 You have ${numItems} items in your list and you have packed
        ${items.length > 0 ? Math.round(100 * (packedItems / numItems)) : 0}% of
        them`
          : "You have packed all the items in your list. Ready to GO 🥳"}
      </p>
    </footer>
  );
}
