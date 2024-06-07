

const Button=({buttonName,styles}:{buttonName:string,styles?:string})=>{

    return(
        <>
            
            <button className={`px-4 py-2 rounded-md ${styles}`}>
                {buttonName}
            </button>
        </>
    )
}

export default Button;