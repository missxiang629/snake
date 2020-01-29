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
})()