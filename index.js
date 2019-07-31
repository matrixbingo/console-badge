'use strict';

export default (options) => {
  options = {
    mode: 'default',
    leftText: 'Lorem',
    rightText: 'Ipsum',
    leftTextColor: '#ffffff',
    rightTextColor: '#ffffff',
    leftBgColor: '#555555',
    rightBgColor: '#0366d6',
    ...options
  };

  const badge = () => {

    const agent = navigator.userAgent.toLowerCase();

    if (/(chrome|firefox|safari)/.test(agent.toLowerCase())) {
      const leftBoxStyle = [
        `background-color: ${options.leftBgColor}`,
        ...(options.mode === 'shields.io' ? ['padding: 6px 4px 6px 6px'] : ['padding: 16px 10px 16px 10px']),
        ...(options.mode === 'shields.io' ? ['border-radius: 3px 0 0 3px'] : []),
        ...(options.mode === 'shields.io' ? ['font-family: DejaVu Sans,Verdana,Geneva,sans-serif'] : []),
        `color: ${options.leftTextColor}`,
        ...(options.mode === 'shields.io' ? ['text-shadow: 0 2px 0 rgba(1, 1, 1, 0.3);'] : [])
      ].join(';');

      const rightBoxStyle = [
        `background-color: ${options.rightBgColor}`,
        ...(options.mode === 'shields.io' ? ['padding: 6px 6px 6px 4px'] : ['padding: 16px 10px 16px 10px']),
        ...(options.mode === 'shields.io' ? ['border-radius: 0 3px 3px 0'] : []),
        ...(options.mode === 'shields.io' ? ['font-family: DejaVu Sans,Verdana,Geneva,sans-serif'] : []),
        `color: ${options.rightTextColor}`,
        ...(options.mode === 'shields.io' ? ['text-shadow: 0 2px 0 rgba(1, 1, 1, 0.3);'] : [])
      ].join(';');

      const spacerStyle = ['background-color: transparent'].join(';');

      console.log(`\n\n %c ${options.leftText} %c ${options.rightText} %c \n\n\n`, leftBoxStyle, rightBoxStyle, spacerStyle);

    } else {
      window.console && console.log(`${options.leftText} - ${options.rightText}`);
    }
  }

  return badge();
};
