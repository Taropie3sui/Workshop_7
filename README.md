# Workshop_7

Simulation

Objects->easy to generate more of the same thing

Class object(e.g.ball){
Constructor(){
This.x =100;
This.y=100;
}

*new function
CheckEdges(){
If (this.x <15){
This.x =15;
}else if (this.x> width -15){
This.x=width-15;
……….
}

Random walk/drunken walk
Function setup
Create canvas
Background

Class walker{
Constructor (x,y){
This.x=x;
This.y=y;
}

Step(){
This,x =random(-1,1);

This,y =random(-1,1);
}

Show(){
StrokeWeight(2);
Stroke(255);
Point(this.x, this.y);
}

->
Function setup
New:
For (i=0; i<20, i++){
Lex x= random (0, width);
Let y = random (0,height);
Walkers [i] = new walker(x, y);

Function draw(){
For (x=0; x<walker.length; x++){
Walker[x].step();
Walkers[x].show();
}
}

=>walkers in random locations and walk to build up the canvas
·

URL: https://taropie3sui.github.io/Workshop_7/
