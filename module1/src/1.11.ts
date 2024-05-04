{

    const age: number = 20;

    if (age >= 18) {
        console.log('adult');
    } else {
        console.log('NOt adult');
    }

    // nullish Coalescing

    const user: User = {
        name: "Persian",
        address: {
            city: "ctg",
            rode: "Awesome Road",
            presentAddress: "ctg town",

        }
    }

    const permenetAddress = user?.address?.permenetAddress ?? 'Not Perment Address';
    console.log({ permenetAddress });






}