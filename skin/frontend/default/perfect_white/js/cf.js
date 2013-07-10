/**
 * Author: damodar.bashyal
 * Date: 5/10/11
 * Time: 12:26 PM
 */
function slideUp()
{
	jQuery('#topCartContent:visible').slideUp(1000);
	jQuery('.mini-cart-layer').addClass('mini-cart-layer-up');
	jQuery('.mini-cart-layer').removeClass('mini-cart-layer-down');
}

function slideDown()
{
	jQuery('#topCartContent:hidden').slideDown(1000);
	/*startTimer()*/ /* optional*/
	jQuery('.mini-cart-layer').addClass('mini-cart-layer-down');
	jQuery('.mini-cart-layer').removeClass('mini-cart-layer-up');
}

function toggleTopCart()
{
	if(jQuery('#topCartContent').is(':visible'))
	{
		slideUp();
	} else {
		slideDown();
	}
}

var timer;
function startTimer()
{
	timer = setTimeout(function(){
		slideUp();
	}, 5000);
}

jQuery(document).ready(function(){
	jQuery('.my_cart').click(function(e){
        e.preventDefault();
		toggleTopCart();
	});

	jQuery('.my_cart').mouseover(function(){
		clearTimeout(timer);
	}).mouseout(function(){
		startTimer();
	});

	jQuery("#topCartContent").mouseover(function() {
		clearTimeout(timer);
	}).mouseout(function(){
		startTimer();
	});
});