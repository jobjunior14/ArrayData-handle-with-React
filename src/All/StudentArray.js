
let localStorageStudentArray = localStorage.getItem("myDataArray");
localStorageStudentArray = JSON.parse(localStorageStudentArray);

export const dataArray = !localStorageStudentArray ?
[
    {
        nom: '',
        age: '',
        fac: '',
        clickVerification: true,
        id: 0,
        index: 0,
        number: '',
        payment: {
            tranche_1:
            {
                valid: false,
                amount: 0,
            },
            tranche_2:
            {
                valid: false,
                amount: 0,
            },
            tranche_3:
            {
                valid: false,
                amount: 0,
            },
            tranche_4:
            {
                valid: false,
                amount: 0,
            }
        },
        matricul: '',
        picture: ''
    },
] :
[...localStorageStudentArray]