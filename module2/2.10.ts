{
    //
    // ----------Pick-----------
    type Person = {

        name: string,
        age: number,
        email: string,
        contactNo: string
    };
    type NumAge = Pick<Person, 'name' | 'age'>


    // -----------omit---------------------------------

    type emailCont = Omit<Person, 'email' | 'contactNo'>


    // ------------Required-------------------------------

    type allRequired = Required<Person>

    // ------------Partial--------------------------------
    type allDataOptional = Partial<Person>


    // ---------------Read Only

    type ParsonReadOnly = Readonly<Person>

    const Person1: ParsonReadOnly ={
        name: 'Mr. XY',
        age: 200,
        contactNo : "01812"
    }
    Person1.name = "Mr. xy"

    //  Record 


    type MyObj = Record<string, string>
    const EmptyObj: Record<string, undefined> = {};


    const Obj1 : MyObj = {
        a: 'aa',
        b: 'bb',
        c: 'ccc'
    }





    //
}