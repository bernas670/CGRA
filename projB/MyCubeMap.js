/*
*
*  CubeMap
*
* Baseado no MyUnitCube da TP03
*/

class MyCubeMap extends CGFobject{
    constructor(scene){
        super(scene);
        
        this.initBuffers();
    }

    initBuffers(){
        /* cube representation
              (7)---------(6)   
              /|          /|
             / |         / |
           (4)---------(5) |
            |  |        |  |
            | (3)-------|-(2)
            | /         | /
            |/          |/
           (0)---------(1)
        */

        this.vertices = [
            -30, -30,  30,   // 0 | 00
             30, -30,  30,   // 1 | 01
             30, -30, -30,   // 2 | 02
            -30, -30, -30,   // 3 | 03
            -30,  30,  30,   // 4 | 04
             30,  30,  30,   // 5 | 05
             30,  30, -30,   // 6 | 06
            -30,  30, -30,   // 7 | 07

            -30, -30,  30,   // 0 | 08
             30, -30,  30,   // 1 | 09
             30, -30, -30,   // 2 | 10
            -30, -30, -30,   // 3 | 11
            -30,  30,  30,   // 4 | 12
             30,  30,  30,   // 5 | 13
             30,  30, -30,   // 6 | 14
            -30,  30, -30,   // 7 | 15
            
            -30, -30,  30,   // 0 | 16 
             30, -30,  30,   // 1 | 17
             30, -30, -30,   // 2 | 18
            -30, -30, -30,   // 3 | 19
            -30,  30,  30,   // 4 | 20
             30,  30,  30,   // 5 | 21
             30,  30, -30,   // 6 | 22
            -30,  30, -30,   // 7 | 23
        ];
        
        this.normals = [
             1.0,  0.0,  0.0,
            -1.0,  0.0,  0.0,
            -1.0,  0.0,  0.0,
             1.0,  0.0,  0.0,
             1.0,  0.0,  0.0,
            -1.0,  0.0,  0.0,
            -1.0,  0.0,  0.0,
             1.0,  0.0,  0.0,

             0.0,  1.0,  0.0,
             0.0,  1.0,  0.0,
             0.0,  1.0,  0.0,
             0.0,  1.0,  0.0,
             0.0, -1.0,  0.0,
             0.0, -1.0,  0.0,
             0.0, -1.0,  0.0,
             0.0, -1.0,  0.0,

             0.0,  0.0, -1.0,
             0.0,  0.0, -1.0,
             0.0,  0.0,  1.0,
             0.0,  0.0,  1.0,
             0.0,  0.0, -1.0,
             0.0,  0.0, -1.0,
             0.0,  0.0,  1.0,
             0.0,  0.0,  1.0
        ];

        this.indices=[
             /* y = -30 // XZ */
             0, 1, 2,
             2, 3, 0,

             /* y =  30 // XZ */
             4, 7, 6,
             6, 5, 4,

             /* z =  30 // XY */
             8, 12, 13,
             13, 9, 8,

             /* z = -30 // XY */
             11, 10, 14,
             14, 15, 11,

             /* x =  30 // YZ */
             17, 21, 22,
             22, 18, 17,

             /* x = -30 // YZ */
             16, 19, 23,
             23, 20, 16
        ];


        /*  Texture coords (s,t)
              s                 (4)---(5)
            +---->               |     |
          t |                    |     |
            |             (4)---(7)---(6)---(5)---(4)
            v              |     |     |     |     |
                           |     |     |     |     |
                          (0)---(3)---(2)---(1)---(0)
                                 |     |
                                 |     |
                                (0)---(1)
        */

        var one_t = 1.00/3.00;
        var two_t = 2.00/3.00;

        this.texCoords=[
            // top and bottom
            0.25, 1.00,
            0.50, 1.00,
            0.50, two_t,
            0.25, two_t,
            0.25, 0.00,
            0.50, 0.00,
            0.50, one_t,
            0.25, one_t,

            // front and back
            1.00, two_t,
            0.75, two_t,
            0.50, two_t,    
            0.25, two_t,   
            1.00, one_t,
            0.75, one_t,
            0.50, one_t,    
            0.25, one_t,    

            // left and right
            0.00, two_t,
            0.75, two_t,
            0.50, two_t,
            0.25, two_t,
            0.00, one_t,
            0.75, one_t,
            0.50, one_t,
            0.25, one_t
        ];

        this.primitiveType = this.scene.gl.TRIANGLES;
        this.initGLBuffers();
    }
}