const messages = [{ id: 0, message: "Start talking to your self:)" }];

function getAll() {
  return messages;
}

function create(message) {
  const new_message = { id: messages.length, message: message.message };
  messages.push(new_message);
  return new_message;
}

module.exports = { getAll, create };
