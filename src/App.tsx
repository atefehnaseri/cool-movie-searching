import React, {FC, Suspense} from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import LoadingIndicator from "./components/LoadingIndicator";
import Home from "./pages/Home";
import WatchLaterList from "./pages/WatchLaterList";
import FavoriteMoviesList from "./pages/FavoriteMoviesList";
import NotFoundPage from "./pages/NotFoundPage";


const App: FC = () => {
  return (
    <Router>
      <Suspense fallback={<LoadingIndicator/>}>
        <Routes>
          <Route path="/" element={<Home/>} errorElement={<NotFoundPage/>}/>
          <Route path="/watch-later" element={<WatchLaterList/>} errorElement={<NotFoundPage/>}/>
          <Route path="/favorites" element={<FavoriteMoviesList/>} errorElement={<NotFoundPage/>}/>
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
