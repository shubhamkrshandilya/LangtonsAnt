//reference- https://www.youtube.com/watch?v=NWBToaXK5T0
//Langton's Ant (Katie Stekles)
let rows;
let cols;
let gridSize;
let grids = [];
let x;
let y;
let dir = [];
function setup() {
   createCanvas(481,481);
   gridSize = 2;
   cols = width / gridSize;
   rows = height / gridSize;
   // background(221);
   for(let i = 0; i < rows; i++){
      grids[i] = new Array(floor(cols));
   }

   for(let i = 0; i < rows; i++){
      for(let j = 0; j < cols; j++){
         grids[i][j] = new Grid(i, j, gridSize);
      }
   }
   for(let i = 0; i < 4; i++){
      dir[i] = 0;
   }
   dir[1] = 1;
   x = floor(rows/2);
   y = floor(cols/2);
   // grids[floor(rows/2)][floor(cols/2)].vis = true;
   
}

function draw(){
   background(231);
   drawGrid();
   if(x < width && y < height && x > 0 && y > 0)
   {
      
      if(!grids[x][y].vis){
         grids[x][y].vis = true;
         if(dir[0] === 1){
            dir[0] = 0;
            dir[1] = 1;
            y--;
            // grids[x][y - 1].vis = true;
         }else if(dir[1] === 1){
            dir[1] = 0;
            dir[2] = 1;
            x++;
            // grids[x + 1][y].vis = true;
         }else if(dir[2] === 1){
            dir[2] = 0;
            dir[3] = 1;
            y++;
            // grids[x][y + 1].vis = true;
         }else if(dir[3] === 1){
            dir[3] = 0;
            dir[0] = 1;
            x--;
            // grids[x - 1][y].vis = true;
         }
         // console.log()
         
      }else{
         grids[x][y].vis = false;
         if(dir[0] === 1){
            dir[0] = 0;
            dir[3] = 1;
            y++;
            // grids[x][y - 1].vis = true;
         }else if(dir[1] === 1){
            dir[1] = 0;
            dir[0] = 1;
            x--;
            // grids[x + 1][y].vis = true;
         }else if(dir[2] === 1){
            dir[2] = 0;
            dir[1] = 1;
            y--;
            // grids[x][y + 1].vis = true;
         }else if(dir[3] === 1){
            dir[3] = 0;
            dir[2] = 1;
            x++;
            // grids[x - 1][y].vis = true;
         }
         
      }
      for(let i = 0; i < rows; i++){
         for(let j = 0; j < cols; j++){
            if(grids[i][j].visited()){
               grids[i][j].show();
            }
         }
      }

   }

   function drawGrid(){
      for(let i = 0; i < rows; i++){
         line(0, i*gridSize, width, i*gridSize);
         
      }
      for(let j = 0; j < cols; j++){
         line(j*gridSize, 0, j*gridSize, height);
      }
   }
}

class Grid{
   constructor(i, j, gridSize){
      this.i = i;
      this.j = j;
      this.gridSize = gridSize;
      this.vis = false;
   }
   show(){
      // rectMode(CENTER, CENTER);
      fill(0);
      rect(this.i*this.gridSize, this.j*this.gridSize, this.gridSize, this.gridSize);
   }
   visited(){
      return this.vis;
   }

}

