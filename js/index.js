    (function(){
        var images = {
          1: { title:"Pinterest Clone", link:"https://p1nit.herokuapp.com"},
          2: { title:"Force Directed Graph", link:"http://codepen.io/marhyorh/full/OXgBzY"},
          3: { title:"Simon Game", link:"http://codepen.io/marhyorh/full/KdzPdr"},
          4: { title:"Tic Tac Toe Game", link:"http://codepen.io/marhyorh/full/pjjoVd"},
          5: { title:"Chart the Stock Market", link:"https://stockstock.herokuapp.com/"},
          6: { title:"Markdown Previewer", link:"http://codepen.io/marhyorh/full/pgPRyG"}
        };

        for(var i in images){
            $('.' + i).html(
                '<div class="wrap-folios"><div class="folios">' +
                    '<a href="' + images[i].link + '" target="_blank"><img src="img/portfolio/' + i + '.jpg" width="100%"></a>' +
                '</div>' +
                '<div class="folios-text">' +
                    '<p>' + images[i].title + '</p>' +
                    '<a href="' + images[i].link + '" class="btn btn-primary ripple" target="_blank"> Check it out! </a>' +
                '</div></div>'
            );
        }

        var logoText = $('.logo-text'),
          homeLink = $('.home-link');

        $('.portfolio-link').click(function() {
          $('#portfolio').addClass("animated fadeIn");
        });

        $('.goAbout').click(function(){
            $('#about').addClass("animated fadeIn");
        });

        $('#about').hover(function(){
            setTimeout(function(){
                 $('#about').removeClass("animated fadeIn");
            },1000);
        });

        $('.goHome').click(function(){
            $('#home').addClass("animated bounce");
        });

        $('#home').hover(function(){
            setTimeout(function(){
                 $('#home').removeClass("animated bounce");
            },1000);
        });

        $('.button-down').addClass("animated pulse");
    })();
