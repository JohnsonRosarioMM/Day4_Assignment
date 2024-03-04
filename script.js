// 1. Create your own resume data in JSON format
document.addEventListener("DOMContentLoaded", function () {
    fetch('resume.json')
        .then(response => response.json())
        .then(data => {
            let display = document.getElementById("display");

            let namedata = document.createElement('p');
            namedata.textContent = `Name: ${data.name}`;

            let dobdata = document.createElement('p');
            dobdata.textContent = `Contact: ${data.contact.ph}`;

            let edudata = document.createElement('p');
            edudata.textContent = `Education: ${data.edu.clg}`;

            let skilldata = document.createElement('p');
            skilldata.textContent = `Skills: ${data.skill}`;
        
            let wedata = document.createElement('p');
            wedata.textContent = `Work Expirence: ${data.we}`;

            let landata = document.createElement('p');
            landata.textContent = `Languages known: ${data.lan}`;

            let achdata = document.createElement('p');
            achdata.textContent = `Achievements: ${data.ach}`;

            let recdata = document.createElement('p');
            recdata.textContent = `Awards: ${data.rec}`;

            let cerdata = document.createElement('p');
            cerdata.textContent = `Certifications: ${data.cer}`;

            display.append(namedata,dobdata,edudata,skilldata,
                wedata,landata,achdata,recdata,cerdata);
        })
        .catch();
});

// 2. For the above JSON, iterate over all for loops(for,for in,for of,forEach)

let details = {
    "name": "Johnson Rosario M",
    "role": "Programmer",
    "contact":{
        "ph":"9360332571",
        "mail":"johnsonrosariomm@gmail.com",
        "linkedin": "johnson-rosario-m"
    },
    "digi":{
            "dob":"22/11/2001",
            "age":"22"
    },
    "edu":{
        "clg": "B.com Graduate (7.2 CGPA)",
        "hsc": "HSC - 76%",
        "sslc": "SSLC - 92%"
    },
    "skill": [  "HTML",
                "CSS",
                "Javascript",
                "MS Office package"],
    "Hobbies":["Reading books",
                "Listing to music",
                "walking"],
    "lan": ["English", 
            "Tamil",
            "French"],
    "we": "Programmer @ Cognizant for past 2 years",
    "ach": "Author of the book - Dumbass's Diary",
    "rec": "Guinness World Records with GUVI Pvt. Ltd (AI for India)",
    "cer": "SAP Certified Associate S/4 HANA for Financial Accounting Associate"
}  

// FOR

for(let i=0;i<details.skill.length;i++){
   console.log(details.skill[i]);
}

// FOR IN (working in both array & object)

for(let a in details.contact){
    console.log(`${a}: ${details.contact[a]}`)
}

// FOR OF

for (index of details.lan) {
    console.log(index);
}

// FOR EACH
details.Hobbies.forEach(function(index){
    console.log(index)
});

