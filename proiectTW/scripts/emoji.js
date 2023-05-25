let emoji_list=['😀', '😁', '😂', '🤣', '😃', '😄', '😅', '😆', '😉', '😊', '😋', '😎', '😍', '😘', '😗', '😙', '😚'];
function setrandomemoji(){
  let randomIndex = Math.trunc(Math.random() * 100 % emoji_list.length);
  var titlu = document.getElementById("js-despre-container-titlu");
  var randomEmoji = emoji_list[randomIndex];
  console.log(randomEmoji);
  
}
window.onload = setInterval(setrandomemoji, 2000);