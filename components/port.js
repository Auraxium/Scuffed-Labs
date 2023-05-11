// import axios from "axios";
// let port; 
// let ports = ["http://localhost:9090"];

// // ["http://localhost:9090"].some(async (el) => {
// //   port = await axios.get(el + "/test").catch((err) => null);
// //   console.log(port)
// //   if (port) return port = el;
// // });


// run();

// async function run() {
//   for (let i = 0; i < ports.length; i++) {
//     const el = ports[i];
//     port = await axios.get(el + "/test").catch((err) => null);
//     console.log(port);
//     if (port) port = el;
//     break;
    
//   }
//   if(!port)
//     port = "http://localhost:9090"
// }

// // console.log('test')

// // if(localStorage.getItem('uuid')) {
// //   axios.post(port)
// // }

// export {port} 

const port = "http://localhost:9090"
export  {port}