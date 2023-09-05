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
      }
    else if($('#dogememe').position().left > 300 && $('#dogememe').position().left < 500){
    $('#something').text("You found the wows!");
    }
    else {
     $('#something').text("try a little further right!");
      
    }
}
    
    
    
    
    
  });
});