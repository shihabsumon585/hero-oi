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
            Component: App,
            errorElement: ""
        },
        {
            path: "/allApps",
            Component: AllApps
        },
        {
            path: "/installedApps",
            Component: InstalledApps
        }
    ]
  }
])
export default router