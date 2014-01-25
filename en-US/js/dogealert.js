function resizeGadget()
{
    if(System.Gadget.docked == true)
    {
        mainBody.style.height = 150;
        mainBody.style.width = 250;
    }
    else
    {
        mainBody.style.height = 640;
        mainBody.style.width = 640;    
    }
} 
function tick()
{
alert("inside");
	$.getJSON( "http://pubapi.cryptsy.com/api.php?method=singlemarketdata&marketid=132")
		.done(function( json ) {
		alert( "JSON Data: " + json.return.DOGE.label + ": "+ json.return.DOGE.lasttradeprice );
		$("#latestprice").html(json.return.DOGE.label + ": "+ json.return.DOGE.lasttradeprice);
		})
		.fail(function( jqxhr, textStatus, error ) {
		var err = textStatus + ", " + error;
		console.log( "Request Failed: " + err );
		});
}
