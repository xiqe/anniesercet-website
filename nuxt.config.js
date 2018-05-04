module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Annie\'s Secret 日式小颜轻奢整骨院',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0' },
      { hid: 'keywords', name: 'keywords', content: '日式小颜，产后修复，身体塑形，疼痛管理，婚期美丽定制，源于日本，小顔サロン，日式专业手法' },
      { hid: 'description', name: 'description', content: '安妮的秘密。一个纯手工打造自然元气美少女的秘密基地。技术源自日本，创始人于2014将技术引入中国，多年稳定运行，已成功服务上万名爱美少人士，其中不乏艺人明星网红模特，专注效果和口碑的逆龄小颜调整院。' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  generate: {
    routes: [
      '/news/20180417',
      '/news/20180418',
      '/news/20180419'
    ],
    minify: {
      minifyCSS: true,
      minifyJS: true
    }
  },
  /*
  ** Build configuration
  */
  build: {
    loaders: [
      {
        test: /\.(png|jpe?g|gif)(\?.*)?$/,
        loader: 'url?limit=100000&name=images/[name]_[hash:4].[ext]'
      }, {
        test: /\.(woff|eot|ttf|otf|svg)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: 'images/fonts/[name].[hash:4].[ext]'
        }
      }
    ],
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {

      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      };

      if (isDev){
        config.devtool = 'eval-source-map'
      }
    }
  }
}
