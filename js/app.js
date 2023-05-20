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
/**
 * Tab 点击事件
 */
$('.sj').click(function () {
	$('.cl').each(function () {
		const _this = $(this);
		_this.click(function () {
			_this.find('.tab').toggle();
		});
	});
});
