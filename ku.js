/**
 * Created by Administrator on 2017/2/17.
 */

(function($){

        $.fn.extend({
            //实现居中
            "center": function (width,height) {

                var tops=($(window).height()-height)/2+$(document).scrollTop();
                var lefts=($(window).width()-width)/2+$(document).scrollLeft();
                this.css({
                    top: tops+'px',
                    left:lefts+'px'
                });

            },
            //实现锁屏
            "lock":function(){
                var tops=$(window).height()+$(document).scrollTop();
                var lefts=$(window).width()+$(document).scrollLeft();
                this.css({
                    "height": tops+'px',
                    "width":lefts+'px'
                });
                $("body").css("overflow","hidden");
            },
            //实现解锁
            "unlock":function(){
                this.css("display","none");
                $("body").css("overflow","auto");
            },
            //实现拖拽
            "drap":function() {
                var mousey, mousex;
                var _this = $(this);
                _this.mousedown(function (e) {
                    var divLeft = _this.position().left;
                    var divTop = _this.position().top;
                    mousey = e.pageY - divTop;
                    mousex = e.pageX - divLeft;
                    $(window).bind('mousemove', move);
                });

                function move(event) {
                    var lefts = event.pageX - mousex;
                    var tops = event.pageY - mousey;
                    _this.css(
                        {
                            "top": tops + 'px',
                            "left": lefts + 'px'
                        });
                    return false;       //禁止选中
                }

                $(document).mouseup(function () {
                    $(window).unbind('mousemove');
                });
            },
            "lunbo":function(options) {
                var defaults = {
                    float: 'left',
                    minStatue: false,
                    skin: 'blue',
                    durationTime: 1000
                }
                var options = $.extend(defaults, options);

                this.each(function () {
                    //获取对象
                    var thisBox = $(this),
                        closeBtn = thisBox.find('.close_btn'),
                        show_btn = thisBox.find('.show_btn'),
                        sideContent = thisBox.find('.side_content'),
                        sideList = thisBox.find('.side_list')
                        ;
                    var defaultTop = thisBox.offset().top;	//对象的默认top

                    thisBox.css(options.float, 0);
                    if (options.minStatue) {
                        $(".show_btn").css("float", options.float);
                        sideContent.css('width', 0);
                        show_btn.css('width', 25);

                    }
                    //皮肤控制
                    if (options.skin) thisBox.addClass('side_' + options.skin);


                    //核心scroll事件
                    $(window).bind("scroll", function () {
                        var offsetTop = defaultTop + $(window).scrollTop() + "px";
                        thisBox.animate({
                                top: offsetTop
                            },
                            {
                                duration: options.durationTime,
                                queue: false    //此动画将不进入动画队列
                            });
                    });
                    //close事件
                    closeBtn.bind("click", function () {
                        sideContent.animate({width: '0px'}, "fast");
                        show_btn.stop(true, true).delay(300).animate({width: '25px'}, "fast");
                    });
                    //show事件
                    show_btn.click(function () {
                        $(this).animate({width: '0px'}, "fast");
                        sideContent.stop(true, true).delay(200).animate({width: '154px'}, "fast");
                    });

                });

            }
        });


})(jQuery);










