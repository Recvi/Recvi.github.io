import Head from 'next/head'
import { loadJSONData } from '../utils'

export async function getStaticProps() {
    return {
        props: {
            data: loadJSONData()
        }
    }
}

export default function IndexPage({ data }) {
  return (
    <main>
      <Head>
        <title>Home page</title>
      </Head>

      <h1>Hello my name is {JSON.stringify(data)}</h1>

      <section> 
      </section>
    </main>
  )
}
