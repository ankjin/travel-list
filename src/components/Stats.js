export default function Stats({ items }) {
  if (!items.length) {
    return (
      <p className="stats">
        <em>Start adding some items to your packing list.</em>
      </p>
    );
  }

  // this will not run if condition above has satisfied
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentCompleted = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentCompleted === 100
          ? "🐠 You got everything you need. Ready to go!"
          : `🐠You have ${numItems} items on your list, and you already packed ${numPacked} (${percentCompleted}%)`}
      </em>

      <h1 className="!text-3xl text-red-300 !font-bold underline">
        Hello world!
      </h1>
    </footer>
  );
}
