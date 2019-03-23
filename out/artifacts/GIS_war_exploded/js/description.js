﻿var DemoDescription = {};
//地图
DemoDescription['image'] = {title: '本地影像', desc: '将本地图片作为地球球面的影像，适合在局域网或特定情况下使用， 实现同步放大、缩小、平移等效果。', oper: '无' };
DemoDescription['tianditu'] = {title: '天地图服务', desc: '点击下拉框选择加载天地图的影像、地图及中文注记服务', oper: '需要连接Internet。' };
DemoDescription['bingMap'] = {title: 'BingMap影像', desc: '加载BIngMap影像服务', oper: '需要连接Internet。' };
//DemoDescription['openstreetMap'] = {title: 'OpenStreetMap影像', desc: '加载OpenStreetMap影像服务。', oper: '需要连接Internet。' };
DemoDescription['STKterrain'] = {title: 'STK地形及分层设色', desc: '加载STK全球地形服务，点击下拉框选择分层设色渲染模式', oper: '需要连接Internet。' };
DemoDescription['terrainAndImagery'] = {title: '地形影像图层', desc: '加载珠峰地区的TIN地形rest服务和SCI影像rest服务,有效区域表示仅显示有TIN地形的有效区域，不显示区域外的地球', oper: '该数据源来源于SuperMap Online，需要连接Internet' };
DemoDescription['S3MTiles_jinjiang'] = {title: '倾斜摄影模型', desc: '加载S3M格式的倾斜摄影模型', oper: '该数据源来源于SuperMap Online，需要连接Internet' };
DemoDescription['S3MTiles_srsb_water'] = {title: '萨尔茨堡', desc: '加载S3M格式的倾斜摄影模型（萨尔茨堡数据），并带有水面特效', oper: '该数据源来源于SuperMap Online，需要连接Internet' };
DemoDescription['S3MTiles_niaochao_water'] = {title: '鸟巢', desc: '加载S3M格式的精细模型（鸟巢数据），并带有水面特效', oper: '该数据源来源于SuperMap Online，需要连接Internet' };
DemoDescription['S3MTiles_jingmo'] = {title: 'CBD精细模型', desc: '加载S3M格式的精细模型CBD', oper: '该数据源来源于SuperMap Online,需要连接Internet。' };
DemoDescription['S3MTiles_BIM'] = {title: 'BIM模型', desc: '加载S3M格式的BIM模型,点击图层管理按钮， 可以管理图层及子图层的隐藏显示，选中某一子图层，该子图层半透明显示。', oper: '该数据源来源于SuperMap Online，需要连接Internet' };
DemoDescription['S3MTiles_vector'] = {title: '矢量模型', desc: '加载S3M格式的矢量模型（全国省份数据）', oper: '该数据源来源于SuperMap Online，需要连接Internet' };
DemoDescription['S3MTiles_pointCloud'] = {title: '点云', desc: '加载点云数据', oper: '该数据源来源于SuperMap Online，需要连接Internet' };
DemoDescription['S3M_Volume'] = {title: '体渲染', desc: '体渲染', oper: '该数据源来源于SuperMap Online，需要连接Internet' };
DemoDescription['KML_edit'] = {title: '模型编辑', desc: '以KML形式添加模型，并支持模型编辑，包括旋转、平移、缩放', oper: '该数据源来源于SuperMap Online，需要连接Internet' };
DemoDescription['KML_crane'] = {title: '动画模型', desc: '以KML形式添加GLTF模型，并支持模型动画', oper: '该数据源来源于SuperMap Online，需要连接Internet' };
DemoDescription['KML_car'] = {title: '节点动画', desc: '以KML形式添加GLTF模型，并支持节点动画（小车移动）', oper: '该数据源来源于SuperMap Online，需要连接Internet' };
DemoDescription['KML_beijing'] = {title: '路线标注', desc: '以KML形式添加贴地的路线标注', oper: '无' };
DemoDescription['Polygon'] = {title: '矢量面', desc: '以KML形式或者自定义形式创建贴地、贴对象的矢量面', oper: '该数据源来源于SuperMap Online，需要连接Internet' };
DemoDescription['KML_route'] = {title: '四姑娘山登山路线', desc: '加载四姑娘山S3M图层和KML的登山路线', oper: '该数据源来源于SuperMap Online，需要连接Internet' };
DemoDescription['location'] = {title: 'online定位', desc: '定义：SuperMap Online POI 检索定位', oper: '在搜索框输入地名,需要连接Internet。请开发者自行到supermap online官网（http://www.supermapol.com/）申请key!'};
DemoDescription['measureHandler'] = {title: '量算', desc: '量测空间距离、水平距离、垂直高度及面积', oper: '鼠标点击相应图标，激活绘制线面handler开始绘制，鼠标双击结束绘制并测量。量算面积采用的第三方库turf.js' };
DemoDescription['flyRoute'] = {title: '沿线飞行', desc: '该示范程序展示了沿着鸟巢公园的公路飞行', oper: '点击play按钮开始飞行，飞行过程中点击pause按钮可暂停，点击stop可停止当次飞行' };
DemoDescription['clipbox'] = {title: 'BOX裁剪', desc: '点击图标，单击鼠标左键在模型上创建一个BOX，选择对应裁剪模式、设置BOX参数，查看裁剪结果', oper: '无' };
DemoDescription['terrainSlopeAnalysis'] = {title: '坡度坡向分析', desc: '地形数据坡度坡向分析', oper: '左键移动绘制区域进行分析，右键结束，左侧参数设置联动计算' };
DemoDescription['S3MTiles'] = {title: '倾斜摄影属性查询', desc: '点击图层上的建筑物,以气泡方式显示对象属性,气泡中可包含文字、图片、音频、视频。', oper: '该数据源来源于SuperMap Online，需要连接Internet' };
//DemoDescription['draw'] = {title: '绘制点线面', desc: '点击对应图标分别绘制点线面,鼠标双击结束绘制', oper: '无' };
DemoDescription['polarizedStereoscopic'] = {title: '偏振立体', desc: '需要设置显示器为3D模式,并佩戴3D眼镜', oper: '该数据源来源于SuperMap Online，需要连接Internet' };
DemoDescription['flood'] = {title: '淹没分析', desc: '设置最大/最小高度和淹没速度，点击“开始”模拟洪水淹没城市的效果', oper: '无' };
DemoDescription['sightline'] = {title: '通视分析', desc: '先点击选取观察位置,然后再点击添加目标点进行通视分析', oper: '该数据源来源于SuperMap Online，需要连接Internet' };
DemoDescription['skyline'] = {title: '天际线分析', desc: '点击“提取天际线”按钮,提取得到当前视口的天际线；点击“提取二维天际线”，绘制得到二维天际线；点击“绘制限高体”，绘制一个多边形区域，将根据当前天际线模拟受限范围。', oper: '该数据源来源于SuperMap Online，需要连接Internet' };
DemoDescription['viewshed3D'] = {title: '可视域分析', desc: '点击按钮选取观察位置,移动鼠标进行分析,点击鼠标右键中止操作', oper: '该数据源来源于SuperMap Online，需要连接Internet' };
DemoDescription['profile'] = {title: '剖面分析', desc: '点击“剖面分析”按钮，在场景中绘制一条直线,获得沿直线的剖面分析效果', oper: '该数据源来源于SuperMap Online，需要连接Internet' };
DemoDescription['projectionImage'] = {title: '视频投放', desc: '点击按钮,移动鼠标调整视频投放的目标区域，双击结束投放', oper: '该数据源来源于SuperMap Online，需要连接Internet' };
DemoDescription['Project_heatmap'] = {title: '热力图叠加S3M', desc: '该范例展示了热力图叠加在S3M格式的精细模型的可视化效果', oper: '该数据源来源于SuperMap Online，需要连接Internet' };
DemoDescription['multiViewport'] = {title: '分屏显示', desc: '点击右侧下拉菜单选择分屏模式,勾选复选框显示/隐藏对应视口的图层', oper: '该数据源来源于SuperMap Online，需要连接Internet' };
DemoDescription['dynamicTime'] = {title: '时态图层', desc: '该范例展现了影像图层动态渐变的功能', oper: '该数据源来源于SuperMap Online，需要连接Internet' };
DemoDescription['ImageryAdjustment'] = {title: '影像图层个性化设置', desc: '拖动相应参数的拖动条可以改变影像的显示设置', oper: '无' };
DemoDescription['SuperMapTileImagery'] = {title: '叠加二维地图', desc: '支持叠加二维经纬度投影和墨卡托投影坐标系地图', oper: '该数据源来源于SuperMap Online，需要连接Internet' };
DemoDescription['pickPosition'] = {title: '拾取位置', desc: '点击图层,获取点击位置的经纬度和高程信息', oper: '该数据源来源于SuperMap Online，需要连接Internet' };
DemoDescription['switchGlobeMode'] = {title: '地球模式切换', desc: '地球默认为椭球，可切换为圆球，地球模式的定义必须在场景scene初始化之前定义，否则无效！', oper: '需要连接Internet。' };
DemoDescription['split'] = {title: '分割条', desc: '在分割条区域按住鼠标左键移动，分割条左、右的图层区域随之改变。', oper: '需要连接Internet。' };
DemoDescription['aqi'] = {title: '全球空气质量指数实时查询', desc: '实时获取最新的全球空气质量指数数据，点击圆形图标查看监测站详细数据。', oper: '需要连接Internet。' };
DemoDescription['drawHandler'] = {title: '绘制点线面', desc: '分别点击按钮绘制点、折线、多边形及marker', oper: '无' };
DemoDescription['bufferAnalyze'] = {title: '缓冲区分析', desc: '定义：缓冲区分析是 GIS 中基本的空间分析，缓冲区分析实际上是在基本空间要素周围建立具有一定宽度的邻近区域。缓冲区分析多用在，确定道路拓宽的范围，确定放射源影响的范围等方面。缓冲区分析可以应用在点、线和面状地物上，在对线状地物进行缓冲区分析时，可以设置地物的左、右侧缓冲距离，并且可以设置缓冲的端点类型为平头缓冲或者圆头缓冲，当对点和面状地物进行缓冲区分析时，则只需要设置地物的左侧缓冲距离即可，并且缓冲区端点类型只能为圆头缓冲。', oper: '1、首先点击按钮（绘制），绘制目标缓冲区域 ，2、点击 “缓冲区分析” 按钮，对目标缓冲区域进行圆头缓冲区分析，显示的橙色面状区域即为该道路拓宽后的范围；3、点击 “清除” 按钮，将当前缓冲区分析结果清除。' };
DemoDescription['profileAnalyze'] = {title: '剖面分析', desc: '剖面表示表面高程沿某条线（截面）的变化。研究某个截面的地形剖面，概括研究区域的地势、地质和水文特征，包括区域内的地貌形态、轮廓形状、绝对与相对高度、地质构造、斜坡特征、地表切割强度和侵蚀因素等，非常有利于修筑道路的难度评定或对沿指定路线铺设铁路线的可行性评估，也可作为计算土方量的依据。', oper: '1.首先点击绘制按钮，绘制一条线，2、点击剖面分析按钮，对其进行剖面分析，得到剖面图！' };
DemoDescription['overlayAnalyze'] = {title: '叠加分析', desc: '定义:在统一空间参考系统下，通过对两个几何对象进行的一系列几何运算，提取用户需要的新的空间几何信息，产生一个新的几何对象结果。该空间处理支持剪裁、擦除、同一、求交、对称差、合并、更新几种叠加分析操作。SuperMap 中的叠加分析涉及到三个几何对象，包括源对象、操作对象、结果对象，除合并运算和对称差运算必须是面对象外，其他运算可以是点、线、面。', oper: '1、本范例以合并(UNION)为例；2、点击 "绘制源对象" 按钮，进行源geometry的绘制，再点击“绘制目标对象”按钮，进行目标geometry的绘制；3、点击“叠加分析”按钮，对两个几何对象进行合并操作的叠加分析4、点击 "移除" 按钮，移除当前的合并结果。4、需要联网' };
DemoDescription['mathExpression'] = {title: '栅格代数运算', desc: '此范例展示 iServer 栅格代数运算表达式资源的使用，示例对栅格数据集 Jingjin.JingjinTerrain 中所有栅格单元的值加 600, 并用栅格专题图的方式在客户端呈现结果数据集', oper: '点击"栅格运算"按钮查看结果数据集生成的栅格专题图，点击"移除"可删除该栅格专题图。(需要联网)' };
DemoDescription['terrainCurvature'] = {title: '地形曲率计算', desc: '此范例展示 iServer 地形计算资源中曲率计算的使用，示例用京津地图的地形数据计算出京津地区的平均曲率，并用栅格专题图的方式在客户端呈现结果数据集', oper: '点击"地形曲率计算"按钮查看结果数据集生成的栅格专题图，点击"移除"可删除该栅格专题图。(需要联网)' };
DemoDescription['showUnderGround'] = {title: '地下管线场景', desc: '在场景中加载地下管线，并设置地表透明度', oper: '1、拖动滑动条可设置地表透明度 2、需联网' };
DemoDescription['tokenCredential'] = {title: '安全认证', desc: '访问受保护的iServer服务时需提供Token(令牌)，Token是包含用户名、有效期和某些专业信息通过加密形成的字符串。', oper: '需要连接Internet。' };
DemoDescription['floodex'] = {title: '淹没分析（地形）', desc: '绘制多边形，设置相关参数，点击“分层设色”模拟洪水淹没地形效果。', oper: '需要连接Internet。' };
DemoDescription['S3MTiles_histogram'] = {title: '柱状图', desc: '对点数据生成自定义专题图，其中圆柱模型为外挂模型；生成三维切片缓存（*.s3m）后在客户端上展现。', oper: '需要连接Internet。' };
DemoDescription['Geometry'] = {title: '几何体对象', desc: '分别点击按钮绘制圆柱、长方体、圆锥、球体对象，选中已创建的几何体，编辑对象参数以更改几何体样式、大小', oper: '' };
DemoDescription['addSymbols'] = {title: '添加在线小品', desc: '点击“压平”，绘制一个区域对倾斜摄影模型进行压平;点击“种树”，添加S3M树模型，点击“风格设置”，可从online符号库选择模型符号改变风格', oper: '' };
DemoDescription['Nightlight'] = {title: '灯光数据卷帘对比', desc: '该范例利用卷帘对比的方式展现了2012年与2016年全球灯光数据的差别，点击拖动鼠标可查看对比情况', oper: '' };
DemoDescription['LandTemChange'] = {title: '全球陆地温度数据时空效果', desc: '该范例利用动画的方式展现了2002-2016年间全球陆地温度变化情况，点击按钮动画开始，通过拖动speed可以改变动画播放速度', oper: '' };
DemoDescription['shadowQuery'] = {title: '阴影分析', desc: '选择日期和时间段，点击“分析区域”绘制一个多边形区域，双击结束绘制，绘制完毕即对该区域进行阴影分析。点击“日照分析”可查看选定时间段内的日照效果。', oper: '需要连接Internet。' };
DemoDescription['windmap'] = {title: '风向图', desc: '该范例展示了全球实时风向数据可视化效果', oper: '需要连接Internet。' };
DemoDescription['GeometryEx'] = {title: '热力图（几何对象）', desc: '此范例中热力图表示了几何对象的高程信息，设置一定的高度叠加在S3M模型上方', oper: '需要连接Internet。' };
DemoDescription['airlines'] = {title: '实时航线图', desc: '该范例展示了全球实时航线数据可视化效果', oper: '需要连接Internet。' };
DemoDescription['dynamicLayer'] = {title: '全球船舶动态效果', desc: '该范例展示了全球船舶航行的动态可视化效果', oper: '需要连接Internet。' };
DemoDescription['digTerrain'] = {title: '地形开挖', desc: '绘制多边形并设置开挖深度后，点击“地形开挖”模拟多边形区域开挖相应深度的效果', oper: '需要连接Internet。' };
DemoDescription['modifyTerrain'] = {title: '地形修改', desc: '绘制多边形后点击“地形修改”展示地形压平的效果', oper: '需要连接Internet。' };
DemoDescription['extrude'] = {title: '矢量面拉伸', desc: '加载KML矢量面，选中设置拉伸高度', oper: '需要连接Internet。' };
DemoDescription['sceneModeSwitching'] = {title: '平面场景', desc: '此范例展示了平面场景与三维场景的切换，并实现了二维场景下加载三维数据的功能', oper: '需要连接Internet。' };
DemoDescription['flightnew'] = {title: '航班动态', desc: '此范例用动态线形展示了全球航线数据，并配以图表说明', oper: '需要连接Internet。' };
DemoDescription['taxiFlow'] = {title: '出租车流分布', desc: '此范例用动态线效果展示了某地区出租车流分布状况', oper: '需要连接Internet。' };
DemoDescription['trafficSimulation'] = {title: '交通仿真', desc: '此范例用动态图层模拟了城市车辆的行驶', oper: '需要连接Internet。' };
DemoDescription['getFeatureBySQL'] = {title: 'SQL 查询', desc: '此范例展示了使用SQL语句对模型数据集进行查询，并将结果高亮显示', oper: '需要连接Internet。' };
DemoDescription['getFeatureByGeometry'] = {title: '几何查询', desc: '此范例展示了模型数据集的空间查询，自定义一个多边形，可以查询到在此范围内的模型，并高亮显示', oper: '需要连接Internet。' };