jQuery(document).ready(function($){
	$('.disabled').click(function (e) {e.preventDefault()});
	$('[href^=#]').click(function (e) {e.preventDefault()});
	$("[data-toggle=tooltip]").tooltip();
	$("[data-toggle=popover]").popover();
	$('<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>').prependTo('div.alert-dismissable');
	
	function autocollapse() {
		var navbar = $('.navbar.navbar-autocollapse');
		navbar.removeClass('collapsed');
		if(navbar.innerHeight() > 50) {
			navbar.addClass('collapsed');
		}
	}
	$(document).on('ready', autocollapse);
	$(window).on('resize', autocollapse);
});

$('#navbar').affix({
    offset: {
        top: '100'
    }
});

window.sr = ScrollReveal();
/*
Code of animation
*/
sr.reveal('#logo',{
    origin: 'right',
    duration: '4000',
    distance: '2000px'
});

sr.reveal('#navbar',{
    origin:'bottom',
    distance: '2000px',
    duration: '1000'
});

sr.reveal('.showcase-left',{
    duration : 2000,
    origin: 'top',
    distance:'10px',
    container:'.Acceuil',
     rotate:{x:360}
    
});
sr.reveal('.showcase-right',{
    duration : 2000,
    origin: 'left',
    distance:'300px',
    container:'.Acceuil',
     rotate:{x: 90,y:360}
});
sr.reveal('.vr',{
    duration : 2000,
    origin: 'top',
    distance:'5px',
   
});
sr.reveal('.ar',{
    duration : 2000,
    origin: 'bottom',
    distance:'300px'
    
});
