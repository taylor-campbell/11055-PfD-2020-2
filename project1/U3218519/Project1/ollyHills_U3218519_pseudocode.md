PROJECT 1: PORTRAIT SKETCH
OLLY HILLS | U3218519
28/09/20

PSUDOCODE FOR PORTRAIT



START - Program

    CREATE - Canvas
        CREATE Canvas = Height 400, Width 400
    END CREATE - Canvas

    CREATE Element Functions
        Function DRAW Head
            CALL beginShape
                CALL fill
                CALL strokeWeight
                CALL strokeJoin
                CALL bezier
                CALL bezier
            CALL endShape

        Function DRAW Eyes
            CREATE object
                SET Value centreLine
                SET Value height
                SET Value size
                SET Value colour
                SET Value quantity
                SET Value centreSpaceing
                SET Value function
                    CALL fill
                    CALL ellipse with object Values (centreLine - centreSpacing)
                    CALL ellipse witn object Values (centreLine + centreSpacing)
            END CREATE object
            CALL object Value function

        Function DRAW Nose
            CALL beginShape
                CALL noFill
                CALL vertex
                CALL quadraticVertex
                CALL quadraticVertex
            CALL endShape
                CALL beginShape
                CALL vertex
                CALL quadraticVertex
            CALL endShape
            CALL endShape
                CALL beginShape
                CALL vertex
                CALL quadraticVertex
            CALL endShape

        Function DRAW Mouth
            CALL beginShape
                CALL fill
                CALL vertex
                CALL vertex
                CALL quatraticVertex
            CALL endShape
            CALL beginShape
                CALL fill
                CALL vertex
                CALL vertex
                CALL vertex
                CALL quadeaticVertex
                CALL vertex
            CALL endShape
            CALL beginShape
                CALL fill
                CALL vertex
                CALL quadraticVertex
                CALL quadraticVertex
            CALL endShape

        Function DRAW Ears
            CALL beginShape
                CALL fill
                CALL bezier
                CALL bezier
            CALL endShape

        Function DRAW Hat
            CALL beginShape
                CALL fill
                CALL vertex
                CALL quadraticVertex
                CALL quadraticVertex
                CALL quadraticVertex
                CALL vertex
            CALL endShape
            CALL beginShape
                CALL vertex
                CALL vertex
                CALL quadraticVertex
                CALL vertex
                CALL quadraticVertex
                CALL vertex
                CALL quadraticVertex
                CALL vertex
                CALL quadraticVertex
            CALL endShape

                
        Function DRAW Beard
            CALL beginShape
                CALL fill
                CALL vertex
                CALL quadraticVertex
                CALL quadraticVertex
                CALL quadraticVertex
                CALL quadraticVertex
                CALL quadraticVertex
                CALL quadraticVertex
                CALL vertex
                CALL quadraticVertex
                CALL quadraticVertex
                CALL vertex
            CALL endShape
    END CREATE
    
    CREATE Variables
        randomColor
        itemsDrawn = 0
        itemsToBeDrawn = [head, ears, hat, beard, eyes, nose, mouth,]
    END CREATE

    RUN DRAW Portrait  
        IF itemsdrawn = 0
            DRAW  black rectangle on canvas
            PRINT "Click anywhere to begin drawing my portrait" in white on rectangle
        END IF
    END RUN DRAW - Portait

    DO LISTEN for Click Event

        LISTEN TRIGGERED when Click Event Occurs

            CALL randomColor
            SET background with randomColor
            
            IF itemsDrawn < itemsToBeDrawn.length
                FOR the number of times it takes for -1 to equal itemsDrawn
                    CALL all itemToBeDrawn functions untill ARRAY INDEX = itemsDrawn
                END FOR
                INCREMENT itemsDrawn by 1
                LOG itemsDrawn
            ELSE
                FOR the number of times it takes for 0 to equal itemsDrawn
                    CALL all itemToBeDrawn functions untill ARRAY INDEX = itemsDrawn
                END FOR
                PRINT "Thanks for drawing my face!" on Portrait
                LOG "Thanks for drawing my face!"
            END IF

        END TRIGGERED event

        





END - Program