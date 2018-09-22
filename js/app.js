let game = true;
// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // x position
    // y position

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images

    this.x = 0;
    this.y = 60;
    this.sprite = 'images/enemy-bug.png';
    this.step = 101;
    this.boundary = this.step * 5;
    this.resetPos = -this.step;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

    //If enemy is not passed boundary
        // Move Forward
        //Increment x by speed * dt
    //else
        //Reset position to start
    if(this.x < this.step * 5) {
        //move forward
        //increment x by speed * dt
        this.x += 200 *dt;
    } else {
        this.x = this.resetPos;
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};



//****Hero Class///

// Constructor
    //Properties
        // x position
        // y position
    // Methods
            // Update position
                // Collision
                    //Did player x and y collide with enemy ?
                // Check win here? 
                    // Did player x and y reach final title?
            //Render
                // Draw player sprite on current x and y coord position
            // Handle keyboard input
                // Update player's x and y propety according to input
            // Reset Hero
                //Set x and y to starting x and y


// New Hero Object

// Initialize allEnemies array
// For each enemy create and push new Enemy objet into above array




//defining our portrait class
class Hero {

    constructor(){  //position properties
       
        
        this.sprite = 'images/char-cat-girl.png';
        this.height = 75;
        this.width = 65;
        this.step = 101;;
        this.jump = 83;
        this.startX = this.step * 2;
        this.startY = this.jump * 5;
        this.x = this.startX;
        this.y = this.startY;
    }

    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);

    }

    //handleInput(direction){
    handleInput(input){
        const horizontal = 101;
        const vertical = 83;

        /*if(direction === 'left' && this.x - horizontal >= 0) {
        this.x -= 100;
    }else if (direction === 'right' && this.x + horizontal < ctx.canvas.width ){
        this.x += 100;
    }else if (direction === 'down' && this.y + vertical < ctx.canvas.height -200){
        this.y -=83;
    }else if (direction  === 'up' && this.y + vertical > 0 - player.height){
        this.y -= 83;
    }*/
        
        switch(input) {
            case 'left':
            if (this.x > 0) {
                this.x -= this.step;
            }
            break;

            case 'up':
            if (this.y > 0) {
            this.y -= this.jump;
             }
            break;

            case 'right':
            if (this.x < this.step * 4) {
            this.x += this.step;
                }
            break;

            case 'down':
            if (this.y < this.jump * 5) {
            this.y += this.jump;
            }
            break ;   
        }
    }
}



/*food*/


// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

const player = new Hero(202, 400, 'images/char-cat-girl.png');
const bugOne  = new Enemy(-101, 0);
const bugTwo  = new Enemy(-101, 83);
const bugThree  = new Enemy((-100*2.5), 3);
const allEnemies = [];
allEnemies.push(bugOne)

