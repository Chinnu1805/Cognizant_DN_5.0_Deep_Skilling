import React from "react";

import CourseDetails from "./CourseDetails";

import { courses } from "./Courses";

function App(){

return(

<div>

<CourseDetails courses={courses}/>

</div>

);

}

export default App;