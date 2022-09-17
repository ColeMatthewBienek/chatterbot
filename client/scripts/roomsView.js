// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    this.$button.on('click', this.handleClick)
    this.$select.on('change', this.handleChange)
  },

  render: function() {
    this.$select.empty()

    this.$select.append($('<option>'))

    for (let room of Rooms.getAll()) {
      this.$select.append($('<option>', {
        text: room,
        value: room
      }))
    }
  },

  renderRoom: function(roomname) {
    let $option = $('<option>').val(roomname).text(roomname);
    this.$select.append($option)
  },

  handleChange: function(event) {
    MessagesView.clearMessages()

    const room = event.target.value

    Rooms.selectRoom(room)

    Messages.getRoomMessages(room).forEach(MessagesView.renderMessage.bind(MessagesView))
  },

  handleClick: function(event) {
    const room = window.prompt('Enter room name:')

    Rooms.add(room)
    Rooms.selectRoom(room)
    RoomsView.renderRoom(room)
  }

};
