function knightMoves(start, end) {
  const xDir = [-2, -2, -1, -1, 1, 1, 2, 2];
  const yDir = [-1, 1, -2, 2, -2, 2, -1, 1];
  let moves = 0;
  let path;
  let queue = [];
  queue.push(start);

  while (queue.length) {
    let size = queue.length;
    for (let i = 0; i < size; i++) {
      const current = queue.shift();

      if (current[0] === end[0] && current[1] === end[1]) {
        return moves;
      }

      for (let j = 0; j < xDir.length; j++) {
        const newX = current[0] + xDir[j];
        const newY = current[1] + yDir[j];
        if (newX < 8 && newX >= 0 && newY < 8 && newY >= 0) {
          queue.push([newX, newY]);
        }
      }
    }
    moves++;
  }
}

console.log(knightMoves([3, 3], [4, 3]));
