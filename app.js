const Hours = new Date().getHours();
const min = new Date().getMinutes();
const sec = new Date().getSeconds();
clock = `${Hours} : ${min} : ${sec} `;

const time = setInterval(() => {
  "Hello";
}, 1000);

console.log(time);
