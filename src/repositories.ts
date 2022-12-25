import { makeBadge } from './badges'
import type { IEnv, IRepoRaw, IRepo, IProject, IBadge, IPersisted } from './interfaces'
import { calculeMiliseconds } from './utils'

function githubApiRepoLink({ owner, repo }: { owner: string, repo: string }): string {
  return `https://api.github.com/repos/${owner}/${repo}`
}

function getEnvsFromString(str: string): Array<IEnv> {
  const reEnv = '(?<VARIABLE>[A-Z_]+)(\s+)?=(\s+)?(?<VALUE>.+)'
  const a = str.match(new RegExp(`(${reEnv})`, 'mig'))

  //@ts-ignore
  return a.map(i => i.match(new RegExp(reEnv)).groups)
}

async function getIssues(): Promise<IRepoRaw[] | void> {
  const url = githubApiRepoLink({ owner: 'natanfeitosa', repo: 'ondecontribuir' })
  let projects = (await fetch(url + '/issues').then(r => r.json()) as any[]).map(i => i.body)

  projects = projects.map(p => {
    const envs = getEnvsFromString(p)
    if(envs) {
      return envs.reduce((acc, cur) => {
        switch(cur.VARIABLE) {
          case 'REPOSITORIO_URL':
            return {...acc, url: cur.VALUE}
          case 'LOGO_PROJETO':
            return { ...acc, logo: cur.VALUE }
          default:
            return acc
        }
      }, {} as IRepoRaw)
    }
  }).filter(Boolean)

  if(projects) {
    return projects
  }
}

async function getRepositories(): Promise<IRepo[] | void> {
  const repos = []
  const issues = await getIssues()

  if(!issues || issues.length < 1) {
    return
  }

  for(const issue of issues) {
    const { owner, repo } = issue.url.match(/https\:\/\/github\.com\/(?<owner>[^/]+)\/(?<repo>[^/]+)\/?/).groups
    const url = githubApiRepoLink({ owner, repo })
    const project = await fetch(url).then(r => r.json())
    
    repos.push({
      name: project.name,
      description: project.description,
      url: project.html_url,
      stars: project.stargazers_count,
      forks: project.forks_count,
      open_issues: project.open_issues_count,
      topics: project.topics,
      // license?: string,
      owner: {
        // avatar: project.owner.avatar_url,
        username: project.owner.login,
      },
      // image?: string,
      language: project.language,
    })
  }

  return repos
}

async function handlerProjects(): Promise<IProject[]> {
  const repos = await getRepositories()
  const projects: IProject[] = []

  for(const repo of repos) {
    let badges: IBadge[] = []

    if(repo.language) {
      const _b = makeBadge(repo.language.toLowerCase(), {}, true) as IBadge
      if(_b) {
        badges.push(_b)
      }
      delete repo.language
    }

    projects.push({
      ...repo,
      badges: [
        ...badges,
        ...['githubRepoStars', 'githubForks', 'githubIssues', 'githubLicense'].map(val => makeBadge(val, { owner: repo.owner.username, repo: repo.name }, true))
      ].filter(Boolean) as IBadge[],
      description: repo?.description?.slice(0, 180) ?? ''
    })
  }
  
  return projects
}

const storageKey = 'ondecontribuir_data'

export async function getProjects() {
    try {
      if(import.meta.env.DEV) {
        throw new Error('dev mode')
      }
      
      let {
        data: projs,
        validity
      } = JSON.parse(localStorage.getItem(storageKey)) as IPersisted

      if(calculeMiliseconds() >= validity) {
        throw new Error()
      }

      return projs.map(proj => {
        return {
           ...proj,
          badges: (proj.badges.map(b => makeBadge(b)) ?? []) 
        }
      })
    } catch(e) {
      console.log(e)
      
      let data = await handlerProjects()

      if(!data || data.length < 1) {
        return
      }
      
      localStorage.setItem(storageKey, JSON.stringify({
        data,
        validity: calculeMiliseconds(30)
      }))

      // console.log(data)

      return data.map(proj => {
        const badges = (proj.badges.map(b => makeBadge(b)) ?? [])

        return { ...proj, badges }
      })
    }
  }