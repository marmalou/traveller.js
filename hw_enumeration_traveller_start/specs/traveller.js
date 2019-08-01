git remote add origin https://github.com/marmalou/traveller.js.git
git push -u origin masterconst Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  return this.journey.map (location) => {
    return start.location
  });


};

Traveller.prototype.getJourneyEndLocations = function () {
    return this.journey.map((location) => {
      return end.location;
    });
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  return this.transport.reduce (transport) => {
    return total + transport.length;
  });
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  return this.distance.every((journey) => {
    return distance.length >= length;
  });
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
   return this.journey.reduce((total, journey) => {
    return total += journey.length;
  }, 0);
};

Traveller.prototype.getUniqueModesOfTransport = function () {

};


module.exports = Traveller;
