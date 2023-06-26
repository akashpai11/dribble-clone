import { g, auth, config } from '@grafbase/sdk'

// Users table
// npx grafbase init --config-format typescript
const User = g.model('User', {
  name: g.string().length({ min: 3, max: 40 }),
  email: g.string().unique(),
  avatarUrl: g.url(),
  description: g.string().optional(),
  githubUrl: g.url().optional(),
  linkedinUrl: g.url().optional(),
  projects:g.relation(()=>Project).list().optional()
})

// Projects table
const Project = g.model('Project', {
  title: g.string().length({ min: 3 }),
  description: g.string().optional(),
  image: g.url(),
  livesiteUrl: g.url(),
  githubUrl: g.url(),
  category: g.string().search(),
  createdBy:g.relation(()=>User)

  
})


export default config({
  schema: g
})
