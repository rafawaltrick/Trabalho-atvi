import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import CPF from "../modelo/cpf";
import RG from "../modelo/rg";
import Telefone from "../modelo/telefone";
import Cadastro from "./cadastro";

export default class CadastroCliente extends Cadastro {
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }
    public cadastrar(): void {
        console.log(`\nInício do cadastro do cliente`);
        let nome = this.entrada.receberTexto(`Por favor informe o nome do cliente: `)
        let nomeSocial = this.entrada.receberTexto(`Por favor informe o nome social do cliente: `)
        let valor = this.entrada.receberTexto(`Por favor informe o número do cpf: `);
        let data = this.entrada.receberTexto(`Por favor informe a data de emissão do cpf, no padrão dd/mm/yyyy: `);
        let numeroRg = this.entrada.receberTexto(`Digite seu RG: `);
        let emissaoRg = this.entrada.receberTexto(`Digite a data de Emissão do seu RG, no padrão dd-mm-aaaa: `);
        let dddTelefone = this.entrada.receberTexto(`Digite o DDD do seu número de Telefone: `);
        let numTelefone = this.entrada.receberTexto(`Digite seu Telefone: `);

        let dataRg = emissaoRg.split('-')
        let rgDia = new Number(dataRg[0].valueOf()).valueOf()
        let rgMes = new Number(dataRg[1].valueOf()).valueOf()
        let rgAno = new Number(dataRg[2].valueOf()).valueOf()
        
        let partesData = data.split('/')
        let ano = new Number(partesData[2].valueOf()).valueOf()
        let mes = new Number(partesData[1].valueOf()).valueOf()
        let dia = new Number(partesData[0].valueOf()).valueOf()
        let dataEmissao = new Date(ano, mes, dia)
        let cpf = new CPF(valor, dataEmissao);
        let dataEmissaoRg = new Date(rgDia, rgMes, rgAno);
        let rg = new RG(numeroRg, dataEmissaoRg);
        let telefone = new Telefone(dddTelefone, numTelefone);
        let cliente = new Cliente(nome, nomeSocial, cpf);

        cliente.getTelefones.push(telefone)
        cliente.getRgs.push(rg)
        this.clientes.push(cliente)
        console.log(`\nCadastro concluído :)\n`);
    }
}