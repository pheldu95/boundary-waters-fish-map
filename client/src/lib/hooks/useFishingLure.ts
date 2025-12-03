import { useQuery } from "@tanstack/react-query";
import type { FishingLure, HydraCollection } from "../types";
import axios from "axios";

export const useFishingLure = () => {
    // const queryClient = useQueryClient();

    const { data: fishingLures, isPending } = useQuery<FishingLure[]>({
        queryKey: ['fishingLures'],
        queryFn: async () => {
            const response = await axios.get<HydraCollection<FishingLure>>('/api/fishing_lures');
            return response.data.member;
        }
    })


    return {
        fishingLures,
        isPending,
    }
}