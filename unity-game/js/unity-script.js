var config={width:960,height:600,params:{enableDebugging:"0"}},u=new UnityObject2(config);jQuery(function(){var e=jQuery("#unityPlayer").find(".missing"),n=jQuery("#unityPlayer").find(".broken");e.hide(),n.hide(),u.observeProgress(function(i){switch(i.pluginStatus){case"broken":n.find("a").click(function(e){return e.stopPropagation(),e.preventDefault(),u.installPlugin(),!1}),n.show();break;case"missing":e.find("a").click(function(e){return e.stopPropagation(),e.preventDefault(),u.installPlugin(),!1}),e.show();break;case"installed":e.remove();break;case"first":}}),u.initPlugin(jQuery("#unityPlayer")[0],"WebPlayer.unity3d")});