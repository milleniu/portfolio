export type Experience = EmployementExperience | Diploma;

export interface EmployementExperience {
  company: string;
  position: string;
  role: ReadonlyArray<string>;
  period: { from: number, to?: number }
}
export const isEmployementExperience = (e: Experience): e is EmployementExperience => {
  return !!((e as EmployementExperience).period);
}

export interface Diploma {
  name: string;
  date: number;
  school: string;
}
export const isDiploma = (e: Experience): e is Diploma => {
  return !!((e as Diploma).date);
}
