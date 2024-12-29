import { useCallback, useRef } from 'react';

type CallbackFunction = (...args: any[]) => void;

const useDebouncedCallback = (callback: CallbackFunction, delay: number) => {
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const debouncedCallback = useCallback(
    (...args: any[]) => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        callback(...args);
      }, delay);
    },
    [callback, delay],
  );

  return debouncedCallback;
};

export default useDebouncedCallback;

/*
Usage Example:
  const handleSearch = useDebouncedCallback((text: string) => {
    onSearch?.(text);
  }, 300);
*/
