import "./index.css";

export const Loader = () =>{
    
    window.onload = function () {
        const helix = document.querySelector(".helix");
        const strands = document.querySelectorAll(".strand");
        const numPoints = 5;
      
        // Create dots and lines
        for (let i = 0; i < numPoints; i++) {
          const y = (i / (numPoints - 1)) * 100;
          const delay = i * 200;
      
          // Create yellow dot
          const yellowDot = document.createElement("div");
          yellowDot.className = "point";
          yellowDot.style.top = `${y}%`;
          yellowDot.style.left = "50%";
          yellowDot.style.animationDelay = `${-delay}ms`;
          strands[0].appendChild(yellowDot);
      
          // Create blue dot
          const blueDot = document.createElement("div");
          blueDot.className = "point";
          blueDot.style.top = `${y}%`;
          blueDot.style.left = "50%";
          blueDot.style.animationDelay = `${-(delay + 1000)}ms`;
          strands[1].appendChild(blueDot);
      
          // Create line
        if (i < numPoints) {
        const line = document.createElement("div");
        line.className = "line";
        line.style.top = `${y}%`;
        line.style.left = "50%";
        line.style.transformOrigin = "center"; // Ensure the line grows from center
        helix.appendChild(line);
      
        // Function to update the line width from center
        function updateLineWidth() {
          const yellowX = yellowDot.getBoundingClientRect().left + yellowDot.offsetWidth / 2;
          const blueX = blueDot.getBoundingClientRect().left + blueDot.offsetWidth / 2;
          const distance = Math.abs(blueX - yellowX);
          
          // Set the width of the line dynamically
          line.style.width = `${distance}px`;
          
          // Center the line between the two dots
          const centerX = (yellowX + blueX) / 2;
          const containerLeft = helix.getBoundingClientRect().left;
          const relativeCenter = centerX - containerLeft;
          
          // Position the line from the center
          line.style.left = `${relativeCenter}px`;
          line.style.transform = `translateX(-50%)`;     
          requestAnimationFrame(updateLineWidth);
        }
        updateLineWidth();
      }
        }
      };
      
    return(
        <div className="load-para">
         <div class="dna-loader">
         <div class="helix">
         <div class="strand"></div>
         <div class="strand"></div>
      </div>
      </div>
      </div>
    );
}