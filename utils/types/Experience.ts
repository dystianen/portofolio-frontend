export type ExperienceType = {
  data: {
    company: string;
    position: string[];
    location: string;
    type: string;
    long: string;
    start: string;
    end: string;
    desc: {
      title: string;
      details: string[];
      stacks: string[];
    }[];
  }[];
};
