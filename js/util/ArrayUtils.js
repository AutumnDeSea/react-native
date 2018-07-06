export default class ArrayUtils {
    /**
     * 更新数组, 若item已经存在, 则在数组中删除, 若不存在,则添加进数组
     **/
    static updateArray(arr, item) {
        for (var i = 0, len = arr.length; i < len; i++) {
            var temp = arr[i];
            if (item === temp) {
                arr.splice(i, 1);
                return
            }
        }
        arr.push(item);
    }
}