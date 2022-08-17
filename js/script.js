/* global monogatari */

// Define the messages used in the game.
monogatari.action ('message').messages ({

});

// Define the notifications used in the game
monogatari.action ('notification').notifications ({

});

// Define the Particles JS Configurations used in the game
monogatari.action ('particles').particles ({

});

// Define the canvas objects used in the game
monogatari.action ('canvas').objects ({

});

// Credits of the people involved in the creation of this awesome game
monogatari.configuration ('credits', {

});


// Define the images that will be available on your game's image gallery
monogatari.assets ('gallery', {

});

// Define the music used in the game.
monogatari.assets ('music', {

});

// Define the voice files used in the game.
monogatari.assets ('voices', {

});

// Define the sounds used in the game.
monogatari.assets ('sounds', {

});

// Define the videos used in the game.
monogatari.assets ('videos', {

});

// Define the images used in the game.
monogatari.assets ('images', {

});

// Define the backgrounds for each scene.
monogatari.assets ('scenes', {
	'night': 'hamsterhousenight.png',
	'fireplace':'fireplace.png',
	'hamsterhouse':'hamsterhouse.png'

});


// Define the Characters
monogatari.characters ({
	'y': {
		name: '叙事者',
		color: '#5bcaff',
		sprites: {
			surprised: 'surprised.png',
			happy: 'happy.png',
			like: 'like.png',
			puzzled: 'puzzled.png',
			sad: 'sad.png',
			hugging:'hugging.png',
			normal1:'normal.png',
			normal2:'normal2.png'
		}
	}
});

monogatari.script ({
	// 游戏开始，这是第一天
	'Start': [
		'show scene night with fadeIn',//场景：篝火地
		'y 你好啊',
		'y 你能坐过来吗？',
		// 在这里切换拉近版的场景
		'show scene fireplace with fadeIn',
		'show character y sad at right with fadeIn',
		'y ...',
		'y 我看你的心情好像不太好',
		'y ...',
		'y 说实话，我不想看到你如此落魄',
		'y 所以我想跟你一起走出这个困境',
		{
			'Choice': {
				'Dialog': 'y 可以吗？',
				'Yes': {
					'Text': '好',
					'Do': 'jump Yes'
				},
				'No': {
					'Text': '不好',
					'Do': 'jump No'
				}
			}
		}
	],

	'Yes': [
		'show character y happy at right',
		'y 我很高兴你能同意!',
		'y 你已经迈出一大步了',
		'y 首先，我想要你帮我一个忙',
		'y 你能拥抱一下你自己吗？',
		'show character y hugging at right',
		'y 像这样',//人物做动作
		'y ...',
		'y 要保持10秒钟才有效果',
		'wait 10000',
		'y 十秒了吗？',
		'show character y sad at right',
		'y 在这里我必须说一声抱歉',
		'y 我能想象你一定经历过许多风风雨雨',
		'y 但我却没法亲自来安慰你',
		'show character y puzzled at right',
		'y 嗯...',
		'y 你喜欢礼物吗？',
		'show character y happy at right',
		'y 我给你做个礼物，怎么样？',
		'show character y normal2 at right',
		'y ...',
		'y 我知道你肯定想说：',
		'y “我跟你隔了大老远怎么送你礼物”',
		'y 是吧？',
		'show character y happy at right',
		'y 明天你就知道了，给我一点时间准备惊喜，还是这个地方见面',
		'jump Day2' //这里进入等待状态
	],

	'No': [
		'没事，我一直在这里，你可以随时再来',
		'end'
	],
	
	'Day2': [
		'show scene hamsterhouse with fadeIn',
		'show character y happy at right with fadeIn',
,		'y 你来啦',//场景：篝火地
		'y 请坐',
		'show character y normal2 at right',
		'y ...',
		'y 你最近还好吗',
{
			'Choice': {
				'Dialog': '你还好吗？',
				'good': {
					'Text': '不错',
					'Do': 'jump good'
				},
				'soso': {
					'Text': '还行',
					'Do': 'jump soso'
				},
				'bad': {
					'Text': '不太好',
					'Do': 'jump bad'
				}
			}
		}
	],

	'good': [
		'show character y happy at right',
		'y 你开心就好',
		'y 我给你看个好东西',
		'jump paper'
	],

	'soso': [
		'show character y happy at right',
		'y 那我给你看个好东西，一定会提起你的兴趣',
		'jump paper'
	],

	'bad': [
		'show character y happy at right',
		'y 我给你看个好东西安慰你吧',
		'jump paper'
	],

	'paper': [
		'show character y normal1 at right',
		'y 请看......',
		'show image 千纸鹤.png left',
		'show character y like at right',
		'y 噔噔！',
		'y 这是我给你做的手工折纸，千纸鹤',
		'show character y normal1 at right',
		'y 当然，我没法亲手把我的手工送给你',
		'show character y puzzled at right',
		'y 不过...',
		'show character y normal1 at right',
		'y 我可以教你怎么折纸',
		'show character y happy at right',
		'y 怎么样？',
		'show character y normal2 at right',
		'y 千纸鹤对你来说还是有点难',
		'y 我们可以先从一个简单的折纸开始学起',
		'y 你想先学...',
		'y 用来占卜玩的东南西北？',
		'y 可以飞的纸飞机？',
		'y 还是可以在水上飘的小船？',
{
			'Choice': {
				'Dialog': '学哪个？',
				'nsew': {
					'Text': '东南西北',
					'Do': 'jump nsew'
				},
				'plane': {
					'Text': '纸飞机',
					'Do': 'jump plane'
				},
				'boat': {
					'Text': '小船',
					'Do': 'jump boat'
				}
			}
		}
	],

	'nsew': [
		'y 好的！让我们来学一下东南西北',
		'show character y happy at right',
		'y 首先我需要你拿一张A4纸',
		'show character y normal1 at right',
		'show image 小船步骤1.png left',
		'y 拿好了吗？',
		'show image 折纸步骤4.png left',
		'y 把纸的一角贴着边折过来',
		'show image 折纸步骤5.png left',
		'y 把下面折起来',
		'show image 折纸步骤6.png left',
		'y 变成这样',
		'show image 折纸步骤7.png left',
		'y 沿着边边撕下，你可以反复再折几次，这样撕的更干净一点',
		'show image 折纸步骤8.png left',
		'y 小心地撕...',
		'show image 折纸步骤9.png left',
		'y 好了！摊开后就是一个完美的正方形！',
		'show image 折纸东南西北步骤1.png left',
		'y 将这个正方形对折',
		'show image 折纸东南西北步骤2.png left',
		'y 好...',
		'show image 折纸东南西北步骤3.png left',
		'y 再摊开...这样我们就可以得到一个中间的线',
		'show image 折纸东南西北步骤4.png left',
		'y 将四个角折进去，对着这个线',
		'show image 折纸东南西北步骤5.png left',
		'y 就是这样',
		'show image 折纸东南西北步骤6.png left',
		'y 翻过来',
		'show image 折纸东南西北步骤7.png left',
		'y 背后应该是这样的',
		'show image 折纸东南西北步骤8.png left',
		'y 再将四个角折进去',
		'show image 折纸东南西北步骤9.png left',
		'y 这时我们的东南西北应该是这样的',
		'show image 折纸东南西北步骤10.png left',
		'y 对折',
		'show image 折纸东南西北步骤11.png left',
		'y 现在是这个样子',
		'show image 折纸东南西北步骤12.png left',
		'y 像我这样把手放进旁边的开口里',
		'show image 折纸东南西北步骤13.png left',
		'y 将其撑开',
		'show image 折纸东南西北步骤15.png left',
		'y 好了！成品应该是这样的',
		'y 如果不像也没关系，毕竟你才刚刚接触折纸，是吧？',
		'jump paperafter'
	],

	'plane': [
		'show character y normal1 at right',
		'y 纸飞机折得越精准，飞得就越稳',
		'show image 纸飞机步骤1.png left',
		'y 首先我们需要准备一张A4纸',
		'show image 纸飞机步骤2.png left',
		'y 将其对折',
		'show image 纸飞机步骤3.png left',
		'y ',
		'show image 纸飞机步骤4.png left',
		'y 再翻开',
		'show image 纸飞机步骤5.png left',
		'y 将两个角像这样往里折',
		'show image 纸飞机步骤6.png left',
		'y 之后跟我一样往下折',
		'show image 纸飞机步骤7.png left',
		'y 把上面两边的角折到中间，像我这样不要折到低',
		'show image 纸飞机步骤8.png left',
		'y 将下面那个小角往上折，卡住上面的两个角',
		'show image 纸飞机步骤9.png left',
		'y 对折成这样',
		'show image 纸飞机步骤10.png left',
		'y 沿着这条线把机翼往下折',
		'show image 纸飞机步骤11.png left',
		'y 后面的也这样做',
		'show image 纸飞机步骤12.png left',
		'y 做好了！纸飞机的成品应该是长这样的',
		'y 如果折歪了也没事，你已经很认真了',
		'jump paperafter'
	],

	'boat': [
		'show character y happy at right',
		'y 这个纸船是真的可以在水上飘的哦',
		'show character y normal1 at right',
		'show image 小船步骤1.png left',
		'y 好的。让我们准备一个A4纸',
		'show image 小船步骤2.png left',
		'y 从上往下对折',
		'show image 小船步骤3.png left',
		'y 好！',
		'show image 小船步骤4.png left',
		'y 对折一下',
		'show image 小船步骤5.png left',
		'y 然后...',
		'show image 小船步骤6.png left',
		'y 再翻开，我们只想要一个正好在中间的参考线',
		'show image 小船步骤7.png left',
		'y 把两个角往里折，对齐中间的线',
		'show image 小船步骤9.png left',
		'y 把下面的部分往上折，反面也这样',
		'show image 小船步骤10.png left',
		'y 像我这样，把手伸进去撑开',
		'show image 小船步骤11.png left',
		'y 然后往里折，就会变成这样',
		'show image 小船步骤12.png left',
		'y 像我这样折...',
		'show image 小船步骤13.png left',
		'y 后面也是这样',
		'show image 小船步骤14.png left',
		'y 现在我们的折纸应该是这样的',
		'show image 小船步骤15.png left',
		'y 我们再次把手放入口袋里撑开',
		'show image 小船步骤16.png left',
		'y 好的，现在像不像一朵花？',
		'show image 小船步骤17.png left',
		'y 把两边的花瓣往外掰...',
		'show image 小船步骤18.png left',
		'y 完成啦！小船的成品应该是长这样的',
		'y 如果做的不像也没关系，照样可以在水上漂',
		'jump paperafter'
	],

	'paperafter':[
		'show character y happy at right',
		'y 做的不错！你想再看一遍，还是学个其他的折纸？',
{
			'Choice': {
				'Dialog': '再学哪个？',
				'nsew': {
					'Text': '东南西北',
					'Do': 'jump nsew'
				},
				'plane': {
					'Text': '纸飞机',
					'Do': 'jump plane'
				},
				'boat': {
					'Text': '小船',
					'Do': 'jump boat'
				},
				'no':{
					'Text':'不想学了',
					'Do': 'jump nopaper'
				}
			}
		}
	],
	'nopaper':[
	'show character y happy at right',
	'y 啊，今天也过得很充实呢',
	'y 你手上的折纸就算是我送给你的礼物呗',
	'y 嘿嘿',
	'y 对了，你喜欢听什么种类的音乐啊？',
	]


});