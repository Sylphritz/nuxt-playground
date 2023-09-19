export default defineEventHandler(({ context }) => {
  console.log('context')
  console.log(process.env.DEV_DB)

  return 'Hello users'
})
