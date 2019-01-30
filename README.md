### 适用于 Yilia 主题的折叠插件，可用于折叠代码块等
<br/>

#### 1. clone 插件代码到博客根目录下的 node_modules 目录，并手动添加 NPM 依赖声明

``` bash
$ cd $blog-root/node_modules
$ git clone https://github.com/rqh656418510/hexo-yilia-fold.git

# 删除插件目录下的.git目录
$ rm -rf $blog-root/node_modules/hexo-yilia-fold/.git

# 手动往博客根目录下的package.json文件添加NPM依赖
$ vim $blog-root/package.json
"hexo-yilia-fold": "^0.0.1"
```

#### 2. Yilia 主题添加 JS 代码
$blog-root/themes/hexo-theme-yilia/layout/_partial/after-footer.ejs
``` javascript
<link href="https://cdn.bootcss.com/highlight.js/9.13.1/styles/monokai-sublime.min.css" rel="stylesheet">
<script src="https://cdn.bootcss.com/highlight.js/9.13.1/highlight.min.js"></script>
<script src="https://cdn.bootcss.com/jquery/1.11.1/jquery.min.js"></script>
<script>hljs.initHighlightingOnLoad();</script>
<script>
  $(document).ready(function(){
      $(document).on('click', '.fold_hider', function(){
          $('>.fold', this.parentNode).slideToggle();
          $('>:first', this).toggleClass('open');
      });
      $("div.fold").css("display","none"); //默认折叠
  });
</script>
```
#### 3. Yilia 主题添加 CSS 代码

$blog-root/themes/themes/hexo-theme-yilia/source/main.0cf68a.css, 这里除了可以直接修改编译后的 main.0cf68a.css 文件，同样也可以在/hexo-theme-yilia/source-src/css目录下添加自定义的css文件，唯一区别是后者需要重新使用 webpack 进行打包
``` css
.hider_title{
    font-family: "Microsoft Yahei";
    cursor: pointer;
}
.close:after{
    content: "▼";
}
.open:after{
    content: "▲";
}
```

#### 4. MarkDown 使用语法

```
{% fold 点击显/隐内容 java %}
public static void main(String[] args)
{
    System.out.println("hello world!");
}
{% endfold %}
```

#### 5. 重新构建

``` shell
$ hexo clean
$ hexo generate
$ hexo serve
```
