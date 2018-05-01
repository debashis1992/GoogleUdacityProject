// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
var submit_btn = document.getElementById("submit_button");
submit_btn.addEventListener("click" , makeGrid);

function makeGrid() {
    // Your code goes here!
    var height = document.getElementById("inputHeight").value;
    var width = document.getElementById("inputWeight").value;
    var html = "";    

    console.log(height+" "+width);
    var tableSelector = $('#pixelCanvas');
    //alert(tableSelector);
    for(var i=0;i<height;i++) {
        html+= "<tr>";
        for(var j=0;j<width;j++) {
            html+= "<td class='white-color'> </td>";
        }
        html+= "</tr>";
    }
    tableSelector.append(html);
    $("td").click(function(event) {
        var color = document.getElementById("colorPicker").value;
        var attr = $(event.target).attr("class");
        if(attr == "white-color") {
            $(event.target).removeClass("white-color");
            $(event.target).css('background-color', color);
        }
        else {
            $(event.target).addClass("white-color");
            $(event.target).css('background-color', 'white');
        }
    });


}




//$("td").css("background-color","red");