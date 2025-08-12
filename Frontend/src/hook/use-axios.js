import { useCallback ,useEffect, useState } from "react";


// USABILIDADE - criei um Hook para usar e não repetir o código, apenas o "useAxios()"
const useAxios = (configReq) => {
    const {axiosIntance, url, method, configs = {} } = configReq;
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const fetchData = useCallback(async () => {
        setLoading(true);
        setError('');
        try {
            const res = await axiosIntance[method.toLowerCase()](url, {
                ...configs
            });
            setData(res.data);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    }, [axiosIntance, method, url, configs]);

    useEffect(() => {
        fetchData()
    }, [fetchData])

    return [data, loading, error]
}


export default useAxios