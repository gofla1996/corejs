



export const memo = (() => {
  const cache = {};
  
  return (key,callback) => {
    
    if(!callback) return cache[key];
    
    if(cache[key]){
      console.warn(`${key} is already memoized`);
      return cache[key];
    }
    cache[key] = callback();
    
  }


})();

memo('cube', () => document.querySelector('#cube'));
// memo('table', () => document.querySelector('tbody'));


console.log(memo('cube'));