
import ApolloClient, { createNetworkInterface } from 'apollo-client'

const client = new ApolloClient({
  networkInterface: createNetworkInterface({ uri: 'https://api.graph.cool/simple/v1/cit2jb5h816od0164ayaoz011' }),
})

export default client