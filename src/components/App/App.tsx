import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage";
import NewMoviePage from "../../pages/NewMoviePage/NewMoviePage";

const App = (): React.ReactElement => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/films" />} />
      <Route path="/films" element={<HomePage />} />
      <Route path="/new" element={<NewMoviePage />} />
    </Routes>
  );
};
export default App;
