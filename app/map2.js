function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(updatePosition);
    }
    return null;
};
function updatePosition(position) {
    if (position) {
        window.lat = position.coords.latitude;
        window.lng = position.coords.longitude;
    }
}
setInterval(function(){updatePosition(getLocation());}, 4000);

function currentLocation() {
    return {lat:window.lat, lng:window.lng};
};

var pnChannel = "andjeo-channel";
var pubnub = new PubNub({
    publishKey:   'pub-c-ef89c5fb-fc01-446b-9ab5-16af48e70997',
    subscribeKey: 'sub-c-f391e44e-f437-11e7-a966-520fb0a815a8'
});

setInterval(function() {
    pubnub.publish({channel:pnChannel, message:currentLocation()});
    document.write('Working<br>');
}, 8000);