interface propsTitle {
    children?: any
}
export default function Layout(props: propsTitle) {
    return (
        <>
            <div className={` bg-gradient-to-tr from-teal-600 to-teal-500
        bg-state-300 flex min-h-screen flex-col items-center  justify-center py-20 px-20
        `}>
                <div className={` w-full min-h-full border rounded-r-3xl
            bg-slate-300 py-2 px-2  mt-2 shadow shadow-slate-500 
            `}>
                    {props.children}
                </div>
            </div>

        </>
    )
}