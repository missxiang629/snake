(function() {
    function Game(map) {
        this.food = new Food()
        this.snake = new Snake()

        this.map = map
    }
    Game.prototype.start = function() {
        // this.snake.move(this.food)
        // this.food.render(this.map)
        // this.snake.render(this.map)
        runSnake()
        bindKey()
    }

    function runSnake() {

        var timeId = setInterval(() => {
            // console.log(this.snake)
            this.snake.move(this.food, this.map)
            this.snake.render(this.map)
            var maxX = this.map.offsetWidth / this.snake.width;
            var maxY = this.map.offsetHeight / this.snake.height
            var headX = this.snake.body[0].x
            var headY = this.snake.body[0].y
            if (headX < 0 || headX >= maxX) {
                alert("game over")
                clearInterval(timeId)
            }
            if (headY < 0 || headY >= maxY) {
                alert("gameover")
                clearInterval(timeId)
            }
        }, 150)
    }

    function bindKey() {
        document.addEventListener("keydown", (e) => {
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

        })
    }


    window.Game = Game
})()

var map = document.getElementById("map")
var game = new Game(map)
game.start()