// Your task is to remove all duplicate words from string, leaving only single (first) words entries.

const removeDuplicateWords = s => Array.from(new Set(s.split(' '))).join(' ');