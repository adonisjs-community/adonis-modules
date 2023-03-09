import type { categories } from './categories'
export interface MaintainerInfo {
  name: string
  github: string
  twitter?: string
}

export interface AdonisVersion {
  name: string
}

export interface GithubContributor {
  login: string
  name?: string
  avatar_url?: string
}

export type CompatibilityStatus = 'working' | 'wip' | 'unknown' | 'not-working'
export type ModuleType = 'community' | 'official' | '3rd-party'

export interface ModuleInfo {
  name: string
  description:string
  repo: string
  npm: string
  icon?: string
  github: string
  website:string
  learn_more: string
  category: (typeof categories)[number]
  type: ModuleType
  adonisversions: AdonisVersion[]
  maintainers: MaintainerInfo[]
  contributors: GithubContributor[]

  // Fetched in realtime API for modules.nuxt.org
  downloads?: number
  tags?: string[]
  stars?: number
  updatedAt?: number
  publishedAt?: number
  createdAt?: number
}
