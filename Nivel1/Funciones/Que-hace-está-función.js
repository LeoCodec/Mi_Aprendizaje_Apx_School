function ejemplo(a, b, c) {
    const d = [];
    
    for (let i = 0; i < a.length; i++) {
      const e = a[i];
      
      if (e.b === b && e.c <= c) {
        d.push(e);
      }
    }
    
    return d;
  }