---
title: "Validar DNI/NIE/NIF de España"
author: Nahuel Scotti
layout: post
categories:
  - javascript
  - actionscript3
  - validators
  - dni
  - nie
  - nif
---


Hola, otra Class de validaci&oacute;n, en este caso para validar un DNI espa&ntilde;ol.<br/>
Realic&eacute; una classe porque quer&iacute;a tener un set de funciones, y poder diferenciar si se trata de un nif o un nie.

La clase acepta "nies" que empiecen con letra o n&uacute;mero y puede ser en may&uacute;sculas o min&uacute;sculas, por ejemplo, es lo mismo Y9145668P que 19145668p.

Aqu&iacute; el c&oacute;digo:

{% highlight as3 %}
package net.singuerinc.labs.utils.validators {  
public class SpainDNIValidator {  

    private var _dni:String;  

    private var _isNie:Boolean;  
    private var _isNif:Boolean;  
    private var _valid:Boolean;  

    private const validChars:String = 'TRWAGMYFPDXBNJZSQVHLCKET';  
    private const nifRexp:RegExp = /^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKET]{1}$/i;  
    private const nieRexp:RegExp = /^[XYZ]{1}[0-9]{7}[TRWAGMYFPDXBNJZSQVHLCKET]{1}$/i;  

    public function SpainDNIValidator(dni:String) {  
        _dni = dni;  
        _valid = _validate();
    }  

    public function isValid():Boolean {  
        return _valid;  
    }  

    public function isNIF():Boolean {  
        return _isNif;  
    }  

    public function isNIE():Boolean {  
        return _isNie;  
    }  

    private function _validate():Boolean {  

        var val:String = _dni.toString().toUpperCase();  

        if (!nifRexp.test(val) && !nieRexp.test(val)) {  
            return false;  
        }  

        var nie:String = val;  
        nie = nie.replace(/^[X]/, '0');  
        nie = nie.replace(/^[Y]/, '1');  
        nie = nie.replace(/^[Z]/, '2');  

        var dniLetter:String = val.substr(-1);  
        var charIndex:int = int(nie.substr(, 8)) % 23;  

        if (validChars.charAt(charIndex) == dniLetter) {  

            _isNif = nifRexp.test(val);  
            _isNie = nieRexp.test(val);  

            return true;  
        }  

        return false;  
    }  
}  
}
{% endhighlight %}

Y algunos ejemplos:

{% highlight as3 %}
var val1:SpainDNIValidator = new SpainDNIValidator('x9464186p');
val1.isValid(); //true
val1.isNIF(); //false
val1.isNIE(); //true

var val2:SpainDNIValidator = new SpainDNIValidator('12345678Z');
val2.isValid(); //true
val2.isNIF(); //true
val2.isNIE(); //false
{% endhighlight %}

[2]: https://github.com/singuerinc/singuerinc-blog/blob/master/src/net/singuerinc/labs/utils/validators/SpainDNIValidator.as
Puedes encontrar la &uacute;ltima versi&oacute;n en [github][2].
