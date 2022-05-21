function resetSVG(){
    // d3.selectAll('svg').remove();
    var svg = d3.select("svg");
    svg.selectAll("*").remove();

    var checkboxes = document.getElementsByName("check")
    for (var checkbox of checkboxes) {
        checkbox.checked = false;
    }
}