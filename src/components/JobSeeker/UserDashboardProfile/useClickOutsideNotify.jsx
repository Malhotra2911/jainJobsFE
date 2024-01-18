import {useEffect} from 'react';

const useClickOutsideNotify = (ref,handler) => {
  return (
    useEffect(() => {
        const listener = event =>{
          const el = ref?.current;
          if(!el || el.contains(event.target)){
              return;
          }
          handler(event);
        };
  
        document.addEventListener('mousedown',listener);
        document.addEventListener('touchstart',listener);
      
        return () => {
          document.removeEventListener('mousedown',listener);
          document.removeEventListener('touchstart',listener);
        }
      }, [ref,handler])

  )
}

export default useClickOutsideNotify