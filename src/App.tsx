import React, {FC} from "react";
import {Routes, Route} from "react-router-dom";
import {QueryClient, QueryClientProvider} from "react-query";
import {ReactQueryDevtools} from "react-query/devtools";
import Home from "./pages/Home";
import WatchLaterList from "./pages/WatchLaterList";
import FavoriteMoviesList from "./pages/FavoriteMoviesList";
import NotFoundPage from "./pages/NotFoundPage";
import Layout from "./components/Layout";
import "bootstrap/dist/css/bootstrap.min.css";


const queryClient: QueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      staleTime: 5 * 60 * 1000,
    }
  }
});

const App: FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/watch-later" element={<WatchLaterList/>}/>
          <Route path="/favorites" element={<FavoriteMoviesList/>}/>
          <Route path="*" errorElement={<NotFoundPage/>}/>
        </Routes>
      </Layout>
      <ReactQueryDevtools initialIsOpen={true}/>
    </QueryClientProvider>
  );
};

export default App;
