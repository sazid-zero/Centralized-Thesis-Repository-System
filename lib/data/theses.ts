export interface Thesis {
    id: number
    title: string
    author: string
    authorId: string
    department: string
    supervisor: string
    year: number
    submitted: string
    status: "approved" | "pending" | "rejected" | "in-review"
    abstract: string
    keywords: string[]
    views: number
    downloads: number
    files: {
        name: string
        size: string
        type: string
    }[]
}

export const thesesDatabase: Thesis[] = [
    {
        id: 1,
        title: "Machine Learning Applications in Healthcare",
        author: "Ahmed Khan",
        authorId: "2020331001",
        department: "Computer Science & Engineering",
        supervisor: "Dr. Hassan Ahmed",
        year: 2024,
        submitted: "2024-10-15",
        status: "approved",
        abstract:
            "This comprehensive thesis explores the implementation and optimization of machine learning algorithms for healthcare applications. We propose a novel hybrid approach combining collaborative filtering with content-based methods to improve diagnostic accuracy and patient outcomes. The research includes extensive testing on real-world medical datasets and demonstrates significant improvements over existing methods.",
        keywords: ["Machine Learning", "Healthcare", "AI", "Diagnostics", "Neural Networks"],
        views: 1203,
        downloads: 245,
        files: [
            { name: "Thesis_Document.pdf", size: "2.5 MB", type: "pdf" },
            { name: "Presentation.pptx", size: "1.2 MB", type: "presentation" },
            { name: "Demo_Video.mp4", size: "45 MB", type: "video" },
            { name: "Audio_Summary.mp3", size: "8.3 MB", type: "audio" },
        ],
    },
    {
        id: 2,
        title: "Renewable Energy Solutions for Bangladesh",
        author: "Fatima Begum",
        authorId: "2020331045",
        department: "Electrical & Electronic Engineering",
        supervisor: "Dr. Fatima Khan",
        year: 2024,
        submitted: "2024-02-20",
        status: "approved",
        abstract:
            "A comprehensive study on the implementation and optimization of renewable energy systems in urban environments. This research focuses on solar and wind power integration in Bangladesh's energy grid, proposing innovative solutions for sustainable energy distribution.",
        keywords: ["Renewable Energy", "Solar Power", "Wind Energy", "Sustainability", "Bangladesh"],
        views: 856,
        downloads: 189,
        files: [
            { name: "Thesis_Document.pdf", size: "3.1 MB", type: "pdf" },
            { name: "Presentation.pptx", size: "2.4 MB", type: "presentation" },
            { name: "Demo_Video.mp4", size: "52 MB", type: "video" },
        ],
    },
    {
        id: 3,
        title: "Blockchain in Supply Chain Management",
        author: "Karim Hassan",
        authorId: "2020331078",
        department: "Computer Science & Engineering",
        supervisor: "Dr. Karim Ahmed",
        year: 2024,
        submitted: "2024-01-10",
        status: "rejected",
        abstract:
            "This thesis investigates the application of blockchain technology in supply chain management systems. We propose a decentralized framework for tracking products from manufacturing to delivery, ensuring transparency and reducing fraud in the supply chain.",
        keywords: ["Blockchain", "Supply Chain", "Distributed Systems", "Transparency", "Security"],
        views: 654,
        downloads: 123,
        files: [
            { name: "Thesis_Document.pdf", size: "2.8 MB", type: "pdf" },
            { name: "Presentation.pptx", size: "1.8 MB", type: "presentation" },
        ],
    },
    {
        id: 4,
        title: "Water Quality Assessment Using IoT",
        author: "Noor Alam",
        authorId: "2020331092",
        department: "Civil Engineering",
        supervisor: "Dr. Noor Alam",
        year: 2024,
        submitted: "2024-02-25",
        status: "in-review",
        abstract:
            "An innovative approach to real-time water quality monitoring using Internet of Things (IoT) sensors. This research develops a cost-effective system for continuous water quality assessment in urban water distribution networks.",
        keywords: ["IoT", "Water Quality", "Environmental Monitoring", "Sensors", "Smart Cities"],
        views: 512,
        downloads: 98,
        files: [
            { name: "Thesis_Document.pdf", size: "2.2 MB", type: "pdf" },
            { name: "Presentation.pptx", size: "1.5 MB", type: "presentation" },
            { name: "Audio_Summary.mp3", size: "6.7 MB", type: "audio" },
        ],
    },
    {
        id: 5,
        title: "Quantum Computing Fundamentals",
        author: "Noor Hassan",
        authorId: "2020331105",
        department: "Computer Science & Engineering",
        supervisor: "Dr. Rahman Ali",
        year: 2024,
        submitted: "2024-03-10",
        status: "approved",
        abstract:
            "Exploration of quantum computing principles and their applications in solving complex computational problems. This thesis provides a comprehensive overview of quantum algorithms and their potential impact on cryptography and optimization problems.",
        keywords: ["Quantum Computing", "Quantum Algorithms", "Physics", "Computer Science", "Cryptography"],
        views: 1567,
        downloads: 312,
        files: [
            { name: "Thesis_Document.pdf", size: "3.5 MB", type: "pdf" },
            { name: "Presentation.pptx", size: "2.1 MB", type: "presentation" },
        ],
    },
    {
        id: 6,
        title: "Biomedical Signal Processing",
        author: "Aisha Khan",
        authorId: "2020331118",
        department: "Electrical & Electronic Engineering",
        supervisor: "Dr. Sultana Ahmed",
        year: 2023,
        submitted: "2023-11-15",
        status: "approved",
        abstract:
            "Advanced techniques for processing and analyzing biomedical signals for disease diagnosis and monitoring. This research focuses on ECG and EEG signal analysis using machine learning algorithms for early detection of cardiac and neurological disorders.",
        keywords: ["Signal Processing", "Biomedical Engineering", "Healthcare", "ECG", "EEG"],
        views: 834,
        downloads: 178,
        files: [
            { name: "Thesis_Document.pdf", size: "2.9 MB", type: "pdf" },
            { name: "Demo_Video.mp4", size: "38 MB", type: "video" },
        ],
    },
    {
        id: 7,
        title: "Sustainable Urban Planning",
        author: "Hassan Mahmud",
        authorId: "2020331132",
        department: "Civil Engineering",
        supervisor: "Dr. Mahmud Hassan",
        year: 2023,
        submitted: "2023-10-20",
        status: "approved",
        abstract:
            "Innovative approaches to sustainable urban development with focus on green spaces and public transportation. This thesis proposes integrated urban planning strategies that balance economic growth with environmental sustainability.",
        keywords: ["Urban Planning", "Sustainability", "Green Architecture", "Public Transport", "Smart Cities"],
        views: 723,
        downloads: 156,
        files: [
            { name: "Thesis_Document.pdf", size: "3.3 MB", type: "pdf" },
            { name: "Demo_Video.mp4", size: "41 MB", type: "video" },
        ],
    },
    {
        id: 8,
        title: "Advanced Structural Design Methods",
        author: "Karim Ahmed",
        authorId: "2020331145",
        department: "Civil Engineering",
        supervisor: "Dr. Ahmed Karim",
        year: 2023,
        submitted: "2023-09-15",
        status: "approved",
        abstract:
            "Novel structural design methodologies for earthquake-resistant buildings in seismic zones. This research develops innovative design principles and construction techniques to enhance building safety in earthquake-prone regions.",
        keywords: ["Structural Engineering", "Earthquake Resistance", "Building Design", "Seismic Analysis", "Safety"],
        views: 945,
        downloads: 203,
        files: [
            { name: "Thesis_Document.pdf", size: "3.7 MB", type: "pdf" },
            { name: "Presentation.pptx", size: "2.8 MB", type: "presentation" },
            { name: "Audio_Summary.mp3", size: "7.2 MB", type: "audio" },
        ],
    },
    {
        id: 9,
        title: "Advanced Machine Learning Models for Climate Prediction",
        author: "Dr. Sarah Chen",
        authorId: "2019331089",
        department: "Computer Science & Engineering",
        supervisor: "Dr. Michael Zhang",
        year: 2024,
        submitted: "2024-01-20",
        status: "approved",
        abstract:
            "This research develops advanced machine learning models for accurate climate prediction and analysis. Using deep learning techniques and historical climate data, we propose a novel framework for long-term weather forecasting and climate change impact assessment.",
        keywords: ["Machine Learning", "Climate Science", "Deep Learning", "Weather Prediction", "AI"],
        views: 1456,
        downloads: 298,
        files: [
            { name: "Thesis_Document.pdf", size: "4.2 MB", type: "pdf" },
            { name: "Presentation.pptx", size: "3.1 MB", type: "presentation" },
            { name: "Demo_Video.mp4", size: "67 MB", type: "video" },
        ],
    },
    {
        id: 10,
        title: "Novel Approach to Protein Folding using Quantum Computing",
        author: "Dr. James Wilson",
        authorId: "2019331102",
        department: "Biochemistry",
        supervisor: "Dr. Emily Brown",
        year: 2024,
        submitted: "2024-02-15",
        status: "approved",
        abstract:
            "Exploring quantum computing applications in solving the protein folding problem. This groundbreaking research demonstrates how quantum algorithms can significantly accelerate protein structure prediction, with implications for drug discovery and disease treatment.",
        keywords: ["Quantum Computing", "Protein Folding", "Biochemistry", "Drug Discovery", "Computational Biology"],
        views: 2134,
        downloads: 456,
        files: [
            { name: "Thesis_Document.pdf", size: "5.1 MB", type: "pdf" },
            { name: "Presentation.pptx", size: "2.9 MB", type: "presentation" },
            { name: "Supplementary_Data.pdf", size: "1.8 MB", type: "pdf" },
        ],
    },
]

// Helper function to get thesis by ID
export function getThesisById(id: number): Thesis | undefined {
    return thesesDatabase.find((thesis) => thesis.id === id)
}

// Helper function to get theses by status
export function getThesesByStatus(status: Thesis["status"]): Thesis[] {
    return thesesDatabase.filter((thesis) => thesis.status === status)
}

// Helper function to get theses by department
export function getThesesByDepartment(department: string): Thesis[] {
    return thesesDatabase.filter((thesis) => thesis.department === department)
}

// Helper function to get theses by year
export function getThesesByYear(year: number): Thesis[] {
    return thesesDatabase.filter((thesis) => thesis.year === year)
}

// Helper function to search theses
export function searchTheses(query: string): Thesis[] {
    const lowerQuery = query.toLowerCase()
    return thesesDatabase.filter(
        (thesis) =>
            thesis.title.toLowerCase().includes(lowerQuery) ||
            thesis.author.toLowerCase().includes(lowerQuery) ||
            thesis.keywords.some((keyword) => keyword.toLowerCase().includes(lowerQuery)) ||
            thesis.abstract.toLowerCase().includes(lowerQuery),
    )
}

// Helper function to get all theses
export function getAllTheses(): Thesis[] {
    return thesesDatabase
}
