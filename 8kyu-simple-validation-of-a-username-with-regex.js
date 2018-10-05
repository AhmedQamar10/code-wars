// Write a simple regex to validate a username. Allowed characters are:
// lowercase letters,
// numbers,
// underscore
// Length should be between 4 and 16 characters (both included).

// eslint-disable-next-line
function validateUsr(username) {
  let res = /^[a-z0-9_]{4,16}$/.test(username);
  return res;
}