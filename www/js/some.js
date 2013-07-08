/********************************************************************************
FUNCTION FOR CROSS DOMAIN AJAX REQUEST USING JQUERY 1.5+
********************************************************************************/  
function loadContents(url, callback) {  
 
    //CONFIRM A URL WAS PROVIDED  
    if(url) {  
 
	    //SET URL FOR YAHOO YQL QUERY
	    var yql = 'http://query.yahooapis.com/v1/public/yql?q=' + encodeURIComponent('select * from html where url="' + url + '"') + '&format=xml&callback=?';  
 
		//MAKE YAHOO YQL QUERY  
	   	$.getJSON(yql,function(data) {
 
			//BUILD CALLBACK FUNCTION
			if(typeof callback === 'function') {  
			    callback(data.results[0]);  
			}  
 
		//WRITES ERROR TO LOG	
	    }).error(function(jqXHR, textStatus, errorThrown) { 
	    	console.log(errorThrown); }
	    );
 
  	//LOG ERROR IF NO URL WAS PASSED TO THE SCRIPT
  	} else {
  		 console.log('No site was passed to the script.'); 
  	}
 
} 

//FUnction to control Android back-button

document.addEventListener("deviceready", function () {
            document.addEventListener("backbutton", function (e) {
                if ($.mobile.activePage.is('#home')) {
                    e.preventDefault();
                    navigator.app.exitApp();
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
