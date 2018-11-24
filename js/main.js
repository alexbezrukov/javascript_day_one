
function myFirstApp(name, age){
	
	alert("Привет, меня зовут" + name + " и это моя первая программа");
	
	function showSkills(){
		
		let skills = ['html5','css3','bootstrap4', 'flexbox', 'js', 'jQuery'];
		
		for(let i = 0; i < skills.length; i++){
			// я владею
			alert("Я владею" + skills[i]);
		}
	}
	showSkills();
	
	function checkAge(){
		if(age > 18){
			alert("Поздравляю, есть шанс стать frontend-разработчиком!");
		} else {
			alert("Рановато еще");
		}
	}
	
	checkAge(39);
	
	function calcPow(num){
		alert(num*num)
	}
	calcPow(4);
}
 myFirstApp("Алексей",39)






























