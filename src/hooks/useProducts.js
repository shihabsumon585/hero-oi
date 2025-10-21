import { useEffect, useState } from "react"
import axios from "axios";


const useProducts = () => {
    const [appData, setAppData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        axios("../allAppsData.json")
            .then(data => setAppData(data.data))
            .catch(err => setError(err))
            .finally(() => setLoading(false))
    }, [])
    return { appData, loading, error }
}
export default useProducts;