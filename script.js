document.addEventListener('DOMContentLoaded', function() { 

  // Create variables
  const modeButton = document.querySelector('#mode-button'); 

  // Create icon variables
  const sunImg = document.createElement('img');
  sunImg.src = 'images/icons/sun.svg';
  sunImg.style.height = '80%';

  const moonImg = document.createElement('img');
  moonImg.src = 'images/icons/moon.svg';
  moonImg.style.height = '80%';

  // Make the sun icon the default icon
  modeButton.append(sunImg);

  // Create variables
  const body = document.querySelector('body');
  const footer = document.querySelector('footer');

  // Keep track of mode
  let darkMode = true;

  modeButton.onclick = () => { 

    if (darkMode == true) { 
      // Replace sun with moon
      modeButton.removeChild(sunImg);
      modeButton.appendChild(moonImg);
      darkMode = false;

      // Make style changes
      body.style.backgroundColor = 'rgb(245, 245, 245)';
      body.style.color = 'black';
      footer.style.color = '#DEE2E6';
    }
    else { 
      // Replace moon with sun
      modeButton.removeChild(moonImg);
      modeButton.appendChild(sunImg);
      darkMode = true;

      // Make style changes
      body.style.backgroundColor = '#212529';
      body.style.color = '#DEE2E6';
    }
  }

})