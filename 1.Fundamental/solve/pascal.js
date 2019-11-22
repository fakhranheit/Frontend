function pascal(n) {
    var result = [];
    result[0] = [1];
    result[1] = [1, 1];
    for (var row = 2; row < n; row++) {
        result[row] = [1];
        for (var col = 1; col <= row - 1; col++) {
            result[row][col] = result[row - 1][col] + result[row - 1][col - 1];
            result[row].push(1);
        }
    }
    return result;
}
for (var i = 0; i < pascal(10).length; i++) {
    console.log(pascal(5)[i] + " ");
}