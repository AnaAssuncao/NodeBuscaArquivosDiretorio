<h2 align= "center"> Pesquisando a Palavra-Chave com RegExr </h2>

<h2 align= "center" >
    <img  src="Imagem.jpg" width="200px">
</h2>
Um pequeno projeto com a finalidade de realizar a buscar por arquivos no computador, percorrendo Diretórios filhos a partir de um Diretório Inicial, buscando similaridade de nomes através de Regex.

Este projeto é composto por uma função promise e fs.readdir,duas funções assíncronas. E tem como objetivo demonstar o controle do fluxo assíncrono de dados.

Para realizar a pesquisa utiliza-se o RegExr, analisando os nomes dos arquivos para demonstrar onde está localizado.

### Pré requisitos
- Node.js
- Biblioteca fs

### **Exemplo**
#### Entrada
Objeto composto das Informações:
- Palavra-Chave;
- Diretório Inicial;

#### Saída
Objeto composto:
- Número de pastas abertas e
- Arquivos e pastas que possuem a palavra-chave identificada;


#### Demostração
``` 
const Informacao = require("./InformacaoProcurarPalavra");
const Pesquisa = require("./PesquisaComRegex");
  
const Buscas = new Pesquisa();

Buscas.LeituraArquivosNoDiretorio(Informacao.DiretorioInicial,Informacao.PalavraBuscada)
        .then(ImprimeResultado)
        .catch(console.log);


function ImprimeResultado(ObjetoEncontrado)
{   
    console.log(`Número de pastas abertas:${ObjetoEncontrado.ListaPastas.length}`);

    ObjetoEncontrado.ArquivosComPalavra.forEach((Arquivo)=>console.log(Arquivo));
    //Todos os arquivos que possue a Palavra-Chave
}
