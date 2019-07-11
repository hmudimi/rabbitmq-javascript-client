var amqp = require('amqplib/callback_api');

console.log(process.env);

// var open = require('amqplib').connect('amqp://localhost');

// open.then(function(conn) {
//     return conn.createChannel();
//   }).then(function(ch) {
//     return ch.assertQueue(q).then(function(ok) {
//       return ch.consume(q, function(msg) {
//         if (msg !== null) {
//           console.log(msg.content.toString());
//           ch.ack(msg);
//         }
//       });
//     });
//   }).catch(console.warn);