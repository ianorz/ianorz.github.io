var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        $('[rel="icon"]').attr('href', "/img/trhx2.png");
        document.title = '页面已崩溃';
        clearTimeout(titleTime);
    }
    else {
        $('[rel="icon"]').attr('href', "/img/trhx2.png");
        document.title = '嘿嘿~骗你的';
        titleTime = setTimeout(function () {
            document.title = OriginTitle;
        }, 2000);
    }
});