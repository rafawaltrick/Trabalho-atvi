export default class Telefone {
    private ddd: string
    private numero: string
    constructor(ddd: string, numero: string) {
        this.ddd = ddd
        this.numero = numero
    }

    public get getDdd(): string {
        return this.ddd
    }

    public get getNumero(): string {
        return this.numero
    }

    public get getDddNum(): string{
        return this.ddd + ' ' + this.numero
    }
}