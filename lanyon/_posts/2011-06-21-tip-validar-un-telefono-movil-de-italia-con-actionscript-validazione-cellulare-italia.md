---
title: Validar un tel&eacute;fono m&oacute;vil de Italia
author: Nahuel Scotti
layout: post
categories:
    - actionscript3
    - validators
    - italy
    - regex
    - phone
tags:
    - as3
    - cellulare
    - italia
    - telefono
    - tim
    - validazione
    - vodafone
    - wind
---

La mayoria de los sites que hago se traducen a alg&uacute;n otro idioma, en este caso lo hemos traducido a italiano. Pero la traducci&oacute;n no s&oacute;lo se queda en los textos, cuando se tienen formularios y hay que validar formularios la cosa se complica un poco m&aacute;s.  

Validar un tel&eacute;fono de Italia es bastante m&aacute;s complicado que uno de Espa&ntilde;a, ya que cada compa&ntilde;ia tiene asignado un rango de n&uacute;meros y no son correlativos.

Para complicarme a&uacute;n m&aacute;s la existencia, me pareci&oacute; que ser&iacute;a &uacute;til que tuviera la capacidad de decirnos a qu&eacute; compa&ntilde;ia corresponde.

Aqu&iacute; la Class:

{% highlight js %}
package net.singuerinc.labs.utils.validators {
public class ItalyPhoneValidator implements IPhoneValidator {

    private var operators:Array = ['TIM', 'Vodafone', 'Wind', 'Tre', 'TrenItalia'];

    private var _phoneNumber:String;
    private var _isValid:Boolean;
    private var _operatorIndex:int;
    private var _isFixed:Boolean;
    private var _isMobile:Boolean;

    private const TIM_REx:RegExp = /^((0039){0,1})3{1}(((?>3)[013456789]{1})|((?>6)[0368]{1}))[0-9]{7}$/;
    private const VODAFONE_REx:RegExp = /^((0039){0,1})3{1}(((?>4)[02356789]{1}))[0-9]{7}$/;
    private const WIND_REx:RegExp = /^((0039){0,1})3{1}(((?>2)[03789]{1})|((?>8)[0389]{1}))[0-9]{7}$/;
    private const TRE_REx:RegExp = /^((0039){0,1})3{1}9{1}[0-3]{1}[0-9]{7}$/;
    private const TRENITALIA_REx:RegExp = /^((0039){0,1})313[0-9]{7}$/;

    private var __rx:Array = [TIM_REx, VODAFONE_REx, WIND_REx, TRE_REx, TRENITALIA_REx];

    public function ItalyPhoneValidator(phoneNumber:String) {
        _phoneNumber = phoneNumber;
        _phoneNumber = _phoneNumber.replace(/^\+/, '00');
        _phoneNumber = _phoneNumber.replace(/[^0-9]/g, '');
        _isValid = validate(_phoneNumber);
    }

    public function isValid():Boolean {
        return _isValid;
    }

    public function get phoneNumber():String {
        return _phoneNumber;
    }

    public function get operatorName():String {
        return operators[_operatorIndex];
    }

    private function validate(value:String):Boolean {

        var str:String = value.toString();
        if (str.length < 10) {
            _operatorIndex = -1;
            return false;
        }

        var l:uint = __rx.length;
        for (var i:uint = 0; i < l; i++) {
            var success:Boolean = __rx[i].test(str);
            if (success) {
                _isMobile = true;
                _operatorIndex = i;
                return true;
            }
        }

        _isMobile = false;
        _operatorIndex = -1;
        return false;
    }

    public function isFixed():Boolean {
        return _isFixed;
    }

    public function isMobile():Boolean {
        return _isMobile;
    }
}
}
{% endhighlight %}

C&oacute;mo usarlo:

{% highlight js %}
var val1:ItalyPhoneValidator = new ItalyPhoneValidator(' 393401234567');  
val1.isValid(); //true  
val1.operatorName; //Vodafone  
val1.isMobile(); //true  
    
var val2:ItalyPhoneValidator = new ItalyPhoneValidator('0039 368 1234567');  
val2.isValid(); //true  
val2.operatorName; //TIM  
val2.isMobile(); //true  
    
var val3:ItalyPhoneValidator = new ItalyPhoneValidator('380 4567321');  
val3.isValid(); //true  
val3.operatorName; //Wind  
val3.isMobile(); //true  
    
var val4:ItalyPhoneValidator = new ItalyPhoneValidator('3933216547');  
val4.isValid(); //true  
val4.operatorName; //Tre  
val4.isMobile(); //true
{% endhighlight %}

Como veis, se puede utilizar tanto el prefijo ** 39** como **0039** o sin prefijo, y con y sin espacios.  
Si quer&eacute;is hacer una prueba, os dejo un peque&ntilde;o form para chequearlo:

[2]: https://github.com/singuerinc/singuerinc-blog/blob/master/src/net/singuerinc/labs/utils/validators/ItalyPhoneValidator.as
Puedes encontrar la &uacute;ltima versi&oacute;n en [github][2].