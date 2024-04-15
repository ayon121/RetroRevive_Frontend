

import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";


const useTotalProductCount = () => {
    const axiosSecure = useAxiosSecure()
    const {data: productcount = [] , refetch } = useQuery({
        queryKey: ['count'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/allporductCount`)
            return res.data.count
        }
    })
    return (
        [productcount , refetch]
    );
};

export default useTotalProductCount;