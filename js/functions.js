/*  Leandro Zambelli
*/

function navMobile() {

    var
        $nav_mobile     = document.getElementById('nav-mobile'),
        $btn_toggle_nav = document.getElementsByClassName('btn-toggle-nav')[0];

    function toggleNav() {

        if ($nav_mobile.style.width && $nav_mobile.style.height) {
            
            $nav_mobile.style.width = null;
            $nav_mobile.style.height = null;
            
            } else { 
                $nav_mobile.style.width = '300px';
                $nav_mobile.style.height = '300px';
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
         }, 600);
      }
  });
}

backTopAnimation();