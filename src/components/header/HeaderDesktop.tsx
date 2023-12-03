import icon from "../../assets/headerIcon.svg"
import { RickAndMortyContext } from "../../context/Context"
import { useContext } from "react"
export const HeaderDesktop = () => {

    const { setStep } = useContext(RickAndMortyContext)



    return (

        <div className="header__container__desktop">
            <div className="header__content__desktop">
                <img className="header__icon" src={icon} alt="icone header" />

                <ul className="container__options__desktop">
                    <li onClick={() => setStep(1)} className="options__desktop">Characters</li>
                    <li onClick={() => setStep(3)} className="options__desktop">Locations</li>
                    <li onClick={() => setStep(2)} className="options__desktop">Episodes</li>
                </ul>


            </div>
        </div>

    )
}