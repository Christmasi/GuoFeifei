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

/*--------------------设置密码---------------------*/

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

	//其他事件  keyup
	if (content.length == 0) { //为空
		box.className = "box error";
		tip.className = "tip error";
		span.innerHTML = "请输入密码";
	} else { //不为空
		if (content.length >= 6 && content.length <= 20) {
			var level = getLevel(content);
			switch (level) {
				case 1:
					box.className = "box right";
					tip.className = "tip ruo";
					span.innerHTML = "有被盗风险,建议使用字母、数字和符号两种及以上组合;";
					break;
				case 2:
					box.className = "box right";
					tip.className = "tip zhong";
					span.innerHTML = "安全强度适中，可以使用三种以上的组合来提高安全强度";
					break;

				case 3:
					box.className = "box right";
					tip.className = "tip qiang";
					span.innerHTML = "你的密码很安全";
					break;

			}
			
			return  true;
		}else{
			box.className = "box error";
			tip.className = "tip error";
			span.innerHTML = "密码长度6-20";
		}

	}

}

/*
 	功能：计算密码等级
 	参数：pwd 密码     string
 */
function getLevel(pwd) {
	var numReg = /\d+/; //数字
	var wordReg = /[a-zA-Z]+/; //字母正则
	var otherReg = /[^\da-zA-Z]+/; //数字和字母之外

	var level = 0;

	if (numReg.test(pwd)) { //true
		level++;
	}

	if (wordReg.test(pwd)) { //true
		level++;
	}

	if (otherReg.test(pwd)) { //true
		level++;
	}

	return level;

}

/*--------------------确认密码---------------------*/
var pwd2=document.getElementById("pwd2");
pwd2.onfocus = checkUserPwd2;
pwd2.onblur = checkUserPwd2;
pwd2.onkeyup = checkUserPwd2;
function checkUserPwd2(e) {
	var _e = window.event || e; //事件对象
	//console.log(_e.type)
	var content = pwd2.value; //文本框里的内容
	var box = pwd2.parentNode; //box模块
	var tip = box.nextElementSibling; //提示信息模块
	var span = tip.lastElementChild; //填充提示信息的span
	if (_e.type == "focus") { //获取焦点
		if (content.length == 0) {
			box.className = "box";
			tip.className = "tip default";
			span.innerHTML = "请再次输入密码";
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
		span.innerHTML = "两次密码输入不一致";
	} else{
			if(content==pwd.value){
				box.className = "box right";
				tip.className = "tip hide";
				return true;	
			}else{
				box.className = "box error";
				tip.className = "tip error";
				span.innerHTML = " 两次密码输入不一致";
			}
		
		}

}
/*--------------------验证码---------------------*/
var code=document.getElementById("code");
var code2=document.getElementById("code2");
code.onfocus=checkUserCode;
code.onblur=checkUserCode;
code.onkeyup=checkUserCode;
function checkUserCode(_e){
	var _e=window.event||e;
	var content = code.value; //文本框里的内容
	var box = code.parentNode; //box模块
	var tip = box.nextElementSibling; //提示信息模块
	var span = tip.lastElementChild; //填充提示信息的spa
	
	
	if (_e.type == "focus") { //获取焦点
		if (content.length == 0) {
			box.className = "box";
			tip.className = "tip default";
			span.innerHTML = "输入验证码";
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
		span.innerHTML = "请输入验证码";
	} else { //不为空
		if (content==code2.value) { //格式通过
				box.className = "box right";
				tip.className = "tip hide";
				return true;
		} else { //格式不通过
			box.className = "box error";
			tip.className = "tip error";
			span.innerHTML = "验证码错误";
		}
	}
	
}
var ck=document.getElementById("ck");







/*--------------------注册---------------------*/
var btn = document.getElementById("btn");
btn.onclick = function() {

	if (checkUserName()&&checkPwd()&&checkUserCode()&&checkPwd()&&checkUserPwd2()&&checkUserEmail()&&checkUserMobile()) {
		alert("可以注册")
	}
}