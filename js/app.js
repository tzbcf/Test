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
 */


$(document).ready(function(){
  $(".sj").click(function(){
      $(".cl").toggle();
  });

  $(".cl").each(function(){
      var _this=$(this);
      _this.click(function () {
          _this.find(".tab").toggle();
      })
  })
})