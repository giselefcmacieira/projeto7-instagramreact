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
          <img data-test="profile-image" src={profileimg} alt="imagem de perfil" onClick = {alterarFoto} />
          <div class="texto">
            <span>
              <strong data-test="name">{user}</strong>
              <ion-icon data-test="edit-name" name="pencil" onClick = {alterarNome}></ion-icon>
            </span>
          </div>
        </div>
    );
}