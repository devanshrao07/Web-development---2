// console.log('starting...');
// function dowork() {
//     settimeout(()=>{
//         console.log('working...');
//     },3000);
// }
// dowork();
// console.log('finished');




console.log('starting...');
function dowork(cb) {
    setTimeout(()=>{
        cb('working...');
    },3000);
}
dowork((data)=>{
    console.log(data);
});
console.log('finished')