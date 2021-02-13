//ФУНКЦИЯ МЕНЯЮЩАЯ КАРТИНКИ
function changeImage(anything){
  document.getElementById('slider').src = anything;
}
//ФУНКЦИЯ ОТКРЫТИЯ И ЗАКРЫТИЯ МЕНЮ
function ToggleMenu(){
  const menuToggle = document.querySelector('.menuToggle');
  const navigation = document.querySelector('.navigation');
  menuToggle.classList.toggle('active')
  navigation.classList.toggle('active')
}