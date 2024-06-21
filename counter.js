document.addEventListener('DOMContentLoaded', function () {
    let cnt = localStorage.getItem('visitCount');
    if (cnt === null) { cnt = 0; };
    cnt++;
    localStorage.setItem('visitCount', cnt);
    document.getElementById('counter').innerText = cnt;
});
function linklist(what){
var selectedopt=what.options[what.selectedIndex]
if (document.getElementById && selectedopt.getAttribute("target")=="new")
window.open(selectedopt.value)
else
window.location=selectedopt.value
}
-->
