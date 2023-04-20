var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["de00ea69-281b-4b70-9772-c7869206a5a8","90c227c8-68c6-4202-95bb-fd170be3fd6f","4c30b75f-ab3d-41b1-85d4-1cd30cecef1b","266993d5-bb9d-4245-aa54-3408f1da65cf","d85473c7-a759-40c0-b9ca-d9522e57eb06"],"propsByKey":{"de00ea69-281b-4b70-9772-c7869206a5a8":{"name":"tela_1","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"5gyt4r33uUgWmrMqN.3JHdkcet0Q16yx","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/de00ea69-281b-4b70-9772-c7869206a5a8.png"},"90c227c8-68c6-4202-95bb-fd170be3fd6f":{"name":"1","sourceUrl":null,"frameSize":{"x":73,"y":133},"frameCount":5,"looping":true,"frameDelay":5,"version":"zD.TFAxq0tHPe3XnASgZbPDhSNSColGm","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":219,"y":266},"rootRelativePath":"assets/90c227c8-68c6-4202-95bb-fd170be3fd6f.png"},"4c30b75f-ab3d-41b1-85d4-1cd30cecef1b":{"name":"gui","sourceUrl":null,"frameSize":{"x":137,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"ntZ5bk1IyA08mSVM87am4YOOgnQon_uG","categories":["people"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":137,"y":400},"rootRelativePath":"assets/4c30b75f-ab3d-41b1-85d4-1cd30cecef1b.png"},"266993d5-bb9d-4245-aa54-3408f1da65cf":{"name":"2","sourceUrl":null,"frameSize":{"x":71,"y":131},"frameCount":1,"looping":true,"frameDelay":12,"version":"689RJb9RxA2NDzNz8hgpbLcLMr_cYJ2u","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":71,"y":131},"rootRelativePath":"assets/266993d5-bb9d-4245-aa54-3408f1da65cf.png"},"d85473c7-a759-40c0-b9ca-d9522e57eb06":{"name":"r","sourceUrl":null,"frameSize":{"x":70,"y":130},"frameCount":1,"looping":true,"frameDelay":12,"version":"RD1jz9c_5PpWi_.dTLS24Qmmu4dL7PdU","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":70,"y":130},"rootRelativePath":"assets/d85473c7-a759-40c0-b9ca-d9522e57eb06.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var tela = createSprite(200,200);
tela.setAnimation("tela_1");

var guilherme = createSprite(370,200,40,60);
guilherme.setAnimation("gui");
guilherme.scale =0.2;

var car_red = createSprite(65,320,50,20);
car_red.setAnimation("r");
car_red.scale = 0.7;

var moto = createSprite(180,50);
moto.setAnimation("2");
moto.scale = 0.7;

var car_rainbow = createSprite(280,320);
car_rainbow.setAnimation("1");
car_rainbow.scale = 0.7;

moto.setVelocity(0,+10);
car_rainbow.setVelocity(0,-8);
car_red.setVelocity(0,-9);

function draw() {
createEdgeSprites();


guilherme.bounceOff(edges);
moto.bounceOff(edges);
car_rainbow.bounceOff(edges);
car_red.bounceOff(edges);

if(keyDown(LEFT)){
  
guilherme.x=guilherme.x-4;
  
}
if(keyDown("up")){
  
 guilherme.y=guilherme.y-4; 
  
}
if(keyDown("down")){
  
 guilherme.y=guilherme.y+4 ;
  
}

if(keyDown(RIGHT)){
  
 guilherme.x=guilherme.x+4 ;
  
}

if(guilherme.isTouching(moto)|| guilherme.isTouching(car_red)|| guilherme.isTouching(car_rainbow))
{
  
 guilherme.x=370; 
 guilherme.y=200;
 
  
  
  
  
}
































drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
