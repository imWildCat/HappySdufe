'use strict';

const categoryNames = ['综合新闻', '新闻头条', '新闻聚焦', '院系动态', '媒体财大', '讲座报告', '通知公告',
  '讲座预告', '校园传真', '影像财大', '领导讲话', '财大论坛', '人物风采', '视频财大'];

export default categoryNames;

export function getCategoryNameByID(id) {
  if (id < 0 || id > categoryNames.length) {
    return null;
  }
  return categoryNames[id - 1];
}

export function getCategoryTabList() {
  return [
    {name: '通知公告', id: 6},
    {name: '综合新闻', id: 0},
    {name: '新闻聚焦', id: 2},
    {name: '院系动态', id: 3},
    {name: '讲座预告', id: 7},
    {name: '讲座报告', id: 5},
    {name: '新闻头条', id: 1},
    {name: '媒体财大', id: 4},
    {name: '校园传真', id: 8},
    {name: '影像财大', id: 9},
    {name: '领导讲话', id: 10},
    {name: '财大论坛', id: 11},
    {name: '人物风采', id: 12},
    {name: '视频财大', id: 13},
  ]
}