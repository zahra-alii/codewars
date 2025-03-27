// Solution:
const trim = (str,size) => 
    str.length <= size ? str : str.slice(0, size > 3 ? size - 3 : size) + '...';
