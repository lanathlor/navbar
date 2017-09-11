function enlightnavbar(page) {
	$("#" + page).addClass("active");
};

function makeNav(page){
  var path = page.split('/');
  var i = 1;
  for (i; path[i]; i++){};
  var name_page = path[i - 1].split('.');
	if (name_page[0] != "") {
	  enlightnavbar(name_page[0]);
	} else {
	 	enlightnavbar("accueil");
	 }
  return (name_page[0]);
};

function listener() {
    var elem = document.getElementById("mySidenav").style;
    if (elem.width == "70px") {
    	console.log("ok");
    	elem.transition = "0.5s";
    	elem.width = "250px";
    } else if (elem.width == "0px" && elem.height == "0%") {
    	elem.transition = "0s";
    }
    console.log(elem.width);
}

function openNav() {
    var elem = document.getElementById("mySidenav");
    elem.style.width = "70px";
    elem.style.transition = "0.5s";
   	elem.style.height = "100%";
}

function closeNav() {
    document.getElementById("mySidenav").style.transition = "0.5s";	
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("mySidenav").style.height = "0%";
}

document.getElementById("mySidenav").addEventListener("transitionend", listener, true);