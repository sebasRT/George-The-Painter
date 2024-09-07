const ServicesDropdown = () => {

    return (
        <div className="md:hidden">
            <button
                id="dropdown-button"
                className="peer/button pl-5 group peer-checked/checkbox:-z-10 group-hover:text-emerald-100 focus-within:text-emerald-100 transition flex items-center gap-2 mx-auto"
            >
                Services
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 10L12 15L17 10" stroke="#F8F8F8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>
            <ul
                id="dropdown-menu"
                className="absolute hover:block peer-focus-within/button:block hidden bg-gray-800/95 mt-3 p-3 *:p-3 *:whitespace-nowrap"
            >
                <li><a href="/exterior-painting">Exterior painting</a></li>
                <li><a href="/interior-painting">Interior painting</a></li>
                <li><a href="/drywall-repair">Drywall repair</a></li>
                <li><a href="/power-washing">Power washing</a></li>
            </ul>
        </div>
    )

}

export default ServicesDropdown