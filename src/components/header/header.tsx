import { useMediaQuery } from "react-responsive";
import { HeaderMobile } from "./HeaderMobile";
import "./styles.css"
import { HeaderDesktop } from "./HeaderDesktop";



export const Header = () => {

    const renderFilter = useMediaQuery({ query: "(min-width: 768px)" });
    return (
        <> {renderFilter ? <HeaderDesktop /> : <HeaderMobile />}</>
    )
}