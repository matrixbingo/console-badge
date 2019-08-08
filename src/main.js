'use strict';

export function log (options) {
  options = typeof options !== 'undefined' ? options : {};

  var optionsDefaults = {
    mode: 'default',
    leftText: 'Lorem',
    rightText: 'Ipsum',
    leftTextColor: '#ffffff',
    rightTextColor: '#ffffff',
    leftBgColor: '#555555',
    rightBgColor: '#0366d6'
  };

  var prop;

  for (prop in optionsDefaults) {
    if (!(prop in options)) {
      options[prop] = optionsDefaults[prop];
    }
  }

  var agent = navigator.userAgent.toLowerCase();

  if (/(chrome|firefox|safari)/.test(agent)) {
    var leftBoxStyle = [
      'background-color: ' + options.leftBgColor,
      'color: ' + options.leftTextColor
    ];

    var rightBoxStyle = [
      'background-color: ' + options.rightBgColor,
      'color: ' + options.rightTextColor
    ];

    var shieldsioFontFamily = 'font-family: DejaVu Sans,Verdana,Geneva,sans-serif';
    var shieldsioTextShadow = 'text-shadow: 0 1px 0 rgba(1, 1, 1, 0.3)';
    var defaultPadding = 'padding: 16px 10px 16px 10px';

    if (options.mode === 'shields.io') {
      leftBoxStyle.push(
        'padding: 6px 4px 6px 6px',
        'border-radius: 3px 0 0 3px',
        shieldsioFontFamily,
        shieldsioTextShadow
      );

      rightBoxStyle.push(
        'padding: 6px 6px 6px 4px',
        'border-radius: 0 3px 3px 0',
        shieldsioFontFamily,
        shieldsioTextShadow
      );
    } else {
      leftBoxStyle.push(
        defaultPadding
      );

      rightBoxStyle.push(
        defaultPadding
      );
    }

    leftBoxStyle = leftBoxStyle.join(';');
    rightBoxStyle = rightBoxStyle.join(';');

    var spacerStyle = ['background-color: transparent'].join(';');

    // eslint-disable-next-line no-console
    console.log('\n\n %c ' + options.leftText + ' %c ' + options.rightText + ' %c \n\n\n', leftBoxStyle, rightBoxStyle, spacerStyle);
  } else {
    // eslint-disable-next-line no-console
    window.console && console.log(options.leftText + ' - ' + options.rightText);
  }
};
