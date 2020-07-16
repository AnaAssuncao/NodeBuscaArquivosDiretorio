//Informações de outros arquivos
const fs = require("fs")
var Informacao = require("./InformacaoProcurarPalavra");
var contador = 0;

//const isDirectory = source => fs.lstatSync(source).isDirectory()

//se há a palavra buscada no arquivo
const BuscarPalavra=(PalavraBuscada,Local,NomeArquivo) =>
{
    
    const Busca = new RegExp(PalavraBuscada,"g")
    const TemPalavra = Busca.test(NomeArquivo)
    if(TemPalavra)
    {
        console.log(`Arquivo: ${NomeArquivo} e Local: ${Local}`);
        //fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err => {
            //console.log(err || 'Arquivo salvo!')})
    }

}

//função que procura dentro da pasta se há mais pasta ou arquivo.
const Palavra =(Local,NomesArquivos ) => {
    for(i in NomesArquivos){
        try{ 
            const Pasta = (/.exe/g.test(NomesArquivos[i]))? false:fs.lstatSync(Local+"/"+NomesArquivos[i]).isDirectory();

            if(Pasta===true){
                ReaddirFuncao((Local+"/"+NomesArquivos[i]));
                BuscarPalavra(Informacao.PalavraBuscada,Local,NomesArquivos[i]);
            }
            else{
                BuscarPalavra(Informacao.PalavraBuscada,Local,NomesArquivos[i]);
            }
        }
        catch{
            BuscarPalavra(Informacao.PalavraBuscada,Local,NomesArquivos[i]);
        }
    }
}

//função para procurar dentro das pastas
const ReaddirFuncao=(Local)=>{
    contador++
    return new Promise((resolve,reject)=>{ 
        fs.readdir(Local, (err, arquivos) => {
            if(err===null){
                Palavra(Local,arquivos);
                resolve(contador);
            }
            else if(err.errno===-4052){}
            else{
                console.log("Local do arquivo não encontrado",Local,err);
            }
            //console.log(arquivos)
        })
    })
}
    
//convocar a primeira pasta.
ReaddirFuncao(Informacao.DiretorioInicial)
    .then(console.log);
//console.log(contador)

