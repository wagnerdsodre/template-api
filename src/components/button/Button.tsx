interface propsButton {
    children: any
    className?: any
    onClick?: () => void
}

export default function Button(props: propsButton) {
    return (
        <button onClick={props.onClick} className={`bg-teal-700 text-white 
        hover:bg-gradient-to-t 
        hover: from-teal-600 
        hover: via-cyan-400
        hover: to-teal-600 
        hover:delay-200
         px-2 py-2 cursor-pointer rounded-xl ${props.className}
         text-center h-10 border border-gray-300`}>
            {props.children}
        </button>
    )
}