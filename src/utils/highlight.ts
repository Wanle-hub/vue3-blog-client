// 代码高亮插件
import hljs from 'highlight.js'
import 'highlight.js/styles/monokai-sublime.css'
const highlight = (Vue: any) => {
    Vue.directive('highlight', function (el: any) {
        const elements = el.querySelectorAll('pre code');
        elements.forEach((e: any) => {
            hljs.highlightElement(e)
        })
    })

}
export default highlight
