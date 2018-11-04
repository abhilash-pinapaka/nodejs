// Event emitter module facilitates communication between objects in node.
// Nodes built in modules inhereit from event emitter.
// emITTER OBJECTS EMIT NAMED EVENTs that cause listeners to be caused.
// emitter -> emitting named events, register listener functions.

const EventEmitter = require('events');
const fs = require('fs')

// class Logger extends EventEmitter {}
// const logger = new Logger();
// logger.emit('data');
// logger.on('data',()=>console.log('event emitted'))

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('event', () => {
    // var a = 2+3;
  console.log('an event occurred!');
//   console.log(a)
});
myEmitter.emit('event');

// class WithLog extends EventEmitter{
//     execute(taskFunc){
//         console.log("Before executing");
        
//         this.emit('begin');
//         taskFunc();
//         this.emit('end');
//         console.log('After Executing');
//     }
// }

// const withLog = new WithLog();
// withLog.on('begin',()=>console.log('About to execute'));
// withLog.on('end',() => console.log('completed execution'));
// // withLog.execute(()=>console.log(2+3))
// withLog.execute(()=>setTimeout(
//     () => console.log('***Executing Task****'),
//     500
// ))

// class WithTime extends EventEmitter{
//     execute(asyncFunc,...args){
//         console.time("execute");
//         asyncFunc(...args,(err,res)=>{
//             if(err){
//                 return this.emit('error',err)
//             }
//             this.emit('data',res)
//             console.timeEnd('execute')
//         })
        
//     }
// }

// const withTime = new WithTime();

// withTime.on('data',(res)=>{
//     console.log(`Length: ${res.length}`);
// });
// withTime.on('error',(err)=>console.log(err));
// process.once('uncaughtException',(err)=>{
//     console.log(err);
//     process.exit(1)
// })
// process.once('uncaughtException',(err)=>{
//     console.log(err);
//     process.exit(1);
// })


// withTime.prependListener('data',(data)=>{
//     console.log(`Characters: ${data.toString().length}`);
// });


// // withTime.execute(fs.readFile,'');
// // withTime.execute(fs.readFile,'');
// withTime.execute(fs.readFile,__filename);




