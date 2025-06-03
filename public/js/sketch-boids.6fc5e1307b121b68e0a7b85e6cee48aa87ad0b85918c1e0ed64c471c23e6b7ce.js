class QuoteSketch {
	    constructor() {
		            this.quote = "The best way to predict the future is to create it."; // Change to your desired quote
		            this.opacity = 0;
		        }

	    setup() {
		            createCanvas(windowWidth, windowHeight);
		            textAlign(CENTER, CENTER);
		            textSize(24);
		            fill(255);
		        }

	    draw() {
		            background(0);
		            this.opacity = min(this.opacity + 2, 255);
		            fill(255, this.opacity);
		            text(this.quote, width / 2, height / 2);
		        }
}

// Register the sketch
 SKETCHES['quoteFade'] = QuoteSketch;

