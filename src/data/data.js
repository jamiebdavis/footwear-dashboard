const MOCK_DATA = [
    {
        "id": "5e29973c89d246ee44fbee2c",
        "productName": "Adidas Ultra Boost",
        "category": "Men",
        "size": 11,
        "colour": "Black",
        "status": {
            "id": 3,
            "colour": "#c92f1e",
            "description": "Out of Stock",
        },
        "customerInitials": "LM"
    },
    {
        "id": "5e29973cd1fd72b5785395a5",
        "productName": "Vans Old School",
        "category": "Men",
        "size": 7,
        "colour": "White",
        "status": {
            "id": 3,
            "colour": "#c92f1e",
            "description": "Out of Stock",
        },
        "customerInitials": "DC"
    },
    {
        "id": "5e29973cf378d0afbf020b2f",
        "productName": "Adidas - Stan Smiths",
        "category": "Women",
        "size": 6,
        "colour": "Blue",
        "status": {
            "id": 1,
            "colour": "#66c0ed",
            "description": "On the way",
        },
        "customerInitials": "DH"
    },
    {
        "id": "5e29973c23fc4aa9ec413531",
        "productName": "Nike Air Max 90",
        "category": "Junior",
        "size": 1,
        "colour": "Blue",
        "status": {
            "id": 1,
            "colour": "#66c0ed",
            "description": "On the way",
        },
        "customerInitials": "LR"
    },
    {
        "id": "5e29973cd2d93718b6f9c206",
        "productName": "Yeezys",
        "category": "Women",
        "size": 5,
        "colour": "Pink",
        "status": {
            "id": 1,
            "colour": "#66c0ed",
            "description": "On the way",
        },
        "customerInitials": "AW"
    },
    {
        "id": "5e29973cc0b784e7cdad495a",
        "productName": "Nike Air Vapor Max",
        "category": "Men",
        "size": 2,
        "colour": "Pink",
        "status": {
            "id": 0,
            "colour": "#28dec9",
            "description": "Ready to try",
        },
        "customerInitials": "NS"
    },
    {
        "id": "5e29973c79d03030099b2df3",
        "productName": "Nike Air Max 270",
        "category": "Junior",
        "size": 2,
        "colour": "White",
        "status": {
            "id": 1,
            "colour": "#66c0ed",
            "description": "On the way",
        },
        "customerInitials": "LS"
    },
    {
        "id": "5e29973c39d45fdcff0128c5",
        "productName": "Nike Air Max 90",
        "category": "Junior",
        "size": 1,
        "colour": "Black",
        "status": {
            "id": 2,
            "colour": "#e07a14",
            "description": "In the queue",
        },
        "customerInitials": "CV"
    },
    {
        "id": "5e29973c4e1474246b9c489c",
        "productName": "Vans Old School",
        "category": "Women",
        "size": 10,
        "colour": "Orange",
        "status": {
            "id": 0,
            "colour": "#28dec9",
            "description": "Ready to try",
        },
        "customerInitials": "HG"
    },
    {
        "id": "5e29973c014e1344fdc700b2",
        "productName": "Adidas Ultra Boost",
        "category": "Men",
        "size": 1,
        "colour": "White",
        "status": {
            "id": 0,
            "colour": "#28dec9",
            "description": "Ready to try",
        },
        "customerInitials": "IK"
    },
    {
        "id": "5e29973c337d3b4978e37069",
        "productName": "Air Jordan 1",
        "category": "Men",
        "size": 8,
        "colour": "Orange",
        "status": {
            "id": 2,
            "colour": "#e07a14",
            "description": "In the queue",
        },
        "customerInitials": "RM"
    },
    {
        "id": "5e29973c0975fbfb1b02e309",
        "productName": "Adidas Ultra Boost",
        "category": "Men",
        "size": 1,
        "colour": "Blue",
        "status": {
            "id": 2,
            "colour": "#e07a14",
            "description": "In the queue",
        },
        "customerInitials": "WD"
    },
    {
        "id": "5e29973c67e60a1769fea735",
        "productName": "Yeezys",
        "category": "Men",
        "size": 1,
        "colour": "Black",
        "status": {
            "id": 3,
            "colour": "#c92f1e",
            "description": "Out of Stock",
        },
        "customerInitials": "JC"
    },
    {
        "id": "5e29973c22dfa9c3e2c89033",
        "productName": "Yeezys",
        "category": "Women",
        "size": 9,
        "colour": "White",
        "status": {
            "id": 3,
            "colour": "#c92f1e",
            "description": "Out of Stock",
        },
        "customerInitials": "KF"
    },
    {
        "id": "5e29973c67c14b5189fdd22f",
        "productName": "Yeezys",
        "category": "Women",
        "size": 9,
        "colour": "Black",
        "status": {
            "id": 0,
            "colour": "#28dec9",
            "description": "Ready to try",
        },
        "customerInitials": "HH"
    },
    {
        "id": "5e29973c092f7fc65ca38412",
        "productName": "Nike Air Max 90",
        "category": "Men",
        "size": 3,
        "colour": "Black",
        "status": {
            "id": 0,
            "colour": "#28dec9",
            "description": "Ready to try",
        },
        "customerInitials": "ES"
    },
    {
        "id": "5e29973c09c1c48fb2bb39d6",
        "productName": "Nike Air Vapor Max",
        "category": "Junior",
        "size": 1,
        "colour": "Blue",
        "status": {
            "id": 1,
            "colour": "#66c0ed",
            "description": "On the way",
        },
        "customerInitials": "WW"
    },
    {
        "id": "5e29973c26063ce0172f470d",
        "productName": "Yeezys",
        "category": "Women",
        "size": 7,
        "colour": "Black",
        "status": {
            "id": 2,
            "colour": "#e07a14",
            "description": "In the queue",
        },
        "customerInitials": "BS"
    },
    {
        "id": "5e29973cba45674048f59a44",
        "productName": "Air Jordan 1",
        "category": "Junior",
        "size": 7,
        "colour": "White",
        "status": {
            "id": 1,
            "colour": "#66c0ed",
            "description": "On the way",
        },
        "customerInitials": "GF"
    },
    {
        "id": "5e29973c3b2477573edcc65c",
        "productName": "Nike Air Vapor Max",
        "category": "Junior",
        "size": 11,
        "colour": "Blue",
        "status": {
            "id": 2,
            "colour": "#e07a14",
            "description": "In the queue",
        },
        "customerInitials": "FG"
    },
    {
        "id": "5e29973cca57d390ac213adb",
        "productName": "Air Jordan 1",
        "category": "Women",
        "size": 2,
        "colour": "Blue",
        "status": {
            "id": 2,
            "colour": "#e07a14",
            "description": "In the queue",
        },
        "customerInitials": "PJ"
    },
    {
        "id": "5e29973cf3cc06dd44a24f38",
        "productName": "Nike Air Max 270",
        "category": "Junior",
        "size": 7,
        "colour": "Blue",
        "status": {
            "id": 1,
            "colour": "#66c0ed",
            "description": "On the way",
        },
        "customerInitials": "CD"
    },
    {
        "id": "5e29973c4a426a62b3de88a7",
        "productName": "Yeezys",
        "category": "Junior",
        "size": 3,
        "colour": "White",
        "status": {
            "id": 0,
            "colour": "#28dec9",
            "description": "Ready to try",
        },
        "customerInitials": "LR"
    },
    {
        "id": "5e29973c425d89ff68c55123",
        "productName": "Air Jordan 1",
        "category": "Women",
        "size": 3,
        "colour": "Blue",
        "status": {
            "id": 2,
            "colour": "#e07a14",
            "description": "In the queue",
        },
        "customerInitials": "CB"
    }
];

export default MOCK_DATA;