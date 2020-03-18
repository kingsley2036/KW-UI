module.exports = {
    title: 'KW-UI',
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
                    '/components/input.md',
                    '/components/collapse.md',
                    '/components/grid.md',
                    '/components/layout.md',
                    '/components/popover.md',
                ]
            }
        ]
    }
};