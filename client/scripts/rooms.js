// This object houses all the room _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Rooms = {

  // TODO: Define how you want to store the list of rooms
  _data: new Set(),

  // TODO: Define methods which allow you to add rooms, update the list,
  // mark a room as selected, etc.
  selected: null,

  has(room) {
    return this._data.has(room)
  },

  add(room) {
    if (room) {
      this._data.add(room)
    }
  },

  selectRoom(room) {
    this.selected = room
  },

  getSelected() {
    return this.selected
  },

  getAll() {
    return this._data.values()
  }
};