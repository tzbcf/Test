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
 * Init Project
 */
function init(url) {

  /* ---------- Tooltip ---------- */
  $('[rel="tooltip"],[data-rel="tooltip"]').tooltip({"placement":"bottom",delay: { show: 400, hide: 200 }});

  /* ---------- Popover ---------- */
  $('[rel="popover"],[data-rel="popover"],[data-toggle="popover"]').popover();

}

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

function appendOnce(element, script) {
  var scripts = Array.from(document.querySelectorAll('script')).map(function(scr){return scr.src;});

  if (!scripts.includes(script.src)) {
      element.appendChild(script)
  }
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
