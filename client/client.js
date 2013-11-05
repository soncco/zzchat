Template.messages.messages = function() {
  return Messages.find({}, {sort: {time: -1}});
}

Template.input.events = {
  'submit #myform' : function (event) {
    event.preventDefault();
    var name = 'Anonymous';
    var message = $('#message');

    if (message.value != '') {
      Messages.insert({
        name: name,
        message: message.val(),
        time: Date.now(),
      });

      document.getElementById('message').value = '';
      message.value = '';
    }
  }
}