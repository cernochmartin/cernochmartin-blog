// import GithubProvider from 'next-auth/providers/github'
// import { NuxtAuthHandler } from '#auth'

// export default NuxtAuthHandler({
//   // A secret string you define, to ensure correct encryption
//   secret: 'your-secret-here',
//   providers: [
//     // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
//     GithubProvider.default({
//       clientId: 'your-client-id',
//       clientSecret: 'your-client-secret'
//     })
//   ]
// })