type Description = {
  title: string;
  details: string[];
  stacks: string[];
}

type Position = {
  start: string;
  end: string;
  position: string;
  typePosition: string;
  desc: Description[];
}

export interface ExperienceInterface {
  data: {
    company: string;
    long: string;
    location: string | undefined;
    type: string;
    start: string;
    end: string;
    positions: Position[];
    desc: Description[];
  }[];
}