window.onload=function(){
	// var head=document.getEl2ementsByClassName('shabi');
	// var wdtb=document.getElementsByClassName('xia');
	// for (var i = 0; i <head.length; i++) {
	// 	head[i].indexx=i;
	// 	head[i].onmouseover=function(){
 // 			wdtb[this.index].style.display='block';
 // 		}
 // 		head[i].onmouseout=function(){
 // 			wdtb[this.index].style.display='none';
 // 		}
	// }
	// var zuo=document.getElementsByClassName('cao');
	// var tt=document.getElementsByClassName('heik');
	// for (var i = 0; i <zuo.length; i++) {
	// 	zuo[i].index=i;
	// 	zuo[i].onmouseover=function(){
 // 			tt[this.index].style.display='block';
 // 		}
 // 		zuo[i].onmouseout=function(){
 // 			tt[this.index].style.display='none';
 // 		}
	// }
	// var yuo=document.getElementsByClassName('gdd');
	// var ttt=document.getElementsByClassName('sile');
	// for (var i = 0; i <yuo.length; i++) {
	// 	yuo[i].index=i;
	// 	yuo[i].onmouseover=function(){
 // 			ttt[this.index].style.display='block';
 // 		}
 // 		yuo[i].onmouseout=function(){
 // 			ttt[this.index].style.display='none';
 // 		}
	// }
	// $($('.shabi')[0]).hover(
	// 		function(){
	// 			$($('.xia')[0]).show('fast');
	// 		},
	// 		function(){
	// 			$($('.xia')[0]).hide('fast');
	// 		}
	// )
	// $($('.shabi')[1]).hover(
	// 		function(){
	// 			$($('.xia')[1]).show('fast');
	// 		},
	// 		function(){
	// 			$($('.xia')[1]).hide('fast');
	// 		}
	// )
	// $($('.shabi')[2]).hover(
	// 		function(){
	// 			$($('.xia')[2]).show('fast');
	// 		},
	// 		function(){
	// 			$($('.xia')[2]).hide('fast');
	// 		}
	// )
	// $($('.shabi')[3]).hover(
	// 		function(){
	// 			$($('.xia')[3]).show('fast');
	// 		},
	// 		function(){
	// 			$($('.xia')[3]).hide('fast');
	// 		}
	// )
	// $($('.shabi')[4]).hover(
	// 		function(){
	// 			$($('.xia')[4]).show('fast');
	// 		},
	// 		function(){
	// 			$($('.xia')[4function(){

	// }]).hide('fast');
	// 		}
	// )

	$('.shabi').hover(
		function(){
			$(this).find('.xia').css({display:'block'});
		},
		function(){
			$(this).find('.xia').css({display:'none'});
		}
	)

	// $('.cao').hover(
	// 	function(){
	// 		$(this).find('.heik').css({display:'block'});
	// 	},
	// 	function(){
	// 		$(this).find('.heik').css({display:'none'});
	// 	}
	// ) 
  $('.cao').hover(function(){
    $('.cao').stop();
    $(this).find('.heik').show(0,function(){
      $(this).animate({right:35},200);
    });
  },function(){
    $('.cao').stop();
    $(this).find('.heik').css({right:80}).hide(0);
  });

  	$('.gdd').each(function(i){
  		$(this).data('index',i);
  	})
	$('.gdd').hover(
		function(){
		var colors=['#fecee8','#c1c1c1','#dfdfdf','#ffc0d3','#3288df','#ffa800','#d7ac82','#dd2726','#24a6da','#ffc5d4','#29a6ff','#e4e2e3','#4a8cfc','#30c4ff','#d58668'];
			var i=$(this).data('index');
			if (i==0) {
					$(this).find('.sile').show();
				    $('.dak').show();
					$('.wanbiao').find('.yingc'+i).hide();
					$('.biaodian').show();
					clearInterval(timerId);
					lunbo();
					timerId=setInterval(lunbo,1500);
				return
			};
			clearInterval(timerId);
			$(this).find('.sile').show();
			$('.yingcaaa').hide();
			$('.yingcaa').hide();
			$($('.yingcaaa')[i]).show();
			$('.wanbiao').find('.dak').hide();
			$('.yingc').find('img').hide();
			$('.wanbiao').find('.yingc'+i).show();
			$('.fenlei').css({background:colors[i-1]});
			$('.biaodian').hide();
		},
		function(){
			var i=$(this).data('index');
			if (i==0) {
				$(this).find('.sile').hide();
				return};
			$(this).find('.sile').css({display:'none'});
			// $('.wanbiao').find('.dak').show();
			// $('.wanbiao').find('.yingc'+i).css({display:'none'});
			// $('.biaodian').show();
			// timerId=setInterval(lunbo,1500);
			clearInterval(timerId);
		}
	)

	$('.cheping').hover(
		function(){
			$(this).stop().animate({
				marginRight:'20px'
			},'slow');
		},
		function(){
			$(this).stop().animate({
				marginRight:'0px'
			},'slow');
		}
	)
	$('.wanbiao-h img').hover(
		function(){
			$(this).stop().animate({
				marginLeft:'20px'
			},'slow');
		},
		function(){
			$(this).stop().animate({
				marginLeft:'0px'
			},'slow');
		}
	)

	$('.sp img').hover(
		function(){
			$(this).stop().animate({
				marginLeft:'10px'
			},'slow');
		},
		function(){
			$(this).stop().animate({
				marginLeft:'0px'
			},'slow');
		}
	)

	$('.sb img').hover(
		function(){
			$(this).stop().animate({
				marginLeft:'10px'
			},'slow');
		},
		function(){
			$(this).stop().animate({
				marginLeft:'0px'
			},'slow');
		}
	)

	$('.chuangkou img').hover(
		function(){
			$(this).stop().animate({
				marginLeft:'10px'
			},'slow');
		},
		function(){
			$(this).stop().animate({
				marginLeft:'0px'
			},'slow');
		}
	)
	$('.youcee').click(
		[1150,1600,2050,2620,3070,3520,4090,4540,4995,5570,6020],
		function(index){
			var i=$('.youcee').index(this);
			var j=index.data[i];
			$('body').stop().animate({scrollTop:j},'slow')
		})

	var i=0;
	var hasClass=$('.rile:first');
	$('.rile').click(function(){
		var j=$('.rile').index(this);
		$($('.rile')[i]).removeClass('dapai');
		$(this).addClass('dapai');
		hasClass=$(this);
		$($('.remen-tu3')[i]).hide();
		$($('.remen-tu3')[j]).show();
		i=j;

	})

	var timerId=setInterval(function(){
		if(document.body.scrollTop>=538&&document.body.scrollTop<=6967){
			$('.youce').show();
		}else{
			$('.youce').hide();
		}
	},1)



	var qianyigee=$('.biaodian')[0];
	var qianyigee_b=$('xiaok')[0];

	// var x=0;
	// $('.biaodian').click(function(){
	// 	var y=$('.biaodian').index(this);
	// 	$($('.xiaok')[x]).hide();
	// 	$($('.xiaok')[y]).show();
	// 	x=y;

	// })

	// var q=0,w=0;
	// $('.huah').click(function(){
	// 	w++;
	// 	$($('.remen-tu3')[q]).hide();
	// 	$($('.remen-tu3')[w]).show();
	// 	q=w;
	// 	if(w>=3){
	// 		w=-1;
	// 		q=3;
	// 	}

	// // })
	// var i=0; 
	// var hasClass=$('.rile:first');
	// $('remen-tu3:first').show();
	// var chulai=$('remen-tu3:first').show();
	// $('.rile').click(function(){
	// 	hasClass.removeClass('dapai');
	// 	$(this).addClass('dapai');
	// 	hasClass=$(this);
	// 	var i=$('.rile').index(this);
	// 	chulai.hide();
	// 	$($('remen-tu3')[i]).show();
	// 	chulai=$($('remen-tu3')[i]);
	// })

	$('.huah').click(function(){
		var arr=[];
		var dict={};
		var dd=0;
		var ran;
		var i=$('.rile').index(hasClass);
		var need_change=$('.remen-tu3')[i];
		var need_src=$(need_change).find('img');
		for (var i = 0; i < need_src.length; i++) {
			arr[i]=need_src[i].src;
		};
		while(dd<24){
			ran=Math.floor(Math.random()*24);
			if(!dict[arr[ran]]){
				dict[arr[ran]]=true;
				dd++;
			}else{
				ran=Math.floor(Math.random()*24);
			}
		}
		var ddd=0;
		for(var i in dict){
			need_src[ddd].src=i;
			ddd++;
		}
	})

	// var r=0,t=0;
	// $('.jiantou').click(function(){
	// 	t++;
	// 	$($('.chuangkou1')[r]).hide();
	// 	$($('.chuangkou1')[t]).show();
	// 	r=t;
	// 	if(t>=2){
	// 		t=-1;
	// 		r=2;
	// 	}
	// })
	// $('.jiantou you').click(function(){
	// 	t--;
	// 	$($('.chuangkou1')[r]).hide();
	// 	$($('.chuangkou1')[t]).show();
	// 	r=t;
	// 	if(t<0){
	// 		t=-1;
	// 		r=2;
	// 	}
	// })

	$('.one').each(function(i){
		$(this).data('index',i)
	});
	var i=$('.one').data('index');
	$('.onee').click(function(){
		clearInterval(timerId1);
		$('.one').hide();
		$($('.one')[i]).show();
		i++;
		if (i>2) {i=0};
	})
	$('.oneel').click(function(){
		clearInterval(timerId1);
		$('.one').hide();
		$($('.one')[i]).show();
		i--;
		if(i<0){i=2};
	})
	$('.jiantou').mouseout(function(){
		clearInterval(timerId1);
		timerId1=setInterval(lunbo1,1000);
	})
	var timerId1=setInterval(lunbo1,1000);

	$('.two').each(function(i){
		$(this).data('index',i)
	});
	var i=$('.two').data('index');
	$('.twoo').click(function(){
		clearInterval(timerId2);
		$('.two').hide();
		$($('.two')[i]).show();
		i++;
		if (i>2) {i=0};
	})
	$('.twool').click(function(){
		clearInterval(timerId2);
		$('.two').hide();
		$($('.two')[i]).show();
		i--;
		if(i<0){i=2};
	})
	$('.jiantou').mouseout(function(){
		clearInterval(timerId2);
		timerId2=setInterval(lunbo2,1000);
	})
	var timerId2=setInterval(lunbo2,1000);

		$('.three').each(function(i){
		$(this).data('index',i)
	});
	var i=$('.three').data('index');
	$('.threee').click(function(){
		clearInterval(timerId3);
		$('.three').hide();
		$($('.three')[i]).show();
		i++;
		if (i>2) {i=0};
	})
	$('.threeel').click(function(){
		clearInterval(timerId3);
		$('.three').hide();
		$($('.three')[i]).show();
		i--;
		if(i<0){i=2};
	})
	$('.jiantou').mouseout(function(){
		clearInterval(timerId3);
		timerId3=setInterval(lunbo3,1000);
	})
	var timerId3=setInterval(lunbo3,1000);

		$('.four').each(function(i){
		$(this).data('index',i)
	});
	var i=$('.four').data('index');
	$('.fourr').click(function(){
		clearInterval(timerId4);
		$('.four').hide();
		$($('.four')[i]).show();
		i++;
		if (i>2) {i=0};
	})
	$('.fourrl').click(function(){
		clearInterval(timerId4);
		$('.four').hide();
		$($('.four')[i]).show();
		i--;
		if(i<0){i=2};
	})
	$('.jiantou').mouseout(function(){
		clearInterval(timerId4);
		timerId4=setInterval(lunbo4,1000);
	})
	var timerId4=setInterval(lunbo4,1000);

		$('.five').each(function(i){
		$(this).data('index',i)
	});
	var i=$('.five').data('index');
	$('.fivee').click(function(){
		clearInterval(timerId5);
		$('.five').hide();
		$($('.five')[i]).show();
		i++;
		if (i>2) {i=0};
	})
	$('.fiveel').click(function(){
		clearInterval(timerId5);
		$('.five').hide();
		$($('.five')[i]).show();
		i--;
		if(i<0){i=2};
	})
	$('.jiantou').mouseout(function(){
		clearInterval(timerId5);
		timerId5=setInterval(lunbo5,1000);
	})
	var timerId5=setInterval(lunbo5,1000);


			$('.six').each(function(i){
		$(this).data('index',i)
	});
	var i=$('.six').data('index');
	$('.sixx').click(function(){
		clearInterval(timerId6);
		$('.six').hide();
		$($('.six')[i]).show();
		i++;
		if (i>2) {i=0};
	})
	$('.sixxl').click(function(){
		clearInterval(timerId6);
		$('.six').hide();
		$($('.six')[i]).show();
		i--;
		if(i<0){i=2};
	})
	$('.jiantou').mouseout(function(){
		clearInterval(timerId6);
		timerId6=setInterval(lunbo6,1000);
	})
	var timerId6=setInterval(lunbo6,1000);


	  var color=['#4AE2E7','#FAF1F6','#FF8319','#DBDBDB','#EFE7DC','#DD2726'];
	  var index = 0;
	  var lunbo  =  function(){
	    $('.xiaok').hide();
	    var el = $('.xiaok')[index];
	    $(el).show();

	    $('.yingcaa').hide();
	    var el2 =$('.yingcaa')[index];
	    $(el2).show();

	    $('.fenlei').css({background:color[index]});
	    $('.biaodian').removeClass('redd');
	    $($('.biaodian')[index]).addClass('redd');

	    index += 1;
	    if( index === $('.xiaok').length ){
	      index = 0;
	    }
	  }
	  $('.biaodian').each(function(i){
	    $(this).data('index',i)
	  });

	  $('.biaodian').hover(function(){
	    clearInterval(timerId);
	    $('.biaodian').removeClass('redd');
	    $(this).addClass('redd');
	    var i = $(this).data('index');
	    $('.xiaok').hide();
	    $('.fenlei').css({background:color[i]});
	    $( $('.xiaok')[i] ).show();

	    $('.yingcaa').hide();
	    $($('.yingcaa')[i]).show();

	    index = i;
	  },function(){
	    clearInterval(timerId);
	    timerId = setInterval(lunbo,1500);
	  });
	  var timerId = setInterval(lunbo,1500);

	$(".shi").click(function(){
    $({top: $(window).scrollTop()}).animate(
      {top: 0},
      {
        duration: 700,
	step: function() {
	  $(window).scrollTop(this.top);
	}
      }
    );
  	});


  	var indexx = 0;
	  var lunbo1  =  function(){
	    $('.one').hide();
	    var el2 = $('.one')[indexx];
	    $(el2).show();
	    indexx += 1;
	    if( indexx == $('.one').length ){
	      indexx = 0;
	    }
	  }
	  var timerId1 = setInterval(lunbo1,1000);

	var inde=0;
	  var lunbo2  =  function(){
	    $('.two').hide();
	    var el2 = $('.two')[inde];
	    $(el2).show();
	    inde += 1;
	    if( inde == $('.two').length ){
	      inde = 0;
	    }
	  }
	  var timerId2 = setInterval(lunbo2,1000);

	  	var ins=0;
	  var lunbo3  =  function(){
	    $('.three').hide();
	    var el2 = $('.three')[ins];
	    $(el2).show();
	    ins += 1;
	    if( ins == $('.three').length ){
	      ins = 0;
	    }
	  }
	  var timerId3 = setInterval(lunbo3,1000);

	  	var ii=0;
	  var lunbo4  =  function(){
	    $('.four').hide();
	    var el2 = $('.four')[ii];
	    $(el2).show();
	    ii += 1;
	    if( ii == $('.four').length ){
	      ii = 0;
	    }
	  }
	  var timerId4 = setInterval(lunbo4,1000);

	  	var inn=0;
	  var lunbo5  =  function(){
	    $('.five').hide();
	    var el2 = $('.five')[inn];
	    $(el2).show();
	    inn += 1;
	    if( inn == $('.five').length ){
	      inn = 0;
	    }
	  }
	  var timerId5 = setInterval(lunbo5,1000);

	  	var idd=0;
	  var lunbo6  =  function(){
	    $('.six').hide();
	    var el2 = $('.six')[idd];
	    $(el2).show();
	    idd += 1;
	    if( idd == $('.six').length ){
	      idd = 0;
	    }
	  }
	  var timerId6 = setInterval(lunbo6,1000);


	  var ti;
	  $(window).scroll(function(){
	    if($(window).scrollTop() > 500){
	      clearTimeout(ti);
	      ti = setTimeout(function(){
	  $('.fixtop').show();
	      },500);
	    }else{
	      clearTimeout(ti);
	      $('.fixtop').hide();
	    };
	  });

	  // $('.content.zhutibf').each(function(i){
	  // 	$(this).data('index',i);
	  // })
	  // $(window).scroll(function(){
	  // 	$('.content.zhutibf').hover(function(){
	  // 		var i=$(this).data('index');
	  // 		$($('.youcee')[i]).addClass(function(){
	  // 			return 'p'+i;
	  // 		})
	  // 	},
	  // 	function(){
	  // 		var i=$(this).data('index');
	  // 		$($('.youcee')[i]).removeClass(function(){
	  // 			return 'p'+i;
	  // 		})
	  // 		$($('youcee')[i]).addClass(function(){
	  // 			return 'pp'+i;
	  // 		})
	  // 	})
	  // })

	$(window).scroll(function(){
		var bian =$(window).scrollTop();
		if(bian>=1150&&bian<1600){
			$($('.youcee')[0]).addClass('p0');
		}else{$($('.youcee')[0]).removeClass('p0')};
		if(bian>=1600&&bian<2050){
			$($('.youcee')[1]).addClass('p1');
		}else{$($('.youcee')[1]).removeClass('p1')};
		if(bian>=2050&&bian<2620){
			$($('.youcee')[2]).addClass('p2');
		}else{$($('.youcee')[2]).removeClass('p2')};
		if(bian>=2620&&bian<3070){
			$($('.youcee')[3]).addClass('p3');
		}else{$($('.youcee')[3]).removeClass('p3')};
		if(bian>=3070&&bian<3520){
			$($('.youcee')[4]).addClass('p4');
		}else{$($('.youcee')[4]).removeClass('p4')};
		if(bian>=3520&&bian<4090){
			$($('.youcee')[5]).addClass('p5');
		}else{$($('.youcee')[5]).removeClass('p5')};
		if(bian>=4090&&bian<4540){
			$($('.youcee')[6]).addClass('p6');
		}else{$($('.youcee')[6]).removeClass('p6')};
		if(bian>=4540&&bian<4995){
			$($('.youcee')[7]).addClass('p7');
		}else{$($('.youcee')[7]).removeClass('p7')};
		if(bian>=4995&&bian<5570){
			$($('.youcee')[8]).addClass('p8');
		}else{$($('.youcee')[8]).removeClass('p8')};
		if(bian>=5570&&bian<6020){
			$($('.youcee')[9]).addClass('p9');
		}else{$($('.youcee')[9]).removeClass('p9')};
		if(bian>=6020&&bian<6550){
			$($('.youcee')[10]).addClass('p10');
		}else{$($('.youcee')[10]).removeClass('p10')};

	})




	  document.onmousedown=function(e){
	  	e.preventDefault();

	  }
	

		

}
		
