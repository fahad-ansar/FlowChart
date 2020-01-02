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
          fill: '#555',
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
    stroke: 'black',
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
    fill: '#black',
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
      strokeWidth: 3
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
      strokeWidth: 3
    });

    var textp = new Konva.Text({
        x: rectX-45,
        y: rectY+30,
        text: text,
        fontSize: 20,
        fontFamily: 'Calibri',
        fill: '#555',
        padding: 20,
        align: 'center'       
    });

    var textT = new Konva.Text({
      x: rectX-120,
      y: rectY+80,
      text: tr,
      fontSize: 20,
      fontFamily: 'Calibri',
      fill: '#555',
      padding: 20,
      align: 'center'       
    });

    var textF = new Konva.Text({
      x: rectX+40,
      y: rectY+80,
      text: fl,
      fontSize: 20,
      fontFamily: 'Calibri',
      fill: '#555',
      padding: 20,
      align: 'center'       
    });

    var lineR = new Konva.Line({
      points: [rectX-30, rectY+100, rectX-90, rectY+160],
      stroke: 'black',
      strokeWidth: 3,
      lineCap: 'round',
      lineJoin: 'round',
    });

    var lineL = new Konva.Line({
      points: [rectX+30, rectY+100, rectX+90, rectY+160],
      stroke: 'black',
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


 
