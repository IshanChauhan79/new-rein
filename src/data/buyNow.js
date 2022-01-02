const buyNowList = {
    'undersink': {
        title: 'under the sink',
        name: 'REIN Undersink',
        defaultValue: {
            name:"REIN UNDERSINK NF+UV",
            price: '₹13,499'
        },
        variants: {
            '(100<TDS<500) ppm': [
                {
                    name: 'REIN UNDERSINK UV+UF',
                    price: '₹10,499'
                }
            ],
            '(300<TDS<1000) ppm': [
                {
                    name: 'REIN UNDERSINK NF',
                    price: '₹11,499'
                },
                {
                    name: 'REIN UNDERSINK NF+UV',
                    price: '₹13,499'
                },
                {
                    name: 'REIN UNDERSINK NF+UV+Alkaline',
                    price: '₹15,499'
                },
                {
                    name: 'REIN UNDERSINK NF+UV+Copper',
                    price: '₹15,499'
                },
            ],
            '(500<TDS<2500) ppm': [
                {
                    name: 'REIN UNDERSINK RO',
                    price: '₹11,499'
                },
                {
                    name: 'REIN UNDERSINK RO+UV',
                    price: '₹13,499'
                },
                {
                    name: 'REIN UNDERSINK RO+UV+Alkaline',
                    price: '₹15,499'
                },
                {
                    name: 'REIN UNDERSINK RO+UV+Copper',
                    price: '₹15,499'
                },
            ],

        },
    },
    'wallMounted': {
        title: 'Wall Mountable',
        name: 'REIN STORM',
        defaultValue: {
            name:"REIN UNDERSINK NF+UV",
            price: '₹10,499'
        },
        variants: {
            '(100<TDS<500) ppm': [
                {
                    name: 'REIN UNDERSINK UV+UF',
                    price: '₹8,499'
                }
            ],
            '(300<TDS<1000) ppm': [
                {
                    name: 'REIN UNDERSINK NF',
                    price: '₹9,499'
                },
                {
                    name: 'REIN UNDERSINK NF+UV',
                    price: '₹10,499'
                },
                {
                    name: 'REIN UNDERSINK NF+UV+Alkaline',
                    price: '₹12,499'
                },
                {
                    name: 'REIN UNDERSINK NF+UV+Copper',
                    price: '₹12,499'
                },
            ],
            '(500<TDS<2500) ppm': [
                {
                    name: 'REIN UNDERSINK RO',
                    price: '₹9,499'
                },
                {
                    name: 'REIN UNDERSINK RO+UV',
                    price: '₹10,499'
                },
                {
                    name: 'REIN UNDERSINK RO+UV+Alkaline',
                    price: '₹12,499'
                },
                {
                    name: 'REIN UNDERSINK RO+UV+Copper',
                    price: '₹12,499'
                },
            ],
        },
    },
}
export default buyNowList;