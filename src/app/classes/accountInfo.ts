export class AccountInfo{
      account_id: string;
      account_number: string;
      site_id: string;
      name: string;
      sitekey: string;
      type: string;
      synctype: string;
      urls: [];
      filter_organizations_contains: [];
      filter_organizations_startswith: [];
      filter_ips: [];
      filter_uids: [];
      goals: [];
      client_script: string;
      pre_trackingscript: string;
      is_engage: boolean;
      has_consent: boolean;
      paused: boolean;
      expired: boolean;
      expireDate: string;
      scheduledRemoval: number;
      hasPopularityAnalytics: boolean;
      hasScraping: boolean;
      apiKeys: [];
    }