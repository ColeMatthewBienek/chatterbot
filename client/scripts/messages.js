// This object houses all the message _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Messages = {

  // TODO: Define how you want to store your messages.
  _data: {},

  add(message) {
    if (message.text && message.username) {
      this._data[message.message_id] = message
    }
  },

  has(id) {
    return this._data[id] !== undefined
  },

  get(id) {
    return this._data[id]
  },

  getAll() {
    return Object.values(this._data)
  },

  getRoomMessages(room) {
    return Object.values(this._data).filter((message) => message.roomname === room)
  }

  // TODO: Define methods which allow you to retrieve from,
  // add to, and generally interact with the messages.

};