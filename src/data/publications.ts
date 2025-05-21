export interface Publication {
  title: string;
  authors: string[];
  venue: string;
  year: number;
  abstract: string;
  doi?: string;
  pdfLink?: string;
  topics: string[];
}

export const publications: Publication[] = [
  {
    title: "AI in Healthcare: Advancing Medical Imaging Analysis",
    authors: ["Yusuf El-Nady", "Other Author"],
    venue: "International Conference on Medical Imaging",
    year: 2023,
    abstract: "This paper presents novel approaches to medical image analysis using deep learning...",
    doi: "10.1234/example.doi",
    topics: ["AI", "Healthcare", "Medical Imaging"]
  },
  {
    title: "Innovations in Radiation Oncology Education",
    authors: ["Yusuf El-Nady", "Other Author"],
    venue: "Journal of Medical Education",
    year: 2022,
    abstract: "A comprehensive study on improving radiation oncology education through technology...",
    pdfLink: "/papers/oncology-education.pdf",
    topics: ["Education", "Radiation Oncology"]
  }
];
