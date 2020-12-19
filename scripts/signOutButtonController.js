auth.onAuthStateChanged(function(user) {
	if (!user) {
		window.location.pathname = '/index.html'
	}
});

const logout = document.querySelector('#logout');
logout.addEventListener('click', (e) => {
	auth.signOut();
	window.location.pathname = '/index.html'
})