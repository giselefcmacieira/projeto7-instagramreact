export default function Stories(){
    const infStories = [{src: 'assets/img/dark-beth.jpg', usuario:'dark-beth'},
    {src: 'assets/img/Tricia-Lange.jpg', usuario:'tricia.lang'},
    {src: 'assets/img/tiny-rick.jpg', usuario:'tiny-rick'},
    {src: 'assets/img/bunda-cagada.jpg', usuario:'bunda.cagada'},
    {src: 'assets/img/Joyce-smith.jpg', usuario:'joyce.smith'},
    {src: 'assets/img/Rick.sanchez.jpg', usuario:'rick-sanchez'},
    {src: 'assets/img/morty.jpg', usuario:'morty.smith'},
    {src: 'assets/img/Tony.jpg', usuario:'Tony0154'},];

    return (
        <>
        <div class="stories">
            {infStories.map((story) => 
            <div class="story">
                <div class="imagem">
                    <img src={story.src} alt={story.usuario} />
                </div>
                <div class="usuario">
                    {story.usuario}
                </div>
            </div>)}
            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
        </>
    );
}
