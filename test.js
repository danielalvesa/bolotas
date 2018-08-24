// (207,217,235)
// (231,226,255)   diff = +24, +9, +20
// (172,183,221)   diff = -35, -34, -14
// (177,246,255)   diff = -30, +29, 0
// (185,199,212)   diff = -22, -18, -23
// F1E7DA 
    // 241, rr231, 218
// E6FDDF
    // 230, 253, 223
// BFFFFF
    // 191, 255, 255 
// FFFFE1
    // 255, 255, 225
// FFDDDD
    // 255, 221, 221
// E9E9E9
    // 233, 233, 233
// F9E9F9 
    // 249, 233, 249
// D9DFCB
    // 217, 223, 203

function getColors(r, g, b){
    var color = getRGB(r,g, b);
    var color1 = getSecondRGB(r,g, b);
    var color2 = getThirdRGB(r,g, b);
    var color3 = getFourthRGB(r,g, b);

    return "   color:"+r+" " + g + " " + b + color + color1 + color2 + color3;
}

function getRGB(r, g, b){
    var r1=r+24;
    var r2=g+9;
    var r3=b+20;
    return "   color:"+r1+" "+r2+" "+r3;
}

function getSecondRGB(r, g, b){
    var r1=r-35;
    var r2=g-34;
    var r3=b-14;
    return "   color:"+r1+" "+r2+" "+r3;
}

function getThirdRGB(r, g, b){
    var r1=r-30;
    var r2=g+29;
    var r3=b+20;
    return "   color:"+r1+" "+r2+" "+r3;
}

function getFourthRGB(r, g, b){
    var r1=r-22;
    var r2=g-18;
    var r3=b-23;
    return "   color:"+r1+" "+r2+" "+r3;
}