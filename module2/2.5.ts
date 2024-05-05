{
    //

    //  function genetic

    const createArray = (param: string): string[] => {
        return [param]
    };
    const res1 = createArray('Bangladesh')

    const createArrayWithGeneric = <T>(param: T): T[] => {
        return [param]
    };


    const res2 = createArrayWithGeneric<string>('Bangladesh');

    type user = {
        id: number,
        name: string
    }

    const refObj = createArrayWithGeneric<user>({ id: 123, name: "Mr. X" });








    //   
}