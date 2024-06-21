function validateform(){
    var fname = document.getElementById ('fname').value.trim();
    var Emai = document.getElementById('email').value.trim();
    var message = document.getElementById('message').value.trim();

    if(fname === ''){
        alert('preencha este campo!');
        return false;
    }
    

    if(email === ''){
        alert('preencha este campo Email!');
        return false;
    }

    if(message === ''){
        alert('preencha este campo mensagem !');
        return false;
    }

    return true;

}