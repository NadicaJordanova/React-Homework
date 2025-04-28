import { useState, useEffect } from "react";

export function useLocalStorage(initialKey, initialValue) {
  const [value, setValue] = useState(initialValue);
  const [key, setKey] = useState(initialKey);
  console.log(initialKey, initialValue, "initial");

  useEffect(() => {
    if (value !== "") {
      localStorage.setItem(key, value);
      console.log("Saved to localStorage:", key, value);
    }
  }, [key, value]);

  return { value, key, setValue, setKey };
}
