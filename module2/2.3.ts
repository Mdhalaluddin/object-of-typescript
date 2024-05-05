{
    //
    // generic types

    // const rollNumber: number[]  = [2, 4, 5, 6];

    const rollNumber: Array<number> = [2, 3, 4];


    // const mentors: string[] = ["Mr", 'X', 'y'];

    const mentors: Array<string> = ["Mr", 'X', 'y'];

    // const boolArray: boolean[] = [true, false, true];

    const boolArray: Array<boolean> = [true, false, true];

    // generic tuple

    type GenericTuple<x, y> = [x, y]

    const manush: GenericTuple<string, string> = ['Mr. x', 'Mr. Y']

    const UserWithID : GenericTuple<number, { name: string, email: string }> = [1234, { name: 'Halal', email: 'helal@gamil.com' }]
}




    //
