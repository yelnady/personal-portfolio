export interface Note {
  title: string;
  slug: string;
  summary: string;
  category: string;
  icon: string;
  publishedAt: string;
  content?: string;
}

export const notes: Note[] = [
  {
    title: "CSS for the shell of it",
    slug: "css-shell",
    summary: "Not all work needs to lead somewhere.",
    category: "Web Development",
    icon: "code",
    publishedAt: "2024-05-20"
  },
  {
    title: "How I leverage AI in my everyday work",
    slug: "ai-workflow",
    summary: "AI is here to eat all the things. Here's how I use it to my advantage.",
    category: "AI",
    icon: "bot",
    publishedAt: "2024-05-19"
  },
  {
    title: "Throwaway projects are the best kinds of projects",
    slug: "throwaway-projects",
    summary: "Not all ideas are good ideas. But that's a good thing.",
    category: "Career",
    icon: "fire",
    publishedAt: "2024-05-18"
  }
];
