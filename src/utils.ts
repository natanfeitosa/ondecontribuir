export type Data = Record<string, string>

export function hasOnArray(arr: string[], ...str: string[]): string | null {
  for(let t in str) {
    if(arr.includes(t)) {
      return t
    }
  }

  return null
}

export function getOrDefault<V, F>(obj: Record<string, V>, key: string, fallback: F): V | F {
  if(Object.keys(obj).includes(key)) {
    return obj[key]
  }

  return fallback
}

/**
 * Examples:
 * dotEnvParse('A=1') // {A: 1}
 * dotEnvParse('A = 1') // {A: 1}
**/
export function dotEnvParse(src: string): Data {
	const result: Data = {}
	const lines = src.toString().trim().split('\n')
	for (const line of lines) {
		const match = line.match(/^([^=:#]+?)[=:](.*)/)
		if (match) {
			const key = match[1].trim()
			const value = match[2].trim().replace(/['"]+/g, '')
			result[key] = value
		}
	}
	return result
}

/**
 * Examples:
 * envStringToArray('1,2,3') // [1, 2, 3]
 * envStringToArray('1 2 3') // [1, 2, 3]
**/
export function envStringToArray(str: string): string[] {
  const delimiter = str.includes(' ') ? ' ' : str.includes(',') ? ',' : null

  if(delimiter != null) {
    return str.split(delimiter)
  }

  return [str]
}

export function calculeMiliseconds(minutes?: number, seconds?: number) {
  if(!minutes) {
    minutes = 1
  }

  if(!seconds) {
    seconds = 1
  }
  
  const date = new Date()
  return date.setSeconds(date.getSeconds() + ((minutes * 60) + seconds))  
}
