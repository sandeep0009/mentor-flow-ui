import { Children } from "react"
import Sidebar from "./components/Sidebar"
import Layout from "./utils/layout"
import { Route, Routes } from "react-router-dom"
import Mentor from "./pages/Mentor"


function App() {

  return (
    <>
    <Layout>
      <Routes>
        <Route path="/mentor" element={<Mentor/>}/>
      </Routes>
      
    </Layout>
    </>
  )
}

export default App
