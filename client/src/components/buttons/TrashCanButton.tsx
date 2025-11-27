import type { UseMutationResult } from "@tanstack/react-query";

type TrashCanButtonProps<TArgs, TError = Error> = {
    itemId: TArgs;
    deleteMutation: UseMutationResult<void, TError, TArgs>;
};
export default function TrashCanButton<TArgs, TError = Error>({
    itemId,
    deleteMutation,
}: TrashCanButtonProps<TArgs, TError>) {
    const isDeleting = deleteMutation.isPending && deleteMutation.variables === itemId;

    return (
        <div className="relative group inline-block">
            <button
                // disabled={isDeleting}
                onClick={() => deleteMutation.mutate(itemId)}
                className="focus:outline-none disabled:opacity-50 flex items-center justify-center cursor-pointer"
            >
                {isDeleting ?
                    <div className="border-transparent h-10 w-10 animate-spin rounded-full border-8 border-t-redish" />
                    : <i className="fas fa-trash text-xl w-10"></i>
                }
            </button>
            <span
                className="absolute left-1/2 -translate-x-1/2 mt-2 hidden group-hover:block 
               whitespace-nowrap rounded bg-gray-800 text-white text-xs px-2 py-1"
            >
                Delete
            </span>
        </div>
    )
}
