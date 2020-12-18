const logout = document.querySelector('#logout');
logout.addEventListener('click', (e) => {
	auth.signOut();
})

auth.onAuthStateChanged(user => {
	if (!user) {
	    window.location.pathname = '/index.html'
	}
});