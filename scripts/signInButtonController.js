const signIn = document.getElementById('signIn');
signIn.addEventListener('click', () => {
    	
	var provider = new firebase.auth.GoogleAuthProvider();
	auth.signInWithPopup(provider).then(function(result) {
		var token = result.credential.idToken;
		var user = result.user;
		
	}).catch(function(error) {
		
		var errorCode = error.code;
		var errorMessage = error.message;
		
		var email = error.email;
		
		var credential = error.credential;
	});
});

auth.onAuthStateChanged(user => {
	if (user) {
		if (window.location.pathname == '/index.html')
			window.location.pathname = '/overview.html'
	}
});