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
         
         console.log(localStorage);
         
        alert('Your settings have been saved!');
    });
     $('#one').attr("value", localStorage.uno);
$('#two').attr("value", localStorage.dos);
$('#three').attr("value", localStorage.tres);
$('#four').attr("value", localStorage.quatro);
$('#five').attr("value", localStorage.cinco);
$('#six').attr("value", localStorage.six);
$('#seven').attr("value", localStorage.seven);
$('#eight').attr("value", localStorage.eight);
});
