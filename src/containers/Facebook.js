export const Method = {
  GET: 'get',
  POST: 'post',
  DELETE: 'delete',
};

export default class Facebook {
  constructor(options = {}) {
    this.options = {
      domain: 'connect.facebook.net',
      version: 'v3.2',
      cookie: false,
      status: false,
      xfbml: false,
      language: 'en_US',
      frictionlessRequests: false,
      debug: false,
      ...options,
    };

    if (!this.options.appId) {
      throw new Error('You need to set appId');
    }

    this.init();
  }

  getAppId() {
    return this.options.appId;
  }

  async init() {
    if (this.loadingPromise) {
      return this.loadingPromise;
    }

    this.loadingPromise = new Promise(resolve => {
      const { domain, language, debug, ...restOptions } = this.options;

      window.fbAsyncInit = () => {
        window.FB.init({
          appId: restOptions.appId,
          version: restOptions.version,
          cookie: restOptions.cookie,
          status: restOptions.status,
          xfbml: restOptions.xfbml,
          frictionlessRequests: this.frictionlessRequests,
        });

        resolve(window.FB);
      };

      if (window.document.getElementById('facebook-jssdk')) {
        return;
      }

      const js = window.document.createElement('script');
      js.id = 'facebook-jssdk';
      js.async = true;
      js.defer = true;
      js.src = `https://${domain}/${language}/sdk${debug ? '/debug' : ''}.js`;

      window.document.body.appendChild(js);
    });

    return this.loadingPromise;
  }
}
