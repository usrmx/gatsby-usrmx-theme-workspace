import React, { FC, useState } from "react";
import { graphql, useStaticQuery } from "gatsby";
import addToMailchimp from "gatsby-plugin-mailchimp";

import { useTheme } from "../core";

import styles from "../../styles/subscribing-block.module.css";

export interface SiteQueryData {
  site: {
    siteMetadata: {
      substackLink: string | null;
    };
  };
}

interface AddToMailchimpResult {
  msg: string;
  result: string;
}

export const SubscribingBlock: FC = () => {
  const { theme } = useTheme();
  const { site } = useStaticQuery<SiteQueryData>(query);
  const [email, setEmail] = useState("");
  const [result, setResult] = useState<AddToMailchimpResult | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const result: AddToMailchimpResult = await addToMailchimp(email);
    setResult(result);
  };

  return (
    <div className={styles[theme]}>
      <h3>Join the Mailing List 💌</h3>
      <p>
        Be the first to know when I write new post. I also share my private
        materials with memebers of <strong>the Mailing List</strong>.
      </p>
      <p>
        I write about{" "}
        <strong>
          software development, TypeScript, testing, architecture and other
          stuff.
        </strong>
      </p>
      <p>
        Only interesting articles and useful materials.{" "}
        <strong>
          <i>No spam</i>
        </strong>
        .
      </p>
      {result ? (
        <p className={styles.result}>
          {result.result === "success" ? <span>👍</span> : <span>🛑</span>}
          {result.msg && <span> {result.msg}</span>}
        </p>
      ) : (
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            className={styles.emailField}
            type="email"
            name="email"
            placeholder="Email address"
            onChange={handleChange}
          />
          <button className={styles.subscribeBtn}>Subscribe</button>
        </form>
      )}
      {site.siteMetadata.substackLink && (
        <div>
          or{" "}
          <a href={site.siteMetadata.substackLink}>
            subscribe via <strong>Substack</strong>
          </a>
        </div>
      )}
    </div>
  );
};

const query = graphql`
  query SubscribingBlock {
    site {
      siteMetadata {
        substackLink
      }
    }
  }
`;
