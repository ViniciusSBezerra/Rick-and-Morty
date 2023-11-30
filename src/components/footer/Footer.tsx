import { IconFooter } from "../../assets/IconFooter"
import "./styles.css"
import headerIcon from '../../assets/headerIcon.svg'
import figmaIcon from '../../assets/figmaIcon.svg'

export const Footer = () => {
    return (
        <div className="footer">
            <a target="_blank" href="https://www.linkedin.com/in/viniciussbezerra/" className="footer_dev">Desenvoldido por <p className="footer_dev-name"><IconFooter /> VINICIUS.TECH</p></a>

            <div className="footer_links" >
                <a className="footer_link" target="_blank" href="https://www.figma.com/file/krKGL2tbpXrsll6inltqan/Rick-and-Morty-(web-responsive)-(Community)?type=design&t=K6amu9zAWc4ATIb8-6"> <img className="footer_api-img" src={figmaIcon} alt="figma" />Figma utilizado</a>
                <a className="footer_link" target="_black" href="https://rickandmortyapi.com/"> <img className="footer_api-img" src={headerIcon} alt="imagem rick and morty" /> Api utilizada</a></div>
        </div>
    )
}