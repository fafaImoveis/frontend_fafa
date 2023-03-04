import { Button } from "../buttons/Button";
import { Banner_Style } from "./Style";

export const Banner = () => {
    return(
        <>
            <Banner_Style>
                {/* <div className="buttons">
                    <Button 
                    border={false} 
                    filter={false} 
                    greenBackground={false} 
                    handleSearch={false} 
                    icon={false}
                    pinkBackground={true}
                    text="Simular Financiamento"
                    key={2}
                    />
                    <Button 
                    border={false} 
                    filter={false} 
                    greenBackground={true} 
                    handleSearch={false} 
                    icon={true}
                    pinkBackground={false}
                    text="Falar com o suporte"
                    key={2}
                    />
                </div> */}
            </Banner_Style>
        </>
    );
};
