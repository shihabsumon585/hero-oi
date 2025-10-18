import { createBrowserRouter } from "react-router"
import App from "../App"
import MainLayOut from "../LayOuts/MainLayOut"
import AllApps from "../Pages/AllApps"
import InstalledApps from "../Pages/InstalledApps"


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
            Component: AllApps
        },
        {
            path: "/installation",
            Component: InstalledApps
        }
    ]
  }
])
export default router