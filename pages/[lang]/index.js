'use strict'

import Head from 'next/head'
import {loadLocalizedData} from '../../utils/loadData'
import Post from '../../components/post'

export async function getStaticProps(context) {
    return {
        props: loadLocalizedData(context.params.lang)
    }
}

export async function getStaticPaths() {
    return {
        paths: [
            { params: {lang: 'en_GB'} },
            { params: {lang: 'el_GR'} }
        ],
        fallback: false
    };
}

export default function IndexPage({ personal_info, languages, projects }) {
  return (
    <main>
      <Head>
        <title>Home page</title>
      </Head>

      <h1>Hello my name is {personal_info.name}</h1>

      <section>
          {
            projects.map(project =>  
                (<Post title={project.name} key={project.name} />))
          } 
      </section>
    </main>
  )
}
