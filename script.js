document.addEventListener('DOMContentLoaded', function() {
    const rainContainer = document.querySelector('.rain');
    
    // Function to create a single raindrop
    function createRaindrop() {
        const drop = document.createElement('div');
        drop.className = 'drop';
        
        // Randomize the raindrop's starting position
        drop.style.left = Math.random() * 100 + 'vw';
        drop.style.animationDuration = Math.random() * 2 + 2 + 's'; // Random duration between 2s and 4s
        drop.style.animationDelay = Math.random() * 2 + 's'; // Random delay
        
        rainContainer.appendChild(drop);
        
        // Remove the drop after animation to avoid performance issues
        drop.addEventListener('animationend', () => {
            drop.remove();
        });
    }
    
    // Create raindrops at regular intervals
    setInterval(createRaindrop, 100); // Adjust frequency as needed
});
