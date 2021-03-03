import React, { FC } from "react";

import { useTheme, useConvertkitEmailSubscription } from "../core";
import { icons } from "../icons";

import { StyleModules } from "../style-modules";
import { Icon } from "./Icon";

const styles = StyleModules.subscribingBlock;

interface SubscribingBlockProps {
  convertkitEndpoint: string;
}

export const SubscribingBlock: FC<SubscribingBlockProps> = ({
  convertkitEndpoint,
}) => {
  const { theme } = useTheme();
  const {
    handleSubmit,
    handleChangeEmail,
    handleTryAgain,
    email,
    isInitialStatus,
    isErrorStatus,
    isSuccessStatus,
  } = useConvertkitEmailSubscription({ endpoint: convertkitEndpoint });

  return (
    <div className={styles[theme]}>
      <h3>
        Join the Mailing List{" "}
        <Icon src={icons.emojiEnvelope} widthSize="25px" />
      </h3>
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
      {isInitialStatus ? (
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            className={styles.emailField}
            type="email"
            name="email_address"
            placeholder="Email address"
            onChange={handleChangeEmail}
            value={email}
          />
          <button className={styles.subscribeBtn}>Subscribe</button>
        </form>
      ) : (
        <div className={styles.result}>
          {isSuccessStatus && (
            <div className={styles.resultSuccess}>
              <Icon src={icons.emojiSparkles} widthSize="20px" />
              <span>Please go confirm your subscription!</span>
            </div>
          )}
          {isErrorStatus && (
            <>
              <div className={styles.resultError}>
                <Icon src={icons.emojiPoliceCarLight} widthSize="20px" />
                <span>Oops, Something went wrong! try again.</span>
              </div>
              <button className={styles.subscribeBtn} onClick={handleTryAgain}>
                <span>Try again </span>
                <Icon
                  src={icons.emojiCounterclockwiseArrows}
                  widthSize="20px"
                />
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
};
