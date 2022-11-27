import { useState } from "react";
import Cliente from "../../models/Cliente";
import Button from "../button/Button";
import FormType from "./FormType";
interface propsForm {
    cliente: Cliente | any
    newcliente?: (cliente: Cliente) => void
    cancel?: () => void
    children?: any

}

export default function Form(props: propsForm) {
    const id = props.cliente?.id
    const [name, setName] = useState(props.cliente?.name ?? '')
    const [age, setAge] = useState(props.cliente?.age ?? 0)

    return (
        <div className={`m-10 flex flex-col min-w-full border-gray-200
         p-20 justify-center items-center rounded-xl overflow-hidden`}>
            {id ?
                <FormType name="id" type="text" valor={id} readonly className=" flex w-full focus:bg-slate-50" />
                : false
            }
            <FormType name="Name" type="text" valor={name} Change={setName}
                className=" flex w-full focus:bg-slate-50" />
            <FormType name="Age" type="number" valor={age} Change={setAge} className="flex w-full" />
            {props.children}
            <div className="flex w-full flex-row flex-end m-4 ">
                <Button
                    onClick={() => props.newcliente?.(new Cliente(name, +age, id))}
                    className={`bg-teal-500 m-2`}>
                    Save
                </Button>
                <Button onClick={props.cancel} className={`bg-red-500 m-2`}>Cancel</Button>
            </div>
        </div>
    )
}