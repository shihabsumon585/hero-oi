import { createBrowserRouter } from "react-router"
import App from "../App"
import MainLayOut from "../LayOuts/MainLayOut"
import AllApps from "../Pages/AllApps"
import InstalledApps from "../Pages/InstalledApps"
import AppDetails from "../Pages/AppDetails"


const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayOut,
    children: [
        {
            index: true,
            loader: () => fetch("/homeAppsData.json"),
            Component: App,
            errorElement: ""
        },
        {
            path: "/allApps",
            loader: () => fetch("/allAppsData.json"),
            Component: AllApps
        },
        {
            path: "/installation",
            loader: () => fetch("/allAppsData.json"),
            Component: InstalledApps
        },
        {
          path: "/appDetails",
          
          Component: AppDetails
        }
    ]
  }
])
export default router