export default {
  name: 'blog',
  type: 'document',
  title: 'Blog',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title of the blog article',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug of the blog article',
      options: {source: 'title'},
    },
    {
      name: 'titleImage',
      type: 'image',
      title: 'Title Image of the blog article',
    },
    {
      name: 'smallDescription',
      type: 'text',
      title: 'Small Description of the blog article',
    },
    {
      name: 'content',
      type: 'array',
      title: 'Content of the blog article',
      of: [
        {
          type: 'block',
        },
      ],
    },
  ],
}
