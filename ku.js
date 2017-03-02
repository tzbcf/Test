/**
 * Created by Administrator on 2017/2/17.
 */

(function($){

        $.fn.extend({
            //实现居中
            "center": function (width,height) {
                //获取居中需要的距离
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
                //按下事件
                _this.mousedown(function (e) {
                    //拖拽div的定位距离
                    var divLeft = _this.position().left;
                    var divTop = _this.position().top;
                    //获取鼠标到DIV上左距离
                    mousey = e.pageY - divTop;
                    mousex = e.pageX - divLeft;
                    $(window).bind('mousemove', move);
                });
                    //移动事件
                function move(event) {
                    //div的居左居上的距离
                    var lefts = event.pageX - mousex;
                    var tops = event.pageY - mousey;
                    _this.css(
                        {
                            "top": tops + 'px',
                            "left": lefts + 'px'
                        });
                    return false;       //禁止选中，阻止浏览器默认行为
                }
                    //鼠标松开事件
                $(document).mouseup(function () {
                    $(window).unbind('mousemove');
                });
            },
            //轮播图使用标签样式
        //<div id="lubo">
        //    <ul>
        //        <li><img src="img/" alt=""/></li>
        //        <li><img src="img/" alt="" /></li>
        //    </ul>
        //    <ul>
        //
        //    </ul>
        //    <div>&lt;</div>
        //    <div>&gt;</div>
        //</div>
        //轮播图引用 $("#lunbo").lunbo();
        // 图片大小不同，需要改变其中移动大小，把500全部替换成实际大小，时间2000也可更改
            "lunbo":function(){
                var i=0;
                var _this=$(this);
                var clone = _this.find("ul").eq(0).children("li").first().clone();//克隆第一张图片
                _this.find("ul").eq(0).append(clone);//复制到列表最后
                var size = _this.find("ul").eq(0).children("li").size();
                for (var j = 0; j < size-1; j++) {
                    _this.find("ul").eq(1).append("<li></li>");
                }

                _this.find("ul").eq(1).children("li").first().addClass("on");

                /*自动轮播*/

                var t = setInterval(function () { i++; move();},2000);

                /*鼠标悬停事件*/

                _this.hover(function () {
                    clearInterval(t);//鼠标悬停时清除定时器
                }, function () {
                    t = setInterval(function () { i++; move(); }, 2000); //鼠标移出时清除定时器
                });

                /*鼠标滑入原点事件*/

                _this.find("ul").eq(1).children("li").hover(function () {

                    var index = _this.index();//获取当前索引值
                    i = index;
                    _this.find("ul").eq(0).animate({ left: -index * 500 }, 500);
                    _this.find("ul").eq(1).children("li").addClass("on").siblings().removeClass("on");
                });

                /*向左按钮*/
                _this.children("div").eq(0).click(function () {
                    i++;
                    move();
                })

                /*向右按钮*/
                _this.children("div").eq(1).click(function () {
                    i--;
                    move();
                })

                /*移动事件*/
                function move() {
                    if (i == size) {
                        _this.find("ul").eq(0).css({ left: 0 });
                        i = 1;
                    }
                    if (i == -1) {
                        _this.find("ul").eq(0).css({ left: -(size - 1) * 500 });
                        i = size - 2;
                    }
                    _this.find("ul").eq(0).animate({ left: -i * 500 }, 500);

                    if (i == size - 1) {
                        _this.find("ul").eq(1).children("li").eq(0).addClass("on").siblings().removeClass("on");
                    } else {
                        _this.find("ul").eq(1).children("li").eq(i).addClass("on").siblings().removeClass("on");
                    }
                }
            }
        });


})(jQuery);










