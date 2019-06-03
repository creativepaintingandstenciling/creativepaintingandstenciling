import React, { Component } from 'react';
import canUseDOM from 'can-use-dom';
import FB from './Facebook';
import FacebookContext from './FacebookContext';

let api = null;

// https://github.com/seeden/react-facebook/blob/master/README.md

export default class Facebook extends Component {
  static defaultProps = {
    version: 'v3.3',
    cookie: false,
    status: false,
    xfbml: false,
    language: 'en_US',
    frictionlessRequests: false,
    domain: 'connect.facebook.net',
    children: undefined,
    wait: false,
    debug: false,
  };

  state = {
    isReady: false,
  };

  componentDidMount() {
    this.handleInit();
  }

  handleInit = async () => {
    // do not run if SSR
    if (!canUseDOM) {
      throw new Error('You can not use Facebook without DOM');
    }

    const { isReady } = this.state;
    if (isReady) {
      return api;
    }

    if (!api) {
      const { domain, version, appId, cookie, status, xfbml, language, frictionlessRequests, wait, debug } = this.props;

      api = new FB({
        domain,
        appId,
        version,
        cookie,
        status,
        xfbml,
        language,
        frictionlessRequests,
        wait,
        debug,
      });
    }

    await api.init();

    if (!this.state.isReady) {
      this.setState({
        isReady: true,
      });
    }

    return api;
  };

  render() {
    const { children } = this.props;
    const { isReady, error } = this.state;
    const { handleInit } = this;

    const value = {
      isReady,
      error,
      handleInit,
      api,
    };

    return <FacebookContext.Provider value={value}>{children}</FacebookContext.Provider>;
  }
}
