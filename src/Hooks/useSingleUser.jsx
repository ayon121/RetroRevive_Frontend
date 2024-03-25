import { useContext } from "react";
import { AuthContext } from "../Providers/Authproviders";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";


const useSingleUser = () => {
    const { user } = useContext(AuthContext)
    const axiosSecure = useAxiosSecure()
    const {data: singleuserInfo = [] ,  refetch } = useQuery({
        queryKey: ['singleusersinfo'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/${user?.email}`)
            return res.data
        }
    })
    return (
       [singleuserInfo , refetch ]
    );
};

export default useSingleUser;