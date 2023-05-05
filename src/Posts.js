import React from 'react'

export default function Posts(){
    
    let [preenchimento, setPreenchimento] = React.useState("bookmark-outline");

    const infPosts = [{imguser: "assets/img/devil.jpg", user: "the.devil", postimg: "assets/img/Post1--.jpg", postalt: "summer-and-the-devil", likeimg: "assets/img/Joyce-smith.jpg", likeuser: "joice.smith", likenum: '101.523'},
    {imguser: "assets/img/Tony.jpg", user: "Tony0154", postimg: "assets/img/Post1.jpg", postalt: "rick-going-to-poop", likeimg: "assets/img/Rick.sanchez.jpg", likeuser: "rick-sanchez", likenum: '99.159'},
    {imguser: "assets/img/Rick-simplao.jpg", user: "rick-simplaao", postimg: "assets/img/Post3.jpg", postalt: "Beth's Birthday", likeimg: "assets/img/dark-beth.jpg", likeuser: "dark-beth", likenum: '87.875'}];
    
    return(
        <div class="posts">
            {infPosts.map(post => 
                <div class="post">
                    <div class="topo">
                        <div class="usuario">
                            <img src={post.imguser} alt={post.user}/>
                            {post.user}
                        </div>
                        <div class="acoes">
                            <ion-icon name="ellipsis-horizontal"></ion-icon>
                        </div>
                    </div>
                    <div class="conteudo">
                        <img src={post.postimg} alt={post.postalt} />
                    </div>
                    <div class="fundo">
                        <div class="acoes">
                            <div>
                                <ion-icon name="heart-outline"></ion-icon>
                                <ion-icon name="chatbubble-outline"></ion-icon>
                                <ion-icon name="paper-plane-outline"></ion-icon>
                            </div>
                            <div class="salvar">
                                <ion-icon name={preenchimento} onClick = {() => setPreenchimento((preenchimento === "bookmark-outline") ? "bookmark" : "bookmark-outline")}></ion-icon>
                            </div>
                        </div>

                        <div class="curtidas">
                            <img src={post.likeimg} alt={post.likeuser}/>
                            <div class="texto">
                                Curtido por <strong>{post.likeuser}</strong> e <strong>outras {post.likenum} pessoas</strong>
                            </div>
                        </div>
                    </div>
                </div>)}
        </div>
    );
}