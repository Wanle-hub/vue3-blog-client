/**
 * api统一出口
 */
//文章模块接口
import article from "./article";
//文章目录模块接口
import category from "./category";
//系统配置模块接口
import setting from "./setting";

//导出接口
export default {
    article,
    category,
    setting,
}