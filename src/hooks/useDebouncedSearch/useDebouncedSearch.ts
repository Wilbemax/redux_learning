import { useEffect, useState } from "react";

export function useDebouncedSearch(value: string, delay = 300): string {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        
        return () => {
            clearTimeout(handler);
        };
    }, [value, delay]); 

    return debouncedValue;
}
