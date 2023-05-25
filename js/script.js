	var elm = document.getElementById("maindiv");
	elm.addEventListener("click",getcord);
	var x,y;
	const clickEvent = [];


	function getcord(ev){

		var bnds = elm.getBoundingClientRect();
		x = event.clientX - bnds.left;
		y = event.clientY - bnds.top;
		
		const clique = [];
		// const clickEvent = [];
		clique.push(parseInt(x,10),parseInt(y,10));
		clickEvent.push(clique);	
	}


	function mapa(){
		var canv = document.getElementById("canvas");
		canv.style.backgroundColor = "#9e9e9e7d";
		canv.style.width ='100%';
		canv.style.height='100%';
		canv.width  = canv.offsetWidth;
		canv.height = canv.offsetHeight;
		var ctx = canv.getContext("2d");

		for(var i=0 ;i<clickEvent.length;i++){
			console.log ("valor elemento " + i + " é igual a: "+clickEvent[i] )
			ctx.beginPath();
			ctx.arc(clickEvent[i][0], clickEvent[i][1], 10, 0, 2 * Math.PI);
			ctx.stroke();
		}

	}
