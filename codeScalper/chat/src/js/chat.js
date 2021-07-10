'use strict'
const socket = io();


socket.emit('chatting', 'from front')

console.log(socket)