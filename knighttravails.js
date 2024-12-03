function knightMoves(start, end) {
  const xDir = [-2, -2, -1, -1, 1, 1, 2, 2];
  const yDir = [-1, 1, -2, 2, -2, 2, -1, 1];
  let moves = 0;
  let queue = [[start, [start]]];
  const visited = new Set();
  visited.add(start.toString());

  while (queue.length) {
    let size = queue.length;
    for (let i = 0; i < size; i++) {
      const [current, path] = queue.shift();

      if (current[0] === end[0] && current[1] === end[1]) {
        printMoves(path, moves);
      }

      for (let j = 0; j < xDir.length; j++) {
        const newX = current[0] + xDir[j];
        const newY = current[1] + yDir[j];
        const newPos = [newX, newY];

        if (newX < 8 && newX >= 0 && newY < 8 && newY >= 0 && !visited.has(newPos.toString())) {
          visited.add(newPos.toString());
          queue.push([newPos, [...path, newPos]]);
        }
      }
    }
    moves++;
  }
}

function printMoves(path, moves) {
  console.log(`You made it in ${moves} move(s)! Here's your path: `);
  path.forEach((x) => {
    console.log(x);
  });
}

knightMoves([0, 0], [7, 7]);
