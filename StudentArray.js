
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
        number: ''
    },
] :
[...localStorageStudentArray]