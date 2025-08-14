import { useCallback, useState } from "react";


// USABILIDADE - criei um Hook para usar e não repetir o código, apenas o "useAxios()"
const useAxios = (configReq) => {
    const {axiosIntance, url, method } = configReq;
    const [response, setResponse] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const fetchData = useCallback(async (reqData = {}, reqConfigs = {}) => {
        try {
            let res 
            setLoading(true)
            const methodName = method.toLowerCase()
            
            if(['get', 'head', 'delete'].includes(methodName)) {
                res = await axiosIntance[methodName]( url, { 
                params: reqData,
                ...reqConfigs 
                });
            } else {
                res = await axiosIntance[methodName](url, reqData, reqConfigs);
            }
            setResponse(res.data);
            return res.data
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    }, [axiosIntance, method, url]);

    return { response, loading, error, fetchData } 
}


export default useAxios