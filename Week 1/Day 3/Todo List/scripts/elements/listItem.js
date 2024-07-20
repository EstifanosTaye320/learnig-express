const listItem = function (id, title, message) {
  return `
            <div class="todoItem">
            <div class="index">
                <div class="toggle"></div>
                <p>${id}</p>
            </div>
            <div class="title">${title}</div>
            <div class="message">${message}</div>
            <div class="theblackship"></div>
            </div>
        `;
};

export { listItem };
