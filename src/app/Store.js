import {configureStore} from "@reduxjs/toolkit"
import GamingProductReducer from "../features/GamingProducts/GamingProductsSlice"

import AddGamepointReducer from "../features/AddGamePoints/AddGamePointsSlice"
import AddGameProductReducer from "../features/AddGamingProducts/AddGamingProductsSlice"
const Store = configureStore({
    reducer : {
        AddGamePonits : AddGamepointReducer,
        GamingProducts : GamingProductReducer,
        AddGamingProducts : AddGameProductReducer,
    }
})

export default Store