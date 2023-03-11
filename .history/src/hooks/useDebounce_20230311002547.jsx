import { useEffect, useState } from "react";

export default function useDebounce(value= "", delay = 500) {
  const [debounceValue, setDebounceValue] = useState(value);
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceValue(value);
    }, delay);
    return () => {
      clearTimeout(timer);
    };
  }, [value]);
  return debounceValue;
}