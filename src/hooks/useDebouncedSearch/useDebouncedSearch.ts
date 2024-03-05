import { useEffect, useState } from "react";

export function useDebouncedSearch(value: string, delay = 300): string {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        // Очистка таймера при размонтировании компонента или изменении зависимостей
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        // Очистка таймера при размонтировании компонента или изменении зависимостей
        return () => {
            clearTimeout(handler);
        };
    }, [value, delay]); // Зависимости для useEffect

    return debouncedValue;
}
