module.exports = {
    title: 'KW-UI',
    base:'/KW-UI/',
    description: 'Just playing around',
    themeConfig: {

        sidebar: [{
            title: '入门',
            children: ['/',
                '/install/',]
        },
            {
                title: '组件',
                children: [ '/components/button.md']
            }
        ]
    }
};