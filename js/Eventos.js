function Eventos(){

}

Eventos.prototype.Control=function(){
    let _controles = document.querySelectorAll(selector);
    return _controles;
}

Eventos.prototype.AddText = function (selector, textHTml){    
    let _controles = document.querySelectorAll(selector);
    for(_control in _controles){
        _controles[_control].innerHTML = textHTml;
    }
}

Eventos.prototype.AddControl = function(selector, etiqueta, valor){    
    let _controles = document.querySelectorAll(selector);
    for(_control in _controles){
        if(typeof(_controles[_control])==="object"){
            let _node = document.createElement(etiqueta);                 
            let _textnode = document.createTextNode(valor);         
            _node.appendChild(_textnode);  
            _controles[_control].appendChild(_node);    
        }  
    }
                                  
}

Eventos.prototype.AddAttr= function(selector, attr, valor){
    let _controles = document.querySelectorAll(selector);
        for(_control in _controles){   
                if(typeof(_controles[_control])==="object"){
                    let _atributo = document.createAttribute(attr);
                    _atributo.value = valor;
                    _controles[_control].setAttributeNode(_atributo);
                }
                
        }
}

Eventos.prototype.AttrValue = function(selector, attr ,_valor = null){
    let _controles = document.querySelectorAll(selector);
    if(_valor === null){
        for(_control in _controles){   
            if(_controles[_control].value !== undefined){
               return _controles[_control].getAttribute(attr);
            }     
        }
    }else{
        for(_control in _controles){   
            if(_controles[_control].value !== undefined){
                _controles[_control].setAttribute(attr, _valor);
            }     
        }
    }   
}

Eventos.prototype.Event= function(selector,event, funcion){
    let _control = document.querySelector(selector);  
    _control.addEventListener(event, funcion)  
}

Eventos.prototype.Load= function(funcion){
    window.onload= funcion;
}

Eventos.prototype.HttpRequest = function(method,url, tipoDato, parametros, funcion){
    var request = new XMLHttpRequest();
    request.open(method, url);
    request.responseType = tipoDato;
    request.send(parametros);
    request.onload = funcion
}

Eventos.prototype.Value = function(selector, _valor = null){
    let _controles = document.querySelectorAll(selector);
    if(_valor === null){
        for(_control in _controles){   
            if(_controles[_control].value !== undefined){
               return _controles[_control].value;
            }     
        }
    }else{
        for(_control in _controles){   
            if(_controles[_control].value !== undefined){
                _controles[_control].value=_valor;
            }     
        }
    }   
}



