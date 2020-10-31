# An online store to help local stores during the lockdown 
using Next.js, Markdown, and TypeScript

The storefronts are stored in `/_stores` as Markdown files with front matter support. Adding a new Markdown file in there will create a new store.

To create the stores we use [`remark`](https://github.com/remarkjs/remark) and [`remark-html`](https://github.com/remarkjs/remark-html) to convert the Markdown files into an HTML string, and then send it down as a prop to the page. The metadata of every store is handled by [`gray-matter`](https://github.com/jonschlinkert/gray-matter) and also sent in props to the page.

## Deploy your own

Deploy the example using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-example):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/git?c=1&s=https://github.com/Sam-Apostel/bunkerstore)
