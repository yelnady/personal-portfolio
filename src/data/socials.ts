export interface Social {
  url: string;
  icon: string;
}

export const socials: { [key: string]: Social } = {
  github: {
    url: "https://github.com/yelnady",
    icon: "github"
  },
  linkedin: {
    url: "https://linkedin.com/in/yelnady",
    icon: "linkedin"
  },
  email: {
    url: "mailto:yofa.elnady@gmail.com",
    icon: "mail"
  },
  youtube: {
    url: "https://www.youtube.com/@joebotofficial",
    icon: "youtube"
  },
  whatsapp: {
    url: "https://wa.me/5409983384",
    icon: "whatsapp"
  },
  bookly: {
    url: "https://bookly.com/yelnady",
    icon: "bookly"
  }
};
