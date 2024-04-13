import {configureStore} from "@reduxjs/toolkit"
import GamingProductReducer from "../features/GamingProducts/GamingProductsSlice"

import AddGamepointReducer from "../features/AddGamePoints/AddGamePointsSlice"
const Store = configureStore({
    reducer : {
        AddGamePonits : AddGamepointReducer,
        GamingProducts : GamingProductReducer
    }
})

export default Store