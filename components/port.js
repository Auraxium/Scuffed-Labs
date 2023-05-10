import axios from "axios";
let port; 

["http://localhost:9090"].some(async (el) => {
  port = await axios.get(el + "/test").catch((err) => null);
  console.log(port)
  if (port) return port = el;
});


// run();

// async function run() {
//   for (let i = 0; i < ports.length; i++) {
//     const el = ports[i];
//     port = await axios.get(el + "/test").catch((err) => null);
//     console.log(port);
//     if (port) port = el;
//     break;
    
//   }
// }

// console.log('test')

// if(localStorage.getItem('uuid')) {
//   axios.post(port)
// }

export {port} 