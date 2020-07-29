<h2 align= "center"> Pesquisando a Palavra-Chave com Regexs </h2>

<h2 align= "center" >
    <img  src="imagem.jpg" width="200px">
</h2>

Projeto de uma biblioteca, que tem como finalidade de facilitar a buscar por um arquivo no computador pelo Node.js,percorrendo Diretório Inicial e os Diretórios Filhos. 

Este projeto é composto por uma função promise, em que representa uma operação assincrona. Uma vantagem, pois há a possibilidade de realizar a operação de varios diretórios ao mesmo tempo.

Utiliza-se o Regex como forma de pesquisa da palavra-chave, analisando os nomes dos arquivos para demonstrar onde está localizado.

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
- Array com a lista de diretórios percorridos,
- Arquivos que possuem a palavra-chave identificada e
- Funções utilizadas.

#### Demostração
``` 
var InformacaoEntrada = require("./InformacaoProcurarPalavra");
var Pesquisa = require("./PesquisaComRegex");
  
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
