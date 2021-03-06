module.exports = {
    title: 'kw-ui',
    base:'/KW-UI/',
    description: 'Just playing around',
    themeConfig: {
        sidebar: [{
            title: '入门',
            children: [
                '/install/',
            '/install/quickStart.md']
        },
            {
                title: '组件',
                children: [ '/components/button.md',
                    '/components/tabs.md',
                    '/components/toast.md',
                    '/components/popover.md',
                    '/components/input.md',
                    '/components/collapse.md',
                    '/components/grid.md',
                    '/components/layout.md',
                ]
            }
        ]
    }
};