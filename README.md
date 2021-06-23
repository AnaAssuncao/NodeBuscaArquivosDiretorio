<h2 align= "center"> Pesquisando a Palavra-Chave com RegExr </h2>

<h2 align= "center" >
    <img  src="Imagem.jpg" width="200px">
</h2>

Um projeto com finalidade de facilitar a buscar por um arquivo no computador pelo Node.js, percorrendo por um Diretório Inicial os seus Diretórios Filhos, usando assincronismo.

Este projeto possui como objetivo a compreensão das funções assincronas, por isso ele é composto por Promises e a uma função do sistema - Fs.readdir. Uma vantagem, pois há a possibilidade de realizar a operação da busca em vários diretórios ao mesmo tempo.

Para realizar a pesquisa utiliza-se a class Regex (RegExp) que é uma expressão regular para associar as sequências de caracteres da palavra buscada no nome dos arquivos. Na class passa-se como parâmetros, RegExp(padrão,[ flags]), o padrão corresponde ao texto da expressão regular e as flags indica os marcadores que podem ser adicionado, no caso deste projeto usa-se a flag "g" que pesquisa global para todas as ocorrências do padrão.

``` 
new RegExp(PalavraBuscada,"g")
``` 

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
- Número de pastas abertas; e
- Arquivos que possuem a palavra-chave identificada.

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
    if( ObjetoEncontrado.ArquivosComPalavra.length>0){
        console.log("Os diretórios são:")
        ObjetoEncontrado.ArquivosComPalavra.forEach((Arquivo)=>console.log(Arquivo));
    }
    else{
        console.log("Nenhum arquivo com a palavra " + Informacao.PalavraBuscada + " no nome")
    }

}