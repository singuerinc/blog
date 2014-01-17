---
title: <span>Day 017</span> Abbreviate String
author: singuerinc
layout: post
categories:
  - javascript
---
"Abbreviate" nos permite abreviar una cadena de texto usando puntos suspensivos.<br/>
Es una conversi&oacute;n de la funci&oacute;n [_StringUtils.abbreviate_](https://github.com/AS3Commons/as3commons-lang/blob/master/src/main/actionscript/org/as3commons/lang/StringUtils.as#L1145) de **as3commons** pero para Javascript.

{% highlight js %}
function abbreviate(str, offset, maxWidth){

  if(str == null) return str;
  if(maxWidth < 4) throw new Error('Minimum width is 4');
  if(str.length <= maxWidth) return str;
  if(offset > str.length) offset = str.length;
  if((str.length - offset) < (maxWidth - 3)){
    offset = str.length - (maxWidth -3);
  }
  if (offset <= 4) return str.substring(0, maxWidth - 3) + "...";
  if (maxWidth < 7)
    throw new Error("Minimum width with offset is 7");

  if ((offset + (maxWidth - 3)) < str.length){
    var a = abbreviate(str.substring(offset), 0, maxWidth - 3);
    return "..." + a;
  }

  return "..." + str.substring(str.length - (maxWidth - 3));
}

abbreviate("abcdefghijklmno", 0, 10) // "abcdefg..."
abbreviate("abcdefghijklmno", 8, 10) // "...ijklmno"
{% endhighlight %}

<a href="/code/day-017/index.html" target="_blank">Demo</a>