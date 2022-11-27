
interface propsFormType {
    type?: "text" | "number" | any
    name: string
    valor: any
    Change?: (e: any) => void
    readonly?: boolean
    className?: any
}

export default function FormType(props: propsFormType) {
    return (
        <div className={`flex flex-col ${props.className}`}>
            <label className="pl-4 text-left flex">
                {props.name}
            </label>
            <input
                type={props.type ?? 'text'}
                value={props.valor}
                readOnly={props.readonly}
                onChange={e => props.Change?.(e.target.value)}
                className={`${props.className} flex w-min-full  m-1 px-2 py-2`}
            />

        </div>
    )
}