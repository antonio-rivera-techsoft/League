import { Boss } from "./boss"

export interface BossApiResponse {
  success: boolean
  count: number
  total: number
  data: Boss[]
}
