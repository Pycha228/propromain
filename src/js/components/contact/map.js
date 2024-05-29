export const useMap= () => {
  ymaps.ready(init);
        function init() {
          var map = new ymaps.Map('map', {
            center: [20, 60],
            zoom: 2,
          });
          var myPlacemark = new ymaps.Placemark(
            [-25, 130],
            {
              iconContent: 'Yogja, INA',
              balloonContent: '100 Smith Street Collingwood VIC 3066 AU',
            },
            {
              preset: 'twirl#blueStretchyIcon',
            },
          );
          map.geoObjects.add(myPlacemark);
          map.controls.remove('geolocationControl'); // удаляем геолокацию
          map.controls.remove('searchControl'); // удаляем поиск
          map.controls.remove('trafficControl'); // удаляем контроль трафика
          map.controls.remove('typeSelector'); // удаляем тип
          map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
          map.controls.remove('zoomControl'); // удаляем контрол зуммирования
          map.controls.remove('rulerControl'); // удаляем контрол правил
        }
}