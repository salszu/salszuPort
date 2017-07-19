window.addEventListener('load',function(){
  var welcome = document.querySelector('.greet'),
      subtext = document.querySelector('.subTexts'),
      follow  = document.querySelector('.followUs'),
      social  = document.querySelectorAll('.socialIcon'),
      portfolio = document.querySelector('.portfolio'),
      delay = 1000; 
  
  
  setTimeout(function(){welcome.style.top='0';},delay);
  setTimeout(function(){subtext.style.bottom = '0%';},delay*2);
  setTimeout(function(){subtext.style.bottom = '-100%';},delay*4);
  setTimeout(function(){form.style.opacity='1';},delay*5);
  setTimeout(function(){follow.style.bottom='0%';},delay*5.5);
  setTimeout(
    function(){
      social[0].style.marginTop='0px';
      social[1].style.marginTop='0px';
      social[2].style.marginTop='0px';
    },delay*7
  ); 
  
   
});