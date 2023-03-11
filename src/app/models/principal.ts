export interface Principal {
  authenticated: boolean;
  authorities: Authority[];
  name: string;
}

export interface Authority {
  authority: string;
}
