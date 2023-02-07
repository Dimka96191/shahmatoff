// Яндекс карта 

ymaps.ready(init);
function init() {
  var myMap = new ymaps.Map("map", {
    center: [56.82, 60.60],
    zoom: 13,
    controls: ['smallMapDefaultSet']
  }, {
    restrictMapArea: [
      [56.699, 60.312],
      [56.989, 60.880]
    ]
  }),
    myGeoObject = new ymaps.GeoObject()


  myMap.geoObjects
    .add(new ymaps.Placemark([56.830668, 60.592948], {
      balloonContent: 'Хохрякова, 48'
    }),
    );

  myMap.geoObjects
    .add(new ymaps.Placemark([56.802107, 60.602072], {
      balloonContent: 'Авиационная улица, 10'
    }),
    );

}