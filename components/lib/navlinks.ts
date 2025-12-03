interface NavLink {
    id: number;
    name: string;
    link: string;
}
interface HeroLinks {
    id:number;
    name:string;
    link:string;
}
export const navlinks: NavLink[] = [
    {
        id: 1,
        name: "Explore",
        link: "https://www.google.com"
    },
    {
        id: 2,
        name: "Downloads",
        link: ""
    },
    {
        id: 3,
        name: "About Us",
        link: ""
    },
    {
        id: 4,
        name: "Contact",
        link: ""
    },
    {
        id: 5,
        name: "Login",
        link: ""
    }
];


export const HeroLinks = [
    {
        id:1,
        name: "JEE",
        link:""
    },
    {
        id:2,
        name: "CUET",
        link:""
    },
    {
        id:3,
        name: "CUCET",
        link:""
    }
]