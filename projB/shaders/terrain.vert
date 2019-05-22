attribute vec3 aVertexPosition;
attribute vec3 aVertexNormal;
attribute vec2 aTextureCoord;

uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;
uniform mat4 uNMatrix;

varying vec2 vTextureCoord;

uniform sampler2D terrainMap;


void main() {

    vec3 info = vec3(aVertexPosition);
    float cor = texture2D(terrainMap,vTextureCoord).r;
    vec3 i = vec3(0,0,cor);
    info += i;
    vec4 color = vec4(info , 1.0); 

	gl_Position = uPMatrix * uMVMatrix * color;
	vTextureCoord = aTextureCoord;
}
