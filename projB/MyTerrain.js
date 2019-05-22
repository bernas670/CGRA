/*
* MyTerrain
* @constructor
*/

class MyTerrain extends CGFobject{

    constructor(scene) {

		super(scene);
        this.initBuffers();
        
    }
    
    initBuffers(){
        this.terrainShader = new CGFshader(this.scene.gl, "shaders/terrain.vert", "shaders/terrain.frag");
        this.plane = new Plane(this.scene,32); 
        this.terrainShader.setUniformsValues({terrainMap: 1, terrainAltimetry: 2});
        //this.terrainShader.setUniformsValues({uSampler2: 1, uSampler3: 2});
    }

    initMaterials(){
        this.terrainTex = new CGFtexture(this.scene, "images/terrain.jpg");
        this.terrainMap = new CGFtexture(this.scene, "images/heightmap.jpg");
        this.terrainAltimetry = new CGFtexture(this.scene, "images/altimetry.png");
        

       
    }

    display(){
        
        this.terrainTex.bind(0);
        this.terrainMap.bind(1);
        this.terrainAltimetry.bind(2);
        this.scene.setActiveShaders(this.terrainShader);
        this.pushMatrix();
        this.rotate(-0.5*Math.PI, 1, 0, 0);
        this.scale(60, 60, 1);
        this.plane.display();
        this.popMatrix();

        this.scene.setActiveShaders(this.defaultShader);
    }
}