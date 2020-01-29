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

})()