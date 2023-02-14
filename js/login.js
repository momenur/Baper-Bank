document.getElementById('login-btn').addEventListener('click', function(){
    const userEmail = document.getElementById('email-input-filed');
    const userEmailValue = userEmail.value ;
    const userPassword = document.getElementById('password-input-filed');
    const userPasswordValue = userPassword.value ;
    const email = 'momen@gmail.com';
    const password = 'momen';
    if(userEmailValue == email && userPasswordValue == password){
        window.location ='bank.html';
    }
    else{
        alert('Please Enter Valid Email And Password')
    }
    userEmail.value = '';
    userPassword.value = '';
})