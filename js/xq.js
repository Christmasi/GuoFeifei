/*
 	获取所要操作的节点对象
 */
var fdj = document.getElementById("fdj"); //放大镜模块
var smallBox = document.getElementById("smallBox"); //小盒子
var tool = document.getElementById("tool"); //滤镜
var bigBox = document.getElementById("bigBox"); //大盒子
var bigImg = document.getElementById("bigImg"); //大图片

smallBox.onmouseenter = function(){
	tool.className = "tool active";
	bigBox.className = "fdj-right active";
}

smallBox.onmouseleave = function(){
		tool.className = "tool";
		bigBox.className = "fdj-right";
}

smallBox.onmousemove = function(e){
	var _e = window.event||e; //事件对象
	var sTop = document.body.scrollTop||document.documentElement.scrollTop;
	var sLeft = document.body.scrollLeft||document.documentElement.scrollLeft;
	
	var x = _e.clientX + sLeft - fdj.offsetLeft - tool.offsetWidth/2;
	
	if(x<0){
		x = 0;
	}
	var maxX = smallBox.offsetWidth-tool.offsetWidth;
	if(x>maxX){
		x = maxX;
	}
	var y = _e.clientY + sTop - fdj.offsetTop - tool.offsetHeight/2;
	if(y<0){
		y = 0;
	}
	var maxY = smallBox.offsetHeight-tool.offsetHeight;
	if(y>maxY){
		y = maxY;
	}
	tool.style.left = x + "px";
	tool.style.top = y + "px";
	
	bigImg.style.left = -x * 3 + "px";
	bigImg.style.top = -y * 3 + "px";
	
	
	
	
	
}


/*
 	点击左右轮换一组
 */
var btnLeft = document.getElementById("btnLeft"); //左边控制按钮
var btnRight = document.getElementById("btnRight"); //右边控制按钮
var ul = document.getElementById("tabList"); //tab列表

btnLeft.onclick = function(){
	var x = ul.offsetLeft + 60;
	if(x>0){
		x = 0;
	}
	ul.style.left = x + "px";
}

btnRight.onclick = function(){
	var x = ul.offsetLeft - 60;
	if(x<-(ul.offsetWidth-60)){
		x = -(ul.offsetWidth-60);
	}
	ul.style.left = x + "px"; 
}

var ul=document.getElementById('tabList');
var lis = ul.childNodes;
var smallImg = document.getElementById("smallImg");

/*
 	点击li切换
 */

for(var i = 0,len = lis.length;i<len;i++){
	lis[i].onclick = function(){ 
		for(var j = 0;j<len;j++){
			lis[j].className = '';
		}
		this.className = "active";
		
		var sSrc = this.getAttribute("smallImg");  //获取小图的路径
		var bSrc= this.getAttribute("bigImg");//获取大图的路径
		
		smallImg.src = sSrc;   //更改小图的路径
		bigImg.src = bSrc;     //更改大图的路径
		 
		
		
	}
}






