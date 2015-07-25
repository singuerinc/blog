---
title: as3-signals + binding
author: Nahuel Scotti
layout: post
categories:
  - actionscript3
  - as3-signals
  - binding
---

Estoy trabajando en un proyecto donde necesito actualizar la vista constantemente con informaci&oacute;n del modelo. En Flex esto es relativamente f&aacute;cil mediante la etiqueta [Bindable], pero en un proyeto puramente as3 no lo es tanto.

Aqu&iacute; es donde as3-signals nos puede dar una mano, si sois como yo, que ando buscando siempre c&oacute;digo nuevo que me facilite la vida habr&eacute;is notado que existe un branch en [as3-signals][2] de Robert Penner llamado "binding".

<!--break-->

Es un set de classes que nos permiten vincular una propiedad de un objeto a otra propiedad de otro objecto. Me explico: por ejemplo, cada vez que actualizo la propiedad "name" del objeto **User** quiero que se actualice la propiedad "text" de un "TextField".

Para hacer esto necesitamos que nuestro objeto **User** implemente la interface **IBindable** que se encuentra dentro del paquete de as3-signals, entonces tendremos una nueva propiedad dentro de **User** llamada *changeSignal* que ser&aacute; la encargada de notificar sobre los cambios en el objeto. Veamos un poco el c&oacute;digo, la classe **User** nos quedar&iacute;a as&iacute;:

 [2]: https://github.com/robertpenner/as3-signals/tree/binding

{% highlight as3 %}
package net.singuerinc.labs.signals.binding {  
	import org.osflash.signals.binding.ChangeSignal;
	import org.osflash.signals.binding.IBindable;  
	import org.osflash.signals.binding.IChangeSignal;  

	public class User implements IBindable {  

		private var _name:String;  
		private var _changeSignal:ChangeSignal;  

		public function User() {  
		}  

		public function set name(value:String):void {  
			_name = value;  
			changeSignal.dispatch('name', _name);  
		}  

		public function get name():String {  
			return _name;  
		}  

		public function get changeSignal():IChangeSignal {  
			return _changeSignal ||= new ChangeSignal(this);  
		}  
	}  
}
{% endhighlight %}

Ahora, para vincular el **TextField** con **User** necesitamos de **Binder**, esta vincular&aacute; los dos objetos:

{% highlight as3 %}
package net.singuerinc.labs.signals.binding {  
  	import com.bit101.components.PushButton;
	import org.osflash.signals.binding.Binder;  
	import flash.display.Sprite;  
	import flash.events.MouseEvent;  
	import flash.text.TextField;  
	import flash.text.TextFieldAutoSize;  

	public class SignalsBindingExample extends [Sprite][4] {  

		public var user:User;  

		public function SignalsBindingExample() {  

			new PushButton(this, , 20, 'change user name', onClick);  

			var txt1:TextField = new TextField();  
			txt1.autoSize = TextFieldAutoSize.LEFT;  
			addChild(txt1);  

			user = new User();  
			user.name = 'User1';  

			var binder:Binder = new Binder();  
			binder.bind(txt1, 'text', user, 'name');  
		}  

		private function onClick(event:MouseEvent):void {  
			user.name = 'User' + Math.random();  
		}  
	}  
}
{% endhighlight %}

Listo, ahora cada vez que hagamos actualicemos **user.name** autom&aacute;ticamente **Binder** har&aacute; que ese valor se refleje en el **TextField**!  
[Source][2]
