window.onload = function() {
		var cls;
		var anchors = document.getElementById("latinText").getElementsByTagName('span');
        for(var i = 0; i < anchors.length; i++) {
            anchors[i].onmouseover = function(){highlight(this,"#BBBBBB")};
			anchors[i].onmouseout = function(){highlight(this,'#DDDDDD')};
        }
		var anchors = document.getElementById("englishText").getElementsByTagName('span');
        for(var i = 0; i < anchors.length; i++) {
            anchors[i].onmouseover = function(){highlight(this,"#BBBBBB")};
			anchors[i].onmouseout = function(){highlight(this,'#DDDDDD')};
        }
    }


function highlight(obj, color) {
	cls = obj.className.split(" ")[0];
	var selectedElements = document.getElementsByClassName(cls);
    for (i = 0; i < selectedElements.length; i++) {
		selectedElements[i].style.backgroundColor = color;
	}
}

function highlightPOS(partOfSpeech, color) {
	var latinWords = document.getElementsByClassName(partOfSpeech);
	for(var i = 0; i < latinWords.length; i++) {
		latinWords[i].style.backgroundColor = color;
	}
}

function clearColor() {
	var anchors = document.getElementById("latinText").getElementsByTagName('span');
        for(var i = 0; i < anchors.length; i++) {
            highlight(anchors[i],'#DDDDDD');
        }
}