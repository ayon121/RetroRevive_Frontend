import {configureStore} from "@reduxjs/toolkit"
import GamingProductReducer from "../features/GamingProducts/GamingProductsSlice"

import AddGamepointReducer from "../features/AddGamePoints/AddGamePointsSlice"
import AddGameProductReducer from "../features/AddGamingProducts/AddGamingProductsSlice"
import AddProductOrderReducer from "../features/AddProductOrder/AddProductOrderSlice"
const Store = configureStore({
    reducer : {
        AddGamePonits : AddGamepointReducer,
        GamingProducts : GamingProductReducer,
        AddGamingProducts : AddGameProductReducer,
        AddProductOrder : AddProductOrderReducer
    }
})

export default Store