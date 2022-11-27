import { useEffect, useState } from "react"
import ClienteRepository from "../core/ClienteRepository"
import ColectionMethodFirebase from "../db/colectionFirebase"
import Cliente from "../models/Cliente"

export default function UseClientes() {


    const [view, setView] = useState<'table' | 'form'>('table')
    const [id, setId] = useState<number | undefined>()
    const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
    const [clientes, setClientes] = useState<Cliente[]>([])

    const repo: ClienteRepository = new ColectionMethodFirebase()

    useEffect(obterTodos, [])


    function obterTodos() {
        repo.obterTodos().then(clientes => {
            setClientes(clientes)
            setView("table")

        })
    }


    function clientEdit(cliente: Cliente) {
        setView("form")
        setCliente(cliente)
    }

    function clientDel(cliente: Cliente) {
        repo.excluir(cliente)
        obterTodos()
    }

    async function saveClient(cliente: Cliente) {
        await repo.salvar(cliente)
        obterTodos()

    }

    function InsertClient(tipo: string) {
        setView('form')
        setCliente(Cliente.vazio)

    }

    return {
        cliente,
        clientes,
        view,
        id,
        setId,
        setView,
        clientEdit,
        saveClient,
        InsertClient,
        clientDel,
        obterTodos

    }






}