// 判断参数是否是其中之一
export function oneOf (value: any, validList: Array<any>) {
  for (let i = 0; i < validList.length; i++) {
      if (value === validList[i]) {
          return true;
      }
  }
  return false;
}