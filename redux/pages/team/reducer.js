const initialState = {
    staff: [
        {
            name: 'Dean Harry',
            position: 'CEO',
            photo: '../../../static/img/Dean.jpg',
            id: 'dean-harry'
        },
        {
            name: 'Nikita Nel',
            position: 'artist',
            photo: '../../../static/img/Nikita.jpg',
            id: 'nikita-nel'
        },
        {
            name: 'Jane Kholmetskaya',
            position: 'developer',
            photo: '../../../static/img/Jane.png',
            id: 'jane-kholmetskaya'
        },
        {
            name: 'Motasem Zakarneh',
            position: 'unity developer',
            photo: '../../../static/img/Motasem.jpg',
            id: 'motasem-zakarneh'
        },
        {
            name: 'Farhan Shafique',
            position: 'blockchain developer',
            photo: '../../../static/img/Farhan.jpg',
            id: 'farhan-shafique'
        },
        {
            name: 'Mathew Unwin',
            position: 'marketing advisor',
            photo: '../../../static/img/Matt.jpg',
            id: 'mathew-unwin'
        }        
    ]
};

const teamPageReducer = (state = initialState) => {
    return state;
};

export default teamPageReducer;