export default defineEventHandler((event) => {
  const config = useRuntimeConfig()
  console.log('context')
  // console.log(process.env)

  return event.context
})
