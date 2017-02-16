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
  // iterate over rows
  // declare variables row for row and c for column
  var row = 0;
  var col = 0;
  while (rookCount !== n || col < n || row < n) {
    solution.togglePiece(row, col);
    if (!solution.hasAnyRooksConflicts()) {
      row++;
      col++;
      rookCount++;
    } else {
      solution.togglePiece(row, col);
      if (col + 1 < n) {
      // increment col by one if less than n 
        col++;
      } else {
        //else set row++ and reset col to 0
        row++;
        col = 0;
      }
    }
  }
  //if n rooks have been added, return as a solution

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution.rows();
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0;

  //use inner recursive function
  var rookIterator = function(numberOfRooksLeft) { //2
    if (numberOfRooksLeft === 0) {
      debugger;
      solutionCount++;
      return;
    } else {
      var solution = new Board({n: n});
      var i = 0;

      solution.togglePiece(n - numberOfRooksLeft, i);
      while (solution.hasAnyRooksConflicts()) {
        solution.togglePiece(n - numberOfRooksLeft, i);
        solution.togglePiece(n - numberOfRooksLeft, ++i);
        if (i === n) {
          break;
        }
      }
      
      //if (rooksOnBoard === n && !solution.hasAnyRooksConflicts()), then solutionCount++
      return rookIterator(numberOfRooksLeft - 1);
    }
  };
  
  rookIterator(n);
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
