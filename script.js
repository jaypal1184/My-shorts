// Future buttons functionality
console.log("Script loaded!");
function updateUI() {
    if(currentUser) {
        const profilePic = document.getElementById('profilePic');
        if (profilePic && currentUser.photoURL) {
            profilePic.src = currentUser.photoURL;
        }
    }
}

