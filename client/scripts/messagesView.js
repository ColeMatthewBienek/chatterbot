// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

// https://stackoverflow.com/questions/24816/escaping-html-strings-with-jquery
const entityMap = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
  '/': '&#x2F;',
  '`': '&#x60;',
  '=': '&#x3D;'
};

function escapeHtml (string) {
  return String(string).replace(/[&<>"'`=\/]/g, function (s) {
    return entityMap[s];
  });
}

var MessagesView = {

  $chats: $('#chats'),
  $form: $('form'),

  initialize: function() {
    this.$chats.on('click', this.handleClick)
    this.$form.on('submit', this.handleSubmit)
  },

  render: function() {
    Messages.getAll().forEach(({ text, username }) => {
      this.renderMessage({ text, username });
    })
  },

  renderMessage: function({ text, username }) {
    const $chat = $('<div class="chat"></div>')
    $chat.append(`<div class="username">${username}</div>`)
    $chat.append(`<span>${escapeHtml(text)}</span>`)
    this.$chats.append($chat)
  },

  clearMessages() {
    this.$chats.empty()
  },

  handleClick: function(event) {
    const username = event.target.textContent

    Friends.toggleStatus(username)

  },

  handleSubmit(event) {
    const text = $('#message').val()

    if (text) {
      Parse.create({
        text,
        username: App.username,
        roomname: Rooms.getSelected(),
      }, (result) => {
        alert('Message sent')
      })
    }
  }

};