/**
 * Created by DELL- on 2017/1/16.
 */
(function () {

    function init() {
        var swiper=new Swiper(".swiper-container",{
            // width:800,
            // height:600
            // initialSlide:3
            // direction:"vertical"//拖动方向（上下）
            // speed:1000//速度
            autoplay:1000,//设置自动播放的时间
            // loop:true//是否开启循环播放
            // autoplayDisableOnInteraction:true//用户操作swiper后停止
            grabCursor:true,//小手状
            onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
                // swiperAnimateCache(swiper); //隐藏动画元素
                swiperAnimate(swiper); //初始化完成开始动画
            },
            onSlideChangeEnd: function(swiper){
                swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
            }

        });
        setInterval(swiper.slidePrev,3000);//让轮播图倒着走
    }

    init();
})();