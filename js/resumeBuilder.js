//Code for bio section
var bio = {
	"name": "Sandrine Omanda",
	"role": "Web Developer Apprentice",
	"contacts": {
		"mobile": "555-555-5555",
		"email": "someone@somedomain.com",
		"github": "sandrine10",
		"twitter": "@someone",
		"location": "New York, NY"
	},
	"welcomeMessage": "The beautiful thing about learning is that no one can take it away from you. -BB KING",
	"skills": [
	        "Python", "JavaScript ", "HTML/CSS", "Writing stories"
	],
	"languages": [
	        "French - native", "English- fluent", "currently learning Italian"
	],
	"biopic": "images/dolcepic2.jpg"
};

bio.display = function() {
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	$("#header").prepend(formattedRole);
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	$("#header").prepend(formattedName);
	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	$("#footerContacts, #topContacts").append(formattedMobile);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	$("#topContacts").append(formattedEmail);
	$("#footerContacts").append(formattedEmail);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	$("#topContacts").append(formattedGithub);
	$("#footerContacts").append(formattedGithub);
	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	$("#topContacts").append(formattedTwitter);
	$("#footerContacts").append(formattedTwitter);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	$("#topContacts").append(formattedLocation);
	$("#footerContacts").append(formattedLocation);
	var formattedwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedwelcomeMsg);
	var bioPic = HTMLbioPic.replace("%data%", "images/dolcepic2.jpg");
	$("#header").append(bioPic);

	//Skills
	if (bio.skills.length > 0) {
	    $("#header").append(HTMLskillsStart);
	    for (var i = 0; i < bio.skills.length; i++) {
			var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
    		$("#skills").prepend(formattedSkills);
    	}
	};
	//Languages
    $("#header").append(HTMLlanguagesStart);
    for (i in bio.languages) {
	    var formattedLanguages = HTMLlanguages.replace("%data%", bio.languages[i]);
	    $("#languages").append(formattedLanguages);
	}
};

bio.display();
//End code for bio

//Code for work section
var work = {
	"jobs": [{
		    "employer": "Lecourbe",
		    "title": "Assistant",
		    "dates": "2000-2001",
		    "location": "Paris, France",
		    "description": ""
	    },

	    {

		    "employer": "Herbaltransdermal",
		    "title": "Executive assistant",
		    "dates": "2002-2005",
		    "location": "Seattle, WA",
		    "description": ""
	    },
	       {
		    "employer": "Self-Employed",
		    "title": "cofounder",
		    "dates": "2005-2008",
		    "location": "Carmel Valley, CA",
		    "description": "Creating and making products"
	    },
	       {
		    "employer": "Self-Employed",
		    "title": "writer",
		    "dates": "2008-present",
		    "location": "New York, NY",
		    "description": "writing stories"
        }
	]
};

//Start work experrience

work.display = function() {
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);
        var formattedworkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedworkDates);
        var formattedworkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        $(".work-entry:last").append(formattedworkLocation);
        var formattedworkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedworkDescription);
	}
};
work.display();

//Code for projects section

var projects = {
	"projects": [{
		"title": "The basic of the web and HTML",
		"dates": "November 2015",
		"description": "I created a webpage with the new concept and skills I learned in stage1.",
		"images": [
		    "images/webpage.png",

		]
	},
	   {
		"title": "Fresh tomatoes movie trailers",
		"dates": "February 2016",
		"description": "Fresh Tomatoes is a library of some of my favorite movies.",
		"images": [
			"images/movietrailers.png",

		]
	},
	   { 
	  	"title": "Animal Trading Cards",
	  	"dates": "JUne 2016",
	  	"description": "Siberian Tiger's cards.",
	  	"images": [
	  		"images/animalcard.png",
	  	]
	},
	   {
	   	"title": "Portfolio",
	   	"dates": "June 2016",
	   	"description": "Build a portfolio of your projects.",
	   	"images": [
	   		"images/portfolio1.png"
	        ]
	  },
	     {
	   	"title": "Arcade Game",
	   	"dates": "September 2016",
	   	"description": "Created an online game using HTML5 Canvas.",
	   	"images": [
	   	    "images/arcadegame.jpg",
	   	]
	}]

}


projects.display = function() {
    for (project in projects.projects) {
	 	$("#projects").append(HTMLprojectStart);
	 	var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
	    $(".project-entry:last").append(formattedTitle);
	    var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
	    $(".project-entry:last").append(formattedDates);
	    var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
	    $(".project-entry:last").append(formattedDescription);

	    for (image in projects.projects[project].images) {
	    	var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
	    	$(".project-entry:last").append(formattedImage);
	    }
    }
};

projects.display();
//End of projects section


//Code for education section
var education = {
	"schools": [{
		"name": "Berkeley University of California",
		"location": "Berkeley, CA",
		"degree": "BFA",
		"majors": ["Arts"],
		"dates": "1994 - 1998",
		"url": "www.berkeley.edu"
	}, {
		"name": "University of San Diego",
		"location": "San Diego, CA",
		"degree": "BA",
		"majors": ["Economics/Business"],
		"dates": "1998 - 2000",
		"url": "www.sandiego.edu"
	}],
	"onlineCourses": [{
		"title": "Introduction to programming",
		"school": "Udacity",
		"date": "October 2015 - May 2016",
		"url": "https://www.udacity.com/course/intro-to-programming-nanodegree--nd000"
	},  {
		"title": "JavaScript Basics",
		"school": "Udacity",
		"date": "2016",
		"url": "https://www.udacity.com/course/ud804"
	},
		{
		"title": "Intro to jQuery",
		"school": "Udacity",
		"date": "2016",
		"url": "https://www.udacity.com/course/intro-to-jquery--ud245"
	},
	       {
	       	"title": "Intro to HTML and CSS",
	       	"school": "Udacity",
	       	"date": "2016",
	       	"url": "https://www.udacity.com/course/intro-to-html-and-css--ud304"
	},
	       {
	       	"title": "Front-End Web Developer Nanodegree",
	       	"school": "Udacity",
	       	"date": "currently in progress",
	       	"url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
	},  ]
};

education.display = function() {
	for (school in education.schools) {
		$("#education").append (HTMLschoolStart);
		var formattedschoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
	    var formattedschoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
	    $(".education-entry:last").append(formattedschoolName + formattedschoolDegree);
	    var formattedschoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
	    $(".education-entry:last").append(formattedschoolDates);
	    var formattedschoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
	    $(".education-entry:last").append(formattedschoolLocation);
	    var formattedschoolMajors = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
	    $(".education-entry:last").append(formattedschoolMajors);
	}

    //Online classes code
    if (education.onlineCourses.length > 0) {
    $("#education").append(HTMLonlineClasses);
    for (i in education.onlineCourses) {
   	   $("#education").append(HTMLschoolStart);
   	   var formattedonlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
   	   var formattedonlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
       $(".education-entry:last").append(formattedonlineTitle + formattedonlineSchool);
       var formattedonlineDate = HTMLonlineDates.replace("%data%", education.onlineCourses[i].date);
       $(".education-entry:last").append(formattedonlineDate);
       var formattedonlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);
	   $(".education-entry:last").append(formattedonlineURL);
    }
}

};


education.display();
	//End code for education section

//Interactive Map. Code to append googleMap
$('#mapDiv').append(googleMap);
