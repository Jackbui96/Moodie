export default function PageContainer({children, className = ''}) {
    return (
        <div className={ `
        w-full 
        mx-auto 
        max-w-[1200px] 
        px-4 
        sm:px-6 
        lg:px-8
        items-center
        ${ className }
        ` }>
            { children }
        </div>
    )
}
