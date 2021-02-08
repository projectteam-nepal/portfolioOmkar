import React from 'react';
import GitHubButton from 'react-github-btn';

const GithubButton = () => (
  <>
    <GitHubButton
      className="github-button"
      href="https://github.com/projectteam-nepal/portfolioOmkar/fork"
      data-icon="octicon-repo-forked"
      data-size="large"
      data-show-count="true"
      aria-label="Fork this template on GitHub"
    >
      Fork
    </GitHubButton>
    <GitHubButton
      className="github-button"
      href="https://github.com/projectteam-nepal/portfolioOmkar"
      data-icon="octicon-star"
      data-size="large"
      data-show-count="true"
      aria-label="Star this template on GitHub"
    >
      Star
    </GitHubButton>
  </>
);

export default GithubButton;
