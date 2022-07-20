export type Id = {
  id: string;
};
export type User = {
  name: string;
  mail: string;
  town: string;
  surename: string;
  job: string;
  age: string;
};
export type Post = {
  author: string;
  title: string;
  content: string;
  mail: string;
};
export type Comment = {
  author: string;
  title: string;
  content: string;
  mail: string;
  target: string;
};
