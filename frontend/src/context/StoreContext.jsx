import { createContext } from "react";
import { food_list } from "../assets/assets";


export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {





    const contextValue = {

    }
    return (
        <StoreContext.Provider value={contextValue}>
            {props.childern}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;