'use strict';

let rule = require('./lib/rule');

function fold(args, content) {
  var text = args[0];
  var language = args[1];

  if (!text) text = "点击显/隐";
  if(!language) language = "plaintext";
  return '<div><div class="fold_hider"><div class="close hider_title">' + text + '</div></div><div class="fold" style="display:none"><pre><code class="' + language + '">' + content + '</code></pre></div></div>';
}

hexo.extend.tag.register('fold', fold, {ends: true});
hexo.extend.filter.register('after_post_render', rule.replacePlaceholderContent);
