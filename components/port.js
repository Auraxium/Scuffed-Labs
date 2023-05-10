import axios from "axios";
let port; 

["http://localhost:9090"].some(async (el) => {
  port = await axios.get(el + "/test").catch((err) => null);
  console.log(port)
  if (port) return port = el;
});

// console.log('test')

// if(localStorage.getItem('uuid')) {
//   axios.post(port)
// }

export {port}