<<<<<<< HEAD
var start = new Date().getTime();
		
			function getRandomColor() {
  			
				var letters = '0123456789ABCDEF'.split('');
  				
				var color = '#';
				
				for (var i = 0; i < 6; i++) {
    			
					color += letters[Math.floor(Math.random() * 16)];
  				}
				
				return color;
			
			}
		
		function makeShapeAppear() {
			
			var top = Math.random() * 400;
			
			var left = Math.random() * 1000;
			
			var width = Math.floor(Math.random() * 250) + 30;
			
			if (Math.random() > 0.5) {
				
				document.getElementById("shape").style.borderRadius = "50%";
			
			} else {
				
				document.getElementById("shape").style.borderRadius = "0";
			} 
			
			document.getElementById("shape").style.backgroundColor = getRandomColor();
			
			document.getElementById("shape").style.width = width + "px";

			document.getElementById("shape").style.height = width + "px";
			
			document.getElementById("shape").style.top = top + "px";
			
			document.getElementById("shape").style.left = left + "px";
			
			document.getElementById("shape").style.display = "block";
			
			start = new Date().getTime();
			
		}
		
		function appearAfterDealay() {
			
			setTimeout(makeShapeAppear, Math.random() * 2000);
		}
		
		appearAfterDealay();
		
		document.getElementById("shape").onclick = function() {
                
                document.getElementById("shape").style.display = "none";
                
                var end = new Date().getTime();
                
                var timeTaken = (end - start) / 1000;
                
                document.getElementById("timeTaken").innerHTML = timeTaken + "s";
			
			appearAfterDealay();
		}





=======
var start = new Date().getTime();
		
			function getRandomColor() {
  			
				var letters = '0123456789ABCDEF'.split('');
  				
				var color = '#';
				
				for (var i = 0; i < 6; i++) {
    			
					color += letters[Math.floor(Math.random() * 16)];
  				}
				
				return color;
			
			}
		
		function makeShapeAppear() {
			
			var top = Math.random() * 400;
			
			var left = Math.random() * 1000;
			
			var width = Math.floor(Math.random() * 250) + 30;
			
			if (Math.random() > 0.5) {
				
				document.getElementById("shape").style.borderRadius = "50%";
			
			} else {
				
				document.getElementById("shape").style.borderRadius = "0";
			} 
			
			document.getElementById("shape").style.backgroundColor = getRandomColor();
			
			document.getElementById("shape").style.width = width + "px";

			document.getElementById("shape").style.height = width + "px";
			
			document.getElementById("shape").style.top = top + "px";
			
			document.getElementById("shape").style.left = left + "px";
			
			document.getElementById("shape").style.display = "block";
			
			start = new Date().getTime();
			
		}
		
		function appearAfterDealay() {
			
			setTimeout(makeShapeAppear, Math.random() * 2000);
		}
		
		appearAfterDealay();
		
		document.getElementById("shape").onclick = function() {
                
                document.getElementById("shape").style.display = "none";
                
                var end = new Date().getTime();
                
                var timeTaken = (end - start) / 1000;
                
                document.getElementById("timeTaken").innerHTML = timeTaken + "s";
			
			appearAfterDealay();
		}





>>>>>>> 3c10df721793332b1fdaf29dfb4ae14f53a24d82
