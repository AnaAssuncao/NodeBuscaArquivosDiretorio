//Informações de outros arquivos
const Informacao = require("./InformacaoProcurarPalavra");
const Pesquisa = require("./PesquisaComRegex");
  
const Buscas = new Pesquisa();
 
Buscas.LeituraArquivosNoDiretorio(Informacao.DiretorioInicial,Informacao.PalavraBuscada)
        .then(ImprimeResultado)
        .catch(console.log);


function ImprimeResultado(ObjetoEncontrado)
{   
    console.log(`Número de pastas abertas:${ObjetoEncontrado.ListaPastas.length}`);
    if( ObjetoEncontrado.ArquivosComPalavra.length>0){
        console.log("Os diretórios são:")
        ObjetoEncontrado.ArquivosComPalavra.forEach((Arquivo)=>console.log(Arquivo));
    }
    else{
        console.log("Nenhum arquivo com a palavra " + Informacao.PalavraBuscada + " no nome")
    }

}
