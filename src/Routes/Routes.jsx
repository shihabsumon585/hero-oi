import { createBrowserRouter } from "react-router"
import App from "../App"
import MainLayOut from "../LayOuts/MainLayOut"
import AllApps from "../Pages/AllApps"
import InstalledApps from "../Pages/InstalledApps"
import AppDetails from "../Pages/AppDetails"
import ErrorPage from "../Pages/ErrorPage"


const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayOut,
    errorElement: <ErrorPage />,
    children: [
        {
            index: true,
            Component: App,
        },
        {
            path: "/allApps",
            Component: AllApps
        },
        {
            path: "/installation",
            Component: InstalledApps
        },
        {
          path: "/appDetails/:id",
          Component: AppDetails
        }
    ]
  }
])
export default router