export const fishIconColorMap: Record<string, string> = {
    'Smallmouth Bass': 'text-amber-700',
    'Northern Pike': 'text-green-700',
    'Walleye': 'text-yellow-600',
    'Muskellunge': 'text-slate-700',
    'Largemouth Bass': 'text-green-800',
    'Crappie': 'text-zinc-600',
    'Bluegill': 'text-blue-600',
    'Sunfish': 'text-orange-500',
    'Perch': 'text-yellow-700',
    'Lake Trout': 'text-slate-600',
    'Brook Trout': 'text-emerald-700',
    'Rainbow Trout': 'text-pink-600',
    'Brown Trout': 'text-amber-800',
    'Whitefish': 'text-gray-400',
    'Yellow Perch': 'text-yellow-500',
    'Rock Bass': 'text-stone-700',
    'Pumpkinseed': 'text-orange-600',
    'Cisco (Lake Herring)': 'text-blue-400',
    'Sucker': 'text-brown-600',
    'Carp': 'text-yellow-800'
};

export const getIconFishColor = (fishName: string): string => {
    return fishIconColorMap[fishName] || 'text-gray-500';
};