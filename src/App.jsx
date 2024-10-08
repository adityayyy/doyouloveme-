import React, { useState } from 'react';

const LoveMeApp = () => {
  const [flag, setFlag] = useState(1);
  const [buttonStyle, setButtonStyle] = useState({
    top: '235px',
    left: '360px',
    position: 'absolute',
  });

  const handleYesClick = () => {
    alert('Yes, you are right');
  };

  const moveButton = () => {
    const aWidth = window.innerWidth;
    const aHeight = window.innerHeight;
    const randomTop = Math.floor(Math.random() * aHeight) + 'px';
    const randomLeft = Math.floor(Math.random() * aWidth) + 'px';

    let newTop, newLeft;

    switch (flag) {
      case 1:
        newTop = randomTop;
        newLeft = randomLeft;
        setFlag(2);
        break;
      case 2:
        newTop = randomTop;
        newLeft = randomLeft;
        setFlag(3);
        break;
      case 3:
        newTop = '235px';
        newLeft = '286px';
        setFlag(4);
        break;
      case 4:
        newTop = '235px';
        newLeft = '360px';
        setFlag(1);
        break;
      default:
        newTop = '235px';
        newLeft = '360px';
    }

    setButtonStyle({
      top: newTop,
      left: newLeft,
      position: 'absolute',
    });
  };

  const handleNoClick = () => {
    alert();
  };

  return (
    <div className="relative min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="absolute text-3xl font-bold text-gray-800" style={{ left: '220px', top: '175px' }}>
        Do you love me?
      </h1>
      <div
        id="By"
        className="absolute"
        style={{ left: '285px', top: '235px' }}
      >
        <input
          type="button"
          value=" Yes "
          onClick={handleYesClick}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        />
      </div>
      <div
        id="Bn"
        className="absolute"
        style={buttonStyle}
        onMouseOver={moveButton}
        onTouchStart={moveButton}
      >
        <input
          type="button"
          value=" N o "
          onClick={handleNoClick}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        />
      </div>
      <div className="text-center mt-12 font-normal text-base text-gray-700">
        <p>
          <a
            title="doyouloveme?"
            href="http://www.w2bc.com/shili"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-600"
          >
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoveMeApp;
