// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

$("#testButton").click(function () {
    $("testText").css("color", "red");
});

$("#cssButton").click(function () {
    var currentSize = parseInt($("#testText").css("font-size"));
    var newSize = currentSize + 2;
    $("#testText").css("font-size", newSize + "px");
});
