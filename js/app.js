/**
 * FileName : app.js
 * ProjectName : js
 * Author : terrorblade
 * Created Date: 2023-05-20 15:01:40
 * Description :
 * -----
 * Last Modified:
 * Modified By :
 * -----
 * Copyright (c) 2022 Magina Corporation. All rights reserved.
 *
 * @format
 */
/*****
 * ASYNC LOAD
 * Load JS files and CSS files asynchronously in ajax mode
 */
function loadJS(jsFiles) {

  const body = document.getElementsByTagName('body')[0];

  for(var i = 0; i<jsFiles.length; i++){
      appendScript(body, jsFiles[i])
  }

  init();
}

function appendScript(element, src) {
  const async = (src.substring(0, 4) === 'http');
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.async = async;
  script.defer = async;
  script.src = src;
  async ? appendOnce(element, script) : element.appendChild(script);
}
