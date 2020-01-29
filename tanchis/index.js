;
(function() {
    var elements = []
        // 1食物的属性有宽度高度    所在的xy坐标 还有背景颜色
    function getRandomIntInclusive(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min
    }

    function Food() {
        this.height = 20;
        this.width = 20;
        this.x = getRandomIntInclusive(0, map.offsetWidth / this.width - 1) * this.width
        this.y = getRandomIntInclusive(0, map.offsetHeight / this.height - 1) * this.height

        this.backgroundColor = "green"
    }
    // 2食物有渲染的方法
    Food.prototype.render = function(map) {
        remove()
        this.x = getRandomIntInclusive(0, map.offsetWidth / this.width - 1) * this.width
        this.y = getRandomIntInclusive(0, map.offsetHeight / this.height - 1) * this.height
        var map = document.getElementById("map")

        // console.log(this)
        var div = document.createElement("div")

        div.style.backgroundColor = this.backgroundColor
        div.style.width = this.width + "px"
        div.style.height = this.height + "px"
        div.style.position = "absolute"
        div.style.left = this.x + "px"
        div.style.top = this.y + "px"
        map.appendChild(div)
        elements.push(div)

    }

    function remove() {
        for (var i = elements.length - 1; i >= 0; i--) {
            var map = document.getElementById("map")
            map.removeChild(elements[i])

        }
        elements = []



    }
    window.Food = Food
})();
(function() {
    var elements = []

    function Snake() {
        this.backgroundColor = "green"
        this.direction = "right"
        this.width = 20;
        this.height = 20
        this.body = [
            { x: 3, y: 1, color: "red" },
            { x: 2, y: 1, color: "blue" },
            { x: 1, y: 1, color: "blue" }
        ]
    }
    Snake.prototype.render = function(map) {
        for (var i = 0; i < this.body.length; i++) {
            var div = document.createElement("div")
            map.appendChild(div)
            div.style.width = this.width + "px"
            div.style.height = this.height + "px"
            div.style.position = "absolute"
            div.style.left = this.body[i].x * 20 + "px"
            div.style.top = this.body[i].y * 20 + "px"
            div.style.backgroundColor = this.body[i].color
            elements.push(div)

        }

    }
    console.log(elements)
    Snake.prototype.move = function(map, food) {
        remove()
        for (var i = this.body.length - 1; i > 0; i--) {
            this.body[i].x = this.body[i - 1].x
            this.body[i].y = this.body[i - 1].y
        }
        var head = this.body[0]
        switch (this.direction) {
            case "right":
                head.x += 1;
                break;
            case "left":
                head.x -= 1;
                break;
            case "top":
                head.y -= 1
                break
            case "bottom":
                head.y += 1
                break
        }
        var headX = head.x * this.width
        var headY = head.y * this.height

        if (headX === food.x && headY === food.y) {
            console.log(1111111111)
            var last = this.body[this.body.length - 1]
            this.body.push({
                x: last.x,
                y: last.y,
                color: last.color
            })
            food.render(map)

        }






    }

    function remove() {
        for (var i = elements.length - 1; i >= 0; i--) {
            var map = document.getElementById("map")
            map.removeChild(elements[i])

        }
        elements = []


    }
    window.Snake = Snake

})();
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