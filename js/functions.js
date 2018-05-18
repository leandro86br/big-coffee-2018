/*
    Author: Leandro.Zambelli@yahoo.com
*/

function navMobile() {

    var
        $nav_mobile     = document.getElementById('nav-mobile'),
        $btn_toggle_nav = document.getElementsByClassName('btn-toggle-nav')[0];

    function toggleNav() {

        if ($nav_mobile.style.top && $nav_mobile.style.left) {
            $nav_mobile.style.top = null;
            $nav_mobile.style.left = null;
        } else {
            $nav_mobile.style.top = 0;
            $nav_mobile.style.left = 0;
        }

        $btn_toggle_nav.classList.toggle('bar-close');
    }

    $btn_toggle_nav.addEventListener('click', toggleNav);
}

navMobile();


function backTopButton() {

    var
        $back_top = document.getElementsByClassName('back-top')[0];

    window.onscroll = function scrollFunction() {

        if (document.documentElement.scrollTop > 100 || document.body.scrollTop > 100) {
            $back_top.classList.remove('hide-me');
        } else {
            $back_top.classList.add('hide-me');
        }
    }
}

backTopButton();


/* Backtop
*/


function backTopAnimation(){
  $('a[href^="#"]').on('click', function(event) {
      var target = $(this.getAttribute('href'));
      if( target.length ) {
         event.preventDefault();
         $('html, body').stop().animate({
             scrollTop: target.offset().top
         }, 1000);
      }
  });
}

backTopAnimation();
