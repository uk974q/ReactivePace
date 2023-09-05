const MenuAccordion = ({category, keyIndex, details, toggle, handler}) => {
    return(
        <div className="bg-gray-50 shadow-lg my-2">
            <div className="accordion-header cursor-pointer flex justify-between items-center m-2" onClick={() => handler(keyIndex)}>
                <h2 className="text-blue-500 font-bold text-2xl ml-2">{category} - ({details[category].length})</h2>
                {toggle ? <i className="las la-angle-up"></i> : <i className="las la-angle-down"></i>}
            </div>
            {toggle &&    
                <ul className="">
                    {details[category]}
                </ul>
            }
        </div>
    )
}

export default MenuAccordion