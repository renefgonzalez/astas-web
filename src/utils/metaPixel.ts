declare global {
  interface Window {
    fbq: any;
  }
}

export const trackMetaEvent = (eventName: string, customData?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', eventName, customData);
  }
};

export const trackPageView = () => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'PageView');
  }
};
