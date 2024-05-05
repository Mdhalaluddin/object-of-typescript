{
///constraints

const addCourseToStudent = <
T extends {id: number; name: string; email: string}
>(student: T

)=>{
    const course = "Next level web Development";
    return{
        ...student, 
        course,
    }
}

const student1 = addCourseToStudent({
    id: 11,
    name: "Mr. X",
    email: "mrX@gmail.com"
})

const student2 = addCourseToStudent({
    id: 22,
    name: "Mr. Y",
    email: "mry@gmail.com"
})













///   
}