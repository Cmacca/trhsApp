$(document).ready(function() {
    
  //$('#sub').click(function() {
    
    $('#sub').click(function() {
    var clist = $('#form').serializeArray();
         localStorage.uno = clist[0]['value'];
         localStorage.dos = clist[1]['value'];
         localStorage.tres= clist[2]['value'];
         localStorage.quatro= clist[3]['value'];
         localStorage.cinco= clist[4]['value'];
         localStorage.six= clist[5]['value'];
         localStorage.seven= clist[6]['value'];
         localStorage.eight= clist[7]['value'];
         
         $('input[name='1']').attr("value", localStorage.uno);
    });
