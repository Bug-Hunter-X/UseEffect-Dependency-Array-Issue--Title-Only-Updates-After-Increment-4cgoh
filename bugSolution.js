```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct solution. Update title on mount and when count changes
    document.title = `Count: ${count}`;
  }, [count]);

  //Alternative solution to only update on mount
  //useEffect(() => {
  //  document.title = `Count: ${count}`;
  //}, []);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```