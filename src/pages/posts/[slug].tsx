import { GetServerSideProps } from "next";
import { getSession } from "next-auth/client";
import { RichText } from "prismic-dom";
import Head from "next/head";
import getPrismicClient from "../../services/prismic";

import styles from "./post.module.scss";
interface PostProps {
  post: {
    slug: string;
    title: string;
    content: string;
    updatedAt: string;
  };
}

export default function Post({ post }: PostProps) {
  return (
    <>
      <Head>
        <title>{post.title} | ignews</title>
      </Head>
      <article className={styles.post}>
        <main className={styles.container}>
          <h1>{post.title}</h1>
          <time>{post.updatedAt}</time>
          <div
            className={styles.postContent}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </main>
      </article>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({
  req,
  params,
}) => {
  const session = await getSession({ req });
  console.log(session);
  const { slug } = params;

  if (!session?.activeSubscription) {
    console.log("session?");
    console.log(session?.activeSubscription);
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  const prismic = getPrismicClient(req);

  const response = await prismic.getByUID("post", String(slug), {});

  const post = {
    slug,
    title: RichText.asText(response.data.title),
    content: RichText.asHtml(response.data.content),
    updatedAt: new Date(response.last_publication_date).toLocaleDateString(
      "pt-BR",
      {
        day: "2-digit",
        month: "long",
        year: "numeric",
      }
    ),
  };

  return {
    props: {
      post,
    },
  };
};
