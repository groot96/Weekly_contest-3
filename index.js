
let count = 0;

function decrement() {
    if (count == 0) {
        document.getElementById("dec").disabled = true;
        document.getElementById("msg").innerHTML = "Error : Cannot go below 0"
        document.getElementById("msg").style.color = "red"
        document.getElementById("count").innerHTML = count;

    } else {
        count -= 1;

        document.getElementById("count").innerHTML = count;

    }
}
function increment() {
    document.getElementById("dec").disabled = false;
    document.getElementById("msg").innerHTML = " "
    document.getElementById("res").style.opacity=1;


    count += 1;
    document.getElementById("count").innerHTML = count;

}
function reset() {
    count = 0;
    document.getElementById("count").innerHTML = count;
    document.getElementById("res").style.opacity=0;

}
