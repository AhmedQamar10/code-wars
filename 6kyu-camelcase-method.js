// Write simple .camelCase method (camel_case function in PHP, CamelCase in C# or camelCase in Java) for strings.
// All words must have their first letter capitalized without spaces.

String.prototype.camelCase = function(){
  return Object.values(this).join('').split(' ').filter(word => word !== '').map((s) => s.charAt(0).toUpperCase() + s.substring(1)).join('');
};