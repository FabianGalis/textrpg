import { useState, useEffect} from 'react'
export default function MakePersistentPls(defaultValue, key) {
    const [value, setValue] = useState(() => {
        const stickyValue = window.sessionStorage/*localStorage FOR FUTURE PLANS*/.getItem(key);
        return stickyValue !== null
        ? JSON.parse(stickyValue)
        : defaultValue;
    });
    useEffect(() => {
        window.sessionStorage/*localStorage FOR FUTURE PLANS*/.setItem(key, JSON.stringify(value));
    }, [key, value]);
    return [value, setValue];
  }