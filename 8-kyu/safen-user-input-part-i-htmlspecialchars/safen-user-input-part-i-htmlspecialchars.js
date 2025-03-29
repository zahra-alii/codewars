// SOLUTION:
function htmlspecialchars(formData) {
  return formData.replace(/&/g, "&amp;") // do &amp first
  .replace(/"/g, "&quot;")
  .replace(/>/g, "&gt;")
  .replace(/</g, "&lt;")
}
​
// use regex & .replace() to replace every global (g) passed into the func