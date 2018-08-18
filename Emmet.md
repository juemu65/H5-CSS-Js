##  导航
>   [缩写语法](#缩写语法)  
>   [参考学习](#参考学习)  

##  缩写语法

Tab一下就好了

`>`
```html
div>ul>li

<div>
    <ul>
        <li></li>
    </ul>
</div>
```

`+`
```html
div+p+bq

<div></div>
<p></p>
<blockquote></blockquote>
```

`^`
```html
div+div>p>span+em^bq

<div></div>
<div>
    <p><span></span><em></em></p>
    <blockquote></blockquote>
</div>
```

`*`
```html
ul>li*3

<ul>
    <li></li>
    <li></li>
    <li></li>
</ul>
```


`()`
```html
(div>dl>(dt+dd)*3)+footer>p

<div>
    <dl>
        <dt></dt>
        <dd></dd>
        <dt></dt>
        <dd></dd>
        <dt></dt>
        <dd></dd>
    </dl>
</div>
<footer>
    <p></p>
</footer>
```


`Id和Class`
```html
div#header+div.page+div#footer.class1.class2.class3

<div id="header"></div>
<div class="page"></div>
<div id="footer" class="class1 class2 class3"></div>
```


`自定义属性`
```html
td[title="Hello world!" colspan=3]

td[title=hello colspan=3]

<td title="Hello world!" colspan="3"></td>
```

`$`
```html
ul>li.item$$$*5
$数量和数字格式相关

<ul>
    <li class="item001"></li>
    <li class="item002"></li>
    <li class="item003"></li>
    <li class="item004"></li>
    <li class="item005"></li>
</ul>

ul>li.item$@-3*5
可以指定数字的起始，@-的作用是降序

<ul>
    <li class="item7"></li>
    <li class="item6"></li>
    <li class="item5"></li>
    <li class="item4"></li>
    <li class="item3"></li>
</ul>
```

`{}`
```html
a{Click me}  

<a href="">Click me</a>

```
源码：
<https://github.com/emmetio/emmet/blob/master/lib/snippets.json>

##  参考学习

 1.[Emmet：HTML/CSS代码快速编写神器](http://www.iteye.com/news/27580)
 
 2.[Emmet Documentation](https://docs.emmet.io/)
 

`自定义属性`
```html

```