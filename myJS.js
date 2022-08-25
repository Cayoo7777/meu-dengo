
    function logar() {

        var nome = document.getElementById('nome').value;
        var senha = document.getElementById('senha').value;

        if(nome == "marci" && senha == "cayo"){
            window.location.href = "home.html";
        }
        else{
            alert("Usuario ou senha incorreta :/")
        }
        
    }
