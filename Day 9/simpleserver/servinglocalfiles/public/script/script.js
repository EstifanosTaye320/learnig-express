const new_child = document.createElement("div");
new_child.innerHTML = `
    <h1>The new element</h1>
    <p>Content of new element</p>
`;
document.body.appendChild(new_child);