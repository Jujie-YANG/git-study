window.addEventListener('load', function () {

    // MDN 文档！！！！！！！！查阅！！！！！！！！！

    // var age = prompt('please input your age:')


    // // if (age >= 18) {
    // //     console.log("you're an adult");

    // // } else if (age >= 16) {
    // //     console.log("you're", age, "nearly an adult");
    // // } else {
    // //     console.log("you're a child");
    // // }
    var date = new Date() // new 构造函数名() 构造函数名字首字母要大写，构造函数创建对象{}不需要return
    console.log('date:', date);
    console.log('date.getDate:', date.getDate(), '号');
    console.log('date.getDay:', date.getDay(), '星期');

    function getTimer() {
        var time = new Date() // Date（）日期对象是一个构造函数，new来调用创建date对象
        var h = time.getHours()
        h = h < 10 ? 0 + h : h
        return h
    }
    console.log(getTimer(), '时');
    console.log("Date.now()", Date.now());






    // arr = [1, 2, 3, 4, 5]

    // for (var i = 0; i <= 11; i++) {
    //     console.log('loop NO.', i);
    //     switch (i) {
    //         case 0:
    //             console.log('start');
    //             break;
    //         case 11:
    //             console.log('stop');
    //             break;
    //     }
    // }


    // 九九乘法表
    // var str = ''
    // for (var i = 1; i <= 9; i++) {
    //     for (var j = 1; j <= i; j++) {
    //         str += j + '×' + i + '=' + i * j + '\t'

    //     }
    //     str += '\n'
    // }

    // console.log(str);
    // console.log(str.length);



    // //bubble sort 算法示例
    // var arr = [1, 13, 22, 21, 7, 77]
    // console.log(arr);
    // for (var i = 0; i < arr.length - 1; i++) {
    //     for (var j = 0; j < arr.length - i - 1; j++)
    //         if (arr[j] > arr[j + 1]) {
    //             var temp = arr[j]
    //             arr[j] = arr[j + 1]
    //             arr[j + 1] = temp
    //         }
    // }
    // console.log('new_array', arr);

    // //数组排序（非个位数的顺序排序）
    // var arr1 = [13, 4, 77, 1, 7]
    // arr1.sort(function (a, b) {
    //     return a - b //ascending
    //     // return b-a; descending order
    // })
    // console.log('arr1', arr1);




    // var ldh = {
    //     uname: function(){
    //         console.log();
    //     }
    // }


    // Math 数学对象 不是一个构造函数，所以不需要new来调用
    // console.log(Math.PI);

    // 求最大值的算法
    // max = -Infinity
    // for (var k = 0; k <= arr.length; k++) {
    //     max = max < arr[k] ? arr[k] : max
    // }
    // console.log(max);



    // var input = prompt('输入框，促使; 导致; 激起; 鼓励，提示，', age + myFirstName)
    // alert('警示的结果为' + input + typeof (input))


    console.log('把…载入正式记录; 记录')

    // var myFirstName = prompt('input your first name:')
    // temp = 'My first name is: ' + myFirstName
    // console.log(temp);
    // console.log(typeof (temp));




    var timer = document.getElementById('time')
    console.log("timer:", timer);
    console.log("typeof timer", typeof timer);
    console.dir(timer)

    // 得到对象集合
    // var lis = document.getElementsByTagName('a')
    // console.log(lis); //返回的是伪数组（没有methods）
    // for (var i = 0; i < lis.length; i++) {
    //     console.log(lis[i]);
    // }

    var ul = document.getElementsByTagName("ul")
    for (let i = 0; i < ul.length; i++) {
        console.log(ul[i].getElementsByTagName('li'));
    }
    console.log('\n');
    // 自定义属性 setAttribute getAttribute removeAttribute,  (class-> element.className = '')
    var lis = document.querySelector('ul').querySelectorAll('li')
    for (let j = 0; j < lis.length; j++) {
        lis[j].setAttribute('data-index', j);
    }
    // h5(兼容性不好) （data-list-name='' -> .dataset.listName驼峰命名法）
    for (let m = 0; m < lis.length; m++) {
        console.log('lis[m].dataset.index', lis[m].dataset.index);
        console.log('lis[m].dataset["index"]', lis[m].dataset['index']);
    }



    // 推荐使用  .queryselector
    // document.querySelector(只能返回第一个element) class:'.footer',id:'#time', tag:'li'
    // H5 新增的选择器 
    var allBoxes = document.querySelectorAll('li')
    console.log(allBoxes);
    for (let i = 0; i < allBoxes.length; i++) {
        li = allBoxes[i];
        console.log(li);
    }

    // specific cases: get body and html(document.body, document.documentElement)
    var bodyEle = document.body, htmlEle = document.documentElement
    console.log("bodyEle:", bodyEle, "htmlEle:", htmlEle);







    ////---- change the content of an element(innerText, innerHTML)
    // // 1. get elements
    var btn = document.querySelector('button') // select the first element
    // var div = document.getElementById('timeleft')
    // var i = document.querySelector('i')
    // // 2.behaviors
    // btn.onclick = function () {
    //     div.innerHTML = countDown('2021-9-7 16:00:00')
    //     this.disabled = true;
    //     div.style.height = '30px';
    //     div.style.border = '2px solid pink';

    //     // element.className change the style 
    //     i.className = 'i change'; // remain the previous classname i
    // }







    // //------ 操作元素（read and write）
    // 1. element content: innerHTML / innerText
    // 2. common element 属性（attribute）： src href title alt
    // 3. 表单：type value disabled
    // 4. element style: element.style / className


    // 常用：parentNode(父节点) children(所有子元素节点)-children[0]/ol.children[ol.children.length-1]
    // childNodes(所有子节点)-firstchild lastchild(子节点)- firstElementChild lastElementChild(子元素节点)
    // nextSibling previousSibling / nextElementSibling previousElementSibling 
    var ul = document.querySelector('ul');
    btn.addEventListener('click', btnfunction)

    function btnfunction() {
        var lili = document.createElement('li');
        lili.innerHTML = '12345' + "<a href='javascript:;'>delete</a>" //textarea.value，javascript:; 不跳转其它链接
        // ul.appendChild(lili); //添加一个子元素
        ul.insertBefore(lili, ul.children[0]);
        ul.removeChild(ul.children[ul.children.length - 1])

        var lilili = ul.children[0].cloneNode(true) //clone false 浅拷贝 不复制内容
        lilili.innerHTML += 'clone'
        ul.appendChild(lilili)

        // var as = document.querySelectorAll('a')
        // for (let i = 0; i < as.length; i++) {
        //     as[i].onclick = function () {
        //         // node.removeChild(child), delete 'li' that is the parent of 'a'
        //         ul.removeChild(this.parentNode);
        //     }
        // }
    }

    ////------创建元素的两种方法（document.write如果文档流加载完毕，再调用会导致页面重绘）
    // innerHTML 数组效率测试：(the efficiency of innerHTML is higher than creatElement,but createElement is clearer)
    // function fn() {
    //     var d1 = +new Date()
    //     var array = []
    //     for (let i = 0; i < 2000; i++) {
    //         array.push('<div style="width:100px;height:2px;border:1px solid blue;"></div>')
    //     }
    //     document.body.innerHTML = array.join('') // convert to string
    //     var d2 = +new Date()
    //     console.log('The time using innerHTML is:', d2 - d1, 'ms毫秒');
    // }
    // fn();
    // function fn2() {
    //     var d1 = +new Date()
    //     for (let i = 0; i < 2000; i++) {
    //         var div = document.createElement('div')
    //         div.style.width = '100px'
    //         div.style.height = '2px'
    //         div.style.border = '1px solid red'
    //         document.body.appendChild(div)
    //     }
    //     var d2 = +new Date()
    //     console.log('The time using createElement is:', d2 - d1, 'ms毫秒');
    // }
    // fn2();

    ////----增：appendChild/inserBefore
    ////----删：removeChild
    ////----改：主要修改DOM属性
    // 1.元素属性：src  href  title
    // 2.普通元素内容: innerHTML innerText
    // 3.表单元素: value type disabled
    // 4.元素样式: style className

    ////----查：
    // 1.DOM提供的API方法：getElementById getElementsByTagName(不推荐，古老方法)
    // 2.H5 新增：querySelector querySelectorAll
    // 3.节点操作（提倡）：父(parentNode), 子(children), 兄(previousElementSibling, nextElementSibling)

    ////----属性操作（针对自定义属性--data.xxx）
    // setAttribute getAttribute removeAttribute

    ////----事件操作：
    // 1. onclick(点击左键触发)
    // 2. onmouseover onmouseout (mouseover冒泡 mouseenter/mouseleave不会冒泡，作用自身盒子 )
    // 3. onfocus onblur
    // 4. onmousemove onmouseup onmousedown




    // 删除事件：传统 divs[0].onclick = null;
    var div = document.createElement('div')
    for (let i = 0; i < 5; i++) {
        var div = document.createElement('div')
        div.style.width = '100px'
        div.style.height = '90px'
        div.style.border = '1px solid red'
        document.body.appendChild(div)
    }
    // 为什么为什么为什么？？？？？？不能click
    var divs = document.querySelectorAll('div');
    console.log('divs', divs);
    divs[1].addEventListener('click', fn2) // 不需要小括号
    function fn2(e) {
        e = e || window.event //兼容性问题
        console.log('event', e);

        alert(23333);
        divs[1].removeEventListener('click', fn2)
    }



    // ////---- 跟随的放大镜（为什么鼠标click点击不了？？？？？？？？？？？）
    // var pic = document.querySelector('img')
    // document.addEventListener('mousemove', function (e) {
    //     var x = e.pageX
    //     var y = e.pageY
    //     // console.log('(x,y):', '(' + x + ',' + y + ')');
    //     //子绝父相
    //     pic.style.position = 'absolute' // 要加引号
    //     pic.style.left = x + 'px'
    //     pic.style.top = y + 'px'
    // })




    ////----倒计时
    var begin = document.querySelector('.begin')
    var stop = document.querySelector('.stop')
    var timer1 = null // 全局变量，null是个空对象,因为计时器也是个对象

    var hour = document.querySelector('.hour')
    var minute = document.querySelector('.minute')
    var second = document.querySelector('.second')
    var inputTime = +new Date('2021-9-9 24:00:00')// input wanted time
    // console.log("inputTime", inputTime);

    begin.addEventListener('click', countDown1)
    var time = 3 // 全局变量
    stop.addEventListener('click', function () {
        clearInterval(timer1)

        ////----倒计时的过程中把button禁用 (setTimeout(function,1000)只执行一次，this指向window)
        this.disabled = true
        var timer2 = setInterval(function () {
            if (time == 0) {
                clearInterval(timer2)
                stop.disabled = false //这个stop不能改this，setInterval this->window
                stop.innerHTML = 'clearInterval again'
                time = 3
            } else {
                stop.innerHTML = time + ' seconds left'
                time--
            }
        }, 1000)
    })

    function countDown1() {
        countDown() // 先调用一次这个函数，防止第一次刷新页面有空白
        timer1 = setInterval(countDown, 1000) // 1000ms

        function countDown() {
            var nowTime = +new Date() // ()里是空的 默认now - 1970-1-1
            // console.log("nowTime", nowTime);
            var times = (inputTime - nowTime) / 1000 // seconds left
            // var d = parseInt(times / 60 / 60 / 24) // day
            var h = parseInt(times / 60 / 60 % 24)// hour
            h = h < 10 ? '0' + h : h
            hour.innerHTML = h
            var m = parseInt(times / 60 % 60) //munites
            m = m < 10 ? '0' + m : m
            minute.innerHTML = m
            var s = parseInt(times % 60) // seconds
            s = s < 10 ? '0' + s : s
            second.innerHTML = s
            // return d + 'days' + h + 'hours' + m + 'munites' + s + 'seconds'
        }
        // console.log("countDown('2021-9-6 22:00:00')", countDown('2021-9-9 22:00:00'));
    }



    // 1. 获取元素位置 offsetLeft offsetTop（read only- div.style.left = div.offsetLeft + 1 + 'px' ）没有单位
    // 2. 获取元素大小 clientWidth clientHeight
    // 3. 获取滚动距离 crollTop crollLeft
    // 4. 页面滚动距离 window.pageYOffset / 元素滚动距离 element.crollTop



    // 简单动画封装函数（一定要加定位）obj目标对象，target目标位置
    function animate(obj, target, callback) {
        clearInterval(obj.timer) //让元素只有一个定时器，清楚以前的定时器，只保留当前的一个定时器
        obj.timer = setInterval(function () { // 不用var，不用另外开辟空间，给不同的对象记录不同定时器
            if (obj.offsetLeft == target) {
                clearInterval(obj.timer) //停止动画，本质停止计时器
                if (callback) {
                    callback() // 回调函数在定时器结束后实行
                }
            }
            // 缓慢动画公式：（目标值-现在的位置）/10 - JS避免小数的运算，往上取整
            var step = (target - obj.offsetLeft) / 10
            step > 0 ? Math.ceil(step) : Math.floor(step) // 往回倒的时候运算是负数，所以往小的取
            obj.style.left = obj.offsetLeft + step + 'px'
        }, 40)
    }


    function fn1(div) {
        div.style.backgroundColor = 'purple'
    }

    var btn = document.querySelector('.btn')
    divs[1].style.position = 'absolute'
    // divs[3].style.position = 'absolute'
    // divs[4].style.position = 'absolute'
    btn.addEventListener('click', function () {
        animate(divs[1], 300, fn1(divs[1]))
        alert('hello')
    })
    // animate(divs[3], 300)
    // animate(divs[4], 300)
})
















