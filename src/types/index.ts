export interface Item {
  API: string,
  Auth: string,
  Category: string,
  Cors: string,
  Description: string,
  HTTPS: boolean
  Link: string
}

export type Entries = {
  entries: Item[];
};
