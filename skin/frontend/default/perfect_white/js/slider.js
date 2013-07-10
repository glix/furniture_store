jQuery.noConflict();	

// Enabling home page slider
jQuery(document).ready(function() { 
slider = jQuery('#slider-content'); 
slider.cycle({ fx: 'curtainX', timeout: 4000, speed: 1000, next: '.stripNavL', prev: '.stripNavR', pager:'#stripNav0' }); });
