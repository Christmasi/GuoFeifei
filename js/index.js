(function() {

	var imgs = [
		"jl (52).jpg",
		"jl (53).jpg",
		"jl (54).jpg",
		"jl (55).jpg",
		"jl (56).jpg",
	]
	$("").ready(function() {
		//logo部分
		
		$("#ul_2_li").mouseover(function(){
			$("#ul_2_dv").css("display","block");
		});
		$("#ul_2_dv").mouseleave(function(){
		
			$("#ul_2_dv").css("display","none");
		});
		$("#ul_2 li:not(:eq(1))").mouseenter(function(){
			$("#ul_2_dv").css("display","none");
		})
		
		
		//banner部分 
		var container = "<div class='container'  index='0'  ></div>";
		$("#banner").append(container);
		var index = parseInt($(".container").attr('index'));
		var screen = "<div class='screen'><img src='img/" + imgs[index] + "'/></div>";

		$(".container").append(screen);
		$(".container").append("<div class='btn-group'></div>");
		$(imgs).each(function(idx, object) {
			var btn = "<div class='btn' btnindex='" + idx + "' ></div>";
			$(".container .btn-group").append(btn);

		});

		$(".container .btn-group .btn").mouseenter(function() {
			$(this).css("background-color","orangered");

			//停止当前切换动画（防止 jquery本身的计时器（timeout）争抢显示）
			$(".container .screen img").stop();

			//清空 未显示（准备显示的）图片（藏在当前图片“后面”的图片），为显示指定的“下一张”做准备
			$(".container .screen img:not(:first)").remove();

			//停止 设计 计时器，准备 重新安排操作
			window.clearTimeout(timer1);

			//根据指定图片设置 下一张显示的索引编号
			var index = parseInt($(this).attr('btnindex'));
			//保持步骤一致性
			$(".container").attr("index", index - 1);
			doBanner(1);
		});
		$(".container .btn-group .btn").mouseleave(function(){
			$(this).css("background-color","white");

		})
		var timer1;

		doBanner();

		function doBanner(seconds) {
			
			var sed = seconds ? seconds : 3000;

			timer1 = window.setTimeout(function() {
				
				$(".container .btn-group .btn").css("background-color","white");
				var index = parseInt($(".container").attr("index")) + 1;
		

				if(index == imgs.length) {
					index = 0;
				}
				var btt=$(".container .btn-group .btn");
				btt[index].style.backgroundColor="orange";
				$(".container").attr("index", index);

				$(".container .screen").append("<img src='img/" + imgs[index] + "' style='z-index:-1'  >");
				
				

				$(".container .screen img:first").fadeOut(600, function() {

					$(".container .screen img:first").remove();

					$(".container .screen img:first").css("z-index", 0);

					doBanner();
				});

			}, sed);
		}

		//main_center部分	
		$.ajax({
			"url": "date.json",
			"type": "get",
			//      "data":"name=John&location=Boston",
			"success": function(a, b, c) {
				var dv = $(".main_dv1 div:not(:eq(0))");
				var index = 0;
				$(dv).each(function() {
					var main_ul = "<ul class='main_ul'><li>" + a.obj[index].name + "</li><li>" + a.obj[index].js + "</li><li>" + a.obj[index].jg + "</li></ul>";
					$(this).append(main_ul);
					$(".main_ul").css({
						"position": "absolute",
						"left": "75px",
						"top": "267px"
					});
					index++;
					$(this).mouseover(function() {
						this.className = "bian";
					});
					$(this).mouseout(function() {
						this.className = "";
					});
				});
				var dv2 = "<ul class='dv2_ul'><li>4GB+64GB/双主卡全网通/指纹识别</li><li>￥2699</li></ul>";
				$(".main_dv1 div:eq(0)").append(dv2);
				$(".main_dv1 div:eq(0)").mouseover(function() {
					this.className = "bian";
				});
				$(".main_dv1 div:eq(0)").mouseout(function() {
					this.className = "";
				});

				var imgs = [
					"jl (23).jpg",
					"jl (24).jpg",
					"jl (25).jpg",
					"jl (26).jpg", 
					"jl (27).jpg",
					"jl (28).jpg",
				]
				$(imgs).each(function() {
					var dv3 = "<div class='dv3'><img src='img/" + this + "'/></div>";
					$(".main_dv2").append(dv3);
					$(".dv3").mouseover(function() {
						this.className = "bian dv3";
					});
					$(".dv3").mouseout(function() {
						this.className = "dv3";
					});
				});
				$(".main_dv2 dv2:eq(2)").css("margin-right", "0px");
				$(".main_dv2 dv2:eq(5)").css("margin-right", "0px");

				var dvs3 = $(".dv3");
				$(dvs3).each(function() {
					var dv3_ul = "<ul class='dv3_ul'><li>" + a.obj[index].name + "</li><li>" + a.obj[index].js + "</li><li>" + a.obj[index].price + "</li></ul>";
					$(this).append(dv3_ul);
					index++;
				});
			}
		})
		$("#box ul li").each(function() {
			$(this).mouseover(function() {
				$(this).css("color", "#FF0000");
				$(this).css("cursor", "pointer");

			})
			$(this).mouseout(function() {
				$(this).css("color", "#777777");
				$(this).css("cursor", "pointer");

			})
		})

	})
})()