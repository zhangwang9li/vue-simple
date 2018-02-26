var config = {
  ip: 'http://211.101.37.245:9003',
  pageSizes: [10, 15, 20, 30],
  pageSize: 10,
  yjxxList: [
    {code: '1', name: '前防撞警告', valuskey: 'fcw', PRI: 0, icon: 'icon-cheliangpengzhuang', color: '#316ddb'},
    {code: '0', name: '超速预警', valuskey: 'sdw', PRI: 1, icon: 'icon-chaosu', color: '#6ecdf5'},
    {code: '1', name: '车道偏离预警', valuskey: 'ldw', PRI: 2, icon: 'icon-chedaopianli', color: '#289cdc'},
    {code: '1', name: '行人避撞', valuskey: 'pcw', PRI: 3, icon: 'icon-hangren', color: '#ef001e'},
    {code: '2', name: '车距监测与警示', valuskey: 'hwl', PRI: 4, icon: 'icon-chejujiance', color: '#fb9b00'},
    {code: '1', name: '城市车距离监测', valuskey: 'ufcw', PRI: 5, icon: 'icon-baoxiangang', color: '#d56628'}
  ],
  chunk: function (arr, len) {
    len = parseInt(len)
    var groups = []
    if (len <= 1 || arr.length < len) {
      groups.push(arr)
      return groups
    }
    var loop = Math.ceil(arr.length / len)
    for (var i = 0; i < loop; i++) {
      groups.push(arr.slice(len * i, len * (i + 1)))
    }
    return groups
  },
  uuid: function (len, radix) {
    var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('')
    var uuid = []
    var i
    radix = radix || chars.length
    if (len) {
      // Compact form
      for (i = 0; i < len; i++) uuid[i] = chars[0 | Math.random() * radix]
    } else {
      // rfc4122, version 4 form
      var r

      // rfc4122 requires these characters
      uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-'
      uuid[14] = '4'

      // Fill in random data.  At i==19 set the high bits of clock sequence as
      // per rfc4122, sec. 4.1.5
      for (i = 0; i < 36; i++) {
        if (!uuid[i]) {
          r = 0 | Math.random() * 16
          uuid[i] = chars[(i === 19) ? (r & 0x3) | 0x8 : r]
        }
      }
    }
    return uuid.join('')
  }
}
// hwl --- 2 ---告警
// ldw --- !=1 ---左偏离或右偏离
// fcw --- 1 ---告警
// pcw --- 1 ---告警
// ufcw --- 1 ---告警
// sdw --- !=0 --- 超速
