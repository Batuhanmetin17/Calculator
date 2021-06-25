$(document).ready(function(){
  
    $('.operation').click(function(){
         var operationValue = $(this).val();
         var total = $('input').val($('input').val() + operationValue); 
     });
   
   $('.equal').click(function(){
     $('input').val(eval($('input').val()));
     });
 
   
   $('.clear').click(function(){
    $('input').val('');
     });
   
     
   $('.delete').click(function(){
     if($('input').val() === 'Infinity')
     {
      $('input').val('');
     }
    $('input').val($('input').val().substring(0, $('input').val().length - 1));
     });
 });
