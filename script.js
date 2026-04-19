
//Script to search which color is missing.

const colors = ["🟥", "🟧", "🟨", "🟩", "🟦", "🟪", "🟫"];

const grid1=[
["🟥", "🟧", "🟨", "🟩", "🟦", "🟥", "🟧"],     
["🟨", "🟩", "🟦", "🟥", "🟨", "🟩", "🟦"],     
["🟥", "🟧", "🟨", "🟩", "🟦", "🟥", "🟨"],     
["🟩", "🟦", "🟥", "🟧", "🟨", "🟩", "🟦"],     
["🟨", "🟥", "🟧", "🟨", "🟩", "🟦", "🟥"],     
["🟦", "🟩", "🟨", "🟥", "🟧", "🟩", "🟦"],    
["🟥", "🟧", "🟨", "🟩", "🟦", "🟨", "🟥"]
];

let grid2=[
          ["🟥", "🟧", "🟨", "🟩", "🟦", "🟪", "🟥"], 
          ["🟨", "🟩", "🟦", "🟪", "🟥", "🟧", "🟨"], 
          ["🟦", "🟥", "🟧", "🟨", "🟩", "🟪", "🟦"], 
          ["🟩", "🟦", "🟪", "🟥", "🟧", "🟨", "🟩"], 
          ["🟧", "🟨", "🟩", "🟦", "🟪", "🟥", "🟧"], 
          ["🟪", "🟧", "🟨", "🟩", "🟦", "🟥", "🟪"], 
          ["🟥", "🟦", "🟩", "🟪", "🟨", "🟧", "🟦"]
]
 
function findMissingColors(grid) {

          //empty array pa' llenar con los colores faltantes
          let mColors= [];
          // to save the matching colors (will be used in a for loop)
          let array = [];

          //This helps to break for loops
          let verifier= false;

          //for loop that selects each color of the colors array
          //Se hace pa' ir color por color y compararlo con el array de arrays

for(let c = 0; c < colors.length; c++){   

// for of the array of arrays (for each) it helps to select each array of the grid parameter for example grid[0], grid[1], grid[2] y asi

    for(let f = 0; f < grid.length; f ++) {

          // verifier that helps to break once a color has been found, once it is broken, it finishes this loop to go back to the colors loop, so we can start with the other color

           if(verifier){
                              verifier=false;
                              break
                    }


                    // This for loop helps to compare the color with the inner content of the array
           for(let i = 0; i < grid[f].length; i++){
                              
                    if(colors[c] === grid[f][i] ){
                             
                              array.push(colors[c]);
                              verifier=true;
                              break;
                    };


           }
    }     

}  

// for loop to search which color is missing
for (let cf= 0; cf < colors.length; cf ++ ){
          if(array.indexOf(colors[cf]) === -1){
                    mColors.push(colors[cf]);
          }
}
  return mColors
} 

console.log(findMissingColors(grid2));

