---
title: Validate Spain telephone number
author: Nahuel Scotti
layout: post
categories:
  - actionscript3
  - validators
  - spain
---
# 

Aqu&iacute; os dejo otra Regular Expresion classe para validar tel&eacute;fonos m&oacute;viles en Espa&ntilde;a, hasta hace poco, s&oacute;lo existian n&uacute;meros m&oacute;viles que empezaban por "6", ahora se ha agregado el "7", la classe valida tanto m&oacute;viles como fijos y pueden contener espacios:
{% highlight as3 %}
package net.singuerinc.labs.utils.validators {
/**
 * @author nahuel.scotti
 */
public class SpainPhoneValidator {

    private var _isMobile:Boolean;
    private var _isFixed:Boolean;
    private var _isValid:Boolean;

    public function SpainPhoneValidator(tel:String) {
        _isValid = _validate(tel);
    }

    private function _validate(value:Object):Boolean {

        var str:String = value.toString();
        str = str.replace(/s/g, '');
        if (str.length != 9) return false;

        var regExp:[RegExp][4] = /^[679]{1}[0-9]{8}$/;
        var result:Boolean = regExp.test(str);

        if(result){
            _isFixed = /^[9]/.test(str);
            _isMobile = /^[67]/.test(str);
        }

        return result;
    }

    public function isValid():Boolean{
        return _isValid;
    }

    public function isFixed():Boolean{
        return _isFixed;
    }

    public function isMobile():Boolean{
        return _isMobile;
    }
}
}
{% endhighlight %}
Algunos ejemplos:

{% highlight as3 %}
	var val1:SpainPhoneValidator = new SpainPhoneValidator('639 125 230');  
	val1.isValid(); //true  
	val1.isFixed(); //false  
	val1.isMobile(); //true  
	  
	var val2:SpainPhoneValidator = new SpainPhoneValidator('668515187');  
	val2.isValid(); //true  
	val2.isFixed(); //false  
	val2.isMobile(); //true  
	  
	var val3:SpainPhoneValidator = new SpainPhoneValidator('133 560 158');  
	val3.isValid(); //false  
	val3.isFixed(); //false  
	val3.isMobile(); //false  
	  
	var val4:SpainPhoneValidator = new SpainPhoneValidator('932 510 258');  
	val4.isValid(); //true  
	val4.isFixed(); //true  
	val4.isMobile(); //false
{% endhighlight %}

[2]: https://github.com/singuerinc/singuerinc-blog/blob/master/src/net/singuerinc/labs/utils/validators/SpainPhoneValidator.as
Puedes descargarte el c&oacute;digo desde [github][2].
