import { useState, useEffect } from "react";

type LocalStorageValue = string | boolean | null;

export default function useLocalStorage(
  key: string
): [LocalStorageValue, (v: string) => void] {
  const [value, setValue] = useState<LocalStorageValue>(null);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storageValue = localStorage.getItem(key) || null;
      setValue(storageValue);
    }
  }, []);

  const setNewValue = (v: string): void => {
    setValue(v);
    localStorage.setItem(key, v);
  };

  return [value, setNewValue];
}
