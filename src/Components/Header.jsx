
function Header({title, desc}){

    return (
        <div className="w-full">
            <p className="w-full font-semibold text-[#001515] text-[30px]">{title}</p>
            <p className="w-full text-[16px] font-Raleway text-[#4E5050]">{desc}</p>
        </div>
    )
}

export default Header