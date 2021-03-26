

document.addEventListener("DOMContentLoaded", function(){

  document.getElementById("genre_selbox").addEventListener('change',function(){

    var selboxvalue = document.getElementById("genre_selbox").value;
    var display_all = document.getElementsByClassName('archive_content');
    var display_songs = document.getElementsByClassName('songs');
    var display_minecraft = document.getElementsByClassName('minecraft');
    var display_shinycolors = document.getElementsByClassName('shinycolors');
    var display_valorant = document.getElementsByClassName('valorant');
    var display_othergame = document.getElementsByClassName('othergame');
    var display_talk = document.getElementsByClassName('talk');
    var display_durable_immediately = document.getElementsByClassName('durable_immediately');
    var display_collaboration = document.getElementsByClassName('collaboration');
    var display_newcostume = document.getElementsByClassName('newcostume');
    var display_other = document.getElementsByClassName('other');

    display_all = Array.from(display_all);
    for(var i = 0; i < display_all.length; i++) {
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
