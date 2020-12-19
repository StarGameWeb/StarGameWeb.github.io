auth.onAuthStateChanged(function(user) {
	if (user) {
	  console.log('logged in');
	} else {
		console.log('logged out');
	}
  });

const signIn = document.getElementById('signIn');
signIn.addEventListener('click', () => {
    	
	var provider = new firebase.auth.GoogleAuthProvider();
	auth.signInWithPopup(provider).then(function(result) {
		var token = result.credential.idToken;
		var user = result.user;
		window.location.pathname = '/overview.html'

	}).catch(function(error) {
		
		var errorCode = error.code;
		var errorMessage = error.message;
		
		var email = error.email;
		
		var credential = error.credential;
	});
});