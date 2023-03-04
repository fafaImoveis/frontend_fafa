import { createContext, useState } from "react";

export const Context = createContext();

export function ContextProvider(props){
    const [content, setContent] = useState([{}]);

    return(
        <Context.Provider value={{content, setContent}}>
            {props.children}
        </Context.Provider>
    );
};