import React, { FC } from "react";
import { PageProps } from "gatsby";

import {
  GoBackTo,
  Icon,
  SEO,
  useConvertkitEmailSubscription,
  useTheme,
  icons,
} from "@kowalevski/gatsby-midnight-theme";

import "../styles/subscribe-page.css";

interface PageContextValue {
  convertkitEndpoint: string;
}

const NewsletterPage: FC<PageProps<{}, PageContextValue>> = ({
  pageContext: { convertkitEndpoint },
}) => {
  const { theme } = useTheme();
  const {
    handleSubmit,
    handleChangeEmail,
    email,
    isInitialStatus,
    isErrorStatus,
    isSuccessStatus,
  } = useConvertkitEmailSubscription({ endpoint: convertkitEndpoint });

  return (
    <>
      <SEO theme={theme} title="Join the Mailing List!" isBodyDarker />
      <GoBackTo
        type="link"
        to="/"
        theme={theme}
        style={{
          position: "fixed",
          top: "10px",
          left: "10px",
        }}
      >
        Home Page
      </GoBackTo>
      <div className="subscribe-page">
        <h1 className="subscribe-page__title">
          Join the Mailing List
          <img
            style={{ width: "55px", marginLeft: "20px" }}
            src={icons.emojiLoveLetter}
            alt="emoji love letter"
          />
        </h1>
        <div
          style={{
            width: "800px",
            margin: "0 auto 20px auto",
            textAlign: "center",
          }}
        >
          <p>
            I write a blog about topics that interest me most: programming in
            general, Back End and Front End, TypeScript, Node.js, testing,
            algorithms and data structures, writing and other great stuff.
          </p>
          <p>Subscribe to my email newsletter to stay up to date.</p>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <form className="subscribe-page__form" onSubmit={handleSubmit}>
            <input
              type="email"
              name="email_address"
              placeholder="Email address"
              className="subscribe-page__input"
              onChange={handleChangeEmail}
              value={email}
            />
            <button className="subscribe-page__button">Subscribe!</button>
          </form>
        </div>
        {!isInitialStatus && (
          <div style={{ margin: "0 auto", fontSize: "20px" }}>
            {isSuccessStatus && (
              <div>
                <Icon
                  src={icons.emojiSparkles}
                  widthSize="20px"
                  indentRight="10px"
                />
                <span>Please go confirm your subscription!</span>
              </div>
            )}
            {isErrorStatus && (
              <>
                <div>
                  <Icon
                    src={icons.emojiPoliceCarLight}
                    widthSize="20px"
                    indentRight="10px"
                  />
                  <span>Oops, Something went wrong! Try again.</span>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default NewsletterPage;
