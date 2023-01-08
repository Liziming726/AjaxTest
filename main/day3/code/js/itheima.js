function resolveData(data){
    var arr = []
    for(var k in data){
        var str = k + '=' + data[k]
        arr.push(str)
    }
    return arr.join('&')
}

function itheima(options){
    var xhr = new XMLHttpRequest()
    //外界传递的参数对象转化为查询字符串
    var qs = resolveData(options.data)

    //如果外界options传递的是get请求
    if(options.method.toUpperCase() === 'GET'){

        xhr.open(options.method, options.url + '?' + qs)
        xhr.send()

    }else if(options.method.toUpperCase() === 'POST'){

        xhr.open(options.method, options.url)
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
        xhr.send(qs)

    }

    //监听状态
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && xhr.status == 200){
            var res = JSON.parse(xhr.responseText)
            options.success(res)
        }
    }
}
