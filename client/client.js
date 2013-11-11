Template.messages.messages = function() {
  return Messages.find({}, {sort: {time: -1}});
  // SELECT * FROM Messages ORDER BY time DESC;
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

    if (Meteor.user()) {
      var name = Meteor.user().profile.name;
      var scrname = Meteor.user().services.twitter.screenName;
    } else {
      var name = 'Anonymous';
      var scrname = ''; 
    }
    
    var $message = $('#message');

    if ($message.val() != '') {
      Messages.insert({
        name: name,
        account: scrname,
        message: $message.val(),
        time: Date.now(),
      });

      var aSound = document.createElement('audio');
      aSound.setAttribute('src', 'chat.mp3');
      aSound.play()

      $message.val('');
    }
  },
  'keyup #message': function() {
    $('.typing').css('display', 'none');
  },
  'keydown #message': function() {
    $('.typing').css('display', 'block');
  }
}

Template.typing.name = function() {
  //return (Meteor.user()) ? Meteor.user().services.twitter.screenName : 'Anonymous';
  return 'Anonymous';
}