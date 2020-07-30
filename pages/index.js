'use strict'

import Head from 'next/head'
import {loadLocalizedData} from '../utils/loadData'
import Post from '../components/post'

export async function getStaticProps() {
    return {
        props: {
            data: loadLocalizedData('el_GR')
        }
    }
}

export default function IndexPage({ data }) {
  return (
    <main>
      <Head>
        <title>Home page</title>
      </Head>

      <h1>Hello my name is {data['personal-info'].name}</h1>

      <section>
          {
              data.projects.map(project =>  
                (<Post title={project.name} key={project.name} />))
          } 
      </section>
    </main>
  )
}
