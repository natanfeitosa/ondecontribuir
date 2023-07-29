export interface IBase {
  name: string,
  description?: string,
  url: string,
  stars: number,
  forks: number,
  open_issues: number,
  topics?: string[],
  // license?: string,
  owner: {
    // avatar: string,
    username: string,
  },
  logo?: string,
  language?: string,
}

export interface IRepo extends IBase {}

export interface IProject extends IBase {
  badges?: IBadge[],
}

export interface IRepoRaw {
  logo?: string,
  url: string,
}

export interface IEnv {
  VARIABLE: string,
  VALUE: string
}

export interface IBadge {
  alt: string,
  url: string
}

export interface IBadgeArgs {
  [x: string]: any
}

export interface IBadgeRaw {
  type: string,
  args?: IBadgeArgs
}

export interface IPersisted {
  validity: number,
  data: Record<string, any>[]
}
