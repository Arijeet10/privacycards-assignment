

const SelectButton=({styles}:{styles:string})=>{

    return(
        <>
                <button className={`w-full px-4 py-2 rounded-md font-semibold ${styles}`}>
                    Select    
                </button>
        </>
    )
}

export default SelectButton;