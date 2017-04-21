/**
 * Created by DELL- on 2016/12/26.
 */
(function () {

    function Banner(url,bannerContainer,data) {

        this.Carousel(url,bannerContainer,data);
        HttpRequest.call(this);
    }


    Banner.prototype=new HttpRequest();

    Banner.prototype.Carousel=function (url,bannerContainer,data) {
        this.GetJsonp(url,data,function (result) {
            // console.log(result);
            this.images=result[0].goodsBenUrl.slice(2,result[0].goodsBenUrl.length-2).split("\",\"");

            // console.log(this.images);/*获取到的图片路径*/
            var self=this;
            function banner() {
                /**
                 * 容纳轮播图片Div的容器
                 * @type {Element}
                 */
                var carouselContent = document.querySelector("#carousel .carousel-content");
                /**
                 * 图片在数组中的位置
                 * @type {number}
                 */
                var imageIndex = 0;
                /**
                 * 用于切换图片的计时器
                 * @type {number}
                 */
                var switchImageTimerId = -1;
                /**
                 * 该变量用于指示当前是否正在切换图片
                 * @type {boolean}
                 */
                var switchImageAnimationPlaying = false;
                /**
                 * 把一个对象从某位置移动到目标位置
                 * @param target 被移动的对象
                 * @param fromX 开始left位置
                 * @param toX 结束点的left位置
                 * @param fromY 开始点的top位置
                 * @param toY 结束点的top位置
                 * @param duration 动画效果共花费的时间,单位是毫秒
                 * @param completeHandler 动画完成后的回调函数
                 */
                function moveTo(target, fromX, toX, fromY, toY, duration, completeHandler) {
                    var fps = 50;//frames per second
                    var frameDuration = Math.round(1000 / fps);
                    var frames = Math.round(duration / 1000 * fps);
                    var frameIndex = 0;
                    var x = fromX, y = fromY;
                    var speedX = (toX - fromX) / frames;
                    var speedY = (toY - fromY) / frames;

                    var id = setInterval(function () {

                        x += speedX;
                        y += speedY;

                        frameIndex++;
                        if (frameIndex >= frames) {
                            clearInterval(id);
                            x = toX;
                            y = toY;

                            if (completeHandler) {
                                completeHandler(target);
                            }
                        }

                        target.style.left = x + "px";
                        target.style.top = y + "px";
                    }, frameDuration);
                }
                /**
                 * 根据一个图片的url创建一个包括img的div
                 * @param imgSrc {String} 图片的url
                 * @param linkUrl {String} 轮播图链接地址
                 * @returns {HTMLDivElement} 被创建的div
                 */
                function createImageContainer(imgSrc, linkUrl) {
                    var div = document.createElement("div");
                    div.className = "image-container";

                    var a = document.createElement("a");
                    a.href = linkUrl || "#";
                    div.appendChild(a);

                    var img = document.createElement("img");
                    img.src = imgSrc;
                    a.appendChild(img);
                    return div;
                }
                /**
                 * 轮播图div数组
                 * @type {*[]}
                 */
                var carouselImagesArray = [
                    createImageContainer(self.images[0], "http://ucai.cn"),
                    createImageContainer(self.images[1], "http://baidu.com"),
                    createImageContainer(self.images[2]),
                    createImageContainer(self.images[3])
                ];
                var currentVisibleImage;
                /**
                 * 呈现下一张图片
                 */
                function showNextCarouselImage() {
                    if (!switchImageAnimationPlaying) {
                        switchImageAnimationPlaying = true;
                        imageIndex++;
                        if (imageIndex >= carouselImagesArray.length) {
                            imageIndex = 0;
                        }

                        if (currentVisibleImage) {
                            moveTo(currentVisibleImage, 0, 0, 0, -800, 500, function (target) {
                                carouselContent.removeChild(target);
                            });
                        }

                        currentVisibleImage = carouselImagesArray[imageIndex];
                        carouselContent.appendChild(currentVisibleImage);
                        currentVisibleImage.style.right = "800px";
                        moveTo(currentVisibleImage, 0, 0, 800, 0, 500, function () {
                            switchImageAnimationPlaying = false;
                        });
                    }
                }
                /**
                 * 呈现上一张图片
                 */
                function showPreCarouselImage() {
                    if (!switchImageAnimationPlaying) {
                        switchImageAnimationPlaying = true;
                        imageIndex--;

                        if (imageIndex < 0) {
                            imageIndex = carouselImagesArray.length - 1;
                        }

                        if (currentVisibleImage) {
                            moveTo(currentVisibleImage, 0, 0, 800, 0, 500, function (target) {
                                carouselContent.removeChild(target);
                            });
                        }

                        currentVisibleImage = carouselImagesArray[imageIndex];
                        carouselContent.appendChild(currentVisibleImage);
                        currentVisibleImage.style.top = "-800px";
                        moveTo(currentVisibleImage, 0, 0, -800, 0, 500, function () {
                            switchImageAnimationPlaying = false;
                        });
                    }
                }
                function addInitCarouselImage() {
                    imageIndex = 0;
                    currentVisibleImage = carouselImagesArray[imageIndex];
                    carouselContent.appendChild(currentVisibleImage);
                }
                /**
                 * 为左右按钮添加事件侦听器
                 */
                function addListeners() {
                    document.querySelector("#carousel .btn-pre").onclick = function () {
                        showPreCarouselImage();
                        restartSwitchImageTimer();
                    };

                    document.querySelector("#carousel .btn-next").onclick = function () {
                        showNextCarouselImage();
                        restartSwitchImageTimer();
                    };
                }
                /**
                 * 重新开始用于切换图片的计时器
                 */
                function restartSwitchImageTimer() {
                    if (switchImageTimerId != -1) {
                        clearInterval(switchImageTimerId);
                    }

                    switchImageTimerId = setInterval(function () {
                        showNextCarouselImage();
                        // showPreCarouselImage();
                    }, 5000);
                }
                function init() {

                    addListeners();

                    addInitCarouselImage();
                    restartSwitchImageTimer();
                }
                init();
            }
            banner();
        });

    };

    window.Banner=Banner;

})();