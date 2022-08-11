function loadPage(){
    exibirPassword();

}

function exibirPassword (){
    let container = document.querySelector(".box-password");
    let input = document.querySelector(".senha");
    let eye = document.querySelector(".eye");

    eye.addEventListener('click', function() {
        container.classList.toggle('visible');
        if(container.classList.contains('visible')){
            eye.src = 'assets/image/eye.svg';
            input.type = 'text';
        }else{
            eye.src = 'assets/image/eye-off.svg';
            input.type = 'password';
        }
    });
}

function eyePassword(){
    let input = document.querySelector(".senha");
    let eye = document.querySelector(".eye");

    if(input.value != ''){  
        eye.style.display = 'inline-block';
    }else{
    eye.style.display = 'none';
    }  
}

