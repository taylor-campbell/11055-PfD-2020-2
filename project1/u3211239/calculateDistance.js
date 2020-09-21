/*  Programming for Design
    Project 1 - Self Portrait
    Keir Herbert (u3211239)
    September 2020
*/

/*  This function returns the distance between 2 points using Pythagoras' theorem. I'm not quite sure
    why it's still referred to as theory; it's pretty solid!
*/
function calculateDistance(xPoint1, yPoint1, xPoint2, yPoint2) {
    var xDiff = xPoint1 - xPoint2;
    var yDiff = yPoint1 - yPoint2;

/*  The distance between the two points is equal to the square root of the sum of the square of both
    x and y deltas. Yeah, I don't think I could've worked that out on my own. Thanks Mr P!
*/
    return Math.sqrt((xDiff * xDiff) + (yDiff * yDiff));
}