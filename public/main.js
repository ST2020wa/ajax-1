let n = 1;
getPage.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', `/page${n+1}`);
    request.onreadystatechange = ()=>{
        if(request.readyState === 4 && request.status === 200){
            const array = JSON.parse(request.response)
            array.forEach(item=>{
                const li = document.createElement('li')
                li.textContent = item.id
                xxx.appendChild(li);
            });
            n+=1;
        }
    }
    request.send()
}
getJSON.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', '/5.json');
    request.onreadystatechange = () => {
        if(request.readyState === 4 && request.status === 200){
            console.log(request.response)
            const object = JSON.parse(request.response)
            myName.textContent = object.name
        }
    };
    request.send()
};

getXML.onclick = () =>{
    const request = new XMLHttpRequest();
    request.open('GET', '/4.xml');
    request.onreadystatechange = ()=>{
        if(request.readyState === 4 && request.status === 200){
            const dom = request.responseXML;
            const text = dom.getElementsByTagName('warning')[0].textContent
            console.log(text.trim())
        }
    };
    request.send();
}
getHTML.onclick = ()=>{
    const request = new XMLHttpRequest();
    request.open('GET', '/3.html');
    request.onload =() =>{
        // 创建 div 标签
        const div = document.createElement('div')
        // 填写 div 内容
        div.innerHTML = request.response
        // 插到body里面
        document.body.appendChild(div)
    };
    request.onerror = ()=>{};
    request.send();
}

getJS.onclick = ()=>{
    const request = new XMLHttpRequest();
    request.open('GET', '/2.js');
    request.onload = ()=>{

        // 创建 script 标签
        const script = document.createElement('script')
        // 填写 script 内容
        script.innerHTML = request.response
        // 插到 body 里面
        document.body.appendChild(script)
    };
    request.onerror = ()=>{};
    request.send();
}

getCSS.onclick = ()=>{
    const request = new XMLHttpRequest();
    request.open('GET', '/style.css');  // readyState = 1
    request.onreadystatechange = () =>{
        if(request.readyState === 4){
            if(request.status>=200 && request.status < 300){
                const style = document.createElement('style')
                style.innerHTML = request.response
                document.head.appendChild(style)
            }else{
                alert('OOPS！加载CSS失败了')
            }
        }
    }
    request.send()  // readyState = 2
};