export type ExperienceType = {
  data: {
    name: string;
    start: string;
    end: string;
    desc: {
      title: string;
      details: string[];
      stacks: string[];
    }[];
  }[];
};
