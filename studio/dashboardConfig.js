export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5cd446814c16dd9d9503870b',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-9tito2t1',
                  apiId: 'd1c8e9e9-4c66-4c3c-94ad-2e8de117568a'
                },
                {
                  buildHookId: '5cd446814c16dd461003875d',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-f8k3i8zi',
                  apiId: 'bf293b76-7e99-46b8-a10c-ffbd16dc900e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/JohannLesacher/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-f8k3i8zi.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
