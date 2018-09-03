var mystr="我是";


function rec(){
    var mychar="I love JavaScript";
    alert(mychar);
}

function rec2(){
    var mymessage=confirm("你是女士?");
    if(mymessage==true)
    {
        document.write("你是女士!");
    }
    else
    {
        document.write("你是男士!");
    }
}


function rec3(){
    var score; //score变量，用来存储用户输入的成绩值。
    score = document.getElementById("result").value          ;

    if(score>=90)
    {
        document.write("你很棒!");
    }
    else if(score>=75)
    {
        document.write("不错吆!");
    }
    else if(score>=60)
    {
        document.write("要加油!");
    }
    else
    {
        document.write("要努力了!");
    }
}

function openWindow()
{var open=confirm("确认新建窗口打开网站吗？");
    if(open==true)
    // 新窗口打开时弹出确认框，是否打开
    {var url=prompt("通过输入对话框，确定打开的网址","http://www.imooc.com");
        if(url!=null)
        // 通过输入对话框，确定打开的网址，默认为 http：//www.imooc.com/
        {window.open(url,"_blank",'width=400px,height=500px,menubar=no,toolbar=no');
        }
        //打开的窗口要求，宽400像素，高500像素，无菜单栏、无工具栏。
        else
        {alert("再见！");}
    }
    else
    {alert("再见！");}
}

function hidetext(){
    var mychar = document.getElementById("con");
    mychar.style.display="none";
}

function showtext() {
    var mychar = document.getElementById("con");
    mychar.style.display="block";
}














