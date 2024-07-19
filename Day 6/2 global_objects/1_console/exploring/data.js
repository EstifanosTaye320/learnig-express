const deepObj = {
  name: "John Doe",
  address: {
    street: "123 Main Street",
    city: "Anytown",
    state: "CA",
    zip: "91234",
    coordinates: {
      latitude: 34.0522,
      longitude: -118.2437,
    },
  },
  phoneNumbers: [
    {
      type: "home",
      number: "555-123-4567",
    },
    {
      type: "work",
      number: "555-888-9999",
      extension: "123",
    },
    {
      type: "mobile",
      number: "555-111-2222",
    },
  ],
  interests: [
    "hiking",
    "photography",
    "coding",
    {
      category: "sports",
      teams: ["Los Angeles Lakers", "New York Yankees"],
    },
  ],
  employment: {
    company: "Acme Corp",
    title: "Software Engineer",
    department: {
      name: "Engineering",
      manager: "Jane Smith",
    },
  },
};

function throwerror() {
  throw SyntaxError("This is custom syntax error");
}

const tableArr = [
  { name: "estif", pet: "cat" },
  { name: "dobby", pet: "harry potter" },
  { name: "spike", pet: "tom" },
  { name: "jerry", pet: "tom" },
];

module.exports = { deepObj, throwerror, tableArr };
