import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type { CaughtFish } from "../types";

export const useCaughtFish = (id?: string) => {
    const queryClient = useQueryClient();

    const { data: caughtFishes, isLoading } = useQuery<CaughtFish[]>({
        queryKey: ['caughtFishes'],
        queryFn: async () => {
            const response = await fetch('/api/caught_fishes')
            if (!response.ok) {
                throw new Error('Network response was not ok')
            }
            
            const result = await response.json();
            
            return result.member ?? [];
        },
    });

    return {
        caughtFishes,
        isLoading
    };
}