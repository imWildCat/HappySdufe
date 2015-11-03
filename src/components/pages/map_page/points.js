'use strict';

const points = [

  // 舜耕校区
  {title: '六号教学楼', longitude: 117.022597, latitude: 36.625092},
  {title: '校医院', longitude: 117.022798, latitude: 36.626975},
  {title: '北门', longitude: 117.022155, latitude: 36.627214},
  {title: '实验楼', longitude: 117.02129, latitude: 36.62662},
  {title: '六号楼', longitude: 117.022597, latitude: 36.625092},
  {title: '一号楼', longitude: 117.022789, latitude: 36.625585},
  {title: '二号楼', longitude: 117.022969, latitude: 36.626077},
  {title: '三号楼', longitude: 117.023112, latitude: 36.626511},
  {title: '四号楼', longitude: 117.020516, latitude: 36.625092},
  {title: '西门', longitude: 117.020063, latitude: 36.625027},
  {
    title: '小西门',
    longitude: 117.020759,
    latitude: 36.625961000000004
  },
  {title: '干训楼', longitude: 117.020194, latitude: 36.623412},
  {title: '游泳馆', longitude: 117.020786, latitude: 36.622746},
  {title: '五号楼', longitude: 117.021712, latitude: 36.624629},
  {title: '五号楼', longitude: 117.021712, latitude: 36.624629},
  {title: '体育场', longitude: 117.024648, latitude: 36.626229},
  {title: '12号楼', longitude: 117.025944, latitude: 36.62591},
  {title: '21号楼', longitude: 117.02592, latitude: 36.625751},
  {title: '国际交流中心', longitude: 117.018777, latitude: 36.621276},

  // 燕山校区
  //以下是教学楼
  {title: '一号教学楼', longitude: 117.070399, latitude: 36.643611},
  {title: '二号教学楼', longitude: 117.070389, latitude: 36.643271},
  {title: '三号教学楼', longitude: 117.070997, latitude: 36.643278},
  {title: '四号教学楼', longitude: 117.071255, latitude: 36.644574},
  {title: '逸夫楼', longitude: 117.074734, latitude: 36.643358},
  {title: '图书馆', longitude: 177.075318, latitude: 36.643372},
  {title: '山东财经大学燕山校区幼儿园', longitude: 117.071763, latitude: 36.645319},
  {title: '山东财经大学老教育工作者协会', longitude: 177.070972, latitude: 36.645308},

  //以下是宿舍楼
  {title: '一号宿舍楼', longitude: 117.073186, latitude: 36.643241},
  {title: '二号宿舍楼', longitude: 117.073155, latitude: 36.643332},
  {title: '三号宿舍楼', longitude: 117.073447, latitude: 36.64356},
  {title: '四号宿舍楼', longitude: 117.072513, latitude: 36.643068},
  {title: '五号宿舍楼', longitude: 117.072499, latitude: 36.643571},

  //{title:'六号宿舍楼',longitude:note:''},
  //{title:'七号宿舍楼',longitude:note:''},

  {title: '八号宿舍楼', longitude: 117.076802, latitude: 36.643629},
  {title: '九号宿舍楼', longitude: 117.076793, latitude: 36.643487},

  //{title:'十号宿舍楼',longitude:note:''},
  //{title:'十一号宿舍楼',longitude:note:''},

  //以下是食堂
  {title: '西苑食堂', longitude: 117.072521, latitude: 36.643379},
  {title: '东苑餐厅', longitude: 117.075679, latitude: 36.644566},
  {title: '南苑食堂', longitude: 117.07121, latitude: 36.645565},

  //以下是娱乐场所
  {title: '运动场', longitude: 117.074411, latitude: 36.644654},
  {title: '财大书店', longitude: 117.075004, latitude: 36.64389},
  {title: '韵达快递', longitude: 117.074671, latitude: 36.643351},
  {title: '申通快递', longitude: 117.0742, latitude: 36.644154},
  {title: '乒乓球培训中心', longitude: 117.074267, latitude: 36.644165},
  {title: '台球室', longitude: 117.07415, latitude: 36.644176},
  {title: '中国联通营业厅', longitude: 117.074747, latitude: 36.643875},
  {title: '中国移动营业厅', longitude: 117.074788, latitude: 36.644107},
  {title: '建行、招商银行RTM机', longitude: 117.074891, latitude: 36.643868},
  {title: '打印社', longitude: 117.076046, latitude: 36.643358},
  {title: '茶巷工', longitude: 117.075938, latitude: 36.643387},

  // 圣井校区
  //以下是教学楼
  {title: '明德楼', longitude: 117.37183, latitude: 36.671996},
  {title: '闻道楼', longitude: 117.371785, latitude: 36.670606},
  {title: '逸夫楼', longitude: 117.375158, latitude: 36.670093},
  {title: '弘毅楼', longitude: 117.37532, latitude: 36.671468},
  {title: '敏行楼', longitude: 117.37505, latitude: 36.667444},
  //以下是宿舍楼
  {title: '四号学生公寓', longitude: 117.372872, latitude: 36.667987},
  {title: '五号学生公寓', longitude: 117.372746, latitude: 36.666865},
  {title: '一号学生公寓', longitude: 117.37668, latitude: 36.672278},
  {title: '二号学生公寓', longitude: 117.376016, latitude: 36.67141},
  {title: '三号学生公寓', longitude: 117.376761, latitude: 36.670498},
  //以下为服务机构
  {title: '第一食堂', longitude: 117.376546, latitude: 36.669823},
  {title: '第二食堂', longitude: 117.375297, latitude: 36.666619},
  {title: '大学生乐购超市', longitude: 117.372174, latitude: 36.667965},
  {title: '学苑超市', longitude: 117.376438, latitude: 36.670024},
  {title: '学生浴室', longitude: 117.376546, latitude: 36.670194},
  {title: '东门商业街', longitude: 117.377291, latitude: 36.667477},

  // 明水校区
  {title: '明德楼', longitude: 117.37183, latitude: 36.671996},
];

export default points;