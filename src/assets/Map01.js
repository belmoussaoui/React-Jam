let $dataMap = {};
$dataMap.width = 8;
$dataMap.height = 14;
$dataMap.start = 60;
$dataMap.data = [...Array($dataMap.width * $dataMap.height)].map(tile => 0)
$dataMap.data[$dataMap.start] = 1

export default $dataMap;