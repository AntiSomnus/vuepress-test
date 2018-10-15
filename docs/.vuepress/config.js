module.exports = {
    // meta
    title: 'test',
    // config
    head: [
        ['link', {rel: 'icon', href: '/favicon.ico'}]
    ],
    // vuepress config
    serviceWorker: true,
    evergreen: true,
    themeConfig: {
        nav: [
            {
                text: 'Blog',
                link: '/blog/',
            },

        ]
    },
    plugins: [
        ['@vuepress/pagination', {
            postsFilter: item => (item.path.length > 6 && item.path.slice(0, 6) === '/blog/' && item.path.slice(0, 10) !== '/blog/page'),
            perPagePosts: 1,
            paginationDir: 'blog/page',
            firstPagePath: '/blog/',
        }]]

};
