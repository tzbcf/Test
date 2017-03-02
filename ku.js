/**
 * Created by Administrator on 2017/2/17.
 */

(function($){

        $.fn.extend({
            //ʵ�־���
            "center": function (width,height) {
                //��ȡ������Ҫ�ľ���
                var tops=($(window).height()-height)/2+$(document).scrollTop();
                var lefts=($(window).width()-width)/2+$(document).scrollLeft();
                this.css({
                    top: tops+'px',
                    left:lefts+'px'
                });

            },
            //ʵ������
            "lock":function(){
                var tops=$(window).height()+$(document).scrollTop();
                var lefts=$(window).width()+$(document).scrollLeft();
                this.css({
                    "height": tops+'px',
                    "width":lefts+'px'
                });
                $("body").css("overflow","hidden");
            },
            //ʵ�ֽ���
            "unlock":function(){
                this.css("display","none");
                $("body").css("overflow","auto");
            },
            //ʵ����ק
            "drap":function() {
                var mousey, mousex;
                var _this = $(this);
                //�����¼�
                _this.mousedown(function (e) {
                    //��קdiv�Ķ�λ����
                    var divLeft = _this.position().left;
                    var divTop = _this.position().top;
                    //��ȡ��굽DIV�������
                    mousey = e.pageY - divTop;
                    mousex = e.pageX - divLeft;
                    $(window).bind('mousemove', move);
                });
                    //�ƶ��¼�
                function move(event) {
                    //div�ľ�����ϵľ���
                    var lefts = event.pageX - mousex;
                    var tops = event.pageY - mousey;
                    _this.css(
                        {
                            "top": tops + 'px',
                            "left": lefts + 'px'
                        });
                    return false;       //��ֹѡ�У���ֹ�����Ĭ����Ϊ
                }
                    //����ɿ��¼�
                $(document).mouseup(function () {
                    $(window).unbind('mousemove');
                });
            },
            //�ֲ�ͼʹ�ñ�ǩ��ʽ
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
        //�ֲ�ͼ���� $("#lunbo").lunbo();
        // ͼƬ��С��ͬ����Ҫ�ı������ƶ���С����500ȫ���滻��ʵ�ʴ�С��ʱ��2000Ҳ�ɸ���
            "lunbo":function(){
                var i=0;
                var _this=$(this);
                var clone = _this.find("ul").eq(0).children("li").first().clone();//��¡��һ��ͼƬ
                _this.find("ul").eq(0).append(clone);//���Ƶ��б����
                var size = _this.find("ul").eq(0).children("li").size();
                for (var j = 0; j < size-1; j++) {
                    _this.find("ul").eq(1).append("<li></li>");
                }

                _this.find("ul").eq(1).children("li").first().addClass("on");

                /*�Զ��ֲ�*/

                var t = setInterval(function () { i++; move();},2000);

                /*�����ͣ�¼�*/

                _this.hover(function () {
                    clearInterval(t);//�����ͣʱ�����ʱ��
                }, function () {
                    t = setInterval(function () { i++; move(); }, 2000); //����Ƴ�ʱ�����ʱ��
                });

                /*��껬��ԭ���¼�*/

                _this.find("ul").eq(1).children("li").hover(function () {

                    var index = _this.index();//��ȡ��ǰ����ֵ
                    i = index;
                    _this.find("ul").eq(0).animate({ left: -index * 500 }, 500);
                    _this.find("ul").eq(1).children("li").addClass("on").siblings().removeClass("on");
                });

                /*����ť*/
                _this.children("div").eq(0).click(function () {
                    i++;
                    move();
                })

                /*���Ұ�ť*/
                _this.children("div").eq(1).click(function () {
                    i--;
                    move();
                })

                /*�ƶ��¼�*/
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










