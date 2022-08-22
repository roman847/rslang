import { DevelopersNames } from '../variables/constants'
import { TeamGithub } from '../variables/constants'

export interface IPropsCard {
  name: DevelopersNames
  teamAvatar: string
  text: string
  githubLink: TeamGithub
}
