export interface Video {
  title: string;
  description: string;
  youtubeId: string;
  thumbnail?: string;
  type: 'Talk' | 'Tutorial' | 'Short';
  date: string;
  duration: string;
}

export const videos: Video[] = [
  {
    title: "Building AI-Powered Applications",
    description: "A comprehensive guide to developing applications with modern AI technologies",
    youtubeId: "example123",
    type: "Talk",
    date: "2024-01",
    duration: "45:00"
  },
  {
    title: "Quick Tip: TypeScript Best Practices",
    description: "Essential TypeScript patterns for clean code",
    youtubeId: "example456",
    type: "Short",
    date: "2024-02",
    duration: "5:00"
  },
  {
    title: "Next.js 14 Tutorial: From Zero to Deploy",
    description: "Complete guide to building and deploying Next.js applications",
    youtubeId: "example789",
    type: "Tutorial",
    date: "2024-03",
    duration: "1:20:00"
  }
];
