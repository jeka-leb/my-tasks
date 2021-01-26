const snakeArray = (snakeStart) => {
    let matrix = Array.from({
        length: 6
    }, () => []);
    let dir = 1;
    let m = 5;
    let x = 0;
    let y = 0;
    let j = 1;
    let step = (dir) => {

        switch (dir) {
            case 1:
                return y++;
            case 2:
                return x++;
            case 3:
                return y--;
            case 4:
                return x--
        }
    }
    while (snakeStart <= 42) {
        m = j % 2 === 0 ? m - 2 : m + 1;
        for (let i = 0; i <= m; i++) {
            matrix[x][y] = snakeStart;
            snakeStart++;
            if (i === m) {
                break
            }
            step(dir);
        }
        j++;
        if (dir === 4) {
            dir = 0
        }
        dir++;
        step(dir);
    }
    return matrix;
}
module.exports = snakeArray;