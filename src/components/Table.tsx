import Cliente from "../models/Cliente"
import { iconDel, iconEdit } from "./icons/Icons"


interface propsTable {
    clients?: Cliente[]
    clientEdit?: (client: Cliente) => void
    clientDel?: (client: Cliente) => void
    children?: any
}


export default function Table(props: propsTable) {

    const renderThead = () => {
        return (
            <tr>
                <th className="text-left p-6">Id</th>
                <th className="text-left p-6">Name</th>
                <th className="text-left p-6">Age</th>
                <th className="text-center p-6">Actions</th>
            </tr>
        )
    }

    const RenderActions = (client?: Cliente | any) => {
        return (
            <td className="text-center justify-center p-2" >
                {props.clientEdit ?
                    <button onClick={() => props.clientEdit?.(client)} className="m-2 text-blue-600" >{iconEdit}</button>
                    : false
                }
                {props.clientDel ?
                    <button onClick={() => props.clientDel?.(client)} className="m-2 text-red-500" >{iconDel}</button>
                    : false
                }
            </td>
        )
    }


    const renderData = () => {
        return props.clients?.map((cliente, i) => {
            return (
                <tr key={i} className={`${i % 2 === 0 ? 'bg-green-200' : 'bg-green-400'}`}>
                    <td className="text-left p-2" >{cliente.id}</td >
                    <td className="text-left p-2" >{cliente.name}</td>
                    <td className="text-left p-2" >{cliente.age}</td>

                    {RenderActions(cliente)}

                </tr>
            )
        })

    }





    return (
        <>
            <table className="w-full rounded-xl overflow-hidden">
                <thead className=" rounded bg-green-700">
                    {renderThead()}

                </thead>

                <tbody>
                    {renderData()}
                </tbody>
            </table>
        </>
    )
}