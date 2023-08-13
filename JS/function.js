document.addEventListener("DOMContentLoaded", function () {

  document.getElementById("genre_selbox").addEventListener('change', function () {

    var selboxvalue = document.getElementById("genre_selbox").value;
    var display_all = document.getElementsByClassName('archive_content');
    var display_songs = document.getElementsByClassName('songs');
    var display_minecraft = document.getElementsByClassName('minecraft');
    var display_shinycolors = document.getElementsByClassName('shinycolors');
    var display_valorant = document.getElementsByClassName('valorant');
    var display_OneHandClapping = document.getElementsByClassName('OneHandClapping');
    var display_splatoon = document.getElementsByClassName('splatoon');
    var display_othergame = document.getElementsByClassName('othergame');
    var display_talk = document.getElementsByClassName('talk');
    var display_durable_immediately = document.getElementsByClassName('durable_immediately');
    var display_anniversary = document.getElementsByClassName('anniversary');
    var display_collaboration = document.getElementsByClassName('collaboration');
    var display_newcostume = document.getElementsByClassName('newcostume');
    var display_other = document.getElementsByClassName('other');

    display_all = Array.from(display_all);
    for (var i = 0; i < display_all.length; i++) {
      display_all[i].style.display = "none";
    }

    switch (selboxvalue) {
      case 'genre_all':
        display_all = Array.from(display_all);
        for (var i = 0; i < display_all.length; i++) {
          display_all[i].style.display = "";
        }
        break;
      case 'genre_song':
        display_songs = Array.from(display_songs);
        for (var i = 0; i < display_songs.length; i++) {
          display_songs[i].style.display = "";
        }
        break;
      case 'genre_minecraft':
        display_minecraft = Array.from(display_minecraft);
        for (var i = 0; i < display_minecraft.length; i++) {
          display_minecraft[i].style.display = "";
        }
        break;
      case 'genre_shinycolors':
        display_shinycolors = Array.from(display_shinycolors);
        for (var i = 0; i < display_shinycolors.length; i++) {
          display_shinycolors[i].style.display = "";
        }
        break;
      case 'genre_valorant':
        display_valorant = Array.from(display_valorant);
        for (var i = 0; i < display_shinycolors.length; i++) {
          display_valorant[i].style.display = "";
        }
        break;
      case 'genre_OneHandClapping':
        display_OneHandClapping = Array.from(display_OneHandClapping);
        for (var i = 0; i < display_OneHandClapping.length; i++) {
          display_OneHandClapping[i].style.display = "";
        }
        break;
      case 'genre_splatoon':
        display_splatoon = Array.from(display_splatoon);
        for (var i = 0; i < display_splatoon.length; i++) {
          display_splatoon[i].style.display = "";
        }
        break;
      case 'genre_othergame':
        display_othergame = Array.from(display_othergame);
        for (var i = 0; i < display_othergame.length; i++) {
          display_othergame[i].style.display = "";
        }
        break;
      case 'genre_talk':
        display_talk = Array.from(display_talk);
        for (var i = 0; i < display_talk.length; i++) {
          display_talk[i].style.display = "";
        }
        break;
      case 'genre_durable_immediately':
        display_durable_immediately = Array.from(display_durable_immediately);
        for (var i = 0; i < display_durable_immediately.length; i++) {
          display_durable_immediately[i].style.display = "";
        }
        break;
      case 'genre_anniversary':
        display_anniversary = Array.from(display_anniversary);
        for (var i = 0; i < display_anniversary.length; i++) {
          display_anniversary[i].style.display = "";
        }
        break;
      case 'genre_collaboration':
        display_collaboration = Array.from(display_collaboration);
        for (var i = 0; i < display_collaboration.length; i++) {
          display_collaboration[i].style.display = "";
        }
        break;
      case 'genre_newcostume':
        display_newcostume = Array.from(display_newcostume);
        for (var i = 0; i < display_newcostume.length; i++) {
          display_newcostume[i].style.display = "";
        }
        break;
      case 'genre_other':
        display_other = Array.from(display_other);
        for (var i = 0; i < display_other.length; i++) {
          display_other[i].style.display = "";
        }
        break;
      default:

    }


  });

});

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("genre_selbox_info").addEventListener('change', function () {

    var selboxvalueinfo = document.getElementById("genre_selbox_info").value;
    var display_all = document.getElementsByClassName('info_content');
    var display_official = document.getElementsByClassName('official');
    var display_goods = document.getElementsByClassName('goods');
    var display_appearance = document.getElementsByClassName('appearance');
    var display_voice = document.getElementsByClassName('voice');
    var display_music = document.getElementsByClassName('music');
    var display_nornis = document.getElementsByClassName('nornis');

    display_all = Array.from(display_all);
    for (var i = 0; i < display_all.length; i++) {
      display_all[i].style.display = "none";
    }

    switch (selboxvalueinfo) {
      case 'genre_all':
        display_all = Array.from(display_all);
        for (var i = 0; i < display_all.length; i++) {
          display_all[i].style.display = "";
        }
        break;
      case 'genre_official':
        display_official = Array.from(display_official);
        for (var i = 0; i < display_official.length; i++) {
          display_official[i].style.display = "";
        }
        break;
      case 'genre_goods':
        display_goods = Array.from(display_goods);
        for (var i = 0; i < display_goods.length; i++) {
          display_goods[i].style.display = "";
        }
        break;
      case 'genre_appearance':
        display_appearance = Array.from(display_appearance);
        for (var i = 0; i < display_appearance.length; i++) {
          display_appearance[i].style.display = "";
        }
        break;
      case 'genre_voice':
        display_voice = Array.from(display_voice);
        for (var i = 0; i < display_voice.length; i++) {
          display_voice[i].style.display = "";
        }
      break;
      case 'genre_music':
        display_music = Array.from(display_music);
        for (var i = 0; i < display_music.length; i++) {
          display_music[i].style.display = "";
        }
        break;
      case 'genre_nornis':
      display_nornis = Array.from(display_nornis);
      for (var i = 0; i < display_nornis.length; i++) {
        display_nornis[i].style.display = "";
      }
      break;
      default:

    }


  });

});
