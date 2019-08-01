const Journey = function(startLocation, endLocation, transport, distance) {
  this.startLocation = startLocation;
  this.endLocation = endLocation;
  this.transport = transport;
  this.distance = distance;
};

Journey.prototype.startLocation = function () {
  return this.journey.map((location) => {
    return start.location;
  });
};

Journey.prototype.endLocation = function () {
  return this.journey.map((location) => {
    return end.location;
  });
};

Journey.prototype.transport = function (){
  return this.transport.reduce (transport) => {
    return total + transport.length;
});


Journey.prototype.distance = function (length) {
  return this.distance.every((journey) => {
    return distance.length >= length;
  });


module.exports = Journey;
