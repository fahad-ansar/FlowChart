
function clearAll(){

stage.destroyChildren();


}

//--------------------------Adding rectangle-----------------

function addrecta(){

    var text = document.getElementById('Txt').value;
    var layer = new Konva.Layer();
    var rectX = stage.width() / 2 - 50;
    var rectY = stage.height() / 2 - 50;


    var group = new Konva.Group({
      draggable: true
    });

    
      var box = new Konva.Rect({
          x: rectX,
          y: rectY,
          width: 120,
          height: 60,
          fill: '#00D2FF',
          stroke: 'black',
          strokeWidth: 1
      });

      var textp = new Konva.Text({
          x: rectX,
          y: rectY,
          text: text,
          fontSize: 20,
          fontFamily: 'Calibri',
          fill: 'black',
          padding: 18,
          align: 'center'       
      });

     
 
    group.add(box);
    group.add(textp);

      
    layer.add(group);

    stage.add(layer);

    layer.on('mouseover', function() {
      document.body.style.cursor = 'pointer';
    });

    layer.on('dblclick dbltap', function(){
      layer.destroy();
    });

    layer.on('mouseout', function() {
      document.body.style.cursor = 'default   ';
    });
   }


//-------------------------------Pointerstraight--------------------------------


function addPointV(){
var size = document.getElementById('siz').value;

var layer = new Konva.Layer();

if(size>10){size=10;}

var line = new Konva.Line({
    points: [100, 80, 100, 120+(size*20)],
    stroke: '#A9A9A9',
    strokeWidth: 3,
    lineCap: 'round',
    lineJoin: 'round',
    draggable: true
  });

    
layer.add(line);

stage.add(layer);

layer.on('mouseover', function() {
    document.body.style.cursor = 'pointer';
});
layer.on('mouseout', function() {
    document.body.style.cursor = 'default   ';
});

layer.on('dblclick  dbltap', function(){
  layer.destroy();
});
}


//-----------------------------------Start/End-----------------------------


function addStart(text, clr){


var layer = new Konva.Layer();

var group = new Konva.Group({
    draggable: true
  });

var oval = new Konva.Ellipse({
    x: stage.width() / 2,
    y: 100,
    radiusX: 50,
    radiusY: 25,
    fill: clr,
    stroke: 'black',
    strokeWidth: 2
  });

var textp = new Konva.Text({
    x: stage.width() / 2-40,
    y: 75,
    text: text,
    fontSize: 20,
    fontFamily: 'Calibri',
    fill: 'black',
    padding: 18,
    align: 'center'       
});

group.add(oval);
group.add(textp);
    
layer.add(group);

stage.add(layer); 


layer.on('mouseover', function() {
    document.body.style.cursor = 'pointer';
});
layer.on('mouseout', function() {
    document.body.style.cursor = 'default   ';
});
layer.on('dblclick  dbltap', function(){
  layer.destroy();
});
}


//-----------------------------------Connector-----------------------------


function addCnct(){
    
    
    var layer = new Konva.Layer();
    
    
    var circle = new Konva.Circle({
        x: stage.width() / 2,
        y: stage.height() / 2,
        radius: 15,
        fill: 'darkgrey',
        stroke: 'black',
        strokeWidth:1,  
        draggable: true
    });
    
        
    layer.add(circle);
    
    stage.add(layer);
    
    layer.on('mouseover', function() {
        document.body.style.cursor = 'pointer';
    });

    layer.on('dblclick  dbltap', function(){
      layer.destroy();
    });

    layer.on('mouseout', function() {
        document.body.style.cursor = 'default   ';
    });
    }


//-----------------------------------Data-----------------------------------------

function addPrllo(){

  var text = document.getElementById('pTxt').value;
  var layer = new Konva.Layer();
  var rectX = stage.width() / 2 - 50;
  var rectY = stage.height() / 2 - 50;


  var group = new Konva.Group({
    draggable: true
  });

  
    var prlo = new Konva.Shape({
      sceneFunc: function(context, shape) {
        context.beginPath();
        context.moveTo(rectX, rectY);
        context.lineTo(rectX+130, rectY);
        context.lineTo(rectX+100, rectY+60);
        context.lineTo(rectX-30, rectY+60);

        context.closePath();

        context.fillStrokeShape(shape);
      },
      fill: 'pink',
      stroke: 'black',
      strokeWidth: 2
    });

    var textp = new Konva.Text({
        x: rectX,
        y: rectY,
        text: text,
        fontSize: 20,
        fontFamily: 'Calibri',
        fill: '#555',
        padding: 20,
        align: 'center'       
    });

  


  group.add(prlo);
  group.add(textp);
    
  layer.add(group);

  stage.add(layer);

  layer.on('mouseover', function() {
    document.body.style.cursor = 'pointer';
  });

  layer.on('dblclick dbltap', function(){
    layer.destroy();
  });

  layer.on('mouseout', function() {
    document.body.style.cursor = 'default   ';
  });
 }


 //-----------------------------------Diamond-----------------------------------------


 function addDim(){

  var text = document.getElementById('dTxt').value;
  var tr = "True"
  var fl = "False"
  var layer = new Konva.Layer();
  var rectX = stage.width() / 2 - 50;
  var rectY = stage.height() / 2 - 50;

  console.log(text);
  var group = new Konva.Group({
    draggable: true
  });

  
    var prlo = new Konva.Shape({
      sceneFunc: function(context, shape) {
        context.beginPath();
        context.moveTo(rectX, rectY);
        context.lineTo(rectX+80, rectY+60);
        context.lineTo(rectX, rectY+120);
        context.lineTo(rectX-80, rectY+60);
        context.closePath();
        context.fillStrokeShape(shape);
      },
      fill: 'yellow',
      stroke: 'black',
      strokeWidth: 2
    });

    var textp = new Konva.Text({
        x: rectX-45,
        y: rectY+30,
        text: text,
        fontSize: 20,
        fontFamily: 'Calibri',
        fill: 'black',
        padding: 20,
        align: 'center'       
    });

    var textT = new Konva.Text({
      x: rectX-120,
      y: rectY+80,
      text: tr,
      fontSize: 20,
      fontFamily: 'Calibri',
      fill: '#A9A9A9',
      padding: 20,
      align: 'center'       
    });

    var textF = new Konva.Text({
      x: rectX+40,
      y: rectY+80,
      text: fl,
      fontSize: 20,
      fontFamily: 'Calibri',
      fill: '#A9A9A9',
      padding: 20,
      align: 'center'       
    });

    var lineR = new Konva.Line({
      points: [rectX-30, rectY+100, rectX-90, rectY+160],
      stroke: '#A9A9A9',
      strokeWidth: 3,
      lineCap: 'round',
      lineJoin: 'round',
    });

    var lineL = new Konva.Line({
      points: [rectX+30, rectY+100, rectX+90, rectY+160],
      stroke: '#A9A9A9',
      strokeWidth: 3,
      lineCap: 'round',
      lineJoin: 'round',
    });

  group.add(prlo);
  group.add(textp);

  group.add(textT);
  group.add(textF);

  group.add(lineL);
  group.add(lineR);
  
  layer.add(group);

  stage.add(layer);

  layer.on('mouseover', function() {
    document.body.style.cursor = 'pointer';
  });

  layer.on('dblclick dbltap', function(){
    layer.destroy();
  });

  layer.on('mouseout', function() {
    document.body.style.cursor = 'default   ';
  });
 }

//---------------------Stored data---------------------------------

function addSData(){

  var text = document.getElementById('sTxt').value;
  var layer = new Konva.Layer();
  var rectX = stage.width() / 2 - 50;
  var rectY = stage.height() / 2 - 50;


  var group = new Konva.Group({
    draggable: true
  });

  
    var sd = new Konva.Shape({
      sceneFunc: function(context, shape) {
        context.beginPath();
        context.moveTo(rectX, rectY);
        context.lineTo(rectX+130, rectY);

        context.lineTo(rectX+110, rectY+15);
	context.lineTo(rectX+110, rectY+45);
	context.lineTo(rectX+130, rectY+65);

        context.lineTo(rectX, rectY+65);

	context.lineTo(rectX-10, rectY+65);
	context.lineTo(rectX-30, rectY+45);
	context.lineTo(rectX-30, rectY+15);

	context.lineTo(rectX, rectY);

       context.closePath();

       context.fillStrokeShape(shape);
      },

      fill: 'pink',
      stroke: 'black',
      strokeWidth: 2
    });

    var textp = new Konva.Text({
        x: rectX,
        y: rectY,
        text: text,
        fontSize: 10,
        fontFamily: 'Calibri',
        fill: 'black',
        padding: 20,
        align: 'center'       
    });

  


  group.add(sd);
  group.add(textp);
    
  layer.add(group);

  stage.add(layer);

  layer.on('mouseover', function() {
    document.body.style.cursor = 'pointer';
  });

  layer.on('dblclick dbltap', function(){
    layer.destroy();
  });

  layer.on('mouseout', function() {
    document.body.style.cursor = 'default   ';
  });
 }

//---------------------------Manual Input-----------------------------
function addMInput(){

  var text = document.getElementById('mintxt').value;
  var layer = new Konva.Layer();
  var rectX = stage.width() / 2 - 50;
  var rectY = stage.height() / 2 - 50;


  var group = new Konva.Group({
    draggable: true
  });

  
    var mi = new Konva.Shape({
      sceneFunc: function(context, shape) {
        context.beginPath();
        context.moveTo(rectX, rectY);
        context.lineTo(rectX+160, rectY-40);
        context.lineTo(rectX+160, rectY+50);
	context.lineTo(rectX, rectY+50);

        context.closePath();
    

        
        context.fillStrokeShape(shape);
      },
      fill: 'pink',
      stroke: 'black',
      strokeWidth: 2
    });



    var textp = new Konva.Text({
        x: rectX,
        y: rectY,
        text: text,
        fontSize: 20,
        fontFamily: 'Calibri',
        fill: 'black',
        padding: 20,
        align: 'center'       
    });

  


  group.add(mi);
  group.add(textp);
    
  layer.add(group);

  stage.add(layer);

  layer.on('mouseover', function() {
    document.body.style.cursor = 'pointer';
  });

  layer.on('dblclick dbltap', function(){
    layer.destroy();
  });

  layer.on('mouseout', function() {
    document.body.style.cursor = 'default   ';
  });
 }

//--------------------------------CArd-----------------------

 function addcard(){

  var text = document.getElementById('cardtxt').value;
  var layer = new Konva.Layer();
  var rectX = stage.width() / 2 - 50;
  var rectY = stage.height() / 2 - 50;


  var group = new Konva.Group({
    draggable: true
  });

  
    var prlo = new Konva.Shape({
      sceneFunc: function(context, shape) {
        context.beginPath();
        context.moveTo(rectX, rectY);
        context.lineTo(rectX+100, rectY);
        context.lineTo(rectX+100, rectY+80);
	context.lineTo(rectX-25, rectY+80);
	context.lineTo(rectX-25, rectY+25);

        context.closePath();
    

        
        context.fillStrokeShape(shape);
      },
      fill: 'pink',
      stroke: 'black',
      strokeWidth: 2
    });



    var textp = new Konva.Text({
        x: rectX,
        y: rectY,
        text: text,
        fontSize: 20,
        fontFamily: 'Calibri',
        fill: 'black',
        padding: 20,
        align: 'center'       
    });

  


  group.add(prlo);
  group.add(textp);
    
  layer.add(group);

  stage.add(layer);

  layer.on('mouseover', function() {
    document.body.style.cursor = 'pointer';
  });
s
  layer.on('dblclick dbltap', function(){
    layer.destroy();
  });

  layer.on('mouseout', function() {
    document.body.style.cursor = 'default   ';
  });
 }

//-----------------Horizontal line-------------------------------

function addarrow(){
var size = document.getElementById('sizh').value;

var layer = new Konva.Layer();
if(size>10){size=10;}

var line = new Konva.Line({
    points: [100, 80, 100+(size*20), 80],
    stroke: '#A9A9A9',
    strokeWidth: 3,
    lineCap: 'round',
    lineJoin: 'round',
    draggable: true
  });

    
layer.add(line);

stage.add(layer);

layer.on('mouseover', function() {
    document.body.style.cursor = 'pointer';
});
layer.on('mouseout', function() {
    document.body.style.cursor = 'default   ';
});

layer.on('dblclick  dbltap', function(){
  layer.destroy();
});
}

//----------------------Arrow----------------------------

function addarrow(){

  var layer = new Konva.Layer();
  var rectX = stage.width() / 2 - 50;
  var rectY = stage.height() / 2 - 50;


  var group = new Konva.Group({
    draggable: true
  });

  
    var prlo = new Konva.Arrow({
        x: rectX,
        y: rectY,
        points: [0, 0, 50,0 ],
        pointerLength: 10,
        pointerWidth: 10,
        fill: '#A9A9A9',
        stroke: 'white',
        strokeWidth: 2
      });

var line = new Konva.Line({
    points: [rectX+50, rectY, rectX+100, rectY],
    stroke: '#A9A9A9',
    strokeWidth: 2,
    lineCap: 'round',
    lineJoin: 'round',
    draggable: true
  });

  group.add(prlo); 
  group.add(line);
    
  layer.add(group);

  stage.add(layer);

  layer.on('mouseover', function() {
    document.body.style.cursor = 'pointer';
  });
s
  layer.on('dblclick dbltap', function(){
    layer.destroy();
  });

  layer.on('mouseout', function() {
    document.body.style.cursor = 'default   ';
  });
 }

//-------------------Horizontal line----------------------
function addPointH(){
var size = document.getElementById('siz').value;

var layer = new Konva.Layer();

if(size>10){size=10;}

var line = new Konva.Line({
    points: [100, 80, 100+(size*20), 80],
    stroke: '#A9A9A9',
    strokeWidth: 3,
    lineCap: 'round',
    lineJoin: 'round',
    draggable: true
  });

 var group = new Konva.Group({
    draggable: true
  });

group.add(line);
    
layer.add(group);

stage.add(layer);

layer.on('mouseover', function() {
    document.body.style.cursor = 'pointer';
});
layer.on('mouseout', function() {
    document.body.style.cursor = 'default   ';
});

layer.on('dblclick  dbltap', function(){
  layer.destroy();
});
}


//-------------------Text-----------------------------------

function addText(){

var rectX = stage.width() / 2 - 50;
        var rectY = stage.height() / 2 - 50;
var layer = new Konva.Layer();

 var group = new Konva.Group({
    draggable: true
  });


var prlo = new Konva.Text({
      
        x: rectX,
        y: rectY,
        text:document.getElementById('txtn').value,
        fontSize: 20,
        fontFamily: 'Calibri',
        fill: '#A9A9A9',
        width: 300,
        padding: 20,
        align: 'center'
      });


group.add(prlo);

layer.add(group);

stage.add(layer);

layer.on('mouseover', function() {
    document.body.style.cursor = 'pointer';
});
layer.on('mouseout', function() {
    document.body.style.cursor = 'default   ';
});

layer.on('dblclick  dbltap', function(){
  layer.destroy();
});
}

 
