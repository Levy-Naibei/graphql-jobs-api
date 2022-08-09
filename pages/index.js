import Head from 'next/head'
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import Jobs from '../components/jobs';
import { Box, Heading } from '@chakra-ui/react';
import { SiGithub } from 'react-icons/si'
import styles from '../styles/Home.module.scss'

export default function Home({ jobs }) {
  return (
    <div className={styles.app}>
      <Head>
        <title>GrahQl Jobs API</title>
        <meta name="description" content="developed by levy naibei" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box
        mb={4}
        py={4}>
        <Heading
          as='h1'
          size='xl'
          mb={4}
          align='center'>
          Jobs Board</Heading>
        <Jobs jobs={jobs} />
      </Box>

      <footer className={styles.footer}>
        <a
          href="https://github.com/Levy-Naibei"
          target="_blank"
          rel="noopener noreferrer"
        >
          Web app crafted by{' '}
          <span className={styles.logo}>
            <SiGithub alt="github logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

// gets called on every request
export const getServerSideProps = async () => {
  const client = new ApolloClient({
    uri: 'https://api.graphql.jobs/',
    cache: new InMemoryCache()
  })
  const FETCH_JOBS = gql`
    query {
      jobs {
        id
        title
        company {
          id
          name
        }
        tags {
          id
          name
        }
        cities {
          id
          name
        }
        remotes {
          id
          name
        }
        applyUrl
        userEmail
      }
    }
    `
  // fetch data from graphQl jobs API
  const { data: { jobs } } = await client.query({
    query:  FETCH_JOBS
  })
  return { props: { jobs: jobs } };
}
