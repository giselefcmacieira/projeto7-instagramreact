import React from 'react'

export default function Posts(){

    let infPosts = [{like: "heart-outline", class: 'preto', imguser: "assets/img/devil.jpg", user: "the.devil", postimg: "assets/img/Post1--.jpg", postalt: "summer-and-the-devil", likeimg: "assets/img/Joyce-smith.jpg", likeuser: "joice.smith", likenum: '101523'},
    {like: "heart-outline", class: 'preto', imguser: "assets/img/Tony.jpg", user: "Tony0154", postimg: "assets/img/Post1.jpg", postalt: "rick-going-to-poop", likeimg: "assets/img/Rick.sanchez.jpg", likeuser: "rick-sanchez", likenum: '99159'},
    {like: "heart-outline", class: 'preto', imguser: "assets/img/Rick-simplao.jpg", user: "rick-simplaao", postimg: "assets/img/Post3.jpg", postalt: "Beth's Birthday", likeimg: "assets/img/dark-beth.jpg", likeuser: "dark-beth", likenum: '87875'}];
    
    const salvar = (event) => {
        if(event.currentTarget.name === "bookmark-outline"){
            event.currentTarget.name = 'bookmark';
        }else{
            event.currentTarget.name = 'bookmark-outline';
        }
    }

    const curtida = (event) => {
        const post = event.currentTarget.parentNode.parentNode.parentNode;
        const nCurtidas = post.querySelector('.num-curtidas');
        const numCurtidas = nCurtidas.innerHTML
        console.log(numCurtidas);
        console.log(event.currentTarget.name);
        event.currentTarget.classList.toggle('vermelho');
        if(event.currentTarget.name === "heart-outline"){
            event.currentTarget.name = 'heart';
            const numCurtidasAtual = Number(numCurtidas) + 1;
            nCurtidas.innerHTML = numCurtidasAtual;
        }else if(event.currentTarget.name === "heart"){
            event.currentTarget.name = 'heart-outline';
            const numCurtidasAtual = Number(numCurtidas) - 1;
            nCurtidas.innerHTML = numCurtidasAtual;
        }
    }

    const curtidaImg = (event) => {
        
        const post = event.currentTarget.parentNode.parentNode;
        console.log(post);
        const curtida = post.querySelector('.curtida');
        console.log(curtida);
        const numCurtida = post.querySelector('.num-curtidas');
        const numCurtidas = numCurtida.innerHTML;
        const numCurtidasAtual = Number(numCurtidas) + 1;
        if(curtida.name === 'heart-outline'){
            numCurtida.innerHTML = numCurtidasAtual;
        }
        curtida.classList.add('vermelho');
        curtida.name = 'heart';
    }

    return(
        <div class="posts">
            {infPosts.map((post, i) => 
                <div data-test="post" class="post">
                    <div class="topo">
                        <div class="usuario">
                            <img data-test="post-image" src={post.imguser} alt={post.user}/>
                            {post.user}
                        </div>
                        <div class="acoes">
                            <ion-icon name="ellipsis-horizontal"></ion-icon>
                        </div>
                    </div>
                    <div class="conteudo">
                        <img src={post.postimg} alt={post.postalt} onDoubleClick={curtidaImg}/>
                    </div>
                    <div class="fundo">
                        <div class="acoes">
                            <div>
                                <ion-icon data-test="like-post" class="curtida" name="heart-outline" onClick = {curtida}></ion-icon>
                                <ion-icon name="chatbubble-outline"></ion-icon>
                                <ion-icon name="paper-plane-outline"></ion-icon>
                            </div>
                            <div class="salvar">
                                <ion-icon data-test="save-post" name="bookmark-outline" onClick = {salvar}></ion-icon>
                            </div>
                        </div>

                        <div class="curtidas">
                            <img src={post.likeimg} alt={post.likeuser}/>
                            <div class="texto" data-test="likes-number">
                                Curtido por <strong>{post.likeuser}</strong> e <strong>outras <p class="num-curtidas">{post.likenum}</p> pessoas</strong>
                            </div>
                        </div>
                    </div>
                </div>)}
        </div>
    );
}
