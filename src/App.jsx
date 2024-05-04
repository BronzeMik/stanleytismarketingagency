import Marketing from './pages/Marketing';
import Apps from './pages/Apps';
import {
  Routes,
  Route
} from "react-router-dom";

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Apps />} />
        <Route path='/marketing' element={<Marketing />} />
      </Routes>
    </>
  )
}

export default App
