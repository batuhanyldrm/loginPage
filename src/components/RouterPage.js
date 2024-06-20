import { BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import React from 'react'

import App from "./App";
import Page from "./Page";

const RouterPage = () => {
  return (
    <BrowserRouter>
			<Routes>
				<Route path="/" element={<App component={App} title={"Login"} />}></Route>
				<Route path="/page" element={<Page component={Page} title={"Page"} />}></Route>
			</Routes>
    </BrowserRouter>
  )
}

export default RouterPage