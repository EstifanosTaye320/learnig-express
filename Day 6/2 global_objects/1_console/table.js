// For displaying tabular data in a visually appealing and organized format.

const users = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 35 },
];

console.table(users);

// Output:
// ┌─────────────┬──────┐
// │ name        │ age  │
// ├─────────────┼──────┤
// │ Alice       │ 30   │
// │ Bob         │ 25   │
// │ Charlie     │ 35   │
// └─────────────┴──────┘
