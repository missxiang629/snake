(function() {
    function Game(map) {
        that = this;
        this.food = new Food()
        this.snake = new Snake()
        console.log(this)
        this.map = map

    }
    Game.prototype.start = function() {
        this.food.render(this.map)
        this.snake.render(this.map, this.food)
        runSnake()
        bindSnake()


    }

    function runSnake() {
        var timeId = setInterval(function() {
            this.snake.move(this.map, this.food)
            this.snake.render(this.map)
            var headX = this.snake.body[0].x * this.snake.width;
            var headY = this.snake.body[0].y * this.snake.height
            if (headX < 0 || headX >= 800 || headY < 0 || headY >= 600) {
                alert("game over")
                clearInterval(timeId)
            }

        }.bind(that), 150)

    }

    function bindSnake() {
        document.addEventListener("keydown", function(e) {
            // console.log(e.keyCode)
            switch (e.keyCode) {
                case 37:
                    this.snake.direction = "left"
                    break
                case 38:
                    this.snake.direction = "top"
                    break
                case 39:
                    this.snake.direction = "right"
                    break
                case 40:
                    this.snake.direction = "bottom"
                    break
            }
        }.bind(that))
    }
    window.Game = Game
})()
var map = document.getElementById("map")
var game = new Game(map)
game.start()