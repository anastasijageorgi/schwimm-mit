


function myFunction(missionid) {
  var mission = document.getElementById(missionid); 
  var dots = mission.querySelector(".dots");
  var mehrText= mission.querySelector(".mehr");
  var btnText= mission.querySelector(".button");

  if (dots.style.display === "none") 
	{dots.style.display = "inline";
   	 btnText.innerHTML = "mehr"; 
    	mehrText.style.display = "none";
  	} 
	else 
	{dots.style.display = "none";
  	btnText.innerHTML = "weniger"; 
    	mehrText.style.display = "inline";
  	}
	}

