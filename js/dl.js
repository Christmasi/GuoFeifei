/*--------------------用户名---------------------*/
var userName = document.getElementById("userName");
userName.onfocus = checkUserName;
userName.onblur = checkUserName;
userName.onkeyup = checkUserName;

function checkUserName(e) {
	var _e = window.event || e; //事件对象
	//console.log(_e.type)
	var content = userName.value; //文本框里的内容
	var box = userName.parentNode; //box模块
	var tip = box.nextElementSibling; //提示信息模块
	var span = tip.lastElementChild; //填充提示信息的span
	if (_e.type == "focus") { //获取焦点
		if (content.length == 0) {
			box.className = "box";
			tip.className = "tip default";
			span.innerHTML = "支持汉字、数字、字母、-、_的组合，4-20个字符";
		}
		return; //结束函数
	}

	if (_e.type == "blur") { //失去焦点焦点

		if (content.length == 0) {
			box.className = "box";
			tip.className = "tip hide";
		}
		return;
	}

	//其他事件  keyup
	if (content.length == 0) { //为空
		box.className = "box error";
		tip.className = "tip error";
		span.innerHTML = "请输入用户名";
	} else { //不为空
		var reg = /^([\w-]|[\u4e00-\u9fa5])+$/; //验证格式的正则
		if (reg.test(content)) { //格式通过
			if (content.length >= 4 && content.length <= 20) {
				box.className = "box right";
				tip.className = "tip hide";
				return true;

			} else {
				box.className = "box error";
				tip.className = "tip error";
				span.innerHTML = " 长度只能在4-20个字符之间";
			}
		} else { //格式不通过
			box.className = "box error";
			tip.className = "tip error";
			span.innerHTML = "格式错误，仅支持汉字、字母、数字、“-”“_”的组合，4-20个字符";
		}
	}

}

/*--------------------密码---------------------*/

var pwd = document.getElementById("pwd");
pwd.onfocus = checkPwd;
pwd.onblur = checkPwd;
pwd.onkeyup = checkPwd;

function checkPwd(e) {
	var _e = window.event || e; //事件对象
	//console.log(_e.type)
	var content = pwd.value; //文本框里的内容
	var box = pwd.parentNode; //box模块
	var tip = box.nextElementSibling; //提示信息模块
	var span = tip.lastElementChild; //填充提示信息的span
	if (_e.type == "focus") { //获取焦点
		if (content.length == 0) {
			box.className = "box";
			tip.className = "tip default";
			span.innerHTML = "建议使用数字、字母和符号两种以上的组合，长度6-20个";
		}
		return; //结束函数
	}

	if (_e.type == "blur") { //失去焦点焦点

		if (content.length == 0) {
			box.className = "box";
			tip.className = "tip hide";
		}
		return;
	}


};
/*--------------------登录---------------------*/
var btn = document.getElementById("btn");
btn.onclick = function() {

	if (checkUserName()&&checkPwd()&&checkUserCode()&&checkPwd()&&checkUserPwd2()&&checkUserEmail()&&checkUserMobile()) {
		alert("可以注册")
	}
}