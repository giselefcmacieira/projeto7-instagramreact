import React from 'react';

export default function User(){
    const [user, setUser] = React.useState('beauty.summer');
    const [profileimg, setProfileimg] = React.useState('assets/img/summer-perfil.jpg');
    function alterarNome(){
        let novoNome = prompt('Qual o nome desejado?');
        if(novoNome){
            setUser(novoNome);
        }
    }
    function alterarFoto(){
        let novafoto = prompt('Insira o link da nova imagem');
        if(novafoto){
            setProfileimg(novafoto);
        }
    }

    return(
        <div class="usuario">
          <img src={profileimg} alt="imagem de perfil" onClick = {alterarFoto} />
          <div class="texto">
            <span>
              <strong>{user}</strong>
              <ion-icon name="pencil" onClick = {alterarNome}></ion-icon>
            </span>
          </div>
        </div>
    );
}