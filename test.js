// (207,217,235)
// (231,226,255)   diff = +24, +9, +20
// (172,183,221)   diff = -35, -34, -14
// (177,246,255)   diff = -30, +29, 0
// (185,199,212)   diff = -22, -18, -23

// F1E7DA 
    // 241, 231, 218
    // color:241 231 218
    // color:265 240 238
    // color:206 197 204
    // color:211 260 238
    // color:219 213 195

// E6FDDF
    // 230, 253, 223
    // color:230 253 223   
    // color:254 262 243   
    // color:195 219 209   
    // color:200 282 243   
    // color:208 235 200


// BFFFFF
    // 191, 255, 255
    // color:191 255 255   
    // color:215 264 275   
    // color:156 221 241   
    // color:161 284 275   
    // color:169 237 232

// FFFFE1
    // 255, 255, 225
    // color:255 255 225   
    // color:279 264 245   
    // color:220 221 211   
    // color:225 284 245   
    // color:233 237 202

// FFDDDD
    // 255, 221, 221
    // color:255 221 221   
    // color:279 230 241   
    // color:220 187 207   
    // color:225 250 241   
    // color:233 203 198"

// E9E9E9
    // 233, 233, 233
    // color:233 233 233
    // color:257 242 253
    // color:198 199 219 
    // color:203 262 253
    // color:211 215 210

// F9E9F9 
    // 249, 233, 249
     // color:249 233 249   
     // color:273 242 269   
     // color:214 199 235   
     // color:219 262 269   
     // color:227 215 226


// D9DFCB
    // 217, 223, 203
    // color:217 223 203   
    // color:241 232 223   
    // color:182 189 189   
    // color:187 252 223   
    // color:195 205 180


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