(function(exoDynamicParams){(function(){try{var goal=document.scripts[document.scripts.length-1].getAttribute('data-goal');var value=document.scripts[document.scripts.length-1].getAttribute('data-value')||null;if(typeof goal!=='undefined'&&goal!==null){var imgs=new Array();var imgCounter=0;for(var i=0;i<exoDynamicParams.aliases.length;i++){imgCounter++;var tagSrc='https://'+exoDynamicParams.aliases[i]+'/tag.php?goal='+goal;if(value){tagSrc+='&value='+value}imgs[i]=new Image(1,1);imgs[i].src=tagSrc;imgs[i].onload=function(i){imgCounter--};imgs[i].onerror=function(i){imgCounter--};try{document.body.appendChild(imgs[i])}catch(e){}}var iterationsMs=100;var iterations=(2000/iterationsMs); var checkImagesLoaded=setInterval(function(){if(imgCounter<1||iterations<1){clearInterval(checkImagesLoaded);var myEvent=new CustomEvent('goals-done');document.dispatchEvent(myEvent)}iterations--},iterationsMs)}}catch(e){}})()})({"aliases":["syndication.exdynsrv.com","syndication.exoclick.com","s.opoxv.com","syndication.realsrv.com"]})