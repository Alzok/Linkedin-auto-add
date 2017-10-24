var href = window.location.hostname + window.location.pathname;

if (href == 'www.linkedin.com/mynetwork/') {
    var secu = setInterval(function() {
        if ($('.mn-pymk-list').length) {
            clearInterval(secu);
            start();
        }
    }, 300);

    function start() {
        var infmod;

        //content
        $("body").append("<div class='workbitch'><div class='profil'><a href='https://www.linkedin.com/in/mathieubenhalima' target='_blank'><div class='mathieu'></div></a><a target='_blank' href='https://www.linkedin.com/company-beta/2450005/'><div class='agence'></div></a></div><div class='sponso support'>Une idée ? Une question ?</div><div class='sponso article'>Comment ? Pourquoi ? La suite ?</div><div class='logo'><a href='https://www.1min30.com/' target='_blank'><img src='https://cdn.1min30.com/wp-content/uploads/2017/06/logo-1.png'></a></div><div class='close_button'>X</div><span>Que veux tu<br> mon petit chou ?</span><div class='button_content'><div class='button button_add'><span class='none'>1003</span><p>Ajouter beaucoup de contacts</p></div><div class='button button_inf'><p>Ajouter une infinité de contacts</p></div><div class='button button_inv'><p>Supprimer les invitations en attente</p></div><div class='button button_inf'><p>Ajouter des contacts issus d'une recherche</p></div><div class='button button_inf'><p>Une licorne qui péte</p></div></div></div>");
        
        // ajout
        $(".workbitch .button.button_add").click(function(event) {
            /*var count = $(this).children('span');
            count = $(count).text();
            count_page = count / 10;*/
            $(".workbitch span").addClass('none');
            $(".workbitch .button_content").addClass('none');
            setTimeout(function() {
                $(".workbitch span").html("L'incroyable extension <br>Linkedin auto add travaille !<br>Il va falloir attendre un peu...<div class='count'>0</div><div class='wait'></div>");
                $(".workbitch span").removeClass('none');
                $(".workbitch .button_content").remove();
                
                var scroll_inter = setInterval(function() {
                    
                }, 500);
            }, 500);

                $('.mn-pymk-list__card .button-secondary-small').each(function() {
                    /*setTimeout(function() {*/
                    $(this).click();
                    a++;
                    jQuery('.workbitch .count').text(a);
                    /*}, time);
                    time += 500;*/
                });
                setTimeout(function() {
                    $('.workbitch').remove();
                }, 3000);
        });

        // ajout infini
        var a = 0;
        $(".workbitch .button.button_inf").click(function(event) {
          setTimeout(function() {
                $(".workbitch span").html("L'incroyable extension <br>Linkedin auto add travaille !<div class='count'>0</div><div class='wait'></div><div class='stop'>Arrêter la magie</div>");
                $(".workbitch span").removeClass('none');
                $(".workbitch .button_content").remove();
            }, 500);
            var a = 0;
            var x = 0;
            var time = 500;
            
            if(jQuery('.mn-pymk-list__action-container').length){
                $(document).scrollTop($(document).height());
                infmod = setInterval(function(){
                    jQuery('.mn-pymk-list__action-container .button-secondary-small').each(function(index, el) {
                        var that = jQuery(this);
                        setTimeout(function(){
                            console.log('click');
                            x++;
                            if(x >= 9){
                                jQuery(that).click();
                                a++;
                                jQuery('.workbitch .count').text(a);
                            }else if(x == 9){
                                x = 0;
                                $(document).scrollTop($(document).height());
                            }
                        }, time);
                        time += 1000;
                   });
                },900);
            }

            jQuery('body').on("click", ".workbitch .stop", function() {
                close();
            });
        });

        // remove invitation
        $(".workbitch .button.button_inv").click(function(event) {
            window.location.href = "https://www.linkedin.com/mynetwork/invitation-manager/sent/";
        });

        var verif = 0;
        function close() {
            if (verif == 0){
                clearInterval(infmod);
                $('.workbitch *').remove();
                $('.workbitch').addClass('mini');
                $('.workbitch').append('Un dernier coup vite fait ? ');
            }
            verif++;
        }

        // CLOSE 
        jQuery('.workbitch .close_button').click(function(event) {
            close();
        });

        // UN DERNIER COUP ?
        jQuery('body').on("click", ".workbitch.mini", function() {
            $('.mn-pymk-list__card .button-secondary-small').each(function() {
                $(this).click();
            });
            $('.workbitch').addClass('none');
            setTimeout(function() {
                $('.workbitch').remove();
            }, 500);
        });

    }
}else if (href == 'www.linkedin.com/mynetwork/invitation-manager/sent/') {
    var secu = setInterval(function() {
        if ($('.mn-person-card__person-btn-ext').length) {
            clearInterval(secu);
            start();
        }
    }, 300);
    function start() {
        var remove_inv;
        $("body").append("<div class='workbitch'><div class='profil'><a href='https://www.linkedin.com/in/mathieubenhalima' target='_blank'><div class='mathieu'></div></a><a target='_blank' href='https://www.linkedin.com/company-beta/2450005/'><div class='agence'></div></a></div><div class='sponso support'>Une idée ? Une question ?</div><div class='sponso article'>Comment ? Pourquoi ? La suite ?</div><div class='logo'><a href='https://www.1min30.com/' target='_blank'><img src='https://cdn.1min30.com/wp-content/uploads/2017/06/logo-1.png'></a></div><div class='close_button'>X</div><span>Supprimer<br>les invitations envoyés ?</span><div class='button_content'><div class='button button_inv'><p>Ouiiiiiiiii</p></div></div></div>");
        $(".workbitch .button.button_inv").click(function(event) {
            $(".workbitch span").addClass('none');
            $(".workbitch .button_content").addClass('none');
            setTimeout(function() {
                $(".workbitch span").html("L'incroyable extension <br>Linkedin auto add travaille !<div class='count'>0</div><div class='wait'></div><div class='stop'>Arrêter la magie</div>");
                $(".workbitch span").removeClass('none');
                $(".workbitch .button_content").remove();
            }, 500);
            var a = 0;
            remove_inv = setInterval(function(){
                if(jQuery('.mn-person-card__person-btn-ext').length){
                    jQuery('.mn-person-card__card-actions .mn-person-card__person-btn-ext').each(function(){
                        jQuery(this).click();
                        a++;
                        jQuery('.workbitch .count').text(a);
                    });
                }
            },1000);
            jQuery('body').on("click", ".workbitch .stop", function() {
                close();
            });
        });

        var verif = 0;
        function close() {
            if (verif == 0){
                clearInterval(remove_inv);
                $('.workbitch').remove();
            }
            verif++;
        }

        // CLOSE 
        jQuery('.workbitch .close_button').click(function(event) {
            close();
        });
    }
}

if (window.location.hostname == 'www.linkedin.com'){
    // SPONSO 
    jQuery('.workbitch .sponso.article').click(function(event) {
        window.location.href = "https://www.1min30.com/social-selling/agrandir-votre-reseau-et-votre-impact-sur-linkedin-via-notre-outil-125735";
    });
    jQuery('.workbitch .sponso.support').click(function(event) {
        window.location.href = "mailto:mb@1min30.com";
    });

}