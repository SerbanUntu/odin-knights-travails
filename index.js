const GRID_SIZE = 8
const MOVES = [
	[-2, -1],
	[-2, 1],
	[-1, -2],
	[-1, 2],
	[1, -2],
	[1, 2],
	[2, -1],
	[2, 1],
]

function knightMoves(start, end) {
	const visited = []
	const parent = []
	const q = []
	let index = 0
	for (let i = 0; i < GRID_SIZE; i++) {
		visited.push(Array(GRID_SIZE).fill(false))
		parent.push(Array(GRID_SIZE).fill(null))
	}
	visited[start[0]][start[1]] = true
	q.push(start)
	while (q.length >= index + 1) {
		let currentCell = q[index]
		if (currentCell[0] === end[0] && currentCell[1] === end[1]) {
			const path = [[currentCell[0], currentCell[1]]]
			while (parent[currentCell[0]][currentCell[1]] !== null) {
				currentCell = parent[currentCell[0]][currentCell[1]]
				path.push([currentCell[0], currentCell[1]])
			}
			path.reverse()
			console.log(`You made it in ${path.length - 1} moves! Here's your path:`)
			path.forEach(cell => console.log(cell))
		}
		MOVES.forEach(move => {
			const newX = currentCell[0] + move[0]
			const newY = currentCell[1] + move[1]
			if (
				newX >= 0 &&
				newX < GRID_SIZE &&
				newY >= 0 &&
				newY < GRID_SIZE &&
				visited[newX][newY] === false
			) {
				q.push([newX, newY])
				visited[newX][newY] = true
				parent[newX][newY] = currentCell
			}
		})
		index++
	}
}

knightMoves([0, 0], [7, 7])
