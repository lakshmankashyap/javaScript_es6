var i = 0;
function bigLoops() {
    if(i < 10000000) {
        i = i + 1;
        postMessage(i);
    }
 
    // Wait for sometime before running this script again
    setTimeout("bigLoops()", 500);
}
bigLoops();