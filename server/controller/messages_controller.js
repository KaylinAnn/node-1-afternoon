let messages = [];
let id = 0;
module.exports = {
  create: (req, res) => {
    const { text, time } = req.body;
    messages.push({ text, time, id });
    id++;
    res.status(200).send(messages);
  },

  read: (req, res) => {
    console.log(messages);
    res.status(200).send(messages);
  },

  update: (req, res) => {
    const { text } = req.body;
    const updateId = req.params.id;
    console.log(updateId, text);
    let index = messages.findIndex(message => message.id == updateId);
    let message = messages[index];

    messages[index] = {
      id: message.id,
      text: text || message.text,
      time: message.time
    };
    res.status(200).send(messages);
  },

  delete: (req, res) => {
    index = messages.findIndex(message => message.id == req.params.id);
    messages.splice(index, 1);
    res.status(200).send(messages);
  }
};
