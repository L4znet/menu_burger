/*
* Projet créé par Charly Escalona
* Charly2221@hotmail.fr
* www.charly-e.com
* https://github.com/L4znet/menu_burger
*/

$(document).ready(function(){
	let button = $('button');
  let menu = $('nav');
  let text = $('.text');
  let icon_close = $('.icon_close');
  let icon_open = $('.icon_open');
  button.click(function(){
  	if(menu.hasClass('open')){
      menu.removeClass('open')
      menu.addClass('close')
      text.css('display', 'none');
      icon_open.css('display', 'flex');
      icon_close.css('display', 'none');
    } else {
      menu.removeClass('close')
      menu.addClass('open')
      text.css('display', 'flex');
      icon_open.css('display', 'none');
      icon_close.css('display', 'flex');
    }
  })
})