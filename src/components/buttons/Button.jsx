import { Button_style } from "./Style";

export const Button = ({ text, icon, greenBackground, pinkBackground, filter, border, handleSearch, link  }) => {
    return(
        <Button_style href={link} icon={icon} greenBackground={greenBackground} pinkBackground={pinkBackground} filter={filter} border={border} onClick={handleSearch}>

            {text}
        </Button_style>
    );
};