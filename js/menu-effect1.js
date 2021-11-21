window.addEventListener('load', () => {
  const curtains = new Curtains({
    container: 'canvas',
    watchScroll: false,
    pixelRatio: Math.min(1.5, window.devicePixelRatio),
  });

  const planeElements = document.getElementsByClassName('multi-textures');
  const textureContainer = document.querySelector('#texture-container');
  const menuBlock = document.querySelector('#menu-block');

  const slideshowState = {
    activeTextureIndex: 1,
    nextTextureIndex: 2,
    maxTextures: planeElements[0].querySelectorAll('img').length - 1,
    isChanging: false,
    transitionTimer: 0,
  };

  curtains
    .onError(() => {
      document.body.classList.add('no-curtains', 'image-1');

      console.log(
        'curtains did not render. display random image instead. See https://github.com/martinlaxenaire/curtainsjs/blob/master/examples/multiple-textures/js/multiple.textures.setup.js lines 29-43'
      );
    })
    .onContextLost(() => {
      curtains.restoreContext();
    });
  curtains.disableDrawing();

  const vs = `
    precision mediump float;
    // default mandatory variables
    attribute vec3 aVertexPosition;
    attribute vec2 aTextureCoord;
    uniform mat4 uMVMatrix;
    uniform mat4 uPMatrix;
    // varyings : notice we've got 3 texture coords varyings
    // one for the displacement texture
    // one for our visible texture
    // and one for the upcoming texture
    varying vec3 vVertexPosition;
    varying vec2 vTextureCoord;
    varying vec2 vActiveTextureCoord;
    varying vec2 vNextTextureCoord;
    // textures matrices
    uniform mat4 activeTexMatrix;
    uniform mat4 nextTexMatrix;
    // custom uniforms
    uniform float uTransitionTimer;
    void main() {
        gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);
        // varyings
        vTextureCoord = aTextureCoord;
        vActiveTextureCoord = (activeTexMatrix * vec4(aTextureCoord, 0.0, 1.0)).xy;
        vNextTextureCoord = (nextTexMatrix * vec4(aTextureCoord, 0.0, 1.0)).xy;
        vVertexPosition = aVertexPosition;
    }
`;
  const fs = `
precision mediump float;
varying vec3 vVertexPosition;
varying vec2 vTextureCoord;
varying vec2 vActiveTextureCoord;
varying vec2 vNextTextureCoord;
// custom uniforms
uniform float uTransitionTimer;
// our textures samplers
// notice how it matches the sampler attributes of the textures we created dynamically
uniform sampler2D activeTex;
uniform sampler2D nextTex;
uniform sampler2D displacement;
void main() {
    // our displacement texture
    vec4 displacementTexture = texture2D(displacement, vTextureCoord);
    // slides transitions based on displacement and transition timer
    vec2 firstDisplacementCoords = vActiveTextureCoord + displacementTexture.r * ((cos((uTransitionTimer + 90.0) / (90.0 / 3.141592)) + 1.0) / 1.25);
    vec4 firstDistortedColor = texture2D(activeTex, vec2(vActiveTextureCoord.x, firstDisplacementCoords.y));
    // same as above but we substract the effect
    vec2 secondDisplacementCoords = vNextTextureCoord - displacementTexture.r * ((cos(uTransitionTimer / (90.0 / 3.141592)) + 1.0) / 1.25);
    vec4 secondDistortedColor = texture2D(nextTex, vec2(vNextTextureCoord.x, secondDisplacementCoords.y));
    // mix both texture
    vec4 finalColor = mix(firstDistortedColor, secondDistortedColor, 1.0 - ((cos(uTransitionTimer / (90.0 / 3.141592)) + 1.0) / 2.0));
    // handling premultiplied alpha
    finalColor = vec4(finalColor.rgb * finalColor.a, finalColor.a);
    gl_FragColor = finalColor;
}
`;
  const params = {
    vertexShader: vs,
    fragmentShader: fs,
    uniforms: {
      transitionTimer: {
        name: 'uTransitionTimer',
        type: '1f',
        value: 0,
      },
    },
  };

  const multiTexturesPlane = new Plane(curtains, planeElements[0], params);


  multiTexturesPlane
    .onLoading((texture) => {
      texture.setMinFilter(curtains.gl.LINEAR_MIPMAP_NEAREST);
    })
    .onReady(() => {
      textureContainer.addEventListener('transitionstart', () => {
        console.log('start');
      });
      const activeTex = multiTexturesPlane.createTexture({
        sampler: 'activeTex',
        fromTexture:
          multiTexturesPlane.textures[slideshowState.activeTextureIndex],
      });
      const nextTex = multiTexturesPlane.createTexture({
        sampler: 'nextTex',
        fromTexture:
          multiTexturesPlane.textures[slideshowState.nextTextureIndex],
      });
          menuBlock.addEventListener('transitionstart', () => {
          if (!slideshowState.isChanging) {
            curtains.enableDrawing();
            slideshowState.isChanging = true;
            if (slideshowState.activeTextureIndex < slideshowState.maxTextures) {
              slideshowState.nextTextureIndex =
                slideshowState.activeTextureIndex + 1;
            } else {
              slideshowState.nextTextureIndex = 1;
            }
            nextTex.setSource(
              multiTexturesPlane.images[slideshowState.nextTextureIndex]
            );

            setTimeout(() => {
              curtains.disableDrawing();
              slideshowState.isChanging = false;
              slideshowState.activeTextureIndex = slideshowState.nextTextureIndex;
              activeTex.setSource(
                multiTexturesPlane.images[slideshowState.activeTextureIndex]
              );
              slideshowState.transitionTimer = 0;
            }, 1700);
          }
        });
    })
    .onRender(() => {
      if (slideshowState.isChanging) {
        slideshowState.transitionTimer +=
          (90 - slideshowState.transitionTimer) * 0.04;
        if (
          slideshowState.transitionTimer >= 88.5 &&
          slideshowState.transitionTimer !== 90
        ) {
          slideshowState.transitionTimer = 90;
        }
      }
      multiTexturesPlane.uniforms.transitionTimer.value =
        slideshowState.transitionTimer;
    });
});
