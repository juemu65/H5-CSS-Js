##  导航
>   [段落与换行](#段落与换行)  
>   [标题](#标题)  
>   [引用](#引用)  
>   [列表](#列表)  
>   [分隔线](#分割线)  
>   [超链接](#超链接)  
>   [图片](#图片)  
>   [代码块和语法高亮](#代码块和语法高亮)  
>   [表格](#表格)  
>   [任务列表](#任务列表)  
> 
> 
> 
> 
> 
> 
> 
>   [参考学习](#参考学习)


## 段落与换行

+ 段落的前后必须是空行  
  
+ 如果需要在段落内加入换行 `<br>`

    示例:
    
    ```
    Markdown 是一种轻量级标记语言，创始人为约翰·格鲁伯（John Gruber）。<br>它允许人们“使用易读易写的纯文本格式编写文档，然后转换成有效的 XHTML（或者 HTML）文档”。
    ```
    效果：
    
    Markdown 是一种轻量级标记语言，创始人为约翰·格鲁伯（John Gruber）。<br>它允许人们“使用易读易写的纯文本格式编写文档，然后转换成有效的 XHTML（或者 HTML）文档”。
    

## 标题

+  Setext 形式
   ```
   H1
   ====
   
   H2
   ----    
   ```            
   效果：

   H1
   ====
      
   H2
   ----   
   
+ **atx 形式**

    推荐：只在左侧添加#，共6级标题
    ```
    #h1
    ##h2
    ###h3
    .......  
    ```
    效果：
    
    #h1
    
    ##h2
    
    ###h3
    
    ####h4
    
    #####h5
    
    ######h6
    

##  引用
   ```
    >引用内容<br>
    >引用换行空格  
    >
    >嵌套引用
    >>.......
   ```
   效果：
   
   >引用内容<br>
   >引用换行空格  
   >1
   >
   >嵌套引用
   >>.......
   

##  列表

- 无序列表
```
* 可以使用 `*` 作为标记
+ 也可以使用 `+`
- 或者 `-`
```

效果：
* 可以使用 `*` 作为标记
+ 也可以使用 `+`
- 或者 `-`

- 有序列表
```
1. 有序列表以数字和 `.` 开始
3. 数字的序列并不会影响生成的列表序列
4. 但仍然推荐按照自然顺序（1.2.3...）编写
```

效果：
1. 有序列表以数字和 `.` 开始
3. 数字的序列并不会影响生成的列表序列
4. 但仍然推荐按照自然顺序（1.2.3...）编写

- 列表嵌套
```
2. 无序列表和有序列表可以随意相互嵌套
   1. 2-1
   +  2-2
   *  2-3
   -  2-4
```

效果：

2. 无序列表和有序列表可以随意相互嵌套
   1. 2-1
   +  2-2
   *  2-3
   -  2-4


- 只想显示数字`.`
```
5\.
```

效果：

  5\.


##  分隔线
```
***
---
<hr>
```

效果：

***
---
<hr>

##  超链接

- 行内式

```
① 普通链接：

[Google](http://www.google.com/)

② 指向本地文件的链接：

[T.jpeg](./My/img/T.jpeg)

③ 包含 'title' 的链接:

[Google](http://www.google.com/ 'Google')

[Google](http://www.google.com/ "Google")


```

效果：

[Google](http://www.google.com/)

[T.jpeg](./My/img/T.jpeg)

[Google](http://www.google.com/ 'Google')

[Google](http://www.google.com/ "Google")

- **参考式**

```
[Google][link]

[link]: http://www.google.com/ "Google"
```

效果：

 [Google][1]
 
 [1]: http://www.google.com/ "Google"


- 自动链接

```
<http://www.google.com/>

<Juemu65@gmail.com>
```

效果：

<http://www.google.com/>

<Juemu65@gmail.com>

##  图片

```
行内式
![GitHub](https://github.com/juemu65/H5-CSS-Js/blob/master/My/img/T.jpeg "GitHub,Social Coding")

参考式
![GitHub][github]

[github]: https://github.com/juemu65/H5-CSS-Js/blob/master/My/img/T.jpeg "GitHub,Social Coding"
```

效果：

![GitHub](https://github.com/juemu65/H5-CSS-Js/blob/master/My/img/T.jpeg "GitHub,Social Coding")


```
设定图片大小，需要用<img>标签
<img src="https://github.com/juemu65/H5-CSS-Js/blob/master/My/img/T.jpeg " alt="GitHub" title="GitHub,Social Coding" width="20%" height="50%" />
```

效果：

<img src="https://github.com/juemu65/H5-CSS-Js/blob/master/My/img/T.jpeg " alt="GitHub" title="GitHub,Social Coding" width="20%" height="50%" />

##  代码块和语法高亮
- 代码块
```
Tab或者使用 ``` ``` 来包含多行代码，```需要独占一行
```

效果：

```
h1{
    font-size: 60px;
    text-align: center;
}
```

-语法高亮
```
需要在第一行的```后面增加语言类型，如```css
```

效果：

```css
h1{
    font-size: 60px;
    text-align: center;
}
```
##  表格
```
使用 | 来分隔不同的单元格，使用 - 来分隔表头和其他行
:--- 代表左对齐
:--: 代表居中对齐
---: 代表右对齐

| left | center | right |
| :--- | :----: | ----: |
| aaaa | bbbbbb | ccccc |
| a    | b      | c     |
```

效果：

| left | center | right |
| :--- | :----: | ----: |
| aaaa | bbbbbb | ccccc |
| a    | b      | c     |


##  任务列表
```

```

效果：
- [X] Markdown
  - [X] 介绍
- [ ] 语法
  - [X] 段落与换行
  - [X] 标题
  - [ ] 引用
  
  
##  参考学习

 1.[Learning-Markdown](http://xianbai.me/learn-md/)
 2.[Markdown教程](https://commonmark.org/help/tutorial/index.html)
 3.[youngnz-Markdown](https://github.com/younghz/Markdown)






 









































