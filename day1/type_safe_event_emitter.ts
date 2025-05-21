import EventEmitter from 'node:events'

class MyEmitter extends EventEmitter{

}

const myEmitter = new MyEmitter()

myEmitter.on('first-event', () => {
    console.log("first event called")
})

export default myEmitter
