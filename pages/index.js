import Head from 'next/head'
import fs from 'fs'
import path from 'path'

export async function getStaticProps() {
    try {
        const filenames = await fs.promises.readdir(path.join(process.cwd(), 'data'));
        console.log('DEBUG', filenames);
        // const data = filenames.map((filename) => {
        //     const filePath = path.join(postsDirectory, filename);
        //     const fileContents = fs.readFileSync(filePath, 'utf8');

        //     return {
        //         filename,
        //         content: fileContents,
        //     };
        // });
        return {
            props: {
                data: {}
            }
        }
    } catch (err) {
        console.error('Error occured while reading directory:', err); 
    }
  
}

export default function IndexPage({ data }) {
  return (
    <main>
      <Head>
        <title>Home page</title>
      </Head>

      <h1>Hello my name is Test</h1>

      <section> 
      </section>
    </main>
  )
}
