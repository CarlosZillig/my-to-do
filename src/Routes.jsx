import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Tasks from "./Pages/Tasks/index";
import DefaultPage from "./Components/DefaultPage";
import Dump from "./Pages/Dump";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DefaultPage />}>
          <Route index element={<Tasks />}/>
          <Route path="apagados" element={<Dump />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default AppRouter;