// Solution:
function validateUsr(username) {
  const res = /^[abcdefghijklmnopqrstuvwxyz\d_]{4,16}$/.test(username)
  return res;
}