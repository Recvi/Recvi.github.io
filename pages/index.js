'use strict'

import Head from 'next/head'
import loadData from '../utils/loadData'
import Post from '../components/post'

export async function getStaticProps() {
    return {
        props: {
            data: loadData()
        }
    }
}

export default function IndexPage({ data }) {
  return (
    <main>
      <Head>
        <title>Home page</title>
      </Head>

      <h1>Hello my name is {data.personalInfo.name}</h1>

      <section>
          {
              data.projects.map(project =>  
                (<Post title={project.name} key={project.name} />))
          } 
      </section>
    </main>
  )
}
