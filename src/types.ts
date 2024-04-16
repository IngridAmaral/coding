export type TUser = {
  name: string;
  company: string;
  address: string;
  contact: string;
  phone: number;
  devices: Record<string, TDevice>;
};

export type TDevice = {
  id: number;
  name: string;
  type: string;
  class: string;
  description: string;
  progress: number;
  roadmap: TPlan[];
};

export type TPlan = {
  name: string;
  status: string;
  steps: TStep[];
};

export type TStep = {
  name: string;
  status: string;
};
