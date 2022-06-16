$(document).ready(function()
{
	$('#btLogin').click(function(){
		$('#cnxBox').toggle("linear");
	});

	if('serviceWorker' in  navigator) {
		navigator.serviceWorker.register('../sw.js', { scope: '/' })
			.then(function(reg) {
				console.log('Registration succeeded');
			})
			.catch(function(err) {
				console.error('Registration failed with ' + err);
			})
	} else {
		console.error('no serviceWorker available');
	}
});