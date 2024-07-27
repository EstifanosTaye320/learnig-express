const messages = [{id: 0, message: "this is 0 message"}];

const getAll = () => messages;

const getById = (id) => messages[id];

const create = (message) => {
  messages.push(message);
  message.id = messages.length - 1; // Assign the ID
  return message;
};

const update = (id, updatedMessage) => {
  if (messages[id]) {
    messages[id] = { ...messages[id], ...updatedMessage };
    return messages[id];
  }
  return null;
};

const deleteMessage = (id) => {
  if (id >= 0 && id < messages.length) {
    messages.splice(id, 1);
    return true;
  }
  return false;
};

module.exports = { getAll, getById, create, update, delete: deleteMessage };