$(document).ready(function(){
 var ourUsers = ["anderzel","shoutfactorytv","OgamingSC2","cretetion","freecodecamp","milleniumreturns","noobs2ninjas","ogn_lol"];
 var html="" ;
  var url = 0;

  function offLineuser() {
    var myURL ='https://api.twitch.tv/kraken/channels/' + url;
  $.ajax({
        type: "GET",
        url: myURL ,
        headers: {
   'Client-ID': 'v8is3y21q1ng9oul4ediyl9e1z23vn',
 },
        success: function (data, textStatus, jqXHR) {
         html += "<li><p class='item offline'><img src=' "+ data.logo + "' alt='channel logo'>" + data.display_name + " is curntly Offline </p></li>";
          $("#status").html(html);
        },
    });
}

  function userdata(data) {
  if (data.status == 422 || data.status == 404) {
    html += "<li><p class='item offline'>NOT found!!</p></li>" ;
    $("#status").html(html);
  }
    else if (data.stream === null) {
    url = data._links.channel.substr(38);
    offLineuser();
  }
    else {
    html += "<li><p class='item online'><img src=' "+ data.stream.channel.logo + "' alt='channel logo'/><a href='"  + data.stream.channel.url + "'>" + data.stream.channel.display_name + "</a> is currently stream " + data.stream.game  + "</p></li>" ;
    $("#status").html(html);

  }
}

function twitchuser() {
  var myURL = 'https://api.twitch.tv/kraken/streams/' + ourUsers[i];
  $.ajax({
        type: "GET",
        url: myURL ,
        headers: {
   'Client-ID': 'v8is3y21q1ng9oul4ediyl9e1z23vn',
 },
        success: function (data, textStatus, jqXHR) {
      userdata(data);
        },

    });
}

    for (var i = 0; i < ourUsers.length; i++) {
        twitchuser();
}


});
 
