import { RouterProvider } from "react-router-dom"
import MainRouter from "./Router/Router"
import { Provider } from "react-redux"
import { store } from "./Global/store"
import { PersistGate } from "redux-persist/integration/react"
import persistStore from "redux-persist/es/persistStore"


const persistor = persistStore(store)
const App = () => {
  return (
    <div>
      <Provider store={store}>
        <PersistGate persistor={persistor} >
      <RouterProvider router={MainRouter}/>
        </PersistGate>
      </Provider>
    </div>
  )
}

export default App