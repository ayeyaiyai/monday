function randomizeFontFamily(divId) {
  var fonts = [
    {
      name: 'rusuck',
      style: {
        zIndex: '1',
        marginTop: '16px',
        fontSize: '18em',
        color: 'rgb(18, 175, 18)',
        letterSpacing: '64px'
      }
    },
    {
      name: 'arbo',
      style: {
        zIndex: '1',
        fontSize: '18em',
        color: 'rgb(18, 175, 18)'
      }
    },
    {
      name: 'kuga',
      style: {
        zIndex: '1',
        fontSize: '18em',
        marginBottom: '78px',
        color: 'rgb(18, 175, 18)',
        letterSpacing: '32px'
      }
    }
  ];

  var randomIndex = Math.floor(Math.random() * fonts.length);
  var randomFont = fonts[randomIndex];

  var divElement = document.getElementById(divId);
  if (divElement) {
    if (typeof randomFont === 'string') {
      divElement.style.fontFamily = randomFont;
    } else {
      divElement.style.fontFamily = randomFont.name;
      Object.assign(divElement.style, randomFont.style);
    }
  }
}

// Call the function with the ID of your div element
randomizeFontFamily('title-text');