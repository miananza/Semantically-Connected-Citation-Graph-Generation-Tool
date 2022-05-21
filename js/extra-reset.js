function extrareset(){
var checkboxes = document.getElementsByName("check")
    for (var checkbox of checkboxes) {
        checkbox.checked = false;
    }
}