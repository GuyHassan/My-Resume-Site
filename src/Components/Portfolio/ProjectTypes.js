
const ProjectTypes = (project) => {
    return [
        {
            name: "Generic Tutoring Assistant System",
            description:
                `GTAS is My Final Project.
A system that assists teachers and students by being a hub for educational resources and providing accurate tracking for each student in each subject.It then uses it for interacting with each unique user in the best way to boost productivity.`,
            techs: [
                "React.js",
                "Hooks",
                "Redux",
                "Node.js",
                "Express.js",
                "Firebase",
                "Restful API",
                "Canavas JS",
            ],
            code: "https://github.com/GuyHassan/GTASystem",
            images: [
                [require('../../Assets/GTAS - Project/GtasMain.JPG'), "Home Page"],
                [require('../../Assets/GTAS - Project/Login.JPG'), "Login"],
                [require('../../Assets/GTAS - Project/StudentPermission.JPG'), "Lecturer View - Student Permission"],
                [require('../../Assets/GTAS - Project/ProfessionView.JPG'), "Lecturer Profession Learning"],
                [require('../../Assets/GTAS - Project/ClassroomOptions.JPG'), "Lecturer Classrooms Options"],
                [require('../../Assets/GTAS - Project/ClassroomDiagram.JPG'), "Lecturer View - Diagram About Classroom Student"],
                [require('../../Assets/GTAS - Project/StudentDiagram.JPG'), "Lecturer View - Diagram About Specific Student"],
                [require('../../Assets/GTAS - Project/LecturerTopics.jpg'), "Topics Material"],
                [require('../../Assets/GTAS - Project/EditTopics.jpg'), "Edit Topics"],
                [require('../../Assets/GTAS - Project/LecturerAddMaterialPage.JPG'), "Add Material Pages"],
                [require('../../Assets/GTAS - Project/LecturerAddPracticePage.JPG'), "Add Practice Pages"],
                [require('../../Assets/GTAS - Project/StudentViewProfession.JPG'), "Student View His Profession"],
                [require('../../Assets/GTAS - Project/StudentTopics.JPG'), "Show Student Topics"],
                [require('../../Assets/GTAS - Project/StudentMaterialPage.JPG'), "Show Material Pages"],
                [require('../../Assets/GTAS - Project/StudentPracticePage.JPG'), "Show Practice Pages"],
                [require('../../Assets/GTAS - Project/StudentFeedback.JPG'), "Feedback Student"],
            ],
        },
        {
            name: "Vehicle Agecy",
            description:
                "System development for a vehicle management agency - Using JAVA language, using different DP's, which supports multi-threading and a GUI interface. Perform 4 operations on many vehicles: Add new Vehices, buy vehicle, test drive, change flag and 4 System operations:Reset mileage, Show vehicles inventory, Save current state, Back to previous state",
            techs: ["Java", "Multi-Threding","DP - Design Patterns", "Java Swing" , "OOP"],
            code: "https://github.com/GuyHassan/VehicleAgency-Java",
            images: [
                [require('../../Assets/Vehicle - Project/VehicleMain.jpg'), "Main Page"],
                [require('../../Assets/Vehicle - Project/AddNewVehicle.JPG'), "Add a new vehicle"],
                [require('../../Assets/Vehicle - Project/BuyVehicle.JPG'), "Buy New Vehicle"],
                [require('../../Assets/Vehicle - Project/ChangeCountryVehicle.JPG'), "Change Country Flag Of Vehicle"],
                [require('../../Assets/Vehicle - Project/VehicleReports.JPG'), "Vehicles Show Reports"],
            ],
        },
        {
            name: "Memory Card Game",
            description:
                "Memory Card Game - is a card game in which all of the cards are laid face down on a surface and two cards are flipped face up over each turn. The object of the game is to turn over pairs of matching cards.",
            techs: ["Javascript", "HTML", "CSS",],
            site: "https://guyhassan.github.io/Memory_Game/",
            code: "https://github.com/GuyHassan/Memory_Game",
            images: [
                [require('../../Assets/Memory Game - Project/MemoryGameMain.JPG'), "Main Page"],
                [require('../../Assets/Memory Game - Project/ShowMatch.JPG'), "Show Match"],
                [require('../../Assets/Memory Game - Project/FailedMatch.png'), "Failed Match"],
                [require('../../Assets/Memory Game - Project/WinGame.JPG'), "Win Game"],
            ],
        },




    ];
};

export { ProjectTypes };