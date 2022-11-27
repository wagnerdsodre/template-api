interface propsTitle {
    title: string,
    children?: any
}
export default function Title(props: propsTitle) {
    return (
        <div className={`
        flex flex-col py-7 px-7 bg-gray-300 text-slate-900
        `}>
            {props.title}
            <hr className=" border-b-lime-200 mx-2 w-full" />
        </div>


    )
}