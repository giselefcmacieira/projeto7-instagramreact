import React from 'react';

export default function User(){
    const [user, setUser] = React.useState('beauty.summer');
    const [profileimg, setProfileimg] = React.useState('assets/img/summer-perfil.jpg');

    return(
        <div class="usuario">
          <img src={profileimg} alt="imagem de perfil"/>
          <div class="texto">
            <span>
              <strong>{user}</strong>
              <ion-icon name="pencil"></ion-icon>
            </span>
          </div>
        </div>
    );
}