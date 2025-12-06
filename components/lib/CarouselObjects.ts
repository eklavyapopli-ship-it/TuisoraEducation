interface CarouselObjects {
    id: number;
    icon: any;
    heading: string;
    Points: {
        PointId: number;
        MainPoint: string;
    }[];
}

export const CarouselObjects = [
    {
        id: 1,
        icon: "BrainCircuit",
        heading: "Learn Smarter",
        Points: [
            { PointId: 1, MainPoint: "AI-powered personalised learning" },
            { PointId: 2, MainPoint: "Smart suggestions for weak topics" },
            { PointId: 3, MainPoint: "Faster improvement with analytics" },
        ],
    },
    {
        id: 2,
        icon: "CalendarCheck",
        heading: "Daily Practice",
        Points: [
            { PointId: 1, MainPoint: "Auto-generated daily tasks" },
            { PointId: 2, MainPoint: "Track completed sessions" },
            { PointId: 3, MainPoint: "Consistency growth reports" },
        ],
    },
    {
        id: 3,
        icon: "MessageCircle",
        heading: "Doubt Solving",
        Points: [
            { PointId: 1, MainPoint: "Ask doubts anytime" },
            { PointId: 2, MainPoint: "Instant verified answers" },
            { PointId: 3, MainPoint: "Image & text based support" },
        ],
    },
    {
        id: 4,
        icon: "BarChart3",
        heading: "Progress Dashboard",
        Points: [
            { PointId: 1, MainPoint: "Visual learning analytics" },
            { PointId: 2, MainPoint: "Topic-wise performance" },
            { PointId: 3, MainPoint: "Weekly growth tracking" },
        ],
    },
    {
        id: 5,
        icon: "FileCheck",
        heading: "Mock Tests",
        Points: [
            { PointId: 1, MainPoint: "Real exam pattern tests" },
            { PointId: 2, MainPoint: "Timed & untimed modes" },
            { PointId: 3, MainPoint: "Automatic score analysis" },
        ],
    },
    {
        id: 6,
        icon: "BookOpen",
        heading: "Study Material Hub",
        Points: [
            { PointId: 1, MainPoint: "Notes for all subjects" },
            { PointId: 2, MainPoint: "Chapter-wise PDFs" },
            { PointId: 3, MainPoint: "NCERT + reference content" },
        ],
    },
    {
        id: 7,
        icon: "BellRing",
        heading: "Smart Reminders",
        Points: [
            { PointId: 1, MainPoint: "Homework reminders" },
            { PointId: 2, MainPoint: "Test & class alerts" },
            { PointId: 3, MainPoint: "Notification sync on mobile" },
        ],
    },
    {
        id: 8,
        icon: "Users2",
        heading: "Parent Dashboard",
        Points: [
            { PointId: 1, MainPoint: "Transparent performance view" },
            { PointId: 2, MainPoint: "Homework & attendance tracking" },
            { PointId: 3, MainPoint: "Weekly progress emails" },
        ],
    },
    {
        id: 9,
        icon: "Fingerprint",
        heading: "Attendance Tracker",
        Points: [
            { PointId: 1, MainPoint: "Fingerprint / RFID support" },
            { PointId: 2, MainPoint: "Auto-sync with teacher app" },
            { PointId: 3, MainPoint: "Error-free daily tracking" },
        ],
    },
    {
        id: 10,
        icon: "Compass",
        heading: "Career Guidance",
        Points: [
            { PointId: 1, MainPoint: "AI-based career suggestions" },
            { PointId: 2, MainPoint: "College & course insights" },
            { PointId: 3, MainPoint: "Roadmaps for every field" },
        ],
    },
];
