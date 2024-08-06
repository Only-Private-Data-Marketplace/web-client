import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "../layout";

import HomePage from "./HomePage/HomePage";
import ErrorPage from "./ErrorPage/ErrorPage";
import CreatorPage from "./CreatorPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<Layout.Default />}>
        <Route index element={<HomePage />} />
        <Route path="/creator" element={<CreatorPage />} />
      </Route>

      <Route path="*" element={<ErrorPage />} />
    </>
  )
);

export default router;
