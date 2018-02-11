function fibMemo(index, cache) {
  //index is the number in the fibonacci seq
  // cache is the array of memory
  cache = cache || [];
  if(cache[index]) return cache[index];
  else {
    if(index < 3) return 1;
    else {
      cache[index] = fibMemo(index - 1, cache) + fibMemo(index - 2, cache);
    }
  }
  return cache[index];
}


console.log(fibMemo(4)); // will give 3

console.log(fibMemo(9)); // will give 34

console.log(fibMemo(12)); // will give 144

console.log(fibMemo(20)); // will give 6765


//Does it blow your mind how it works like mine...
