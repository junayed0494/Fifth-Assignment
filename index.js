document.getElementById('signin-btn').addEventListener('click', function(){
     const userName = document.getElementById('username');
    const usernameValue = userName.value;

    const password = document.getElementById('password');
    const passwordValue = password.value;

    const signIn = document.getElementById('signin-section');
    const allCard = document.getElementById('all-card-section');

    if(usernameValue === 'admin' & passwordValue === 'admin123'){
        signIn.classList.add('hidden');
        allCard.classList.remove('hidden');

    }
    else if(usernameValue !== 'admin'){
        alert('Invalid Username');
    }
    else if(passwordValue !== 'admin123'){
        alert('Invalid Password');
    }
})


//------------------------------------------------------------------------------------