class QuoteSketch {
	  constructor() {}

	  setup() {
		      // Set the background and initialize text properties
		  //     background(theme.bg);
		           
             // Your chosen quote; feel free to change it
		                   this.quote = "The only limit to our realization of tomorrow is our doubts of today.";
  
		                      // Start fully transparent
		                          this.alpha = 0;
		                              
		                                  // Set text properties—customize these to your taste.
		                                       textSize(32);
		                                           textAlign(CENTER, CENTER);
		                                               noStroke();
		                                                 }
		  
		                                                   draw() {
		                                                       // Clear the canvas each frame (this keeps the fade effect clean)
		                                                           background(theme.bg);
		                                                               
		                                                                   // Gradually increase the alpha value until it reaches full opacity
		                                                                       if (this.alpha < 255) {
		                                                                             this.alpha += 3; // Increase this value to speed up the fade
		                                                                                 }
		                                                                                     
		                                                                                        // Set the fill color. Here I'm using white for simplicity;
		                                                                                             // you might use something like theme.body or another theme color.
		                                                                                                 fill(255, this.alpha);
		                                                                                                    
		                                                                                                        // Draw the quote text centered on the canvas
		                                                                                                             text(this.quote, width / 2, height / 2);
		                                                                                                              }
		 
		                                                                                                                // Optional hooks – implement these if you need interactivity:
	                                                                                                                 mouseClicked(e) {}
		
		                                                                                                                   getSettings() {}
		                                                                                                                   }
		 
