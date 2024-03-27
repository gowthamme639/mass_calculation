function calculateMass() {
    var thickness = parseFloat(document.getElementById('thickness').value);
    var density = parseFloat(document.getElementById('density').value);
    var area = parseFloat(document.getElementById('area').value);

    var mass = thickness * density * area;

    if (!isNaN(mass)) {
        document.getElementById('result').innerText = 'Mass: ' + mass.toFixed(2)  + ' kg';
    } else {
        document.getElementById('result').innerText  = 'Please enter valid input.';
    }
}
function reset() {
    document.getElementById('thickness').value = '';
    document.getElementById('area').value = '';
    document.getElementById('result').innerText = '';
}