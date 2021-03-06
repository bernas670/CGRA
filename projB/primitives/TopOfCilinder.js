/**
 * TopOfCilinder
 * @constructor
 * 
 */

class TopOfCilinder extends CGFobject {

    constructor(scene, slices) {
        super(scene);
        
        this.slices = slices;

        this.initBuffers();
    }

    initBuffers(){
        this.vertices = [];
        this.indices = [];
        this.normals = [];
        this.texCoords = [];

        var ang = ( 2 * Math.PI ) / (this.slices);
        
        for (var i = 0 ; i < this.slices ; i++) {

            this.vertices.push(Math.cos(ang * i), Math.sin(ang * i), 0);
            this.vertices.push(Math.cos(ang * (i + 1)), Math.sin(ang * (i + 1)), 0);
            this.vertices.push(0, 0, 0);
    
            this.indices.push((this.vertices.length / 3) - 3, (this.vertices.length / 3) - 2, (this.vertices.length / 3) - 1);
    
            this.normals.push(0,0,1, 
                              0,0,1, 
                              0,0,1);
    
            this.texCoords.push(0.5+Math.cos(ang * i)/2, 0.5 - Math.sin(ang * i)/2);
            this.texCoords.push(0.5+Math.cos(ang * (i+1))/2,0.5 - Math.sin(ang * (i+1))/2);
            this.texCoords.push(0.5,0.5);
    
        }
    
         this.primitiveType = this.scene.gl.TRIANGLES;
         this.initGLBuffers();

    }
}