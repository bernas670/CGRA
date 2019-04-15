/**
* MyScene
* @constructor
*/
class MyScene extends CGFscene {
    constructor() {
        super();
    }

    init(application) {
        super.init(application);
        this.initCameras();
        this.initLights();

        //Background color
        this.gl.clearColor(0.0, 0.0, 0.0, 1.0);

        this.gl.clearDepth(100.0);
        this.gl.enable(this.gl.DEPTH_TEST);
        this.gl.enable(this.gl.CULL_FACE);
        this.gl.depthFunc(this.gl.LEQUAL);
        this.enableTextures(true);

     

        //Objects connected to MyInterface
        this.displayAxis = true;
        this.displayNormals = false;

        //Materials
        //testes
        this.exemplo = new CGFappearance(this);
        this.exemplo.setAmbient(0.1, 0.1, 0.1, 1);
        this.exemplo.setDiffuse(0.9, 0.9, 0.9, 1);
        this.exemplo.setSpecular(0.1, 0.1, 0.1, 1);
        this.exemplo.setShininess(10.0);
        this.exemplo.loadTexture('textures/test.jpg');
        this.exemplo.setTextureWrap('REPEAT', 'REPEAT');

        //VoxHill
        this.vox = new CGFappearance(this);
        this.vox.setAmbient(0.1, 0.1, 0.1, 1);
        this.vox.setDiffuse(0.9, 0.9, 0.9, 1);
        this.vox.setSpecular(0.1, 0.1, 0.1, 1);
        this.vox.setShininess(10.0);
        this.vox.loadTexture('textures/mineSide.png');
        this.vox.setTextureWrap('REPEAT', 'REPEAT');

        //yellow texture for lantern
        this.yellow = new CGFappearance(this);
        this.yellow.setAmbient(0.1, 0.1, 0.1, 1);
        this.yellow.setDiffuse(0.9, 0.9, 0.9, 1);
        this.yellow.setSpecular(0.1, 0.1, 0.1, 1);
        this.yellow.setShininess(10.0);
        this.yellow.loadTexture('images/yellow.jpg');
        this.yellow.setTextureWrap('REPEAT', 'REPEAT');

        //green texture for lantern
        this.green = new CGFappearance(this);
        this.green.setAmbient(0.1, 0.1, 0.1, 1);
        this.green.setDiffuse(0.9, 0.9, 0.9, 1);
        this.green.setSpecular(0.1, 0.1, 0.1, 1);
        this.green.setShininess(10.0);
        this.green.loadTexture('images/green.jpg');
        this.green.setTextureWrap('REPEAT', 'REPEAT');


        //house roof texture
        this.rooft = new CGFappearance(this);
        this.rooft.setAmbient(0.1, 0.1, 0.1, 1);
        this.rooft.setDiffuse(0.9, 0.9, 0.9, 1);
        this.rooft.setSpecular(0.1, 0.1, 0.1, 1);
        this.rooft.setShininess(10.0);
        this.rooft.loadTexture('images/r4.jpg');
        this.rooft.setTextureWrap('REPEAT', 'REPEAT');

        //house texture
        this.houset = new CGFappearance(this);
        this.houset.setAmbient(0.1, 0.1, 0.1, 1);
        this.houset.setDiffuse(0.9, 0.9, 0.9, 1);
        this.houset.setSpecular(0.1, 0.1, 0.1, 1);
        this.houset.setShininess(10.0);
        this.houset.loadTexture('images/wood.jpg');
        this.houset.setTextureWrap('REPEAT', 'REPEAT');

        //house pillar texture
        this.pillart = new CGFappearance(this);
        this.pillart.setAmbient(0.1, 0.1, 0.1, 1);
        this.pillart.setDiffuse(0.9, 0.9, 0.9, 1);
        this.pillart.setSpecular(0.1, 0.1, 0.1, 1);
        this.pillart.setShininess(10.0);
        this.pillart.loadTexture('images/pillar.jpg');
        this.pillart.setTextureWrap('REPEAT', 'REPEAT');

        //CubeMap
        this.cmap = new CGFappearance(this);
        this.cmap.setAmbient(0.1, 0.1, 0.1, 1);
        this.cmap.setDiffuse(0.9, 0.9, 0.9, 1);
        this.cmap.setSpecular(0.1, 0.1, 0.1, 1);
        this.cmap.setShininess(10.0);
        this.cmap.loadTexture('images/CubeMap.png');
        this.cmap.setTextureWrap('REPEAT', 'REPEAT');

        //grass
        this.grass = new CGFappearance(this);
        this.grass.setAmbient(0.1, 0.1, 0.1, 1);
        this.grass.setDiffuse(0.9, 0.9, 0.9, 1);
        this.grass.setSpecular(0.1, 0.1, 0.1, 1);
        this.grass.setShininess(10.0);
        this.grass.loadTexture('images/g2.jpg');
        this.grass.setTextureWrap('REPEAT', 'REPEAT');

        //tree top
        this.topT = new CGFappearance(this);
        this.topT.setAmbient(0.1, 0.1, 0.1, 1);
        this.topT.setDiffuse(0.9, 0.9, 0.9, 1);
        this.topT.setSpecular(0.1, 0.1, 0.1, 1);
        this.topT.setShininess(10.0);
        this.topT.loadTexture('images/mineTrunk.jpg');
        this.topT.setTextureWrap('REPEAT', 'REPEAT');
        
        //tree trunk
        this.trunkT = new CGFappearance(this);
        this.trunkT.setAmbient(0.1, 0.1, 0.1, 1);
        this.trunkT.setDiffuse(0.9, 0.9, 0.9, 1);
        this.trunkT.setSpecular(0.1, 0.1, 0.1, 1);
        this.trunkT.setShininess(10.0);
        this.trunkT.loadTexture('images/mineTree.jpg');
        this.trunkT.setTextureWrap('REPEAT', 'REPEAT');


        //Initialize scene objects
        this.axis = new CGFaxis(this);
        this.ground = new MyQuad(this);
        this.lantern = new MyLantern(this,this.yellow,this.green);
        this.house = new MyHouse(this,this.rooft,this.houset,this.pillart); 
        this.voxHill1= new MyVoxelHill(this,4,this.vox);
        this.voxHill2 = new MyVoxelHill(this,3,this.vox);
        this.testObj= new MyCubeMap(this);
        this.trees= new MyTreeRowPatch(this,this.trunkT,this.topT);

    }

    initLights() {
        this.lights[0].setPosition(15, 2, 5, 1);
        this.lights[0].setDiffuse(1.0, 1.0, 1.0, 1.0);
        this.lights[0].enable();
        this.lights[0].update();
    }

    initCameras() {
        this.camera = new CGFcamera(0.4, 0.1, 500, vec3.fromValues(0, 5, 25), vec3.fromValues(0, 0, 0));
    }

    hexToRgbA(hex)
    {
        var ret;
        //either we receive a html/css color or a RGB vector
        if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
            ret=[
                parseInt(hex.substring(1,3),16).toPrecision()/255.0,
                parseInt(hex.substring(3,5),16).toPrecision()/255.0,
                parseInt(hex.substring(5,7),16).toPrecision()/255.0,
                1.0
            ];
        }
        else
            ret=[
                hex[0].toPrecision()/255.0,
                hex[1].toPrecision()/255.0,
                hex[2].toPrecision()/255.0,
                1.0
            ];
        return ret;
    }

    setDefaultAppearance() {
        this.setAmbient(0.2, 0.4, 0.8, 1.0);
        this.setDiffuse(0.2, 0.4, 0.8, 1.0);
        this.setSpecular(0.2, 0.4, 0.8, 1.0);
        this.setShininess(10.0);
    }

    initMaterials(){
          // Specular material (WATER)
          let water = this.hexToRgbA("#40a4df");
          this.specular = new CGFappearance(this);
          this.specular.setAmbient(water[0], water[1], water[2], 1.0);
          this.specular.setDiffuse(water[0]/3.0, water[1]/3.0, water[2]/3.0, 1.0);
          this.specular.setSpecular(water[0], water[1], water[2], 1.0);
          this.specular.setShininess(10.0);
  
          // Diffuse material 1 (STONE)
          let stone= this.hexToRgbA("#95948b");
          this.diffuse1 = new CGFappearance(this);
          this.diffuse1.setAmbient(stone[0], stone[1], stone[2], 1.0);
          this.diffuse1.setDiffuse(stone[0], stone[1], stone[2], 1.0);
          this.diffuse1.setSpecular(stone[0]/3.0, stone[1]/3.0, stone[2]/3.0, 1.0);
          this.diffuse1.setShininess(10.0);
  
          // Diffuse material 2 (WOOD)
          let wood=this.hexToRgbA("#b69b4c");
          this.diffuse2 = new CGFappearance(this);
          this.diffuse2.setAmbient(wood[0], wood[1], wood[2], 1.0);
          this.diffuse2.setDiffuse(wood[0], wood[1], wood[2], 1.0);
          this.diffuse2.setSpecular(wood[0]/3.0, wood[1]/3.0, wood[2]/3.0, 1.0);
          this.diffuse2.setShininess(10.0);
    }

    display() {
        // ---- BEGIN Background, camera and axis setup
        // Clear image and depth buffer everytime we update the scene
        this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
        // Initialize Model-View matrix as identity (no transformation
        this.updateProjectionMatrix();
        this.loadIdentity();
        // Apply transformations corresponding to the camera position relative to the origin
        this.applyViewMatrix();

        // Draw axis
        if (this.displayAxis) {
            this.axis.display();
        }

        // Display normals
        
        if (this.displayNormals)
            this.testObj.enableNormalViz();
        else
            this.testObj.disableNormalViz();
        
        
        //Apply default appearance
        this.setDefaultAppearance();

        // ---- BEGIN Primitive drawing section

        // display the ground (base of the scene)
        this.pushMatrix();
        this.rotate(-Math.PI/2, 1, 0, 0);
        this.scale(50, 50, 1);
        this.grass.apply(); //probably not correct
        this.ground.display();
        this.popMatrix();

        // display the skybox
        this.pushMatrix();
        this.cmap.apply();      
        this.testObj.display();
        this.popMatrix();

        // display house
        this.pushMatrix();
        this.scale(2,2,2);
        this.house.display();
        this.popMatrix();

        // display the lantern
        this.pushMatrix();
        this.translate(2.5, 0, 2.5);
        this.scale(0.25, 0.25, 0.25);
        this.lantern.display();
        this.popMatrix();

        //display VoxelHill
        this.pushMatrix();
        this.translate(11,0,9);
        this.voxHill1.display();
        this.popMatrix();

       /* this.pushMatrix();
        this.translate(-21,0,-11);
        this.voxHill2.display();
        this.popMatrix();

        this.pushMatrix();
        this.translate(20,0,-21);
        this.voxHill2.display();
        this.popMatrix();

        */
        
        //display trees to text their texture
        this.pushMatrix();
        this.translate(-15,0,-12);
        this.trees.display();
        this.popMatrix();

        // ---- END Primitive drawing section
    }
}