let searchTerm = "";
let openOnly = false;

//instructor help
function getInstructorString(course)
{
    //map to extract strings -> join to concat
    //all of instructor names in comma-delimited string

    return course.Instructors.map((instructor) => instructor.Name).join(" &bull; ");
}

//2.1 class full?
function isClassFull(course)
{
    return !course.Classification.Open;
}

//2.2 match term
function doesTermMatch(course) 
{
    // If searchTerm is empty, return true (show all courses)
    if (searchTerm == "")
    {
        return true;
    }

    //match flags
    let instructorMatch = false;
    let nameMatch = false;
    let crnMatch = false;
    let codeMatch = false;

    // Convert searchTerm to lowercase
    searchTerm = searchTerm.toLowerCase().trim();

    // Return true if searchTerm matches any of these fields
    instructorMatch = getInstructorString(course).toLowerCase().includes(searchTerm);
    nameMatch = course.Title.toLowerCase().includes(searchTerm);
    crnMatch = course.CRN == searchTerm;
    codeMatch = course.Code.toLowerCase().includes(searchTerm);
    
    return instructorMatch || nameMatch || crnMatch || codeMatch;
}

//2.3 data to html
function dataToHTML(course) 
{
    return `
        <section class="course-card">
            <h2>${course.Code}: ${course.Title}</h2>
            ${getOpenClosedHTML(course)}
            <p>
                ${course.Days} &bull;
                ${course.Location.FullLocation} &bull;
                ${course.Hours} Credit Hour(s)
            </p>
            <p>
                <strong>${getInstructorString(course)}</strong>
            </p>
        </section>
    `;
}

function getOpenClosedHTML(course)
{
    if (isClassFull(course))
    {
       return ` <p class ="status closed">
            <i class="fa-solid fa-circle-xmark"></i>
            Closed &bull; 10320 &bull; Num on Waitlist: ${course.WaitlistAvailable}        
        </p>`;
    } else {
        return `<p class="status open">
            <i class="fa-solid fa-circle-check"></i>
            Open &Bull; 10320 &bull; Num on Waitlist: ${course.WaitlistAvailable}
        </p>`;
    }
}

//show matching
function showMatchingCourses()
{
    const container = document.querySelector(".courses");
    container.innerHTML = "";

    const filtered = courseList.filter(function(course)
    {
        const matchesTerm = doesTermMatch(course);
        if (openOnly)
        {
            return matchesTerm && course.Classification.Open;
        }
        return matchesTerm;
    });

    if (filtered.length == 0)
    {
        container.innerHTML = "no courses match your search";
        return;
    }

    filtered.forEach(function(course)
    {
        container.insertAdjacentHTML("beforeend", dataToHTML(course));
    }); 
}

//3.1 filter courses
function filterCourses() 
{
    searchTerm = document.querySelector("#search_term").value;
    openOnly = document.querySelector("#is_open").checked;

    showMatchingCourses();
}

//render
showMatchingCourses();

//testing!
searchTerm = "313 ";

console.log("is full:", isClassFull(courseList[0]));

console.log(doesTermMatch(courseList[0]));

console.log(dataToHTML(courseList[14]));