window.lat = 46.100547;
window.lng = 19.665059;

var map;
var mark;
var initialize = function() {
    map  = new google.maps.Map(document.getElementById('map-canvas'), {center:{lat:lat,lng:lng},zoom:14});
    mark = new google.maps.Marker({position:{lat:0, lng:0}, map:map});
};
window.initialize = initialize;

var redraw = function(payload) {
    lat = payload.message.lat;
    lng = payload.message.lng;

    map.setCenter({lat:lat, lng:lng, alt:0});
    mark.setPosition({lat:lat, lng:lng, alt:0});
};

var pnChannel = "andjeo-channel";
var pubnub = new PubNub({
    publishKey:   'pub-c-ef89c5fb-fc01-446b-9ab5-16af48e70997',
    subscribeKey: 'sub-c-f391e44e-f437-11e7-a966-520fb0a815a8'
});

pubnub.subscribe({channels: [pnChannel]});
pubnub.addListener({message:redraw});

