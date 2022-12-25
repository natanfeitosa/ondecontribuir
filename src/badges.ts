import type { IBadge, IBadgeArgs, IBadgeRaw } from "./interfaces"
import { getOrDefault } from "./utils"

/**
* Languages in alphabetical order
*
* Font https://github.com/Ileriayo/markdown-badges#-languages
*/
const badgesLanguage: Record<string, IBadge> = {
  c: {
    alt: 'Linguagem C',
    url: 'https://img.shields.io/badge/c-%2300599C.svg?logo=c&logoColor=white'
  },
  'c#': {
    alt: 'Linguagem C#',
    url: 'https://img.shields.io/badge/c%23-%23239120.svg?logo=c-sharp&logoColor=white'
  },
  'c++': {
    alt: 'Linguagem C++',
    url: 'https://img.shields.io/badge/c++-%2300599C.svg?logo=c%2B%2B&logoColor=white'
  },
  css: {
    alt: 'Linguagem CSS',
    url: 'https://img.shields.io/badge/css3-%231572B6.svg?logo=css3&logoColor=white'
  },
  html: {
    alt: 'Linguagem HTML',
    url: 'https://img.shields.io/badge/html5-%23E34F26.svg?logo=html5&logoColor=white'
  },
  javascript: {
    alt: 'Linguagem Javascript',
    url: 'https://img.shields.io/badge/javascript-%23323330.svg?logo=javascript&logoColor=%23F7DF1E'
  },
  markdown: {
    alt: 'Linguagem Markdown',
    url: 'https://img.shields.io/badge/markdown-%23000000.svg?logo=markdown&logoColor=white'
  },
  php: {
    alt: 'Linguagem PHP',
    url: 'https://img.shields.io/badge/php-%23777BB4.svg?logo=php&logoColor=white'
  },
  python: {
    alt: 'Linguagem Python',
    url: 'https://img.shields.io/badge/python-3670A0?logo=python&logoColor=ffdd54'
  },
  typescript: {
    alt: 'Linguagem Typescript',
    url: 'https://img.shields.io/badge/typescript-%23007ACC.svg?logo=typescript&logoColor=white'
  }
}

const badgesTemplate: Record<string, IBadge> = {
  githubForks: {
    alt: 'Github Forks',
    url: 'https://img.shields.io/github/forks/{{owner}}/{{repo}}'
  },
  githubIssues: {
    alt: 'GitHub Issues',
    url: 'https://img.shields.io/github/issues/{{owner}}/{{repo}}'
  },
  githubLicense: {
    alt: 'License',
    url: 'https://img.shields.io/github/license/{{owner}}/{{repo}}'
  },
  githubRepoStars: {
    alt: 'GitHub Repo Stars',
    url: 'https://img.shields.io/github/stars/{{owner}}/{{repo}}'
  }
}

export function makeBadge(name: string): IBadge | void;
export function makeBadge(name: string, args: IBadgeArgs): IBadge | void;
export function makeBadge(name: string, args: IBadgeArgs, raw: boolean): IBadge | IBadgeRaw | void;
export function makeBadge(raw: IBadgeRaw): IBadge | void;
  
export function makeBadge(...args: any[]): any {
  if(args.length < 1) {
    throw new TypeError('args empty')
  }
  
  const [name, bargs, raw] = args as [string, IBadgeArgs, boolean]

  if(args.length == 1) {
    if(args[0].toString() != '[object Object]') return
    return makeBadge(name.type, name.args, false)
  }

  if(Object.keys(badgesLanguage).includes(name) || !bargs) {
    if(raw) return ({ type: name })
    return badgesLanguage[name]
  }
    
  const badgeTemplate = getOrDefault(badgesTemplate, name, null)

  if(!badgeTemplate) {
    return
  }
  
  if(raw) return ({ type: name, args: bargs }) as IBadgeRaw

  return Object.keys(bargs).reduce((acc, cur) => {
    const url = acc.url.replace(`{{${cur}}}`, bargs[cur])
    return { ...acc, url }
  }, badgeTemplate)
}
