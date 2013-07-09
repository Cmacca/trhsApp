//FUnction to control Android back-button

document.addEventListener("deviceready", function () {
            document.addEventListener("backbutton", function (e) {
                if ($.mobile.activePage.is('#home')) {
                    e.preventDefault();
                    navigator.app.exitApp();
                }
                
                if ($.mobile.activePage.is('#page-three')) {
                  $('a.phix')[0].click()
                }
                else {
                    navigator.app.backHistory()
                }
            }, false);
        }, false);
        
function onBackKeyDown() {
    history.go(-1);
    navigator.app.backHistory();
}

$(document).ready(function() {
	if ($.mobile.activePage.is('#home')) {
		('#lol').hide();
	}
	
	else {
		('#lol').show();
	}
	
});

$(document).ready(function(){
document.addEventListener("backbutton", function (e) {
   if ($.mobile.activePage.is('#page-three')) {
	var urly = $('a.phix').attr('href');
	window.location.href = "'" + urly + "'";
   };
});
