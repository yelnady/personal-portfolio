export interface Social {
  platform: string;
  url: string;
  icon: string;
}

export const socials: Social[] = [
  {
    platform: "GitHub",
    url: "https://github.com/yourusername",
    icon: "github"
  },
  {
    platform: "LinkedIn",
    url: "https://linkedin.com/in/yourusername",
    icon: "linkedin"
  },
  {
    platform: "Twitter",
    url: "https://twitter.com/yourusername",
    icon: "twitter"
  },
  {
    platform: "Email",
    url: "mailto:contact@example.com",
    icon: "mail"
  }
];
