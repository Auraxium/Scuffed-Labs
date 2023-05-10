import axios from "axios";
let port; 

["http://localhost:9090"].some(async (el) => {
  port = await axios.get(el + "/test").catch((err) => null);
  if (port) return port = el;
});

export {port}