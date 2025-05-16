var config = {
    style: 'mapbox://styles/mapbox/satellite-v9',
    // leave commented to use Mapbox Standard Style
    accessToken: 'pk.eyJ1IjoiaGcyNzMwIiwiYSI6ImNtYXBzdHN2MjAyM2YybW9uYXFha3pycmQifQ.itA9ND3YmSBd__SKV8a4CQ',
    showMarkers: true,
    markerColor: '#DAA520',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    insetOptions: {
        markerColor: 'orange'
    },
    insetPosition: 'bottom-right',
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    // footer: 'Source: EPA\'s National Emissions Inventory <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'TVA Allen Fossil Plant',
            image: './assets/tva.jpeg',
            description: 'Total emissions: 1.4 million tons',
            moreDescription: 'The Allen Fossil Plant is a coal-fired power plant in Shelby County. A new <a href="https://tennesseelookout.com/2022/11/28/report-tvas-allen-fossil-plant-in-memphis-ranks-10-in-most-contaminated-u-s-sites/">report</a> by Earth Justice has ranked it among top 10 most contaminated sites in the country, responsible for leaking unsafe levels of arsenic, lead, cobalt, lithium and other contaminants in the groundwater.',
            location: {
                center: [-90.1488, 35.0741],
                zoom: 15,
                pitch: 60,
                bearing: -43.2,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Valero Refining Plant',
            image: './assets/valero.jpeg',
            description: 'Total emissions: 1.2 million tons',
            moreDescription: 'This petroleum refinery is the second largest polluter in Shelby County and a majority of its total emissions include greenhouse gases.',
            location: {
                center: [-90.0837, 35.0853],
                zoom: 14,
                pitch: 30,
                bearing: -43.2,
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
            onChapterExit: []
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Memphis International Airport',
            image: './assets/airport.jpeg',
            description: 'Total emissions: 309,000 tons',
            moreDescription: 'FedEx runs its largest operations in the country at Memphis International Airport, also known as the company\'s \"SuperHub\". The airport is responsible for processing a significant portion of the company\'s packages, making it the busiest cargo airport in the country.',
            location: {
                center: [-89.9781, 35.0385],
                zoom: 12.52,
                pitch: 8.01,
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
            title: 'Nucor Steel Memphis Inc',
            image: './assets/nucor.jpeg',
            description: 'Total emissions: 156,000 tons',
            moreDescription: 'Nucor Steel Memphis Inc announced plans to build a $230 million steel mill in Shelby County in 2006 and began operations in 2008. Since then, it has been among the top polluters in the county. However, it is <a href="https://www.bizjournals.com/charlotte/news/2022/04/22/nucor-teams-with-uk-on-r-d-grant-to-reduce-carbon.html">investing</a> in research and development to reduce its carbon emissions by replacing its electric furnaces with clean energy sources.',
            location: {
                center: [-90.1644, 35.0486],
                zoom: 12.52,
                pitch: 8.01,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fifth-chapter',
            alignment: 'right',
            hidden: false,
            title: 'PMC Biogenix',
            image: './assets/pmc.jpeg',
            description: 'Total emissions: 108,000 tons',
            moreDescription: 'One of the largest manufacturers in the area, PMC Biogenix received $47 million in 2023 to expand its facilites in the northern part of the county. It is also facing a lawsuit from local residents after a 2022 chemical leak lead to a huge fire in its facilities, injuring one employee, damaging property and causing health risks to other residents.',
            location: {
                center: [-89.9599, 35.1665],
                zoom: 12.52,
                pitch: 8.01,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
const padding = document.createElement('div');
padding.style.height = '100vh';
features.appendChild(padding);
