window.onload=function(){
	var heart=document.getElementById("heart");
	var red_heart=false;
	heart.onclick=function(){
		if(red_heart){
			this.className="start";
		}else{
			this.className="animate";
		}
		red_heart=!red_heart;
	}
}