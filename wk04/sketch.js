let colors = [
	'#FFD65C', '#FD8326', '#FF8BB4', '#8C93C7', '#B6D693', '#53A373',
	'#E84B8A', '#F5A623', '#7BC67E', '#5B6ABF', '#C8E66A', '#F9D423',
	'#D45D9F', '#3D8B5F', '#F27649', '#A8D08D', '#9B7FC4', '#FFB7C5'
];
let color1, color2;
let prevType = -1;

function setup() {
	createCanvas(windowWidth, windowHeight);
	noStroke();
	noLoop();
	drawPattern();
}

function mousePressed() {
	drawPattern();
}

function drawPattern() {
	prevType = -1;
	let y = 0;
	while (y < height) {
		color1 = random(colors);
		color2 = random(colors);

		let type = floor(random(5));
		while (type == prevType) {
			type = floor(random(5));
		}
		prevType = type;

		if (type == 0) {
			let bandHeight = random([140, 180, 220]);
			drawStripes(y, bandHeight, floor(random(10, 20)));
			y += bandHeight;
		} else if (type == 1) {
			let bandHeight = random([80, 100, 120]);
			drawMixed(y, bandHeight);
			y += bandHeight;
			if (y < height) {
				color1 = random(colors);
				color2 = random(colors);
				let thinHeight = random([30, 40]);
				drawStripes(y, thinHeight, floor(random(25, 50)));
				y += thinHeight;
			}
		} else if (type == 2) {
			let bandHeight = random([100, 140, 180]);
			drawChecker(y, bandHeight);
			y += bandHeight;
		} else if (type == 3) {
			let bandHeight = random([100, 140, 180]);
			drawCheck(y, bandHeight);
			y += bandHeight;
		} else {
			let bandHeight = random([150, 200, 250]);
			drawVertical(y, bandHeight);
			y += bandHeight;
		}
	}
}

function drawStripes(y, bandHeight, stripeCount) {
	push();
	translate(0, y);
	let stripeWidth = width / stripeCount;
	fill(color1);
	for (let x = 0; x < width; x += stripeWidth * 2) {
		rect(x, 0, stripeWidth, bandHeight);
	}
	fill(color2);
	for (let x = stripeWidth; x < width; x += stripeWidth * 2) {
		rect(x, 0, stripeWidth, bandHeight);
	}
	pop();
}

function drawMixed(y, bandHeight) {
	push();
	translate(0, y);
	let x = 0;
	let useFirst = true;
	while (x < width) {
		let stripeWidth = random(50, 160);
		if (useFirst) {
			fill(color1);
		} else {
			fill(color2);
		}
		rect(x, 0, stripeWidth, bandHeight);
		x += stripeWidth;
		if (useFirst) {
			useFirst = false;
		} else {
			useFirst = true;
		}
	}
	pop();
}

function drawChecker(y, bandHeight) {
	push();
	translate(0, y);
	let size = random([30, 40, 50, 60]);
	fill(color1);
	rect(0, 0, width, bandHeight);
	fill(color2);
	let offset = false;
	for (let row = 0; row < ceil(bandHeight / size); row += 1) {
		let startX = 0;
		if (offset) {
			startX = size;
		}
		for (let x = startX; x < width; x += size * 2) {
			rect(x, row * size, size, size);
		}
		if (offset) {
			offset = false;
		} else {
			offset = true;
		}
	}
	pop();
}

function drawCheck(y, bandHeight) {
	push();
	translate(0, y);
	let color3 = random(colors);
	let color4 = random(colors);
	let size = random([40, 50, 60, 70]);
	let pickColors = [color1, color2, color3, color4];
	for (let row = 0; row < ceil(bandHeight / size); row += 1) {
		for (let col = 0; col < ceil(width / size); col += 1) {
			let colorIndex = row + col;
			while (colorIndex >= 4) {
				colorIndex -= 4;
			}
			fill(pickColors[colorIndex]);
			rect(col * size, row * size, size, size);
		}
	}
	pop();
}

function drawVertical(y, bandHeight) {
	push();
	translate(0, y);
	let stripeCount = floor(random(15, 30));
	let stripeWidth = width / stripeCount;
	fill(color1);
	for (let x = 0; x < width; x += stripeWidth * 2) {
		rect(x, 0, stripeWidth, bandHeight);
	}
	fill(color2);
	for (let x = stripeWidth; x < width; x += stripeWidth * 2) {
		rect(x, 0, stripeWidth, bandHeight);
	}
	pop();
}

function draw() {
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
	drawPattern();
}