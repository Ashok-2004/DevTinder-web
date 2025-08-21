import { BrowserRouter,Routes,Route } from "react-router-dom"
import Body from "./components/Body"
import Profile from "./components/Profile"
import Login from "./components/Login"
import Feed from "./components/Feed"
import { Provider } from "react-redux"
import appStore from "./utils/appStore"
import Connection from "./components/Connection"
import Request from "./components/Request"
function App() {
  return (
    <>
    <Provider store={appStore}>
    <BrowserRouter basename="/">
    <Routes>
      <Route path="/" element={<Body/>}>
      <Route path="/" element={<Feed/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/connections" element={<Connection/>}/>
      <Route path="/requests" element={<Request/>}/>
      </Route>
    </Routes>
    </BrowserRouter> 
    </Provider>
    </>
  )
}

export default App
