Template.messages.messages = function() {
  return Messages.find({}, {sort: {time: -1}});
}

Template.user.user = function(){

  return Meteor.user().services.twitter.screenName; 
}

Template.user.imagen = function(){

  return Meteor.user().services.twitter.profile_image_url; 
}

Template.input.events = {
  'submit #myform' : function (event) {
    event.preventDefault();
    if (Meteor.user())
      {  var name = Meteor.user().profile.name;
        var scrname= Meteor.user().services.twitter.screenName;
      }
      else
      {  var name = 'Anonymous';
         var scrname=''; 
      }
      var message = $('#message');
    if (message.value != '') {
      Messages.insert({
        name: name,
        account: scrname,
        message: message.val(),
        time: Date.now(),
      });

      document.getElementById('message').value = '';
      message.value = '';
    }
  }
}