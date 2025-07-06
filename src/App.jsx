import Home from './page/HomePage'
import NotFound from './page/NotFound';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";


function App() {
  return (

          <Routes>
          <Route path="/" element={<Home />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" />} />
            {/* <NotFoundRoute handler={<NotFound/>} /> */}
          </Routes>

  );
}

export default App;
