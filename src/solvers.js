/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
  var solution = new Board({n: n});
  var rookCount = 0;
  //choose a base case: rook at 0,0;
  //iterate over board, 
  //solution.togglePiece(0, 0);
  // for (var i = 0; i < n; i++) {
  //   for (var j = 0; j < n; j++) {
  //     //if a rook doesn't conflict with previous rooks on board
  //     var square = this.get(i)[j];
  //     if (!solution.hasAnyRooksConflicts()) {

  //     }
      
      
  //   }
  // iterate over rows
  // declare variables r for row and c for column
  var r = 0;
  var c = 0;
  while (rookCount !== n || c < n || r < n) {
    //debugger;
    solution.togglePiece(r, c);
    if (!solution.hasAnyRooksConflicts()) {
      r++;
      c++;
      rookCount++;
    } else {
      solution.togglePiece(r, c);
      if (c + 1 < n) {
      // increment c by one if less than n 
        c++;
      } else {
        //else set r++ and reset c to 0
        r++;
        c = 0;
      }
    }
  }
  //debugger;
  //if n rooks have been added, return as a solution

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution.rows();
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
