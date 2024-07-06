import Head from "next/head"
import Footer from "../components/Footer"
import { getPostByUri } from "../lib/test-data"
import { client } from "../lib/apollo"
import { gql } from "@apollo/client"

export default function SlugPage({ post }) {
  return (
    <div>
      <Head>
        <title>Wordpress Graphql Demo</title>
        <link rel="icon" href="favicon.ico"></link>
      </Head>

      <main>
        <div className="siteHeader">
          <h1 className="title">{post.title}</h1>
          <p>
            🗓️
            &nbsp;&nbsp;{new Date(post.date).toLocaleDateString()}
          </p>
        </div>
        <article dangerouslySetInnerHTML={{ __html: post.content }}></article>
      </main>

      <Footer></Footer>
    </div>
  )
}

export async function getStaticProps({ params }) {
  const GET_POSTS_BY_URI = gql`
    query GetPostByURI($id: ID!) {
      post(id: $id, idType: URI) {
        id
        title
        date
        content
        uri
        author {
          node {
            firstName
            lastName
          }
        }
      }
    }
  `
  const response = await client.query({
    query: GET_POSTS_BY_URI,
    variables: {
      id: params.uri,
    },
  })
  const post = response?.data?.post
  return {
    props: {
      post,
    },
  }
}

export async function getStaticPaths() {
  const paths = []
  return {
    paths,
    fallback: "blocking",
  }
}
