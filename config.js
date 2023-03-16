var config = {
    style: 'mapbox://styles/mrguatno/clfaffc50002r01s0qmpe1szp',
    accessToken: 'pk.eyJ1IjoibXJndWF0bm8iLCJhIjoiY2xlbGhuMjF0MHYwcTN2cW5rbDlnd2NzayJ9.U4E6vdDNyk8s7yoXQc6tHg',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false,
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    footer: 'Step Up Consulting Services - Ideas that serve. Service that works.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: true,
            title: 'Display Title',
            image: './path/to/image/source.png',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            location: {
                center: [124.1637, 9.9],
                zoom: 9.8,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {layer: 'loay', opacity: 0},
                {layer: 'albur', opacity: 0},
                {layer: 'loboc', opacity: 0},
                {layer: 'road', opacity: 0},
                {layer: 'baclayon', opacity: 0},
                {layer: 'sevilla', opacity: 0},
                {layer: 'spot', opacity: 0},
                {layer: 'consolidated', opacity: 0},
            ],
            onChapterExit: [
                {layer: 'road', opacity: 1}
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: true,
            title: 'Second Title',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [124.02634, 9.65241],
                zoom: 11,
                pitch: 45,
                bearing: -20.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: [
                {layer: 'road', opacity: 1},
                {layer: 'loay', opacity: 0.3},
                {layer: 'albur', opacity: 0.3},
                {layer: 'loboc', opacity:0.3},
                {layer: 'baclayon', opacity: 0.3},
                {layer: 'sevilla', opacity: 0.3},
            ]
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: true,
            title: 'Third Title',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [124.02634, 9.65241],
                zoom: 11,
                pitch: 0,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fourth-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Baclayon',
            image: 'https://github.com/mrguatno/Recommended_CV/blob/main/images/Baclayon%20heritage%20house%202.JPG?raw=true',
            description: 'Ancestral House <br>Broa Making',
            location: {
                center: [123.91298, 9.62682],
                zoom: 13,
                pitch: 45,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {layer: 'road', opacity: 1},
                {layer: 'loay', opacity: 0},
                {layer: 'albur', opacity: 0},
                {layer: 'loboc', opacity:0},
                {layer: 'baclayon', opacity: 0.3},
                {layer: 'consolidated', opacity: 0},
                {layer: 'sevilla', opacity: 0}
            ],
            onChapterExit: []
        },
        {
            id: 'fifth-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Alburquerque',
            image: 'https://github.com/mrguatno/Recommended_CV/blob/main/images/Minimalist%20Elderly%20couple%20Photo%20Collage%20Instagram%20Post.png?raw=true',
            description: 'Asin Tibuok <br>Loom Weaving <br>Calamay Production <br>Broom Making <br>Pottery Making',
            location: {
                center: [123.95744, 9.61329],
                zoom: 13,
                pitch: 45,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {layer: 'road', opacity: 1},
                {layer: 'loay', opacity: 0},
                {layer: 'albur', opacity: 0.3},
                {layer: 'loboc', opacity:0},
                {layer: 'baclayon', opacity: 0},
                {layer: 'consolidated', opacity: 0},
                {layer: 'sevilla', opacity: 0}
            ],
            onChapterExit: []
        },
        {
            id: 'sixth-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Loboc',
            image: 'https://github.com/mrguatno/Recommended_CV/blob/main/images/Loboc%20childrens%20choir.JPG?raw=true',
            description: 'River Cruise <br>Loboc Music',
            location: {
                center: [124.03107, 9.63574],
                zoom: 13,
                pitch: 45,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {layer: 'road', opacity: 1},
                {layer: 'loay', opacity: 0},
                {layer: 'albur', opacity: 0},
                {layer: 'loboc', opacity: 0.3},
                {layer: 'baclayon', opacity: 0},
                {layer: 'consolidated', opacity: 0},
                {layer: 'sevilla', opacity: 0}
            ],
            onChapterExit: []
        },
        {
            id: 'seventh-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Sevilla',
            image: 'https://github.com/mrguatno/Recommended_CV/blob/main/images/Sevilla%20river%202.JPG?raw=true',
            description: 'Sipatan Twin Hanging Bridge <br>Agri-Tourism Spaces',
            location: {
                center: [124.04607, 9.70351],
                zoom: 13,
                pitch: 45,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {layer: 'road', opacity: 1},
                {layer: 'loay', opacity: 0},
                {layer: 'albur', opacity: 0},
                {layer: 'loboc', opacity: 0},
                {layer: 'baclayon', opacity: 0},
                {layer: 'consolidated', opacity: 0},
                {layer: 'sevilla', opacity: 0.3}
            ],
            onChapterExit: []
        },
        {
            id: 'eight-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Loay',
            image: 'https://github.com/mrguatno/Recommended_CV/blob/main/images/Bolo%20making%202.JPG?raw=true',
            description: 'River Cruise <br>Clarin Ancestral House <br>Sandugo',
            location: {
                center: [124.01060, 9.60084],
                zoom: 13,
                pitch: 45,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {layer: 'road', opacity: 1},
                {layer: 'loay', opacity: 0.3},
                {layer: 'albur', opacity: 0},
                {layer: 'loboc', opacity: 0},
                {layer: 'baclayon', opacity: 0},
                {layer: 'consolidated', opacity: 0},
                {layer: 'sevilla', opacity: 0}
            ],
            onChapterExit: []
        },
        {
            id: 'ninth-chapter',
            alignment: 'left',
            hidden: false,
            title: '',
            image: 'https://github.com/mrguatno/Recommended_CV/blob/main/images/Loay%20Clarin%20ancestral%20house%204.JPEG?raw=true',
            description: '',
            location: {
                center: [124.01060, 9.60084],
                zoom: 17,
                pitch: 45,
                bearing: 30
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                {layer: 'road', opacity: 1},
                {layer: 'loay', opacity: 0},
                {layer: 'albur', opacity: 0},
                {layer: 'loboc', opacity: 0},
                {layer: 'baclayon', opacity: 0},
                {layer: 'consolidated', opacity: 0},
                {layer: 'spot', opacity: 0.6},
                {layer: 'sevilla', opacity: 0}
            ],
            onChapterExit: []
        },
        {
            id: 'tenth-identifier',
            alignment: 'right',
            hidden: true,
            title: 'Second Title',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [124.02634, 9.65241],
                zoom: 11,
                pitch: 0,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {layer: 'road', opacity: 1},
                {layer: 'loay', opacity: 0.3},
                {layer: 'albur', opacity: 0.3},
                {layer: 'loboc', opacity:0.3},
                {layer: 'baclayon', opacity: 0.3},
                {layer: 'sevilla', opacity: 0.3}
            ],
            onChapterExit: [
            ]
        }
    ]
};
