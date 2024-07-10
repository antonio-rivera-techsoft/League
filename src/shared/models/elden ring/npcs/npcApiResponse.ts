import { Npc } from './npc'
export interface NpcApiResponse {
  success: boolean
  count: number
  total: number
  data: Npc[]
}
