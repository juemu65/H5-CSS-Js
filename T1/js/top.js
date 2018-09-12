window.onload =function(){
    var obtn = document.getElementById("backDom");
    var clientHeight = document.documentElement.clientHeight
    window.onresize = function(){
        clientHeight = document.documentElement.clientHeight
    };
    var timer = null;
    var isTop = true;

    window.onscroll = function(){
        var len = document.body.scrollTop || document.documentElement.scrollTop;
        var backDom = document.getElementById("backDom");
        if(len >= clientHeight){
            backDom.className="is-visible";
        }else{
            backDom.className="";
        };
        if(!isTop){
            clearInterval(timer)
        }
        isTop = false;
    };

    obtn.onclick = function(){
        timer = setInterval(function(){
            var osTop = document.documentElement.scrollTop || document.body.scrollTop;
            var ispeed = Math.floor(-osTop/4);
            document.documentElement.scrollTop = document.body.scrollTop = osTop + ispeed;

            isTop = true;
            if(osTop == 0){
                clearInterval(timer)
            }
        },30)
    }
}