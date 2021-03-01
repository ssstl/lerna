var domain = 'http://scriptandstyle.com';
var myPopup = window.open(domain
            + '/windowPostMessageListener.html','myWindow');
setInterval(function(){
	var message = 'Hello!  The time is: ' + (new Date().getTime());
	console.log('blog.local:  sending message:  ' + message);
        //send the message and target URI
	myPopup.postMessage(message,"*");
},6000);
