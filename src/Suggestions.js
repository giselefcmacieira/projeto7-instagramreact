export default function Suggestions(){
    const infSuggestions = [{imguser: "assets/img/Schanch.jpg", usuario:"squanchy.crazy", reason: "Segue você"},
    {imguser: "assets/img/Beth.jpg", usuario:"beth.smith", reason: "Segue você"},
    {imguser: "assets/img/Jerry.jpg", usuario:"jerry.smith", reason: "Novo no Instagram"},
    {imguser: "assets/img/Leonard.jpg", usuario:"leonard.smit", reason: "Segue você"},
    {imguser: "assets/img/gazorpian.jpg", usuario:"gazorpian.girl", reason: "Segue você"}];

    return(
        <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>
            {infSuggestions.map(suggestion => 
            <div class="sugestao">
                <div class="usuario">
                <img src={suggestion.imguser} alt={suggestion.usuario}/>
                <div class="texto">
                    <div class="nome">{suggestion.usuario}</div>
                    <div class="razao">{suggestion.reason}</div>
                </div>
                </div>
                <div class="seguir">Seguir</div>
            </div>)}
        </div>
    );
}


     {/*<div class="sugestoes">
          <div class="titulo">
            Sugestões para você
            <div>Ver tudo</div>
          </div>

          <div class="sugestao">
            <div class="usuario">
              <img src="assets/img/gazorpian.jpg" alt="gazorpian.girl"/>
              <div class="texto">
                <div class="nome">gazorpian.girl</div>
                <div class="razao">Segue você</div>
              </div>
            </div>

            <div class="seguir">Seguir</div>
          </div>
        </div>*/}