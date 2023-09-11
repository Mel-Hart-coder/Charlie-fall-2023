// I narrowed the area in which wows can be found in order to make it a little more challenging. 


$( document ).ready(function() {
  $('#dogememe').click(
     function(
     ){
       //code'#dogememe'
       console.log("position: ", $('#dogememe').position())
   });
  

       
 
  
  
  $('#dogememe').draggable({
   
  start: function(){
    
   
    if ($('#dogememe').position().left > 500){
      $('#something').text("Try a little further left!");
      $('#dogememe').attr('src', 'https://wallpapercave.com/wp/wp6956355.jpg');
     }
   else if($('#dogememe').position().left > 300 && $('#dogememe').position().left < 500){
    $('#something').text("You found the wows!");
    $('#dogememe').attr('src', 'https://i.marketingprofs.com/assets/images/articles/content/210715-doge-1.jpg');
   }
   else {
    $('#something').text("try a little further right!");
    $('#dogememe').attr('src', 'https://wallpapercave.com/wp/wp6956355.jpg');
   }


}
    
    
    
    
    
  });
});