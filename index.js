'use strict';

var rule = require('./lib/rule');

function fold(args, content) {
  var text = args[0];
  if (!text) text = "点击显/隐";
  return '<div><div class="fold_hider"><div class="close hider_title">' + text + '</div></div><div class="fold" style="display:none">\n' + hexo.render.renderSync({
    text: content,
    engine: 'markdown'
  }) + '\n</div></div>';
}

hexo.extend.tag.register('fold', fold, {ends: true});

hexo.extend.filter.register('before_post_render', rule.replaceEscapeContent);
hexo.extend.filter.register('after_post_render', rule.replacePlaceholderContent);
