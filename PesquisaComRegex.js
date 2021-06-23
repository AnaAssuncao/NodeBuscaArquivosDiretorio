const fs = require("fs");
module.exports = class pesquisaRegex

    {
        constructor () {
            this.DadosBusca =
            {
                ListaPastas:[],
                PastasAbertas: new Set(),
                ArquivosComPalavra: []
            }
        }

        EstruturacaoDados(Diretorio,Pastas)
        {
            return new Promise((resolve, reject) =>{

                if(this.DadosBusca.ListaPastas.length===0)
                {
                    this.DadosBusca.ListaPastas.push(Diretorio);
                    this.DadosBusca.PastasAbertas.add(Diretorio)
                }
                if(Pastas.length!=0)
                {
                    this.DadosBusca.ListaPastas=this.DadosBusca.ListaPastas.concat(Pastas);
                }

                    this.DadosBusca.PastasAbertas.delete(Diretorio);
                    Pastas.forEach((Arquivo) => this.DadosBusca.PastasAbertas.add(Arquivo));
            
                if(this.DadosBusca.PastasAbertas.size === 0)
                {
                    resolve(this.DadosBusca)
                }
            })
        }

        ConferenciaPalavra(PalavraBuscada,Diretorio,Arquivos)
        {
            Arquivos.forEach((NomeArquivo)=>{
                const Busca = new RegExp(PalavraBuscada,"g")
                const TemPalavra = Busca.test(NomeArquivo)
                if(TemPalavra)
                {
                    this.DadosBusca.ArquivosComPalavra=this.DadosBusca.ArquivosComPalavra.concat(`${Diretorio}/${NomeArquivo}`)
                }
            })
        }

//
        LeituraArquivosNoDiretorio(DiretorioAberto,PalavraBuscada){
            return new Promise((resolve, reject) =>{
                let PastasIdentificadas=[]
                fs.readdir(DiretorioAberto, (err, ArquivoDentroDiretorio) => {
                    if(err===null){
                        try{
                            PastasIdentificadas =  ArquivoDentroDiretorio.filter((Arquivo) => (/.exe/g.test(Arquivo)!==false));
                            PastasIdentificadas = ArquivoDentroDiretorio.filter((Arquivo) => (fs.lstatSync(DiretorioAberto+"/"+ Arquivo).isDirectory()));
                            PastasIdentificadas.forEach((Arquivo) => this.LeituraArquivosNoDiretorio((DiretorioAberto+"/"+ Arquivo),PalavraBuscada).then(resolve).catch(reject));
                            const CaminhoCompleto=PastasIdentificadas.map((NomeIncompleto)=>(DiretorioAberto+"/"+ NomeIncompleto));
                            this.ConferenciaPalavra(PalavraBuscada,DiretorioAberto,ArquivoDentroDiretorio);
                            this.EstruturacaoDados(DiretorioAberto,CaminhoCompleto,ArquivoDentroDiretorio).then(resolve).catch(reject);
                        }
                        catch {
                            this.ConferenciaPalavra(PalavraBuscada,DiretorioAberto,ArquivoDentroDiretorio);
                            resolve(this.DadosBusca)
                        }
                    }
                    else{
                        reject(err);
                    }   
            })
        }) 
    }
}
