function setup() {
  createCanvas(1200, 1200);
}

function draw() {
  background(255);
noStroke();

drawingContext.save();

//기쁨 01
let linearGradient = drawingContext.createLinearGradient(117, 0, 117, 247);
linearGradient.addColorStop(0, '#F81224');
linearGradient.addColorStop(1, '#FF92A9');
drawingContext.fillStyle = linearGradient;


  beginShape();
  curveVertex(291, 192);//control
  curveVertex(292, 151);//anchor//control
  curveVertex(292, 97);//anchor//anchor
  curveVertex(278, 37);//control//anchor
  curveVertex(253, 28);         //control
  curveVertex(228, 39);
  curveVertex(220, 62);
  curveVertex(267, 136);
  curveVertex(280, 159);
  curveVertex(285, 180);
  curveVertex(280, 197);
  curveVertex(273, 201);
  curveVertex(259, 196);
  curveVertex(235, 153);
  curveVertex(157, 43);
  curveVertex(141, 50);
  curveVertex(133, 81);
  curveVertex(162, 159);
  curveVertex(177, 178);
  curveVertex(188, 192);
  curveVertex(206, 210);
  curveVertex(219, 222);
  curveVertex(223, 227);
  curveVertex(222, 229);
  curveVertex(217, 229);
  curveVertex(150, 168);
  curveVertex(142, 153);
  curveVertex(120, 108);
  curveVertex(75, 65);
  curveVertex(74, 121);
  curveVertex(105, 163);
  curveVertex(194, 230);
  curveVertex(213, 243);
  curveVertex(191, 242);
  curveVertex(81, 211);
  curveVertex(58, 248);
  curveVertex(110, 274);
  curveVertex(277, 263);
  curveVertex(286, 261);
  curveVertex(286, 257);
  curveVertex(257, 235);
  curveVertex(185, 143);
  curveVertex(192, 135);
  curveVertex(201, 136);
  curveVertex(234, 175);
  curveVertex(246, 193);
  curveVertex(255, 205);
  curveVertex(280, 210);
  curveVertex(291, 192);
  curveVertex(292, 151);
  curveVertex(292, 97);
  endShape();
endShape(CLOSE);

drawingContext.restore();


// 슬픔 배경
 fill('#154D5B');
   square(600, 0, 600);


// 화남 배경
 fill('#1A1D1E');
   square(0, 600, 600);

// 두려움 배경
 fill('#340C2F');
   square(600, 600, 600);

//두려움 연보라색 부분 01
fill('#7067CF');
noStroke();
beginShape();
vertex(682 + 37,   661 + 300);  // 719,  961
vertex(682 + 0,    661 + 291);  // 682,  952
vertex(682 + 155,  661 + 0);    // 837,  661
vertex(682 + 223,  661 + 67.5); // 905,  728.5
vertex(682 + 223,  661 + 162.5);// 905,  823.5
vertex(682 + 147,  661 + 216);  // 829,  877
vertex(682 + 147,  661 + 254.5);// 829,  915.5
vertex(682 + 180,  661 + 262);  // 862,  923
vertex(682 + 180,  661 + 414);  // 862,  1075
vertex(682 + 83.5, 661 + 421);  // 765.5, 1082
vertex(682 + 83.5, 661 + 352.5);// 765.5, 1013.5
vertex(682 + 141.5,661 + 354);  // 823.5, 1015
vertex(682 + 141.5,661 + 295);  // 823.5, 956
vertex(682 + 86,   661 + 319);  // 768,  980
vertex(682 + 37,   661 + 311);  // 719,  972
endShape(CLOSE);


fill('#7067CF');
noStroke();

beginShape();
vertex(765 + 96.5, 1075 + 0);    // 861.5, 1075
vertex(765 + 0,    1075 + 7.5);  // 765,   1082.5
vertex(765 + 140,  1075 + 46);   // 905,   1121
vertex(765 + 140,  1075 + 125.5);// 905,   1200.5
vertex(765 + 226.5,1075 + 125.5);// 991.5, 1200.5
vertex(765 + 225,  1075 + 25);   // 990,   1100
endShape(CLOSE);


fill('#7067CF');
noStroke();

beginShape();
vertex(913 + 0,   602 + 154);  // 913,  756
vertex(913 + 79.5,602 + 0);    // 992.5, 602
vertex(913 + 158, 602 + 0);    // 1071, 602
vertex(913 + 195, 602 + 117.5);// 1108, 719.5
vertex(913 + 173, 602 + 197);  // 1086, 799
vertex(913 + 195, 602 + 221);  // 1108, 823
vertex(913 + 195, 602 + 272.5);// 1108, 874.5
vertex(913 + 128, 602 + 287);  // 1041, 889
endShape(CLOSE);


fill('#7067CF');
noStroke();

beginShape();
vertex(914 + 0,     919 + 91);   // 914,  1010
vertex(914 + 3.5,   919 + 29);   // 917.5, 948
vertex(914 + 81.5,  919 + 0);    // 995.5, 919
vertex(914 + 188.5, 919 + 63);   // 1102.5, 982
vertex(914 + 188.5, 919 + 198.5);// 1102.5, 1117.5
vertex(914 + 148.5, 919 + 233);  // 1062.5, 1152
vertex(914 + 80,    919 + 101);  // 994,  1020
endShape(CLOSE)


//두려움 초록색 부분 02

fill('#BFFFCC');
noStroke();

beginShape();
vertex(913 + 0,    600 + 157.5); // 913,   757.5
vertex(913 + 0,    600 + 0);     // 913,   600
vertex(913 + 81.5, 600 + 0);     // 994.5, 600
vertex(913 + 81.5, 600 + 88);    // 994.5, 688
endShape(CLOSE);


fill('#BFFFCC');
noStroke();

beginShape();
vertex(914 + 0,  918 + 92);   // 914,  1010
vertex(914 + 0,  918 + 24.5); // 914,  942.5
vertex(914 + 81, 918 + 0);    // 995,  918
vertex(914 + 81, 918 + 85);   // 995,  1003
endShape(CLOSE);



fill('#BFFFCC');
noStroke();

beginShape();
vertex(680 + 0,    660 + 291);  // 680,  951
vertex(680 + 0,    660 + 255);  // 680,  915
vertex(680 + 156,  660 + 0);    // 836,  660
vertex(680 + 156,  660 + 113);  // 836,  773
vertex(680 + 86.5, 660 + 189);  // 766.5, 849
vertex(680 + 86.5, 660 + 279);  // 766.5, 939
vertex(680 + 36,   660 + 308);  // 716,  968
vertex(680 + 36,   660 + 255);  // 716,  915
endShape(CLOSE);


fill('#BFFFCC');
noStroke();

beginShape();
vertex(793 + 0,  955 + 59.5); // 793,  1014.5
vertex(793 + 0,  955 + 13);   // 793,  968
vertex(793 + 30, 955 + 0);    // 823,  955
vertex(793 + 30, 955 + 59.5); // 823,  1014.5
endShape(CLOSE);


fill('#BFFFCC');
noStroke();

beginShape();
vertex(721 + 0,   1013 + 124); // 721,  1137
vertex(721 + 0,   1013 + 9.5); // 721,  1022.5
vertex(721 + 44.5,1013 + 0);   // 765.5, 1013
vertex(721 + 44.5,1013 + 70);  // 765.5, 1083
vertex(721 + 185, 1013 + 108); // 906,  1121
vertex(721 + 185, 1013 + 189); // 906,  1202
vertex(721 + 83,  1013 + 189); // 804,  1202
endShape(CLOSE);


fill('#BFFFCC');
noStroke();

beginShape();
vertex(994 + 0,    1014 + 120.5); // 994,   1134.5
vertex(994 + 0,    1014 + 6);     // 994,   1020
vertex(994 + 69.5, 1014 + 0);     // 1063.5, 1014
vertex(994 + 69.5, 1014 + 138);   // 1063.5, 1152
endShape(CLOSE);


///두려움 끝///

//화남 여백 빨간색 01


fill('#F15946');
noStroke();

beginShape();
vertex(0,     1100);
vertex(96,    1160.5);
bezierVertex(107.5, 1167.7, 118.9, 1174.9, 130.2, 1182.1);
bezierVertex(135,   1185.1, 142.7, 1189.6, 147,   1192.8);
bezierVertex(143.6, 1191.8, 139.9, 1191.2, 136.4, 1190.5);
bezierVertex(121.3, 1187.6, 106.3, 1184.2, 91.2,  1181.4);
bezierVertex(88.4,  1180.9, 85.2,  1180.4, 82.5,  1179.3);
bezierVertex(80.7,  1185.3, 79.3,  1193.3, 78.4,  1199.5);
vertex(0,     1199.5);
endShape(CLOSE);


fill('#F15946');
noStroke();

beginShape();
vertex(0,     951);
vertex(85.9,  1043.5);
vertex(116.7, 1076.6);
bezierVertex(121.9, 1082.2, 128.2, 1089.4, 133.5, 1094.7);
bezierVertex(130.8, 1092.7, 126.5, 1090.1, 132.6, 1095.4);
vertex(132.6, 1095.4);
bezierVertex(126.5, 1091.3, 119.5, 1087.1, 113.2, 1083.1);
bezierVertex(94.3,  1071.4, 63.6,  1051.9, 63.6,  1051.9);
bezierVertex(57.5,  1048.0, 51.3,  1044.1, 45.2,  1040.2);
bezierVertex(42.7,  1038.6, 37.6,  1035.6, 35.4,  1033.8);
bezierVertex(30.6,  1042.3, 24.0,  1052.4, 18.7,  1060.7);
bezierVertex(12.5,  1070.6, 6.3,   1080.5, 0,     1090.4);
endShape(CLOSE);


fill('#F15946');
noStroke();

beginShape();
vertex(0, 790);
bezierVertex(5.8,  797.6, 12.6, 808.3, 18.1, 816.4);
vertex(48.5,  860.7);
bezierVertex(73.7, 897.9, 99.8, 935.1, 124.8, 972.4);
vertex(123.6, 972.4);
bezierVertex(119.1, 967.0, 114.6, 962.5, 109.9, 957.5);
vertex(95.9,  942.4);
vertex(49.9,  892.9);
vertex(16.9,  923.5);
bezierVertex(11.8,  928.2, 5.2,  934.9, 0,    939.2);
endShape(CLOSE);


fill('#F15946');
noStroke();

beginShape();
vertex(0,     600);
vertex(83.7,  600);
bezierVertex(85.5,  604.5, 87.3,  610.9, 88.9,  615.9);
vertex(103.5, 659.5);
vertex(118.5, 704.8);
bezierVertex(120.6, 711.4, 123.3, 718.3, 125.0, 724.9);
bezierVertex(115.4, 729.8, 104.1, 734.0, 94.3,  738.6);
bezierVertex(89.8,  740.7, 85.5,  742.3, 81.0,  744.7);
bezierVertex(83.0,  748.3, 85.4,  754.0, 87.0,  757.8);
vertex(94.1,  773.9);
vertex(117.3, 826.0);
vertex(116.3, 826.6);
bezierVertex(114.4, 823.6, 111.0, 818.9, 108.8, 815.7);
vertex(94.0,  794.2);
vertex(61.7,  746.9);
bezierVertex(53.4,  734.9, 45.2,  722.8, 37.1,  710.6);
bezierVertex(34.5,  712.2, 29.4,  716.0, 26.6,  717.8);
vertex(0, 736.0);
endShape(CLOSE);


fill('#F15946');
noStroke();

beginShape();
vertex(223,   600);
vertex(243.1, 600);
bezierVertex(244.7, 630.7, 247.5, 661.4, 248.9, 692.1);
bezierVertex(249.0, 693.6, 249.2, 695.2, 249.2, 696.6);
bezierVertex(249.2, 697.9, 249.4, 699.9, 248.7, 700.9);
bezierVertex(243.5, 682.0, 239.0, 662.8, 234.1, 643.9);
vertex(227.7, 618.7);
bezierVertex(226.1, 612.8, 224.1, 605.9, 223, 600);
endShape(CLOSE);


fill('#F15946');
noStroke();

beginShape();
vertex(319,   600);
vertex(326.1, 600);
bezierVertex(325.0, 610.3, 323.0, 622.2, 321.5, 632.5);
bezierVertex(320.9, 631.6, 320.9, 630.1, 320.7, 628.9);
bezierVertex(320.3, 619.4, 319.4, 609.8, 319, 600);
endShape(CLOSE);


fill('#F15946');
noStroke();

beginShape();
vertex(402.5, 600);     // 9.548, 0
vertex(600.1, 600);     // 207.138, 0
vertex(600.1, 714.1);   // 207.138, 114.061
vertex(600.1, 723.9);   // 207.138, 123.941
vertex(600.1, 885.6);   // 207.138, 285.572
bezierVertex(585.8, 895.7, 570.9, 907.0, 556.7, 917.4);
bezierVertex(538.3, 930.8, 519.9, 944.3, 501.7, 957.9);
vertex(564.9, 821.5);   // 171.961, 221.469
vertex(581.1, 786.6);   // 188.098, 186.589
bezierVertex(584.2, 779.7, 588.7, 769.3, 592.2, 762.7);
bezierVertex(585.4, 760.0, 578.3, 756.4, 571.5, 753.4);
bezierVertex(557.6, 747.1, 543.8, 740.2, 529.7, 734.1);
bezierVertex(538.7, 712.1, 547.5, 690.1, 556.2, 668.0);
bezierVertex(559.1, 660.6, 562.1, 653.2, 565.1, 645.8);
bezierVertex(566.8, 641.4, 568.5, 636.7, 570.6, 632.5);
bezierVertex(558.8, 627.3, 546.3, 622.7, 534.3, 617.9);
vertex(514.3, 609.9);   // 121.272, 9.876
bezierVertex(509.7, 608.0, 504.7, 605.8, 500.1, 604.2);
bezierVertex(498.4, 609.6, 496.4, 614.2, 494.3, 619.4);
vertex(485.3, 641.9);   // 92.256, 41.999
vertex(463.8, 695.7);   // 70.843, 95.733
vertex(435.0, 768.2);   // 42.009, 168.168
bezierVertex(431.9, 776.0, 428.8, 783.8, 425.6, 791.6);
bezierVertex(423.9, 795.7, 422.5, 799.9, 420.7, 803.9);
bezierVertex(420.1, 803.2, 420.2, 802.6, 420.2, 801.6);
bezierVertex(420.8, 795.9, 421.8, 790.4, 422.6, 784.7);
vertex(428.5, 742.6);   // 35.531, 142.623
bezierVertex(431.8, 719.7, 434.7, 696.5, 438.4, 673.6);
vertex(407.4, 669.3);   // 14.391, 69.308
bezierVertex(402.5, 668.6, 397.9, 667.7, 393.0, 667.2);
bezierVertex(394.5, 659.6, 395.2, 650.8, 396.4, 643.1);
bezierVertex(398.6, 628.7, 400.8, 614.4, 402.5, 600);
endShape(CLOSE);


fill('#F15946');
noStroke();

beginShape();
vertex(490,   1059.9);  // 0, 80.909
bezierVertex(492.7, 1057.4, 499.5, 1052.8, 502.8, 1050.4);
vertex(527.1, 1032.5);  // 37.137, 53.543
bezierVertex(551.3, 1014.8, 575.7, 996.5, 600.0, 979.0);
vertex(600.0, 1073.4);  // 110.027, 94.400
bezierVertex(598.8, 1071.6, 595.9, 1064.2, 594.8, 1061.8);
vertex(582.5, 1033.8);  // 92.514, 54.800
bezierVertex(580.9, 1030.2, 579.0, 1024.9, 577.1, 1021.8);
bezierVertex(548.0, 1034.3, 518.9, 1047.0, 490.0, 1059.9);
endShape(CLOSE);


fill('#F15946');
noStroke();

beginShape();
vertex(468,   1197.8);  // 0, 19.849
vertex(600.4, 1178.0);  // 132.437, 0
vertex(600.4, 1199.8);  // 132.437, 21.835
vertex(478.9, 1199.8);  // 10.904, 21.835
bezierVertex(475.5, 1198.9, 471.5, 1198.4, 468, 1197.8);
endShape(CLOSE);


///화남 끝///

//슬픔 01

fill('#90ADC2');
noStroke();

beginShape();
vertex(622.3,  159.5);   // 16.274, 159.5
bezierVertex(584.7, 115.5, 621.0, 34.8, 643.8, 0.0);
vertex(776.3,  0.0);     // 170.273, 0
bezierVertex(782.3, 11.2, 784.5, 50.9, 745.3, 120.5);
bezierVertex(696.3, 207.5, 773.3, 245.5, 784.3, 313.5);
bezierVertex(795.3, 381.5, 696.3, 407.5, 667.3, 363.0);
bezierVertex(638.3, 318.5, 669.3, 214.5, 622.3, 159.5);
endShape(CLOSE);


let lg = drawingContext.createLinearGradient(837 + 108.97, 0, 837 + 108.97, 596.5);
lg.addColorStop(0, '#3A7CA5');
lg.addColorStop(1, '#7DA29D');
drawingContext.fillStyle = lg;
noStroke();

beginShape();
vertex(934,   268);    // 97, 268
bezierVertex(939.2, 212.4, 871.5, 66.2, 837, 0);
vertex(983.5,  0);     // 146.5, 0
bezierVertex(989.8, 16.3, 1002.7, 59.8, 1003.5, 103);
bezierVertex(1004.5, 157, 1014.5, 178.5, 1042.5, 219);
bezierVertex(1070.5, 259.5, 1042.5, 286, 1042.5, 352);
bezierVertex(1042.5, 418, 989, 453.5, 972, 512.5);
bezierVertex(958.4, 559.7, 966.3, 588.2, 972, 596.5);
vertex(847,   596.5);  // 10, 596.5
bezierVertex(854.2, 593.2, 864.2, 571.7, 847, 512.5);
bezierVertex(825.5, 438.5, 927.5, 337.5, 934, 268);
endShape(CLOSE);


fill('#9BA0BC');
noStroke();

beginShape();
vertex(1028.4, 490.5);   // 1.431, 302.507
bezierVertex(1033.4, 454.5, 1074.0, 416.5, 1105.4, 350.0);
bezierVertex(1139.4, 278.0, 1077.1, 216.1, 1117.9, 190.5);
bezierVertex(1168.9, 158.5, 1195.5, 442.8, 1184.4, 476.0);
bezierVertex(1176.4, 500.0, 1187.9, 544.0, 1117.9, 579.0);
bezierVertex(1047.9, 614.0, 1020.1, 550.5, 1028.4, 490.5);
endShape(CLOSE);

///슬픔 끝///

//기쁨 오른쪽

let linearGradient2 = drawingContext.createLinearGradient(117, 0, 117, 247);
linearGradient2.addColorStop(0, '#61A8FA');
linearGradient2.addColorStop(1, '#FBA7C9');
drawingContext.fillStyle = linearGradient2;


beginShape();
curveVertex((192-151)+450, -(291-175)+150);
curveVertex((151-151)+450, -(292-175)+150);
curveVertex((97-151)+450,  -(292-175)+150);
curveVertex((37-151)+450,  -(278-175)+150);
curveVertex((28-151)+450,  -(253-175)+150);
curveVertex((39-151)+450,  -(228-175)+150);
curveVertex((62-151)+450,  -(220-175)+150);
curveVertex((136-151)+450, -(267-175)+150);
curveVertex((159-151)+450, -(280-175)+150);
curveVertex((180-151)+450, -(285-175)+150);
curveVertex((197-151)+450, -(280-175)+150);
curveVertex((201-151)+450, -(273-175)+150);
curveVertex((196-151)+450, -(259-175)+150);
curveVertex((153-151)+450, -(235-175)+150);
curveVertex((43-151)+450,  -(157-175)+150);
curveVertex((50-151)+450,  -(141-175)+150);
curveVertex((81-151)+450,  -(133-175)+150);
curveVertex((159-151)+450, -(162-175)+150);
curveVertex((178-151)+450, -(177-175)+150);
curveVertex((192-151)+450, -(188-175)+150);
curveVertex((210-151)+450, -(206-175)+150);
curveVertex((222-151)+450, -(219-175)+150);
curveVertex((227-151)+450, -(223-175)+150);
curveVertex((229-151)+450, -(222-175)+150);
curveVertex((229-151)+450, -(217-175)+150);
curveVertex((168-151)+450, -(150-175)+150);
curveVertex((153-151)+450, -(142-175)+150);
curveVertex((108-151)+450, -(120-175)+150);
curveVertex((65-151)+450,  -(75-175)+150);
curveVertex((121-151)+450, -(74-175)+150);
curveVertex((163-151)+450, -(105-175)+150);
curveVertex((230-151)+450, -(194-175)+150);
curveVertex((243-151)+450, -(213-175)+150);
curveVertex((242-151)+450, -(191-175)+150);
curveVertex((211-151)+450, -(81-175)+150);
curveVertex((248-151)+450, -(58-175)+150);
curveVertex((274-151)+450, -(110-175)+150);
curveVertex((263-151)+450, -(277-175)+150);
curveVertex((261-151)+450, -(286-175)+150);
curveVertex((257-151)+450, -(286-175)+150);
curveVertex((235-151)+450, -(257-175)+150);
curveVertex((143-151)+450, -(185-175)+150);
curveVertex((135-151)+450, -(192-175)+150);
curveVertex((136-151)+450, -(201-175)+150);
curveVertex((175-151)+450, -(234-175)+150);
curveVertex((193-151)+450, -(246-175)+150);
curveVertex((205-151)+450, -(255-175)+150);
curveVertex((210-151)+450, -(280-175)+150);
curveVertex((192-151)+450, -(291-175)+150); // 반복
curveVertex((151-151)+450, -(292-175)+150); // 반복
curveVertex((97-151)+450,  -(292-175)+150); // 반복
endShape();


let linearGradient3 = drawingContext.createLinearGradient(150, 327, 150, 573);
linearGradient3.addColorStop(0, '#FBCD1B');
linearGradient3.addColorStop(1, '#FAE8C0');
drawingContext.fillStyle = linearGradient3;

beginShape();
curveVertex(-(291-175)+170, -(192-151)+450);
curveVertex(-(292-175)+170, -(151-151)+450);
curveVertex(-(292-175)+170, -(97-151)+450);
curveVertex(-(278-175)+170, -(37-151)+450);
curveVertex(-(253-175)+170, -(28-151)+450);
curveVertex(-(228-175)+170, -(39-151)+450);
curveVertex(-(220-175)+170, -(62-151)+450);
curveVertex(-(267-175)+170, -(136-151)+450);
curveVertex(-(280-175)+170, -(159-151)+450);
curveVertex(-(285-175)+170, -(180-151)+450);
curveVertex(-(280-175)+170, -(197-151)+450);
curveVertex(-(273-175)+170, -(201-151)+450);
curveVertex(-(259-175)+170, -(196-151)+450);
curveVertex(-(235-175)+170, -(153-151)+450);
curveVertex(-(157-175)+170, -(43-151)+450);
curveVertex(-(141-175)+170, -(50-151)+450);
curveVertex(-(133-175)+170, -(81-151)+450);
curveVertex(-(162-175)+170, -(159-151)+450);
curveVertex(-(177-175)+170, -(178-151)+450);
curveVertex(-(188-175)+170, -(192-151)+450);
curveVertex(-(206-175)+170, -(210-151)+450);
curveVertex(-(219-175)+170, -(222-151)+450);
curveVertex(-(223-175)+170, -(227-151)+450);
curveVertex(-(222-175)+170, -(229-151)+450);
curveVertex(-(217-175)+170, -(229-151)+450);
curveVertex(-(150-175)+170, -(168-151)+450);
curveVertex(-(142-175)+170, -(153-151)+450);
curveVertex(-(120-175)+170, -(108-151)+450);
curveVertex(-(75-175)+170,  -(65-151)+450);
curveVertex(-(74-175)+170,  -(121-151)+450);
curveVertex(-(105-175)+170, -(163-151)+450);
curveVertex(-(194-175)+170, -(230-151)+450);
curveVertex(-(213-175)+170, -(243-151)+450);
curveVertex(-(191-175)+170, -(242-151)+450);
curveVertex(-(81-175)+170,  -(211-151)+450);
curveVertex(-(58-175)+170,  -(248-151)+450);
curveVertex(-(110-175)+170, -(274-151)+450);
curveVertex(-(277-175)+170, -(263-151)+450);
curveVertex(-(286-175)+170, -(261-151)+450);
curveVertex(-(286-175)+170, -(257-151)+450);
curveVertex(-(257-175)+170, -(235-151)+450);
curveVertex(-(185-175)+170, -(143-151)+450);
curveVertex(-(192-175)+170, -(135-151)+450);
curveVertex(-(201-175)+170, -(136-151)+450);
curveVertex(-(234-175)+170, -(175-151)+450);
curveVertex(-(246-175)+170, -(193-151)+450);
curveVertex(-(255-175)+170, -(205-151)+450);
curveVertex(-(280-175)+170, -(210-151)+450);
curveVertex(-(291-175)+170, -(192-151)+450); // 반복
curveVertex(-(292-175)+170, -(151-151)+450); // 반복
curveVertex(-(292-175)+170, -(97-151)+450);  // 반복
endShape();



let linearGradient4 = drawingContext.createLinearGradient(450, 450, 700, 450);
linearGradient4.addColorStop(0, '#FEC33A');
linearGradient4.addColorStop(1, '#19BD1E');
drawingContext.fillStyle = linearGradient4;

beginShape();
curveVertex(-(192-151)+450, (291-175)+450);
curveVertex(-(151-151)+450, (292-175)+450);
curveVertex(-(97-151)+450,  (292-175)+450);
curveVertex(-(37-151)+450,  (278-175)+450);
curveVertex(-(28-151)+450,  (253-175)+450);
curveVertex(-(39-151)+450,  (228-175)+450);
curveVertex(-(62-151)+450,  (220-175)+450);
curveVertex(-(136-151)+450, (267-175)+450);
curveVertex(-(159-151)+450, (280-175)+450);
curveVertex(-(180-151)+450, (285-175)+450);
curveVertex(-(197-151)+450, (280-175)+450);
curveVertex(-(201-151)+450, (273-175)+450);
curveVertex(-(196-151)+450, (259-175)+450);
curveVertex(-(153-151)+450, (235-175)+450);
curveVertex(-(43-151)+450,  (157-175)+450);
curveVertex(-(50-151)+450,  (141-175)+450);
curveVertex(-(81-151)+450,  (133-175)+450);
curveVertex(-(159-151)+450, (162-175)+450);
curveVertex(-(178-151)+450, (177-175)+450);
curveVertex(-(192-151)+450, (188-175)+450);
curveVertex(-(210-151)+450, (206-175)+450);
curveVertex(-(222-151)+450, (219-175)+450);
curveVertex(-(227-151)+450, (223-175)+450);
curveVertex(-(229-151)+450, (222-175)+450);
curveVertex(-(229-151)+450, (217-175)+450);
curveVertex(-(168-151)+450, (150-175)+450);
curveVertex(-(153-151)+450, (142-175)+450);
curveVertex(-(108-151)+450, (120-175)+450);
curveVertex(-(65-151)+450,  (75-175)+450);
curveVertex(-(121-151)+450, (74-175)+450);
curveVertex(-(163-151)+450, (105-175)+450);
curveVertex(-(230-151)+450, (194-175)+450);
curveVertex(-(243-151)+450, (213-175)+450);
curveVertex(-(242-151)+450, (191-175)+450);
curveVertex(-(211-151)+450, (81-175)+450);
curveVertex(-(248-151)+450, (58-175)+450);
curveVertex(-(274-151)+450, (110-175)+450);
curveVertex(-(263-151)+450, (277-175)+450);
curveVertex(-(261-151)+450, (286-175)+450);
curveVertex(-(257-151)+450, (286-175)+450);
curveVertex(-(235-151)+450, (257-175)+450);
curveVertex(-(143-151)+450, (185-175)+450);
curveVertex(-(135-151)+450, (192-175)+450);
curveVertex(-(136-151)+450, (201-175)+450);
curveVertex(-(175-151)+450, (234-175)+450);
curveVertex(-(193-151)+450, (246-175)+450);
curveVertex(-(205-151)+450, (255-175)+450);
curveVertex(-(210-151)+450, (280-175)+450);
curveVertex(-(192-151)+450, (291-175)+450); // 반복
curveVertex(-(151-151)+450, (292-175)+450); // 반복
curveVertex(-(97-151)+450,  (292-175)+450);  // 반복
endShape();


}

