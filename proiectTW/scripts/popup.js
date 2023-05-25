function showSubscribePopup(){
    var popup = document.createElement('div');
    popup.className = 'subscribe-popup';
    
    var content = document.createElement('p');
    content.className='popup-content';
    content.textContent = 'Subscribe to our newsletter!';
    popup.appendChild(content);

    var link=document.createElement('input');
    link.setAttribute("type", "text");
    link.className='popup-link';
    popup.appendChild(link);
    
   
    if (JSON.parse(localStorage.getItem('email')))
    {
        return ;
    }
    else{
        var emailRegex = /@gmail\.com$/;
        link.addEventListener('input', function(event) {
            
            var enteredValue = event.target.value;
            if (emailRegex.test(enteredValue)) {
                
                alert('Email inregistrat cu succes!');
                localStorage.setItem('email', enteredValue);
              } else {
                console.log("Invalid or non-Gmail address");
              }
            
          });
        
        popup.style.left = '0%';
        popup.style.width=1000;
        document.body.appendChild(popup)
        
        ;}
    

    
    
   
    document.addEventListener('click', function(event) {
      if (!popup.contains(event.target)) {
        document.body.removeChild(popup);
      }
    });
  }
function loadSubscribePopup() {
    setTimeout(showSubscribePopup, 5000); 
  }

window.onload = loadSubscribePopup;

