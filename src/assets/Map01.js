let $dataMap = {};
$dataMap.width = 7;
$dataMap.height = 14;
$dataMap.start = 52;
$dataMap.data = [...Array($dataMap.width * $dataMap.height)].map(tile => 0)
$dataMap.data[$dataMap.start] = 1

export default $dataMap;