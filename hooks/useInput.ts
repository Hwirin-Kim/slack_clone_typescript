import { useState, useCallback, SetStateAction, Dispatch } from 'react';

const useInput = <T = any>(initial: T): [T, (e: any) => void, Dispatch<SetStateAction<T>>] => {
  const [value, setValue] = useState(initial);

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  return [value, onChange, setValue];
};

export default useInput;
