import arrow from "../../assets/icons/arrow.svg";

const ServicesDropdown = () => {

    return (
        <>
            <button
                id="dropdown-button"
                className="peer/button group peer-checked/checkbox:-z-10 group-hover:text-emerald-100 focus-within:text-emerald-100 transition flex items-center gap-2 mx-auto"
            >
                Services
                <img src={arrow.src} className="group-focus-within:fill-emerald-100" />
            </button>
            <ul
                id="dropdown-menu"
                className="absolute peer-focus-within/button:block hidden bg-gray-800/95 mt-3 p-3 *:p-3 *:whitespace-nowrap"
            >
                <li><a href="/exterior-painting">Exterior painting</a></li>
                <li><a href="/interior-painting">Interior painting</a></li>
                <li><a href="">Drywall repair</a></li>
                <li><a href="">Power washing</a></li>
            </ul>
        </>
    )

}

export default ServicesDropdown