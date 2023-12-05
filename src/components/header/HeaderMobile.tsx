
import { HambuguerIcon } from "../../assets/HamburguerIcon"
import icon from "../../assets/headerIcon.svg"
import { CloseIcon } from "../../assets/CloseIcon";
import { useRickAndMortyContext } from "../../context/Context";


export const HeaderMobile = () => {

    const { setStep, toggleModal, isModalOpen } = useRickAndMortyContext()

    return (
        <div className="header__mobile">
            <div className="header__content">
                <img className="header__icon" src={icon} alt="icone header" />

                <button className="header__menu" onClick={toggleModal}> {isModalOpen ? <CloseIcon /> : <HambuguerIcon />} </button>
            </div>

            {isModalOpen && (
                <ul className="container__options">
                    <li onClick={() => {
                        setStep(1)
                        toggleModal()
                    }} className="options">Characters</li>
                    <li onClick={() => {
                        setStep(3)
                        toggleModal()
                    }} className="options">Locations</li>
                    <li onClick={() => {
                        setStep(2)
                        toggleModal()
                    }} className="options">Episodes</li>
                </ul>
            )
            }


        </div >
    )
}