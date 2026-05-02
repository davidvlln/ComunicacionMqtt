const mqtt = require("mqtt");
// const client = mqtt.connect("mqtt://test.mosquitto.org");
const client = mqtt.connect("mqtt:broker.hivemq.com");


const topic_escucha = 'mi_esp32/Grupo2';

client.on("connect", () => {
  client.subscribe(topic_escucha, (err) => {
    if (!err) {
      client.log(topic_escucha, "Suscrito correctamente");
    }else{
        console.error("No se pudo suscribir: ", err);
    }
  });
});
client.on("message", (topic, message) => {
  console.log(`MENSAJE ENVIADO DESDE ${topic}: `, message.toString());
});
