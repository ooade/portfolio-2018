    (function(){
        var images = {
          1: { title:"Simon Game", link:"http://codepen.io/marhyorh/full/KdzPdr"},
          2: { title:"Voting App", link:"https://cryptic-beach-4819.herokuapp.com/"},
          3: { title:"NightLife Coordination App", link:"http://fcc-nightlife.herokuapp.com/"},
          4: { title:"FreeCodeCamp Campers News", link:"http://codepen.io/marhyorh/full/LVaWxV"},
          5: { title:"Chart the Stock Market", link:"https://stockstock.herokuapp.com/"},
          6: { title:"Markdown Previewer", link:"http://codepen.io/marhyorh/full/pgPRyG"}     
        };
        
        for(var i in images){
            $('.' + i).html(
                '<div class="wrap-folios"><div class="folios">' + 
                    '<a href="images/portfolio/' + i + '.png" data-title="'+ images[i].title +'" data-lightbox="lightbox"><img src="images/portfolio/' + i + '.png" width="100%"></a>' + 
                '</div>' + 
                '<div class="folios-text">' +
                    '<p>' + images[i].title + '</p>' + 
                    '<a href="' + images[i].link + '" class="btn btn-xs btn-success" target="_blank"> Check it out! </a>' +
                '</div></div>'
            ); 
        }
        
        $('.modal-body li').prepend('<i class="fa fa-check"></i>')
        
        $('.btn').tooltip('toggle');
        
        $('.lang').click(function(){
            $('.langClass').modal('show');
        });
        
        $('.goAbout').click(function(){
            $('#about').addClass("animated fadeIn");
        });
        
        $('#about').hover(function(){
            setTimeout(function(){
                 $('#about').removeClass("animated fadeIn");
            },1000);          
        });
        
        $('.goPortfolio').click(function(){
            $('#porfolio').addClass("animated fadeIn");
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