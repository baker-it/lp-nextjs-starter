// sanity.cli.ts
import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: { projectId: 'nfon9ew1', dataset: 'production' },
  studioHost: 'airtouch-lp-studio', // ← przypięty host, żeby CI nie pytało
})
