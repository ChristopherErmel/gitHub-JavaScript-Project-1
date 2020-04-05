//This array will hold all of the students names
let students = ["Christopher Ermel", "Linh Duong", "Brea Parker", "Danil Borisov", "Haider Malik", "Deep Parmar", "Yuki Miyazawa", "Michael Valadao-Martins", "Yolanda Hames", "Matt Hames", "Tylor Wichiciel", "Navneet Singh", "Meisam Koohaki", "Edwin Christie", "Mariana Lima", "Norah Alharbi", "Kiril Mankovskyi", "Vy Hoang", "Mark Song", "Kirill Barsukov", "Noah Hawke", "Andrew Reid", "Mason Ferrie", "Mark Sporich", "Ambuj Bho", "Owen Brown", "Nicole Gray", "Simarpreet Singh", "Gurasees Singh Tehria", "Elias Aguilera", "Prabhat Batra", "Jaime Tavares", "Preet Nakrani", "Drake Esdon"];
//This array will hold all of the instructors names
let instructors = ["Jessica Gilfillan", "Ben Blanc", "Maziar Shajari", "Michael Kearns", "Justin Hunt", "Tim Patrick"];
//this variable is called listinfo to let them know when the list has changed.
let listInfo = document.getElementById("listInfo");
//this variable will change the list content depending on the choice above.
let listContent = document.getElementById("listContent");
//this var is to change the choose to clear in the drop down.
let changeClear = document.getElementById("clear");
//this will be for the student list and will start with a msg already
let studentList = "<p><b>Welcome All Students to COMP1073:</b><p>";
//this will be for the instructor list and will start with a msg already
let instructorList = "<p><b>Welcome All Instructors:</b><p>";
//creating a new var for the student/instructor position number
let p;


//q20
//q24


//This function will change the list depending on the option selected.
function changeList($list) {
	//if they select the student list create and show the students.
    if($list == "student"){
    	//updateing the choose to clear option
    	changeClear.innerHTML = "Clear Info";
    	//updateing listInfo to be blank.
    	listInfo.innerHTML = "";
    	//updating postion number
    	p = 1;
    	for (let i = 0; i < students.length; i++){    		
			//if we are on our last itterartion put a different message.
			if (i === students.length -1){
				studentList += "<p>and Hello <b>" + students[i] + "</b>, you're last in the list!<p>";
			}
			//run through all students and welcome them to the list.
			else{
				studentList += "<p>Hello <b>" + students[i] + "</b>, you're #" + p + " in the list!<p>";
				p++;
			}
		}
		//now to change the list content.
		listContent.innerHTML = studentList;
    }
    if($list == "instructor"){
    	//updateing the choose to clear option
    	changeClear.innerHTML = "Clear Info";
    	//updateing listInfo to be blank.
    	listInfo.innerHTML = "";
    	//updating postion number
    	p = 1;
    	for (let i = 0; i < instructors.length; i++){    		
			//if we are on our last itterartion put a different message.
			if (i === instructors.length -1){
				instructorList += "<p>and Hello <b>" + instructors[i] + "</b>, you're last in the list!<p>";
			}
			//run through all instructors and welcome them to the list.
			else{
				instructorList += "<p>Hello <b>" + instructors[i] + "</b>, you're #" + p + " in the list!<p>";
				p++;
			}
		}
		//now to change the list content.
		listContent.innerHTML = instructorList;
    }
    if($list == "default"){
    	//updating the clear back to choose.
    	changeClear.innerHTML = "Choose List...";
    	//updateing listInfo to be show the msg again.
    	listInfo.innerHTML = "Please select a list from above.";
    	//this will clear the content.
    	listContent.innerHTML = "";
    }
}




