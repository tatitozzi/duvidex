window.onload = function () {

	if (location.href.split('?')){
		var params = location.href.split('?')[1].split('&');
		var data = {};
		for (x in params){
			data[params[x].split('=')[0]] = params[x].split('=')[1];
		}
		var bot_id = data.bot_id;

		var stages = [0, 1];
		var counter = 0;
		var pop_change = document.getElementById("circle-container");
		var pop_front = document.getElementById("front");
		//var pop_back = document.getElementById("back");
		var pop_outer_ring = document.getElementById("outer-ring");
		var pop_circle = document.getElementById("circle");
		var chat_logo = document.getElementById("chat_logo");
		//var title = document.getElementById("title");
		//title.innerHTML = data.title || 'Chat';
		if (data.background) {
			if (data.background.startsWith('http')){
				chat_logo.style.background = "transparent";
				pop_front.style.backgroundImage = 'url(' + data.background + ')';
				pop_front.style.backgroundRepeat = 'no-repeat';
				pop_front.style.backgroundSize = '60px 60px';
				pop_front.style.backgroundPosition = 'center';
				chat_logo.style.visibility = "hidden";
			}
			else {
				pop_front.style.background = decodeURIComponent(data.background);
				chat_logo.style.visibility = "visible";
				chat_logo.style.fill = data.color;
			}
			if (data.popupType === 'bar'){
				pop_front.style.width = '300px';
				pop_front.style.height = '50px';
				pop_front.style.borderRadius = "unset";
				pop_front.style.borderTopLeftRadius = "10px";
				pop_front.style.borderTopRightRadius = "10px";
				pop_front.style.top = "32px";
				pop_front.style.padding = '0px 5px';

				pop_change.style.height = '0px';

				pop_circle.style.width = "0px";
				pop_circle.style.height = "0px";

				pop_circle.style.top = '-20px';

				if (data.title){
					pop_front.innerHTML = decodeURIComponent(data.title);
				}
			}
		}
		else {
			pop_front.style.background = "#7e1bd9";
			chat_logo.style.fill = "#FFF";
			chat_logo.style.visibility = "visible";

			if (data.bot_id === '979d28d4-f63c-11e8-969d-0951edd381f0'){
				pop_front.style.background = "#802880";
				chat_logo.style.fill = "#FFF";
				chat_logo.style.display = "none";
				pop_front.innerText = "?";
				pop_front.style.color = "#FFF";
				pop_front.style.fontSize = "35px";
				pop_front.style.fontWeight = "300";
			}
		}
		if (data.color) pop_front.style.color = data.color;
		//pop_back.style.background = data.background;
		//pop_back.style.color = data.color;
		//pop_outer_ring.style.border = '2px solid transparent';
		//pop_outer_ring.style.background = data.background + '4f';

		//setInterval(change, 9000);

		//setTimeout(function(){ change() }, 3000);

		/*
		function change() {
			if (counter === 0){
				pop_circle.classList.add('rotate_circle_1');
				pop_outer_ring.classList.add('rotate_outer_1');
				//title.style.visibility = 'hidden';
			}
			else if (counter === 1){
				pop_circle.classList.remove('rotate_circle_1');
				pop_outer_ring.classList.remove('rotate_outer_1');
				//title.style.visibility = 'visible';
			}
			counter++;
  			if (counter >= stages.length) {
    			counter = 0;
  			}
		}
		*/

/*
		function change() {
			if (counter === 0){
				chat_logo.style.visibility = "visible";
				chat_logo.style.opacity = 1;
				title.style.visibility = "hidden";
				title.style.opacity = 0;
			}
			else if (counter === 1){
				title.style.visibility = "visible";
				title.style.opacity = 1;
				chat_logo.style.visibility = "hidden";
				chat_logo.style.opacity = 0;
			}

  			counter++;
  			if (counter >= stages.length) {
    			counter = 0;
  			}
		}
*/

		function changeStatus(){
			//parent.window.postMessage("change_" + bot_id, "*");
			parent.window.postMessage({action: "change", bot_id: bot_id}, "*");
		}

		pop_front.onclick = changeStatus;
	}
}
