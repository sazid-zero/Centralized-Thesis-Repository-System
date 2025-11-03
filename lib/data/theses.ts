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
    {
        id: 11,
        title: "Quantum Entanglement and Its Applications in Cryptography",
        author: "Dr. Rahman Hossain",
        authorId: "2020331201",
        department: "Physics",
        supervisor: "Dr. Kamal Ahmed",
        year: 2024,
        submitted: "2024-03-10",
        status: "approved",
        abstract:
            "This research explores the fundamental principles of quantum entanglement and its practical applications in developing secure cryptographic systems. We demonstrate how entangled particles can be used to create unbreakable encryption methods for secure communication.",
        keywords: ["Quantum Physics", "Entanglement", "Cryptography", "Quantum Mechanics", "Security"],
        views: 1876,
        downloads: 342,
        files: [
            { name: "Thesis_Document.pdf", size: "4.8 MB", type: "pdf" },
            { name: "Presentation.pptx", size: "3.2 MB", type: "presentation" },
            { name: "Demo_Video.mp4", size: "58 MB", type: "video" },
        ],
    },
    {
        id: 12,
        title: "Advanced Mathematical Modeling of Complex Systems",
        author: "Nusrat Jahan",
        authorId: "2020331202",
        department: "Mathematics",
        supervisor: "Dr. Sultana Begum",
        year: 2024,
        submitted: "2024-02-28",
        status: "approved",
        abstract:
            "A comprehensive study on mathematical modeling techniques for analyzing complex dynamical systems. This thesis develops novel algorithms for predicting system behavior in chaotic environments, with applications in weather forecasting and financial markets.",
        keywords: ["Mathematics", "Complex Systems", "Modeling", "Chaos Theory", "Algorithms"],
        views: 1543,
        downloads: 289,
        files: [
            { name: "Thesis_Document.pdf", size: "3.9 MB", type: "pdf" },
            { name: "Presentation.pptx", size: "2.6 MB", type: "presentation" },
        ],
    },
    {
        id: 13,
        title: "Green Chemistry Approaches for Sustainable Industrial Processes",
        author: "Mahmud Hassan",
        authorId: "2020331203",
        department: "Chemistry",
        supervisor: "Dr. Fatima Rahman",
        year: 2024,
        submitted: "2024-01-25",
        status: "approved",
        abstract:
            "This research investigates environmentally friendly chemical processes that minimize waste and reduce energy consumption in industrial applications. We propose novel catalytic methods that significantly improve efficiency while reducing environmental impact.",
        keywords: ["Green Chemistry", "Sustainability", "Catalysis", "Industrial Chemistry", "Environment"],
        views: 1654,
        downloads: 312,
        files: [
            { name: "Thesis_Document.pdf", size: "4.3 MB", type: "pdf" },
            { name: "Presentation.pptx", size: "2.8 MB", type: "presentation" },
            { name: "Audio_Summary.mp3", size: "9.1 MB", type: "audio" },
        ],
    },
    {
        id: 14,
        title: "Nanomaterials for Advanced Drug Delivery Systems",
        author: "Ayesha Khan",
        authorId: "2020331204",
        department: "Chemistry",
        supervisor: "Dr. Ahmed Karim",
        year: 2023,
        submitted: "2023-12-15",
        status: "approved",
        abstract:
            "Exploring the synthesis and application of nanomaterials for targeted drug delivery in cancer treatment. This thesis demonstrates how nanoparticles can be engineered to deliver medications directly to tumor cells, minimizing side effects and improving treatment efficacy.",
        keywords: ["Nanomaterials", "Drug Delivery", "Chemistry", "Nanotechnology", "Medicine"],
        views: 1987,
        downloads: 398,
        files: [
            { name: "Thesis_Document.pdf", size: "5.2 MB", type: "pdf" },
            { name: "Presentation.pptx", size: "3.4 MB", type: "presentation" },
            { name: "Demo_Video.mp4", size: "62 MB", type: "video" },
        ],
    },
    {
        id: 15,
        title: "Climate Change Impact on Coastal Ecosystems in Bangladesh",
        author: "Rafiq Ahmed",
        authorId: "2020331205",
        department: "Environmental Science",
        supervisor: "Dr. Nasrin Sultana",
        year: 2024,
        submitted: "2024-03-05",
        status: "approved",
        abstract:
            "A comprehensive analysis of climate change effects on coastal ecosystems in Bangladesh. This research examines rising sea levels, temperature changes, and their impact on biodiversity, proposing conservation strategies for vulnerable coastal regions.",
        keywords: ["Climate Change", "Environmental Science", "Coastal Ecosystems", "Biodiversity", "Conservation"],
        views: 2145,
        downloads: 423,
        files: [
            { name: "Thesis_Document.pdf", size: "4.7 MB", type: "pdf" },
            { name: "Presentation.pptx", size: "3.1 MB", type: "presentation" },
            { name: "Demo_Video.mp4", size: "71 MB", type: "video" },
        ],
    },
    {
        id: 16,
        title: "Sustainable Waste Management Solutions for Urban Areas",
        author: "Tahmina Akter",
        authorId: "2020331206",
        department: "Environmental Science",
        supervisor: "Dr. Kamal Hossain",
        year: 2024,
        submitted: "2024-02-18",
        status: "approved",
        abstract:
            "Innovative approaches to waste management in rapidly growing urban centers. This thesis proposes integrated waste management systems that combine recycling, composting, and waste-to-energy technologies to create sustainable solutions for cities.",
        keywords: ["Waste Management", "Environmental Science", "Sustainability", "Urban Planning", "Recycling"],
        views: 1765,
        downloads: 334,
        files: [
            { name: "Thesis_Document.pdf", size: "4.1 MB", type: "pdf" },
            { name: "Presentation.pptx", size: "2.7 MB", type: "presentation" },
        ],
    },
    {
        id: 17,
        title: "Autonomous Navigation Systems for Mobile Robots",
        author: "Imran Khan",
        authorId: "2020331207",
        department: "Robotics & Automation",
        supervisor: "Dr. Hassan Mahmud",
        year: 2024,
        submitted: "2024-01-30",
        status: "approved",
        abstract:
            "Development of advanced navigation algorithms for autonomous mobile robots in complex environments. This research combines computer vision, sensor fusion, and machine learning to enable robots to navigate safely and efficiently in dynamic settings.",
        keywords: ["Robotics", "Autonomous Navigation", "Computer Vision", "Machine Learning", "Automation"],
        views: 1923,
        downloads: 367,
        files: [
            { name: "Thesis_Document.pdf", size: "4.9 MB", type: "pdf" },
            { name: "Presentation.pptx", size: "3.3 MB", type: "presentation" },
            { name: "Demo_Video.mp4", size: "89 MB", type: "video" },
        ],
    },
    {
        id: 18,
        title: "Industrial Automation Using AI-Powered Robotic Systems",
        author: "Sadia Rahman",
        authorId: "2020331208",
        department: "Robotics & Automation",
        supervisor: "Dr. Fatima Ahmed",
        year: 2023,
        submitted: "2023-11-20",
        status: "approved",
        abstract:
            "Integration of artificial intelligence with robotic systems for industrial automation. This thesis demonstrates how AI-powered robots can optimize manufacturing processes, improve quality control, and increase production efficiency in various industries.",
        keywords: ["Industrial Automation", "Robotics", "Artificial Intelligence", "Manufacturing", "Quality Control"],
        views: 2087,
        downloads: 412,
        files: [
            { name: "Thesis_Document.pdf", size: "5.3 MB", type: "pdf" },
            { name: "Presentation.pptx", size: "3.6 MB", type: "presentation" },
            { name: "Audio_Summary.mp3", size: "8.9 MB", type: "audio" },
        ],
    },
    {
        id: 19,
        title: "Economic Impact of Digital Transformation in Bangladesh",
        author: "Kamal Uddin",
        authorId: "2020331209",
        department: "Economics",
        supervisor: "Dr. Rahman Ali",
        year: 2024,
        submitted: "2024-03-12",
        status: "approved",
        abstract:
            "Analysis of how digital technologies are transforming the economic landscape of Bangladesh. This research examines the impact of e-commerce, digital payments, and online services on economic growth, employment, and income distribution.",
        keywords: ["Economics", "Digital Transformation", "E-commerce", "Economic Growth", "Bangladesh"],
        views: 1834,
        downloads: 356,
        files: [
            { name: "Thesis_Document.pdf", size: "4.4 MB", type: "pdf" },
            { name: "Presentation.pptx", size: "2.9 MB", type: "presentation" },
        ],
    },
    {
        id: 20,
        title: "Microfinance and Poverty Alleviation in Rural Bangladesh",
        author: "Nasrin Akter",
        authorId: "2020331210",
        department: "Economics",
        supervisor: "Dr. Sultana Begum",
        year: 2024,
        submitted: "2024-02-22",
        status: "approved",
        abstract:
            "Comprehensive study on the effectiveness of microfinance programs in reducing poverty in rural areas. This thesis evaluates various microfinance models and their impact on household income, women's empowerment, and community development.",
        keywords: ["Microfinance", "Poverty Alleviation", "Economics", "Rural Development", "Bangladesh"],
        views: 1976,
        downloads: 389,
        files: [
            { name: "Thesis_Document.pdf", size: "4.6 MB", type: "pdf" },
            { name: "Presentation.pptx", size: "3.0 MB", type: "presentation" },
            { name: "Demo_Video.mp4", size: "54 MB", type: "video" },
        ],
    },
    {
        id: 21,
        title: "Precision Agriculture Using IoT and Machine Learning",
        author: "Habibur Rahman",
        authorId: "2020331211",
        department: "Agriculture & Food Technology",
        supervisor: "Dr. Aminul Islam",
        year: 2024,
        submitted: "2024-03-08",
        status: "approved",
        abstract:
            "This research explores the integration of IoT sensors and machine learning algorithms for precision agriculture. We develop a smart farming system that monitors soil conditions, weather patterns, and crop health to optimize irrigation, fertilization, and pest control, significantly improving crop yields and resource efficiency.",
        keywords: ["Precision Agriculture", "IoT", "Machine Learning", "Smart Farming", "Crop Optimization"],
        views: 1823,
        downloads: 347,
        files: [
            { name: "Thesis_Document.pdf", size: "4.5 MB", type: "pdf" },
            { name: "Presentation.pptx", size: "3.2 MB", type: "presentation" },
            { name: "Demo_Video.mp4", size: "68 MB", type: "video" },
        ],
    },
    {
        id: 22,
        title: "Sustainable Food Processing and Preservation Techniques",
        author: "Sharmin Akter",
        authorId: "2020331212",
        department: "Agriculture & Food Technology",
        supervisor: "Dr. Mahmuda Khatun",
        year: 2024,
        submitted: "2024-02-14",
        status: "approved",
        abstract:
            "Investigation of innovative food processing and preservation methods that extend shelf life while maintaining nutritional value. This thesis focuses on natural preservation techniques, minimal processing approaches, and sustainable packaging solutions to reduce food waste and improve food security in developing regions.",
        keywords: ["Food Processing", "Food Preservation", "Sustainability", "Food Technology", "Food Security"],
        views: 1654,
        downloads: 318,
        files: [
            { name: "Thesis_Document.pdf", size: "4.2 MB", type: "pdf" },
            { name: "Presentation.pptx", size: "2.9 MB", type: "presentation" },
            { name: "Audio_Summary.mp3", size: "8.5 MB", type: "audio" },
        ],
    },
    {
        id: 23,
        title: "Deep Learning for Natural Language Processing in Bengali",
        author: "Tanvir Ahmed",
        authorId: "2020331213",
        department: "Computer Science & Engineering",
        supervisor: "Dr. Rashid Khan",
        year: 2024,
        submitted: "2024-03-15",
        status: "approved",
        abstract:
            "This research develops advanced deep learning models specifically designed for Bengali natural language processing tasks. We propose novel architectures for sentiment analysis, machine translation, and text summarization that significantly outperform existing methods for low-resource languages like Bengali.",
        keywords: ["Deep Learning", "NLP", "Bengali", "Machine Learning", "AI", "Neural Networks"],
        views: 1923,
        downloads: 378,
        files: [
            { name: "Thesis_Document.pdf", size: "4.8 MB", type: "pdf" },
            { name: "Presentation.pptx", size: "3.3 MB", type: "presentation" },
            { name: "Demo_Video.mp4", size: "72 MB", type: "video" },
        ],
    },
    {
        id: 24,
        title: "Genetic Engineering for Disease-Resistant Crops",
        author: "Farzana Islam",
        authorId: "2020331214",
        department: "Biochemistry",
        supervisor: "Dr. Kamal Hossain",
        year: 2024,
        submitted: "2024-01-28",
        status: "approved",
        abstract:
            "Exploring genetic modification techniques to develop crop varieties resistant to common plant diseases. This research demonstrates how CRISPR-Cas9 technology can be used to enhance plant immunity, potentially revolutionizing agriculture and food security in Bangladesh.",
        keywords: ["Genetic Engineering", "CRISPR", "Biotechnology", "Agriculture", "Disease Resistance"],
        views: 2156,
        downloads: 445,
        files: [
            { name: "Thesis_Document.pdf", size: "5.4 MB", type: "pdf" },
            { name: "Presentation.pptx", size: "3.7 MB", type: "presentation" },
            { name: "Demo_Video.mp4", size: "81 MB", type: "video" },
        ],
    },
    {
        id: 25,
        title: "Stem Cell Therapy for Neurodegenerative Diseases",
        author: "Rashed Mahmud",
        authorId: "2020331215",
        department: "Biochemistry",
        supervisor: "Dr. Nasrin Ahmed",
        year: 2023,
        submitted: "2023-12-10",
        status: "approved",
        abstract:
            "Investigating the potential of stem cell therapy in treating neurodegenerative diseases such as Alzheimer's and Parkinson's. This thesis explores novel approaches to stem cell differentiation and transplantation, offering hope for patients with currently incurable conditions.",
        keywords: ["Stem Cells", "Biotechnology", "Neuroscience", "Medical Research", "Therapy"],
        views: 2387,
        downloads: 498,
        files: [
            { name: "Thesis_Document.pdf", size: "5.6 MB", type: "pdf" },
            { name: "Presentation.pptx", size: "3.9 MB", type: "presentation" },
            { name: "Audio_Summary.mp3", size: "10.2 MB", type: "audio" },
        ],
    },
    {
        id: 26,
        title: "Topological Quantum Computing and Error Correction",
        author: "Sabbir Rahman",
        authorId: "2020331216",
        department: "Physics",
        supervisor: "Dr. Ashraf Ali",
        year: 2024,
        submitted: "2024-02-05",
        status: "approved",
        abstract:
            "Advanced study of topological quantum computing methods and their applications in error-resistant quantum computation. This research proposes novel error correction codes based on topological properties, potentially solving one of the biggest challenges in quantum computing.",
        keywords: ["Quantum Computing", "Topology", "Physics", "Error Correction", "Quantum Mechanics"],
        views: 1765,
        downloads: 356,
        files: [
            { name: "Thesis_Document.pdf", size: "4.9 MB", type: "pdf" },
            { name: "Presentation.pptx", size: "3.4 MB", type: "presentation" },
            { name: "Demo_Video.mp4", size: "65 MB", type: "video" },
        ],
    },
    {
        id: 27,
        title: "Statistical Methods for Big Data Analysis",
        author: "Nadia Sultana",
        authorId: "2020331217",
        department: "Mathematics",
        supervisor: "Dr. Rahman Hossain",
        year: 2024,
        submitted: "2024-03-20",
        status: "approved",
        abstract:
            "Development of advanced statistical methods for analyzing large-scale datasets. This thesis introduces novel algorithms for dimensionality reduction, pattern recognition, and predictive modeling that are specifically optimized for big data applications in various domains.",
        keywords: ["Statistics", "Big Data", "Mathematics", "Data Analysis", "Machine Learning"],
        views: 1892,
        downloads: 389,
        files: [
            { name: "Thesis_Document.pdf", size: "4.6 MB", type: "pdf" },
            { name: "Presentation.pptx", size: "3.1 MB", type: "presentation" },
        ],
    },
    {
        id: 28,
        title: "Organic Synthesis of Pharmaceutical Compounds",
        author: "Jahangir Alam",
        authorId: "2020331218",
        department: "Chemistry",
        supervisor: "Dr. Sultana Begum",
        year: 2024,
        submitted: "2024-01-18",
        status: "approved",
        abstract:
            "Innovative approaches to synthesizing pharmaceutical compounds using organic chemistry methods. This research develops cost-effective and environmentally friendly synthesis routes for important medications, with potential applications in affordable drug manufacturing.",
        keywords: ["Organic Chemistry", "Pharmaceutical", "Drug Synthesis", "Green Chemistry", "Medicine"],
        views: 1987,
        downloads: 412,
        files: [
            { name: "Thesis_Document.pdf", size: "5.1 MB", type: "pdf" },
            { name: "Presentation.pptx", size: "3.5 MB", type: "presentation" },
            { name: "Audio_Summary.mp3", size: "9.3 MB", type: "audio" },
        ],
    },
    {
        id: 29,
        title: "Polymer Chemistry for Advanced Materials",
        author: "Sumaiya Akter",
        authorId: "2020331219",
        department: "Chemistry",
        supervisor: "Dr. Karim Ahmed",
        year: 2023,
        submitted: "2023-11-25",
        status: "approved",
        abstract:
            "Exploration of polymer chemistry techniques for creating advanced materials with unique properties. This thesis focuses on developing biodegradable polymers, conductive polymers, and smart materials with applications in electronics, packaging, and biomedical devices.",
        keywords: ["Polymer Chemistry", "Materials Science", "Biodegradable", "Smart Materials", "Nanotechnology"],
        views: 2134,
        downloads: 445,
        files: [
            { name: "Thesis_Document.pdf", size: "5.3 MB", type: "pdf" },
            { name: "Presentation.pptx", size: "3.6 MB", type: "presentation" },
            { name: "Demo_Video.mp4", size: "76 MB", type: "video" },
        ],
    },
    {
        id: 30,
        title: "Renewable Energy Integration in Smart Grids",
        author: "Mizanur Rahman",
        authorId: "2020331220",
        department: "Environmental Science",
        supervisor: "Dr. Fatima Khan",
        year: 2024,
        submitted: "2024-02-28",
        status: "approved",
        abstract:
            "Comprehensive analysis of integrating renewable energy sources into smart grid systems. This research proposes optimization algorithms for balancing intermittent renewable energy with grid stability, contributing to sustainable energy solutions for urban areas.",
        keywords: ["Renewable Energy", "Smart Grid", "Environmental Science", "Sustainability", "Energy Management"],
        views: 1876,
        downloads: 378,
        files: [
            { name: "Thesis_Document.pdf", size: "4.7 MB", type: "pdf" },
            { name: "Presentation.pptx", size: "3.2 MB", type: "presentation" },
            { name: "Demo_Video.mp4", size: "69 MB", type: "video" },
        ],
    },
    {
        id: 31,
        title: "Air Quality Monitoring Using Sensor Networks",
        author: "Tasnuva Hasan",
        authorId: "2020331221",
        department: "Environmental Science",
        supervisor: "Dr. Hassan Mahmud",
        year: 2024,
        submitted: "2024-03-10",
        status: "approved",
        abstract:
            "Development of low-cost sensor networks for real-time air quality monitoring in urban environments. This thesis demonstrates how distributed sensor systems can provide accurate pollution data, enabling better environmental policy decisions and public health protection.",
        keywords: ["Air Quality", "Environmental Monitoring", "Sensor Networks", "IoT", "Public Health"],
        views: 1765,
        downloads: 345,
        files: [
            { name: "Thesis_Document.pdf", size: "4.4 MB", type: "pdf" },
            { name: "Presentation.pptx", size: "2.9 MB", type: "presentation" },
        ],
    },
    {
        id: 32,
        title: "Swarm Robotics for Search and Rescue Operations",
        author: "Ashraful Islam",
        authorId: "2020331222",
        department: "Robotics & Automation",
        supervisor: "Dr. Aminul Haque",
        year: 2024,
        submitted: "2024-01-22",
        status: "approved",
        abstract:
            "Investigation of swarm robotics algorithms for coordinated search and rescue missions. This research develops decentralized control strategies that enable multiple robots to work together efficiently in disaster scenarios, potentially saving lives through faster victim location.",
        keywords: ["Swarm Robotics", "Search and Rescue", "Multi-Agent Systems", "Automation", "Disaster Response"],
        views: 2098,
        downloads: 423,
        files: [
            { name: "Thesis_Document.pdf", size: "5.2 MB", type: "pdf" },
            { name: "Presentation.pptx", size: "3.8 MB", type: "presentation" },
            { name: "Demo_Video.mp4", size: "94 MB", type: "video" },
        ],
    },
    {
        id: 33,
        title: "Human-Robot Collaboration in Manufacturing",
        author: "Rifat Hossain",
        authorId: "2020331223",
        department: "Robotics & Automation",
        supervisor: "Dr. Sultana Ahmed",
        year: 2023,
        submitted: "2023-12-05",
        status: "approved",
        abstract:
            "Exploring safe and efficient human-robot collaboration in manufacturing environments. This thesis proposes novel interaction protocols and safety mechanisms that allow humans and robots to work side-by-side, improving productivity while ensuring worker safety.",
        keywords: ["Human-Robot Interaction", "Manufacturing", "Robotics", "Safety", "Collaborative Robots"],
        views: 1923,
        downloads: 398,
        files: [
            { name: "Thesis_Document.pdf", size: "5.0 MB", type: "pdf" },
            { name: "Presentation.pptx", size: "3.5 MB", type: "presentation" },
            { name: "Audio_Summary.mp3", size: "9.7 MB", type: "audio" },
        ],
    },
    {
        id: 34,
        title: "Behavioral Economics and Consumer Decision Making",
        author: "Shafiqul Islam",
        authorId: "2020331224",
        department: "Economics",
        supervisor: "Dr. Nasrin Sultana",
        year: 2024,
        submitted: "2024-02-16",
        status: "approved",
        abstract:
            "Analysis of psychological factors influencing consumer economic decisions. This research applies behavioral economics principles to understand purchasing patterns, savings behavior, and financial decision-making in the context of developing economies like Bangladesh.",
        keywords: ["Behavioral Economics", "Consumer Behavior", "Decision Making", "Psychology", "Market Research"],
        views: 1854,
        downloads: 367,
        files: [
            { name: "Thesis_Document.pdf", size: "4.5 MB", type: "pdf" },
            { name: "Presentation.pptx", size: "3.0 MB", type: "presentation" },
        ],
    },
    {
        id: 35,
        title: "Cryptocurrency and Financial Market Dynamics",
        author: "Mahbub Rahman",
        authorId: "2020331225",
        department: "Economics",
        supervisor: "Dr. Ahmed Karim",
        year: 2024,
        submitted: "2024-03-05",
        status: "approved",
        abstract:
            "Comprehensive study of cryptocurrency markets and their impact on traditional financial systems. This thesis examines price volatility, market efficiency, and regulatory challenges, providing insights into the future of digital currencies in global economics.",
        keywords: ["Cryptocurrency", "Financial Markets", "Economics", "Blockchain", "Digital Currency"],
        views: 2187,
        downloads: 456,
        files: [
            { name: "Thesis_Document.pdf", size: "4.9 MB", type: "pdf" },
            { name: "Presentation.pptx", size: "3.4 MB", type: "presentation" },
            { name: "Demo_Video.mp4", size: "58 MB", type: "video" },
        ],
    },
    {
        id: 36,
        title: "Vertical Farming Systems for Urban Agriculture",
        author: "Nusrat Jahan",
        authorId: "2020331226",
        department: "Agriculture & Food Technology",
        supervisor: "Dr. Rahman Ali",
        year: 2024,
        submitted: "2024-01-30",
        status: "approved",
        abstract:
            "Development of efficient vertical farming systems for urban food production. This research explores hydroponic and aeroponic techniques, LED lighting optimization, and automated climate control to maximize crop yields in limited urban spaces, addressing food security challenges.",
        keywords: ["Vertical Farming", "Urban Agriculture", "Hydroponics", "Food Security", "Sustainable Agriculture"],
        views: 1976,
        downloads: 401,
        files: [
            { name: "Thesis_Document.pdf", size: "4.8 MB", type: "pdf" },
            { name: "Presentation.pptx", size: "3.3 MB", type: "presentation" },
            { name: "Demo_Video.mp4", size: "73 MB", type: "video" },
        ],
    },
    {
        id: 37,
        title: "Biofortification of Staple Crops for Nutritional Enhancement",
        author: "Kamrul Hasan",
        authorId: "2020331227",
        department: "Agriculture & Food Technology",
        supervisor: "Dr. Fatima Begum",
        year: 2023,
        submitted: "2023-11-18",
        status: "approved",
        abstract:
            "Investigation of biofortification techniques to enhance the nutritional content of staple crops like rice and wheat. This thesis demonstrates how selective breeding and agronomic practices can increase vitamin and mineral content, combating malnutrition in developing countries.",
        keywords: ["Biofortification", "Nutrition", "Agriculture", "Food Technology", "Public Health"],
        views: 2045,
        downloads: 423,
        files: [
            { name: "Thesis_Document.pdf", size: "5.1 MB", type: "pdf" },
            { name: "Presentation.pptx", size: "3.6 MB", type: "presentation" },
            { name: "Audio_Summary.mp3", size: "9.8 MB", type: "audio" },
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
