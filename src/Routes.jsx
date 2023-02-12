import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Tasks from "./Pages/Tasks/index";
import DefaultPage from "./Components/DefaultPage";
import Dump from "./Pages/Dump";
import Dashboard from "./Pages/Dashboard";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DefaultPage />}>
          <Route index element={<Dashboard />}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default AppRouter;