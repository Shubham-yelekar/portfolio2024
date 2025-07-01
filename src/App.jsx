import "../src/App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import { ThemeProvider } from "./Theme-context";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Archives from "./pages/Archives";
import About from "./pages/About";
import PageNotFound from "./pages/PageNotFound";
import ProjectDetails from "./pages/ProjectDetails";
import Blogs from "./pages/Blogs";
import BlogPost from "./pages/BlogPost";
import { DataProvider } from "./DataContext";

import { HelmetProvider } from "react-helmet-async";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/projects/:id" element={<ProjectDetails />}></Route>
        <Route path="/archives" element={<Archives />}></Route>
        <Route path="/about" element={<About />}></Route>

        <Route path="*" element={<PageNotFound />}></Route>
      </Route>
    )
  );

  return (
    <ThemeProvider>
      <HelmetProvider>
        <DataProvider>
          <RouterProvider router={router}></RouterProvider>
        </DataProvider>
      </HelmetProvider>
    </ThemeProvider>
  );
}

export default App;
