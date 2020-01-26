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
        "customerInitials": "LM",
        "src": "https://i8.amplience.net/i/jpl/jd_342990_a?qlt=92&amp"

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
        "customerInitials": "DC",
        "src": "https://i8.amplience.net/i/jpl/jd_058318_a?qlt=92&amp;w=750&amp;h=531&amp;v=1"
    },
    {
        "id": "5e29973cf378d0afbf020b2f",
        "productName": "Vans Old School",
        "category": "Women",
        "size": 6,
        "colour": "Blue",
        "status": {
            "id": 1,
            "colour": "#66c0ed",
            "description": "On the way",
        },
        "customerInitials": "DH",
        "src": "https://i8.amplience.net/i/jpl/jd_058318_a?qlt=92&amp;w=750&amp;h=531&amp;v=1"
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
        "customerInitials": "LR",
        "src": "https://i8.amplience.net/i/jpl/jd_341585_a?qlt=92&amp;w=750&amp;h=531&amp;v=1"
    },
    {
        "id": "5e29973cd2d93718b6f9c206",
        "productName": "Air Force 1",
        "category": "Women",
        "size": 5,
        "colour": "Pink",
        "status": {
            "id": 1,
            "colour": "#66c0ed",
            "description": "On the way",
        },
        "customerInitials": "AW",
        "src": "https://i8.amplience.net/i/jpl/jd_341973_a?qlt=92&amp;w=750&amp;h=531&amp;v=1"
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
        "customerInitials": "NS",
        "src": "https://i8.amplience.net/i/jpl/jd_131390_a?qlt=92&amp;w=750&amp;h=531&amp;v=1"
    },
    {
        "id": "5e29973c79d03030099b2df3",
        "productName": "Vans Old School",
        "category": "Junior",
        "size": 2,
        "colour": "White",
        "status": {
            "id": 1,
            "colour": "#66c0ed",
            "description": "On the way",
        },
        "customerInitials": "LS",
        "src": "https://i8.amplience.net/i/jpl/jd_058318_a?qlt=92&amp;w=750&amp;h=531&amp;v=1"
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
        "customerInitials": "CV",
        "src": "https://i8.amplience.net/i/jpl/jd_341585_a?qlt=92&amp;w=750&amp;h=531&amp;v=1"
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
        "customerInitials": "HG",
        "src": "https://i8.amplience.net/i/jpl/jd_058318_a?qlt=92&amp;w=750&amp;h=531&amp;v=1"
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
        "customerInitials": "IK",
        "src": "https://i8.amplience.net/i/jpl/jd_342990_a?qlt=92&amp"
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
        "customerInitials": "RM",
        "src": "https://i8.amplience.net/i/jpl/jd_341729_a?qlt=92&amp;w=750&amp;h=531&amp;v=1"
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
        "customerInitials": "WD",
        "src": "https://i8.amplience.net/i/jpl/jd_342990_a?qlt=92&amp"
    },
    {
        "id": "5e29973c67e60a1769fea735",
        "productName": "Air Force 1",
        "category": "Men",
        "size": 1,
        "colour": "Black",
        "status": {
            "id": 3,
            "colour": "#c92f1e",
            "description": "Out of Stock",
        },
        "customerInitials": "JC",
        "src": "https://i8.amplience.net/i/jpl/jd_341973_a?qlt=92&amp;w=750&amp;h=531&amp;v=1"
    },
    {
        "id": "5e29973c22dfa9c3e2c89033",
        "productName": "Air Force 1",
        "category": "Women",
        "size": 9,
        "colour": "White",
        "status": {
            "id": 3,
            "colour": "#c92f1e",
            "description": "Out of Stock",
        },
        "customerInitials": "KF",
        "src": "https://i8.amplience.net/i/jpl/jd_341973_a?qlt=92&amp;w=750&amp;h=531&amp;v=1"
    },
    {
        "id": "5e29973c67c14b5189fdd22f",
        "productName": "Air Force 1",
        "category": "Women",
        "size": 9,
        "colour": "Black",
        "status": {
            "id": 0,
            "colour": "#28dec9",
            "description": "Ready to try",
        },
        "customerInitials": "HH",
        "src": "https://i8.amplience.net/i/jpl/jd_341973_a?qlt=92&amp;w=750&amp;h=531&amp;v=1"
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
        "customerInitials": "ES",
        "src": "https://i8.amplience.net/i/jpl/jd_341585_a?qlt=92&amp;w=750&amp;h=531&amp;v=1"
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
        "customerInitials": "WW",
        "src": "https://i8.amplience.net/i/jpl/jd_131390_a?qlt=92&amp;w=750&amp;h=531&amp;v=1"
    },
    {
        "id": "5e29973c26063ce0172f470d",
        "productName": "Air Force 1",
        "category": "Women",
        "size": 7,
        "colour": "Black",
        "status": {
            "id": 2,
            "colour": "#e07a14",
            "description": "In the queue",
        },
        "customerInitials": "BS",
        "src": "https://i8.amplience.net/i/jpl/jd_341973_a?qlt=92&amp;w=750&amp;h=531&amp;v=1"
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
        "customerInitials": "GF",
        "src": "https://i8.amplience.net/i/jpl/jd_341729_a?qlt=92&amp;w=750&amp;h=531&amp;v=1"
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
        "customerInitials": "FG",
        "src": "https://i8.amplience.net/i/jpl/jd_131390_a?qlt=92&amp;w=750&amp;h=531&amp;v=1"
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
        "customerInitials": "PJ",
        "src": "https://i8.amplience.net/i/jpl/jd_341729_a?qlt=92&amp;w=750&amp;h=531&amp;v=1"
    },
    {
        "id": "5e29973cf3cc06dd44a24f38",
        "productName": "Vans Old School",
        "category": "Junior",
        "size": 7,
        "colour": "Blue",
        "status": {
            "id": 1,
            "colour": "#66c0ed",
            "description": "On the way",
        },
        "customerInitials": "CD",
        "src": "https://i8.amplience.net/i/jpl/jd_058318_a?qlt=92&amp;w=750&amp;h=531&amp;v=1"
    },
    {
        "id": "5e29973c4a426a62b3de88a7",
        "productName": "Air Force 1",
        "category": "Junior",
        "size": 3,
        "colour": "White",
        "status": {
            "id": 0,
            "colour": "#28dec9",
            "description": "Ready to try",
        },
        "customerInitials": "LR",
        "src": "https://i8.amplience.net/i/jpl/jd_341973_a?qlt=92&amp;w=750&amp;h=531&amp;v=1"
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
        "customerInitials": "CB",
        "src": "https://i8.amplience.net/i/jpl/jd_341729_a?qlt=92&amp;w=750&amp;h=531&amp;v=1"
    }
];

export default MOCK_DATA;