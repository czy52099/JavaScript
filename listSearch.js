/**
 * 再帰関数利用してリストの値を探す
 */
function listStr(lst, str, idx = 0) {
    let i = idx;
    if (str == lst[i]) {
        console.log("「" + str + "」は" + (i + 1) + "番目にある。");
        return;
    }
    if (lst.length <= i + 1) {
        console.log("見つかりませんでした。");
        return;
    }
    i++;
    listStr(lst, str, i);
}
