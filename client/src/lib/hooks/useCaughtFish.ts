import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type { CaughtFish } from "../types";
import axios from "axios";

export const useCaughtFish = (id?: number) => {
    const queryClient = useQueryClient();

    const { data: caughtFishes, isLoading } = useQuery<CaughtFish[]>({
        queryKey: ['caughtFishes'],
        queryFn: async () => {
            const response = await axios.get('/api/caught_fishes');
            
            const result = response.data as { member: CaughtFish[] | null };

            return result.member ?? [];
        },
    });

    const deleteCaughtFish = useMutation<void, Error, number>({
        mutationFn: async (id) => {
            const res = await fetch(`/api/caught_fishes/${id}`, { method: 'DELETE' });
            if (!res.ok) throw new Error('Failed to delete');
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['caughtFishes'] });
        },
    });

    return {
        caughtFishes,
        isLoading,
        deleteCaughtFish
    };
}