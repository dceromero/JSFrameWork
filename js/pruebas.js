var eventos = new Eventos();

eventos.Load(function(){

    eventos.AddAttr('[type="text"]', "data-prueba", "prueba");    
    eventos.AddText("div","<strong>EditarTexto</strong>");
    eventos.AddControl("div", "label", "Hola mundo");
    eventos.AttrValue('[type="text"]',"data-prueba", "nuevo valor");
    console.log(eventos.AttrValue('[type="text"]',"data-prueba"));
    eventos.Value('#txt',"Hola Mundo");
    console.log(eventos.Value("#txt"));

})