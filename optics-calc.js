var default_alpha = 60;
var alpha_height = Math.PI/180*default_alpha;

$("#calc").on('click', function() {
    var S = Number($("#S").val());
    var width = Number($("#photo_width").val());
    var height = Number($("#photo_height").val());
    var x = Number($("#x").val());
    var y = Number($("#y").val());

    x = x > width/2 ? width-x : width/2-x;
    y = y > height/2 ? height-y : height/2-y;
    var F = height/2/Math.tan(alpha_height/2);
    var alpha_width = 2*Math.atan(width/2/F);
    var W = 2*Math.atan(alpha_width/2)*S;
    var H = 2*Math.atan(alpha_height/2)*S;
    var alpha_x = 2*Math.atan(x/2/F);
    var alpha_y = 2*Math.atan(y/2/F);
    var X = Math.tan(alpha_x/2)*2*S;
    var Y = Math.tan(alpha_y/2)*2*S;
    X = x > width/2 ? W/2+X : W/2-X;
    Y = y > height/2 ? H/2+Y : H/2-Y;
    $("#params").text("Размер захватываемой области: " + W.toString() + "x"+ H.toString());
    $("#answer").text("Точка: " + X.toString() + ", "+ Y.toString());
});