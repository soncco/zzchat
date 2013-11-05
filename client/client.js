Template.chat.messages = function() {
  return Messages.find({}, {sort: {time: -1}});
  // SELECT * form messages ORDER BY time DESC;
};

Template.formulario.events = {
  'keydown #msg': function (e) {
    if(e.which == 13) { //13 = Enter
      var nombre = document.getElementById('nom');
      var msg = document.getElementById('msg');

      var chatero = 'Anonimo';

      if(msg.value != '') {
        if(nombre.value != '') chatero = nombre.value;

        Messages.insert({
          'nombre': chatero,
          'mensaje': msg.value,
          'time': Date.now()
        });

        document.getElementById('msg').value = '';
        msg.value = '';
      }  
    }
  }
};