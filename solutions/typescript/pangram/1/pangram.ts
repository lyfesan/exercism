export function isPangram(s: string) {
  s = s.toLowerCase();
  const ans = new Set();
  for (const c of s) {
    if(c>='a' && c<='z') {
      ans.add(c);
    }
  }
  if(ans.size === 26) return true;
  return false;
}
