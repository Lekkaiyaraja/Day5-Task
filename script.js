const personal_info = {
    "College Name": "Kongunadu College of Engineering & Technology",
        "Degree": "Bachelor of Engineering",
        "Course": "Electrical and electronics Engineering",
        "Percentage": 79,
        "Graduation Year": 2022,
        "experience": [
            {"company": "CEAT Limited.","position": "Safety Engineer"}
        ]
    
};

for (let key in personal_info) {
    console.log(`${key}: ${personal_info[key]}`);
}
for (let i = 0; i<personal_info.experience.length; i++) {
    let experience = personal_info.experience[i];
    console.log(`company: ${experience.company}, position:${experience.position}`);
}