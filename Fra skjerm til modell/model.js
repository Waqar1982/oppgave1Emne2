const model = {

app:{
    page: ['startPage','dashbord','logg', 'koffeinkalkulator', 'timer'],
    },

inputs: {
    editItem:{
        name:'',
        price: null,
        koffein: null,
        id: null

    },

    oppdaterLogg: {
        dato: null,
        koffein: null,
    },

    loggInn: {
        userName:'',
        password: '',
    },

    createUser:{
        name: '',
        password: '',
        id: null,
    },  

    timer: {
        start: '',
        resett: '',
        

    },

    counter: {
        date: '',
        hours: '',
        min: '',
        sec: '',
    },

},

    
    

data: {
    koffeinProdukter: [
        { id: 1, name: 'Red Bull', koffeinInnholdDl: 32, koffeinInnholdEnhet: 80, itemGroup: 1, pris: 30},
        { id: 2, name: 'Monster', koffeinInnholdDl: 32, koffeinInnholdEnhet: 80, itemGroup: 1, pris: 30},
        { id: 3, name: 'Burn', koffeinInnholdDl: 32, koffeinInnholdEnhet: 80, itemGroup: 1, pris: 30},
        { id: 10, name: 'Kaffe 1', koffeinInnholdDl: 45, koffeinInnholdEnhet: 90, itemGroup: 2, pris: 30},
        { id: 11, name: 'Kaffe 2', koffeinInnholdDl: 40, koffeinInnholdEnhet: 80, itemGroup: 2, pris: 30},
        { id: 20, name: 'Coca Cola', koffeinInnholdDl: 10, koffeinInnholdEnhet: 50, itemGroup: 3, pris: 30},
    ],
    produktGrupper: [
        {id: 1, gruppeNavn: 'EnergiDrikker', beskrivelse: '???'},
        {id: 2, gruppeNavn: 'Kaffe', beskrivelse: '???'},
        {id: 3, gruppeNavn: 'Annet', beskrivelse: '???'}
    ],
        
    koffeinLogger: [
        {userId: 1,
        datoer: [{dag: 1, koffein: null, dato:'', uke: 1},],
        },
    ],

    motivasjonsBoost: ['Eksempel: Et kaldt glass vann er bra!', ''],
        
    category: [],


    users: [
        {id: 1, name: '', password: ''},

    ],
        
        
        
        
    },
    

}


