import { BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import React from 'react'

import LoginPage from "./LoginPage";
import Page from "./Page";

const RouterPage = () => {
  return (
    <BrowserRouter>
			<Routes>
				<Route path="/" element={<LoginPage component={LoginPage} title={"Login"} />}></Route>
				<Route path="/page" element={<Page component={Page} title={"Page"} />}></Route>
			</Routes>
    </BrowserRouter>
  )
}

export default RouterPage