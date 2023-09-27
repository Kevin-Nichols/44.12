import { useState, useEffect } from "react";
import axios from "axios";

function useFlip(initState = true) {
  const [isState, setState] = useState(initState);
  const flip = () => {
    setState(originalValue => !originalValue);
  };
  return [isState, flip];
}

function useAxios(localStorageKey, url) {
  const [reses, setReses] = useLocalStorage(localStorageKey);
  const addRes = async (createUrl = data => data, moreData = "") => {
    const res = await axios.get(`${url}${moreData}`);
    setReses(data => [...data, createUrl(res.data)]);
  };
  const resetRes = () => setReses([]);

  return [reses, addRes, resetRes];
}

function useLocalStorage(key, initValue = []) {
  if(localStorage.getItem(key)) {
    initValue = JSON.parse(localStorage.getItem(key));
  }
  const [value, setValue] = useState(initValue);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
}

export  { useFlip, useAxios, useLocalStorage };

export default useLocalStorage;