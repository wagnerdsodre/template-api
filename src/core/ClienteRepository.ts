import Cliente from "../models/Cliente";

export default interface ClienteRepository {
    salvar(cliente: Cliente): Promise<Cliente>
    obterTodos(): Promise<Cliente[]>
    excluir(cliente: Cliente): Promise<void>
}