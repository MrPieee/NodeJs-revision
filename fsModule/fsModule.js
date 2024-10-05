const fs= require('fs');



// Create folder with FS module 
    // Asyncronass way
// fs.mkdir('normal.txt',(err)=>{
//     if (err) {
//         console.log(err);
//     } else {
//         console.log('Success');
//     }
// });
    // syncronass way
// fs.mkdirSync('normal.txt');


// Create file with FS module 
    // Asyncronass way
// fs.writeFile('index.txt','Iam Mr Siuuu',(err)=>{
//     if (err) {
//         console.log(err);
//     } else {
//       console.log('Success');
//     }
// });

    // syncronass way
// fs.writeFileSync('index.txt','Iam Mr Duuuu');


// Append Data in file with fs module 
    // Asyncronass way
// fs.appendFile('index.txt','\nIam 19 Years Older',(err)=>{
//     if (err) {
//         console.log(err);
//     } else {
//       console.log('Success');
//     }
// });

    // syncronass way
// fs.appendFileSync('index.txt','\nIam 38 Years Older');


// Rename file with fs module 
    // Asyncronass way
// fs.rename('index.txt','demu.txt',(err)=>{
//     if (err) {
//         console.log(err.message);
//     } else {
//       console.log('Success');
//     }
// });

    // syncronass way
// fs.renameSync('index.txt','demu.txt')


// Read Data from file with fs module 
    // Asyncronass way
// fs.readFile('index.txt','utf-8',(err,data)=>{
//     if (err) {
//         console.log(err);
//     } else {
//       console.log(data);
//     }
// });
// NOTE: utf-8 is for encoding from BUFFER text ;

    // syncronass way
// fs.readFileSync('index.txt','utf-8');


// Cheak exist file with fs module 
    // Asyncronass way
// fs.exists('index.txt',(err,result)=>{
//     if (err) {
//         console.log(err);
//     } else {
//       console.log(result);
//     }
// });


// DELETE file with fs module 
    // Asyncronass way
// fs.unlink('index.txt',(err)=>{
//     if (err) {
//         console.log(err);
//     } else {
//       console.log('Success');
//     }
// });

    // syncronass way
// fs.unlinkSync('index.txt');