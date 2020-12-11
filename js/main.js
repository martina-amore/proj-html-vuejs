const app = new Vue ({
    el: ".root",
    data: {
        linkLeft: ["HOME", "THE CLUB", "EVENTS"],
        linkRight: ["JOBS", "NEWS", "CONTACT US"],
        linkBottom: [
            {
                img: "img/avada-nightclub-events-6-66x66.jpg",
                title: "DJ Fusion",
                subtitle: "August 19, 2021 @ 8:00 am"
            },
            {
                img: "img/avada-nightclub-events-5-66x66.jpg",
                title: "House Nation",
                subtitle: "August 19, 2021 @ 8:00 am"
            },
            {
                img: "img/avada-nightclub-events-4-66x66.jpg",
                title: "Jazz Night",
                subtitle: "August 19, 2021 @ 8:00 am"
            },
        ]
    }
})
