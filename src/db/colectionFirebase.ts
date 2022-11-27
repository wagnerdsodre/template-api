import ClienteRepository from "../core/ClienteRepository";
import firebase from '../firebase/config';
import Cliente from "../models/Cliente";

export default class ColectionMethodFirebase implements ClienteRepository {

    #conversor = {
        toFirestore(cliente: Cliente) {
            return {
                name: cliente.name,
                age: cliente.age
            }
        },
        fromFirestore(snapshot: firebase.firestore.QueryDocumentSnapshot,
            options: firebase.firestore.SnapshotOptions): Cliente {
            const dados = snapshot?.data(options)
            return new Cliente(dados.name, dados.age, snapshot?.id)


        }
    }


    async salvar(cliente: Cliente): Promise<Cliente> {
        if (cliente?.id) {
            await this.colectionMethod().doc(cliente.id).set(cliente)
            return cliente
        } else {
            const docRef = await this.colectionMethod().add(cliente)
            const doc = await docRef.get()
            return doc.data()
        }
    }
    async obterTodos(): Promise<Cliente[]> {
        const query = await this.colectionMethod().get()
        return query.docs.map(doc => doc.data()) ?? []
    }


    async excluir(cliente: Cliente): Promise<void> {
        return this.colectionMethod().doc(cliente.id).delete()
    }



    private colectionMethod() {
        return firebase.firestore().collection('clientes').withConverter(this.#conversor)

    }


}