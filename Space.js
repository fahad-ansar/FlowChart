


//put this height width thing in a media query so it gets updated everytime

var width = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;

var height = window.innerHeight
|| document.documentElement.clientHeight
|| document.body.clientHeight;

var stage = new Konva.Stage({
        container: 'container',
        width: width,
        height: height
});
    
Konva.captureTouchEventsEnabled = true;


function clearAll(){
  stage.destroyChildren();
}

function printit(){
  window.print();
}


//---------------------------------------------------------------------------

//-----------------------------------Connector-----------------------------
function addCnct(){
  var size = document.getElementById('sizc').value;
  
  var color = document.getElementById('cirClr').value;
    
  var layer = new Konva.Layer();
  
  
  var circle = new Konva.Circle({
      x: stage.width() / 2,
      y: stage.height() / 2,
      radius: size,
      fillLinearGradientStartPoint: { x: -50, y: -50 },
      fillLinearGradientEndPoint: { x: 50, y: 50 },
      fillLinearGradientColorStops: [0, color, 1, 'yellow'],
      stroke: 'black',
      strokeWidth: 0,
      shadowColor: 'black',
      shadowBlur: 10,
      shadowOffset: { x: 2, y: 2 },
      shadowOpacity: 0.2,
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

//-------------------------------Vertical line--------------------------------
function addPointV(){
  var size = document.getElementById('siz').value;

  var layer = new Konva.Layer();
  
  
  var line = new Konva.Line({
      points: [100, 80, 100, 120+(size*20)],
      stroke: document.getElementById('vlClr').value,
      shadowColor: 'black',
      shadowBlur: 10,
      shadowOffset: { x: 2, y: 2 },
      shadowOpacity: 0.2,
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
  
//-------------------Horizontal line----------------------
function addPointH(){
  var size = document.getElementById('sizh').value;
  var color = document.getElementById('hlClr');
  var layer = new Konva.Layer();
  

  
  var line = new Konva.Line({
      points: [100, 80, 120+(size*20),80],
      stroke: color.value,
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
          text:document.getElementById('txtTxt').value,
          fontSize: 20,
          fontFamily: 'Calibri',
          fill: document.getElementById('txtClr').value,
          stroke: 'black',
          strokeWidth: 0,
          shadowColor: 'black',
          shadowBlur: 5,
          shadowOffset: { x: 2, y: 2 },
          shadowOpacity: 0.2,
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
  
   
//-------------------------- rectangle-----------------
function addrecta(){

    var text = document.getElementById('rTxt').value;
    var color = document.getElementById('rClr').value
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
          fillLinearGradientStartPoint: { x: -50, y: -50 },
          fillLinearGradientEndPoint: { x: 150, y: 50 },
          fillLinearGradientColorStops: [0, color, 1, 'yellow'],
          stroke: 'black',
          strokeWidth: 0,
          shadowColor: 'black',
          shadowBlur: 10,
          shadowOffset: { x: 2, y: 2 },
          shadowOpacity: 0.2,
      });

      box.cornerRadius(5);

      var textp = new Konva.Text({
          x: rectX+10,
          y: rectY,
          text: text,
          fontSize: 20,
          fontFamily: 'Calibri',
          strokeWidth: 1,
          fill: 'white',
          padding: 20,      
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



//-----------------------------------Start/End-----------------------------
function addStart(){


var layer = new Konva.Layer();
var text = document.getElementById('oTxt').value;
var color = document.getElementById('oClr').value;
var group = new Konva.Group({
    draggable: true
  });

var oval = new Konva.Ellipse({
    x: stage.width() / 2,
    y: 100,
    radiusX: 50,
    radiusY: 25,
    fillLinearGradientStartPoint: { x: -50, y: -50 },
    fillLinearGradientEndPoint: { x: 150, y: 50 },
    fillLinearGradientColorStops: [0, color, 1, 'blue'],
    stroke: 'black',
    strokeWidth: 0,
    shadowColor: 'black',
    shadowBlur: 10,
    shadowOffset: { x: 2, y: 2 },
    shadowOpacity: 0.2,
  });

var textp = new Konva.Text({
    x: stage.width() / 2-37,
    y: 73,
    text: text,
    fontSize: 20,
    fontFamily: 'Calibri',
    fill: 'white',
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


//-----------------------------------Data-----------------------------------------
function addPrllo(){


  var text = document.getElementById('pTxt').value;
  var color = document.getElementById('pClr').value;
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
      fillLinearGradientStartPoint: { x: -50, y: -50 },
      fillLinearGradientEndPoint: { x: 50, y: 50 },
      fillLinearGradientColorStops: [0, color, 1, color],
      stroke: 'black',
      strokeWidth: 0,
      shadowColor: 'black',
      shadowBlur: 10,
      shadowOffset: { x: 2, y: 2 },
      shadowOpacity: 0.2,
    });


    var textp = new Konva.Text({
        x: rectX,
        y: rectY,
        text: text,
        fontSize: 20,
        fontFamily: 'Calibri',
        fill: 'white',
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
  var color = document.getElementById('dClr').value;
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
      fillLinearGradientStartPoint: { x: -50, y: -50 },
      fillLinearGradientEndPoint: { x: 50, y: 50 },
      fillLinearGradientColorStops: [0, 'red', 1, color], //not working on customs
      stroke: 'black',
      strokeWidth: 0,
      shadowColor: 'black',
      shadowBlur: 10,
      shadowOffset: { x: 2, y: 2 },
      shadowOpacity: 0.2,
    });

    var textp = new Konva.Text({
        x: rectX-53,
        y: rectY+30,
        text: text,
        fontSize: 20,
        fontFamily: 'Calibri',
        fill: 'white',
        padding: 20,
        align: 'center',
        alignContent: 'center',       
    });

    var textT = new Konva.Text({
      x: rectX-120,
      y: rectY+80,
      text: tr,
      fontSize: 20,
      fontFamily: 'Calibri',
      fill: 'black',
      padding: 20,
      align: 'center'       
    });

    var textF = new Konva.Text({
      x: rectX+40,
      y: rectY+80,
      text: fl,
      fontSize: 20,
      fontFamily: 'Calibri',
      fill: '#black',
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


//---------------------------Manual Input-----------------------------
function addMInput(){

  var text = document.getElementById('miTxt').value;
  var color = document.getElementById('miClr').value;
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
      fillLinearGradientStartPoint: { x: -50, y: -50 },
      fillLinearGradientEndPoint: { x: 50, y: 50 },
      fillLinearGradientColorStops: [0, 'yellow', 1, color],
      stroke: 'black',
      strokeWidth: 0,
      shadowColor: 'black',
      shadowBlur: 10,
      shadowOffset: { x: 2, y: 2 },
      shadowOpacity: 0.2,
    });



    var textp = new Konva.Text({
        x: rectX,
        y: rectY,
        text: text,
        fontSize: 20,
        fontFamily: 'Calibri',
        fill: 'white',
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




